# Tic Tac Toe Game 🎮

Welcome! I've created a beautiful Tic Tac Toe game for you with excellent UI/UX. You have TWO options to play:

## Option 1: HTML Version (EASIEST - Works Immediately!) ⭐

**File:** `TicTacToe.html`

### How to Use:
1. Download the `TicTacToe.html` file
2. Double-click it to open in your web browser
3. Start playing immediately! 🎉

### Features:
✅ No installation required
✅ Works on Windows, Mac, Linux
✅ Beautiful gradient design
✅ Smooth animations
✅ Player vs Player mode
✅ Player vs Computer mode (with AI)
✅ Score tracking
✅ Responsive design

---

## Option 2: Windows EXE Version (Native Application)

**File:** `tic_tac_toe.py`

### How to Create the EXE:

#### Requirements:
- Python 3.7 or higher installed on Windows
- Internet connection (for installing PyInstaller)

#### Steps:

1. **Install Python** (if not already installed):
   - Download from https://www.python.org/downloads/
   - ⚠️ Check "Add Python to PATH" during installation

2. **Open Command Prompt**:
   - Press `Win + R`
   - Type `cmd` and press Enter

3. **Install PyInstaller**:
   ```bash
   pip install pyinstaller
   ```

4. **Navigate to the folder** containing `tic_tac_toe.py`:
   ```bash
   cd path\to\your\folder
   ```

5. **Create the EXE**:
   ```bash
   pyinstaller --onefile --windowed --name "TicTacToe" tic_tac_toe.py
   ```

6. **Find your EXE**:
   - Look in the `dist` folder
   - File name: `TicTacToe.exe`
   - Double-click to play! 🎮

### EXE Features:
✅ Standalone application (no Python required to run)
✅ Professional tkinter GUI
✅ Player vs Player mode
✅ Player vs Computer mode (with smart AI)
✅ Score tracking across rounds
✅ Modern color scheme
✅ Intuitive controls

---

## Game Features 🌟

### Both Versions Include:

1. **Two Game Modes:**
   - 👥 Player vs Player - Play with a friend
   - 🤖 Player vs Computer - Play against AI

2. **Smart Computer AI:**
   - Can win when possible
   - Blocks your winning moves
   - Strategic gameplay

3. **Score Tracking:**
   - Keeps track of wins for X and O
   - Persistent during session

4. **Beautiful UI:**
   - Modern design
   - Smooth animations
   - Clear visual feedback
   - Winner highlighting

5. **Easy Controls:**
   - Reset game button
   - Return to main menu
   - Simple click-to-play

---

## Recommendation 💡

**For immediate play:** Use the HTML version (`TicTacToe.html`) - just double-click and play!

**For a native Windows app:** Follow the EXE creation steps above to get a standalone `.exe` file.

---

## Troubleshooting 🔧

### HTML Version:
- If it doesn't open, right-click → Open with → Choose your browser (Chrome, Firefox, Edge)

### EXE Version:
- If Python isn't recognized: Reinstall Python with "Add to PATH" checked
- If PyInstaller fails: Try `python -m pip install --upgrade pip` first
- The first run might be slow (loading libraries)

---

## Notes:
- The Linux executable was created in the sandbox environment and won't run on Windows
- To get a Windows .exe, you must run PyInstaller on a Windows machine
- The HTML version works on ALL platforms immediately!

Enjoy your game! 🎉🎮
