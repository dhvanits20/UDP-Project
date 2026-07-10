const fs = require('fs');
const mongoose = require('mongoose');
require('dotenv').config();
const Category = require('./models/Category');
const User = require('./models/User');

const SQL_FILE_PATH = 'e:/UDP project/My_project/Multi-Game-WebApp-github/Multi-Game-WebApp/multi_game_db.sql';
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/multi_game_db_mern';

const migrate = async () => {
  try {
    console.log('Connecting to MongoDB...');
    await mongoose.connect(MONGO_URI);
    console.log('MongoDB connected.');

    console.log('Reading SQL dump...');
    const sqlContent = fs.readFileSync(SQL_FILE_PATH, 'utf-8');

    // Migrate Categories
    console.log('Parsing Categories...');
    const categoriesRegex = /INSERT INTO `categories` [^V]+VALUES\s*([^;]+);/;
    const categoriesMatch = sqlContent.match(categoriesRegex);
    
    if (categoriesMatch && categoriesMatch[1]) {
      const categoryValuesString = categoriesMatch[1];
      // Split by '),' to get individual records
      const categoryRecords = categoryValuesString.split(/\),\s*\(/);
      
      const categoriesToInsert = categoryRecords.map(record => {
        // Clean up the string and split by comma, respecting quotes
        const cleaned = record.replace(/^\(|\)$/g, '');
        // simple split for this specific dump (no complex commas in category names)
        const parts = cleaned.split(',').map(s => s.trim().replace(/^'|'$/g, ''));
        return {
          name: parts[1],
          slug: parts[2]
        };
      });

      console.log(`Found ${categoriesToInsert.length} categories.`);
      for (let cat of categoriesToInsert) {
        await Category.findOneAndUpdate({ slug: cat.slug }, cat, { upsert: true, new: true });
      }
      console.log('Categories migrated successfully.');
    } else {
      console.log('No categories found in dump.');
    }

    // Migrate Users
    console.log('Parsing Users...');
    const usersRegex = /INSERT INTO `users` [^V]+VALUES\s*([^;]+);/;
    const usersMatch = sqlContent.match(usersRegex);
    
    if (usersMatch && usersMatch[1]) {
      const userValuesString = usersMatch[1];
      
      // Regex to match (val1, 'val2', NULL, 'val4') etc.
      // This is a bit tricky with regex, let's use a simpler approach since we know the exact data
      // Split into lines based on ")," but the last one ends with just ")"
      const userRecords = userValuesString.split(/\),\s*\(/);
      
      const usersToInsert = userRecords.map(record => {
        const cleaned = record.replace(/^\(|\)$/g, '');
        
        // This splits by comma, but ignores commas inside single quotes
        const parts = [];
        let current = '';
        let inQuotes = false;
        for (let i = 0; i < cleaned.length; i++) {
          const char = cleaned[i];
          if (char === "'") {
            inQuotes = !inQuotes;
            // dont add the quote to current
          } else if (char === ',' && !inQuotes) {
            parts.push(current.trim());
            current = '';
          } else {
            current += char;
          }
        }
        parts.push(current.trim()); // push last part

        let role = parts[5];
        if (role === 'player') role = 'user'; // Map 'player' to 'user'

        return {
          name: parts[1],
          email: parts[2],
          password: parts[4], // The bcrypt hash
          role: role,
          isVerified: parts[3] !== 'NULL',
        };
      });

      console.log(`Found ${usersToInsert.length} users.`);
      for (let u of usersToInsert) {
        await User.findOneAndUpdate({ email: u.email }, u, { upsert: true, new: true });
      }
      console.log('Users migrated successfully.');
    } else {
      console.log('No users found in dump.');
    }

    console.log('Migration completed successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Migration failed:', error);
    process.exit(1);
  }
};

migrate();
