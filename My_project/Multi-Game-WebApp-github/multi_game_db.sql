-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 02, 2026 at 07:48 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `multi_game_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `achievements`
--

CREATE TABLE `achievements` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` text DEFAULT NULL,
  `icon` varchar(255) DEFAULT NULL,
  `requirement_type` varchar(255) DEFAULT NULL,
  `requirement_value` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `achievements`
--

INSERT INTO `achievements` (`id`, `name`, `description`, `icon`, `requirement_type`, `requirement_value`, `created_at`, `updated_at`) VALUES
(1, 'molestiae Master', 'Dolores quia aut aspernatur fugiat minus unde dolor id.', 'fa-shield', 'games_played', 100, '2026-03-29 07:25:31', '2026-03-29 07:25:31'),
(2, 'atque Master', 'In est accusamus dolor voluptas.', 'fa-bolt', 'games_played', 10, '2026-03-29 07:25:31', '2026-03-29 07:25:31'),
(3, 'dolores Master', 'Omnis provident fuga nam tenetur assumenda mollitia ipsa quis.', 'fa-rocket', 'score_reached', 78, '2026-03-29 07:25:31', '2026-03-29 07:25:31'),
(4, 'enim Master', 'Repudiandae ullam eos accusantium mollitia.', 'fa-star', 'games_played', 44, '2026-03-29 07:25:31', '2026-03-29 07:25:31'),
(5, 'eos Master', 'Neque rerum commodi cupiditate doloremque.', 'fa-rocket', 'score_reached', 10, '2026-03-29 07:25:31', '2026-03-29 07:25:31'),
(6, 'voluptas Master', 'Ipsam amet sed nemo aperiam optio illum.', 'fa-star', 'games_played', 19, '2026-03-29 07:25:31', '2026-03-29 07:25:31'),
(7, 'sit Master', 'Saepe vero doloremque velit atque expedita molestias praesentium.', 'fa-bolt', 'games_played', 84, '2026-03-29 07:25:31', '2026-03-29 07:25:31'),
(8, 'et Master', 'Blanditiis corrupti vero ipsa id reprehenderit aut.', 'fa-trophy', 'score_reached', 22, '2026-03-29 07:25:31', '2026-03-29 07:25:31'),
(9, 'ducimus Master', 'Minus dignissimos nostrum iste repellat quam quaerat mollitia.', 'fa-trophy', 'games_played', 10, '2026-03-29 07:25:31', '2026-03-29 07:25:31'),
(10, 'magni Master', 'Neque et natus id quis nisi doloremque alias.', 'fa-shield', 'games_played', 95, '2026-03-29 07:25:31', '2026-03-29 07:25:31'),
(11, 'sapiente Master', 'Laboriosam unde ut ipsa.', 'fa-bolt', 'games_played', 54, '2026-03-29 08:15:33', '2026-03-29 08:15:33'),
(12, 'ut Master', 'Necessitatibus et a sit quae possimus dolor repellendus.', 'fa-shield', 'score_reached', 42, '2026-03-29 08:15:33', '2026-03-29 08:15:33'),
(13, 'nam Master', 'Occaecati et ut libero occaecati sed.', 'fa-trophy', 'score_reached', 56, '2026-03-29 08:15:33', '2026-03-29 08:15:33'),
(14, 'molestiae Master', 'Aut qui perferendis temporibus commodi.', 'fa-star', 'score_reached', 70, '2026-03-29 08:15:33', '2026-03-29 08:15:33'),
(15, 'laudantium Master', 'Repellendus eius nulla omnis molestiae.', 'fa-shield', 'score_reached', 81, '2026-03-29 08:15:33', '2026-03-29 08:15:33'),
(16, 'magnam Master', 'Quae necessitatibus eum doloremque facilis aperiam.', 'fa-bolt', 'games_played', 88, '2026-03-29 08:15:33', '2026-03-29 08:15:33'),
(17, 'magnam Master', 'Quos exercitationem porro labore labore expedita maiores.', 'fa-shield', 'score_reached', 63, '2026-03-29 08:15:33', '2026-03-29 08:15:33'),
(18, 'laboriosam Master', 'Distinctio assumenda exercitationem totam unde est voluptatum.', 'fa-trophy', 'score_reached', 64, '2026-03-29 08:15:33', '2026-03-29 08:15:33'),
(19, 'natus Master', 'Facilis consequatur culpa officia voluptas cumque iure quos aliquam.', 'fa-star', 'score_reached', 33, '2026-03-29 08:15:33', '2026-03-29 08:15:33'),
(20, 'dignissimos Master', 'Quia dolor autem vero iusto aliquid temporibus a.', 'fa-star', 'games_played', 20, '2026-03-29 08:15:33', '2026-03-29 08:15:33'),
(21, 'reiciendis Master', 'Consequatur ut maiores quibusdam ut.', 'fa-shield', 'score_reached', 43, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(22, 'qui Master', 'Dolores fuga laborum totam sapiente aut.', 'fa-bolt', 'score_reached', 30, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(23, 'nostrum Master', 'Soluta consequuntur mollitia impedit et officiis natus.', 'fa-star', 'score_reached', 90, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(24, 'sit Master', 'Dolor iusto dignissimos eius est facilis quo aperiam.', 'fa-rocket', 'score_reached', 88, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(25, 'dolores Master', 'Aut sunt non accusantium labore velit.', 'fa-rocket', 'games_played', 46, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(26, 'a Master', 'Sed porro totam aperiam ut.', 'fa-bolt', 'games_played', 65, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(27, 'assumenda Master', 'Quibusdam sit atque voluptate ut.', 'fa-star', 'score_reached', 67, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(28, 'aut Master', 'Consequatur eligendi ullam et consequuntur ullam ut.', 'fa-star', 'score_reached', 87, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(29, 'quas Master', 'Et in sapiente velit cumque eligendi consectetur dignissimos.', 'fa-shield', 'games_played', 54, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(30, 'repellendus Master', 'Reprehenderit qui enim itaque dolor.', 'fa-trophy', 'games_played', 36, '2026-03-29 08:29:36', '2026-03-29 08:29:36');

-- --------------------------------------------------------

--
-- Table structure for table `blogs`
--

CREATE TABLE `blogs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) NOT NULL,
  `slug` varchar(255) NOT NULL,
  `content` text NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `status` varchar(255) NOT NULL DEFAULT 'draft',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `blogs`
--

INSERT INTO `blogs` (`id`, `title`, `slug`, `content`, `image`, `status`, `created_at`, `updated_at`) VALUES
(1, 'Spotlight: Tic Tac Toe', 'spotlight-tic-tac-toe', 'We are incredibly excited to showcase Tic Tac Toe! testing', 'uploads/games/images/1771486781.jpg', 'published', '2026-03-25 12:10:47', '2026-03-25 12:10:47'),
(2, 'Spotlight: Master Chess', 'spotlight-master-chess', 'We are incredibly excited to showcase Master Chess! nmjjmn jmnnjn bnj', 'uploads/games/images/1774458731.jpg', 'published', '2026-03-25 12:10:47', '2026-03-25 12:10:47'),
(3, 'Esse animi quis fugiat omnis.', 'esse-animi-quis-fugiat-omnis', 'Et debitis officiis vel quasi. Eveniet cumque veritatis possimus repellat inventore voluptatibus assumenda. Non esse ex autem et consequatur ipsum non.\n\nQuia beatae est tempora aliquam impedit. Adipisci sint impedit aut velit quo asperiores. Delectus ipsa quo dolor vero et voluptas.\n\nIncidunt quos dolorem corrupti occaecati veniam molestiae. Aut ex laborum ratione. Magni nulla quo et. Dicta sequi quaerat perferendis nemo harum.', 'assets/img/blog-big/2.jpg', 'published', '2026-03-29 07:25:17', '2026-03-29 07:25:17'),
(4, 'Laborum beatae quae neque qui labore.', 'laborum-beatae-quae-neque-qui-labore', 'Quaerat enim fugit labore. Ipsa tempore aut officia officiis quia quam. Voluptatem labore vitae corporis quae eligendi animi.\n\nMolestiae id quod cum quisquam possimus dignissimos. Est mollitia vitae dignissimos magnam consequatur et. Temporibus consequuntur accusantium sed asperiores. Sunt voluptatibus consequatur vero odit.\n\nIn sapiente repellendus ex aut rerum fuga. Assumenda eaque delectus magnam dolores alias rerum. Aperiam possimus est enim totam doloremque non deleniti rerum.', 'assets/img/blog-big/1.jpg', 'published', '2026-03-29 07:25:17', '2026-03-29 07:25:17'),
(5, 'Quis quis repudiandae aut cum.', 'quis-quis-repudiandae-aut-cum', 'Quia eos aut illum illo earum. Molestiae mollitia quasi dolorem autem. Et minima reiciendis est repellendus doloremque voluptatem. Est ut veniam voluptas corrupti sit corporis dolor et. Maxime non fugit nemo temporibus necessitatibus dolore odit.\n\nEt sit eius iusto numquam libero qui qui. Et et aut ea sed ad nam eos. Ducimus aut quisquam quo non. Tenetur sapiente alias doloribus nihil molestiae commodi doloribus id.\n\nCum et quas optio. Quia delectus sunt sint omnis aut at.', 'assets/img/blog-big/1.jpg', 'published', '2026-03-29 07:25:17', '2026-03-29 07:25:17'),
(6, 'Enim est consequatur harum optio maiores.', 'enim-est-consequatur-harum-optio-maiores', 'Et reiciendis autem ab et eligendi. Sit labore rem autem vel modi reprehenderit beatae. Natus rem molestiae ut voluptatem vitae. Doloremque dolor tempora mollitia ratione id iusto.\n\nMaiores molestiae quod fuga et tempore. Voluptas molestiae velit molestias minus assumenda.\n\nAutem aspernatur id distinctio vitae non. Recusandae inventore fugiat exercitationem sunt amet necessitatibus ullam. In asperiores nihil ipsam et autem.', 'assets/img/blog-big/1.jpg', 'published', '2026-03-29 07:25:17', '2026-03-29 07:25:17'),
(7, 'Qui in non possimus eius alias distinctio.', 'qui-in-non-possimus-eius-alias-distinctio', 'Placeat harum odit itaque deleniti autem dolorem dolor. Et nulla est amet rerum. Vero ut illum quia exercitationem assumenda itaque culpa. Repudiandae dolor maxime id quasi.\n\nLaborum qui nostrum harum et accusantium fuga. Nisi rerum sit perspiciatis saepe doloribus provident sint. Laboriosam assumenda aut totam nihil veritatis porro.\n\nEius quia consequatur ut voluptas. Amet aut soluta at quis. Minus aliquam molestias consequatur quam. Totam quis ut aliquam pariatur tempora nulla necessitatibus.', 'assets/img/blog-big/1.jpg', 'published', '2026-03-29 07:25:17', '2026-03-29 07:25:17'),
(8, 'Quia inventore excepturi sed labore.', 'quia-inventore-excepturi-sed-labore', 'Dolores sunt exercitationem fugit vel. Beatae et non rerum quibusdam et. Autem illo et saepe unde incidunt et sed. Ad enim numquam officia enim architecto.\n\nEt minus nihil similique nisi sed. Dolores aut nihil sapiente minus velit incidunt quas mollitia. Autem perferendis qui sed ut minus blanditiis. Asperiores molestiae dolor eaque vel.\n\nRem reiciendis non ea at perferendis. Repellendus a optio amet dolorum eaque similique. Inventore maxime veniam facere quis odit est fugit deleniti. Maxime officia iusto distinctio omnis quibusdam eius vitae.', 'assets/img/blog-big/1.jpg', 'published', '2026-03-29 07:25:31', '2026-03-29 07:25:31'),
(9, 'Maiores a asperiores perspiciatis ut qui et.', 'maiores-a-asperiores-perspiciatis-ut-qui-et', 'Perspiciatis libero nisi omnis dolor quasi ipsam aut. Enim explicabo nemo possimus. Veritatis ex quia molestias est nemo.\n\nVero omnis voluptate ab cum. Enim aliquam totam est repellendus ut ex. Suscipit porro odit libero.\n\nNumquam aperiam aut quo et cum vero repudiandae ducimus. Et esse exercitationem quia quod placeat. Numquam est et rem est.', 'assets/img/blog-big/3.jpg', 'published', '2026-03-29 07:25:31', '2026-03-29 07:25:31'),
(10, 'Eos architecto architecto voluptates officia dicta tempore molestiae.', 'eos-architecto-architecto-voluptates-officia-dicta-tempore-molestiae', 'Ea eius voluptatibus eos hic. Accusamus excepturi quo suscipit debitis atque et. Ipsum autem voluptas necessitatibus voluptatem. Vero occaecati quis libero dolorem nesciunt blanditiis architecto.\n\nEt optio ea fugiat voluptas dolores ad. Enim in voluptatem harum exercitationem nam voluptatibus occaecati. Aliquam ipsam quisquam magnam est dicta explicabo.\n\nConsequatur omnis aut itaque. Quis et cum rerum cumque nesciunt. Occaecati labore non voluptatem nihil earum. Est id quia aspernatur voluptatem.', 'assets/img/blog-big/2.jpg', 'published', '2026-03-29 07:25:31', '2026-03-29 07:25:31'),
(11, 'Fuga maxime quis sit unde.', 'fuga-maxime-quis-sit-unde', 'Cumque omnis ut facilis. Corrupti quaerat deserunt non velit enim iure est. Veniam labore saepe asperiores sint maiores. In excepturi id rerum et quasi expedita.\n\nBlanditiis voluptate asperiores sed rerum sint officiis odit. Omnis quam ipsum eum sint esse. Quidem animi aut qui repudiandae. Soluta quia ut et temporibus aliquam expedita.\n\nNihil et aut beatae dicta officia sunt facilis. Rerum totam quas nihil quia nesciunt voluptates accusantium quae. Illo et deserunt illum facere sit debitis incidunt.', 'assets/img/blog-big/3.jpg', 'published', '2026-03-29 07:25:31', '2026-03-29 07:25:31'),
(12, 'Maxime aliquid molestias qui quis rem vero.', 'maxime-aliquid-molestias-qui-quis-rem-vero', 'Illum dicta qui quia enim natus. Qui quo rem modi sed. Vitae vitae harum veniam voluptatem. Quo dolor adipisci ipsum vel.\n\nCumque error nisi officiis vel. Assumenda sint rem eum aspernatur sed. Itaque nihil quod voluptatem est aut facere.\n\nEt ut saepe ea quia. Eum ipsam tempora in perspiciatis voluptas. Omnis et praesentium impedit ea nisi voluptas.', 'assets/img/blog-big/3.jpg', 'published', '2026-03-29 07:25:31', '2026-03-29 07:25:31'),
(13, 'Nam non placeat voluptas ad non et.', 'nam-non-placeat-voluptas-ad-non-et', 'Cum ducimus tempora alias minima ut vero quis commodi. Omnis culpa iste tempora sint nesciunt qui quasi fugiat. Officiis sapiente odit aperiam veritatis commodi. Nam qui sapiente sapiente ut voluptates temporibus quia.\n\nExcepturi sed unde et tenetur nostrum ducimus dicta porro. Itaque voluptatibus sit omnis consequuntur rerum tenetur. Totam eum qui occaecati possimus quia et.\n\nVoluptatem fugiat est commodi suscipit dolor. Id ea quo dolorem laboriosam impedit et recusandae. Porro autem laudantium deleniti impedit.', 'assets/img/blog-big/3.jpg', 'published', '2026-03-29 08:15:33', '2026-03-29 08:15:33'),
(14, 'Nihil autem quia in natus.', 'nihil-autem-quia-in-natus', 'Quibusdam voluptatem qui et incidunt. Harum aut at voluptas.\n\nCupiditate ad dolor minima. Illum sed vitae quam velit nam. Ipsa voluptatem nulla at nesciunt. Eveniet id eveniet voluptatem aut quisquam qui.\n\nNon suscipit veniam quam voluptatem. Perferendis incidunt qui velit quia quos eius quod et. Id dolores dolorum quia voluptatem. Nihil sit dolor ipsa provident et.', 'assets/img/blog-big/3.jpg', 'published', '2026-03-29 08:15:33', '2026-03-29 08:15:33'),
(15, 'Consequatur ut voluptatibus sunt vel aut soluta.', 'consequatur-ut-voluptatibus-sunt-vel-aut-soluta', 'Assumenda esse numquam unde aliquid esse molestiae nesciunt. In et nihil repellat quae. Distinctio architecto temporibus excepturi molestiae unde vel fugit. Quisquam dignissimos aut quis ut laborum fugiat at quisquam.\n\nOmnis possimus et ad. Et sunt repellat ut expedita quia est quo doloribus. Enim modi excepturi earum et. Reprehenderit ut illo nisi distinctio nobis consequuntur.\n\nDolor velit quasi exercitationem nemo ut magnam autem odio. Pariatur labore sunt debitis ut eum itaque. Et esse est earum nobis sit. Nulla reprehenderit assumenda asperiores adipisci aut et quis.', 'assets/img/blog-big/3.jpg', 'published', '2026-03-29 08:15:33', '2026-03-29 08:15:33'),
(16, 'Et reiciendis sed aut.', 'et-reiciendis-sed-aut', 'Consequatur rerum ad quae repudiandae consequuntur suscipit qui. Labore quis ab qui occaecati unde et sit quas.\n\nSit earum mollitia et perspiciatis. Occaecati aut harum illum enim. Tempore sint et vero quia placeat.\n\nDoloremque mollitia laboriosam error vel labore deleniti nostrum. Voluptatem dicta omnis odit dolorem iusto exercitationem.', 'assets/img/blog-big/3.jpg', 'published', '2026-03-29 08:15:33', '2026-03-29 08:15:33'),
(17, 'Doloremque est quisquam quia possimus molestiae.', 'doloremque-est-quisquam-quia-possimus-molestiae', 'Quibusdam aut perferendis repellendus maiores quos. Ad voluptate iusto sed optio. Ducimus corporis ut ea consequatur omnis illo cumque.\n\nQuas reiciendis assumenda est inventore. Expedita dicta et sit quia qui dolor ducimus. Nostrum quia vel nemo eligendi enim.\n\nAsperiores inventore autem in nostrum possimus odit quam. Quod vel repellendus non voluptate.', 'assets/img/blog-big/3.jpg', 'published', '2026-03-29 08:15:33', '2026-03-29 08:15:33'),
(18, 'Animi esse tenetur nihil odit tenetur fugiat et.', 'animi-esse-tenetur-nihil-odit-tenetur-fugiat-et', 'Harum velit quia est quia reprehenderit distinctio. Et consequatur voluptatibus molestiae sed. Asperiores sint voluptatem quae commodi soluta neque. Voluptas et odit qui explicabo quam facere cumque.\n\nEt velit ipsam ea quo illo aliquid quia. Sint impedit qui voluptatibus dignissimos. Culpa doloremque ea quasi aut non quidem nobis.\n\nNihil dolorum est ut sed nulla magni. Vero ut temporibus odit non ipsum. Distinctio est rem sit quo eligendi qui harum nihil.', 'assets/img/blog-big/1.jpg', 'published', '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(19, 'Voluptatem in corporis consequuntur dolores labore ullam.', 'voluptatem-in-corporis-consequuntur-dolores-labore-ullam', 'Ea architecto eligendi quia voluptatum ad quo saepe. Accusantium nisi est et occaecati autem illo. Et natus alias commodi debitis dolorem nisi veritatis rerum. Molestiae esse dolorem qui.\n\nNatus deserunt pariatur voluptatum est totam qui nesciunt. Enim molestias soluta quis omnis at non et. Autem molestiae ducimus exercitationem repellat.\n\nOfficia minus et ipsum nihil. Id repellat dolorum eaque. At ipsum omnis dolor laudantium natus. Debitis voluptatibus distinctio cupiditate quia omnis.', 'assets/img/blog-big/2.jpg', 'published', '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(20, 'Veniam aut consequatur fugiat quo odit odit.', 'veniam-aut-consequatur-fugiat-quo-odit-odit', 'Eos quia voluptates quia eos. Fugit dolor fuga ab. Nemo sit molestiae quia ipsa. Tempore quia cumque excepturi quis itaque illo consequatur.\n\nEnim totam quaerat dolorum quidem et omnis. Optio nam animi fugit. Cupiditate saepe rerum tempore expedita consectetur quidem. Ut doloremque dolores praesentium quibusdam omnis consequuntur.\n\nLaudantium molestiae eos dolor magnam rem voluptatem. Recusandae aperiam enim quam temporibus rem quia. Sapiente consectetur eum architecto quis dignissimos. Libero dolores harum alias eligendi quas temporibus.', 'assets/img/blog-big/1.jpg', 'published', '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(21, 'Sint vitae ea ea tempora consequatur unde.', 'sint-vitae-ea-ea-tempora-consequatur-unde', 'Et ut quas quod assumenda. Iusto dolore et omnis eum. Recusandae maiores exercitationem facilis nostrum aliquid a. Iste et ratione autem qui alias exercitationem perferendis quo.\n\nUt repellendus ut expedita aut quibusdam. Modi laborum commodi tempore eveniet magni illo. Excepturi molestiae necessitatibus et sit. Incidunt eius voluptas dolor blanditiis adipisci eos cupiditate ut.\n\nIpsa explicabo impedit aspernatur alias. Consequatur optio officiis quidem. Tempore veniam nostrum similique placeat et natus natus. Et quia velit quis ut ut.', 'assets/img/blog-big/2.jpg', 'published', '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(22, 'Reiciendis esse quo magnam velit sit.', 'reiciendis-esse-quo-magnam-velit-sit', 'Quidem accusantium voluptate doloremque ab. Harum esse temporibus quis nulla reprehenderit. Occaecati soluta natus reprehenderit ut quod aperiam.\n\nExcepturi quis quam quod voluptatem ea accusamus aut repellendus. Fuga qui accusantium quidem delectus qui. Alias provident fuga error qui consequatur aliquid.\n\nEligendi voluptatum ut eius. Consequatur voluptatem voluptatem nihil incidunt et cum vero. Qui non enim dignissimos quis quam.', 'assets/img/blog-big/1.jpg', 'published', '2026-03-29 08:29:35', '2026-03-29 08:29:35');

-- --------------------------------------------------------

--
-- Table structure for table `cache`
--

CREATE TABLE `cache` (
  `key` varchar(255) NOT NULL,
  `value` mediumtext NOT NULL,
  `expiration` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `cache_locks`
--

CREATE TABLE `cache_locks` (
  `key` varchar(255) NOT NULL,
  `owner` varchar(255) NOT NULL,
  `expiration` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `slug` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name`, `slug`, `created_at`, `updated_at`) VALUES
(1, 'Action', 'action', '2026-01-23 03:49:24', '2026-01-23 03:49:24'),
(2, 'Adventure', 'adventure', '2026-01-23 03:49:24', '2026-01-23 03:49:24'),
(3, 'Racing', 'racing', '2026-01-23 03:49:24', '2026-01-23 03:49:24'),
(4, 'Shooter', 'shooter', '2026-01-23 03:49:24', '2026-01-23 03:49:24'),
(5, 'Strategy', 'strategy', '2026-01-23 03:49:24', '2026-01-23 03:49:24'),
(6, 'Online', 'online', '2026-01-23 03:49:24', '2026-01-23 03:49:24'),
(7, 'S.F.', 'sf', '2026-01-23 03:49:24', '2026-01-23 03:49:24'),
(8, 'Sports', 'sports', '2026-01-23 03:49:24', '2026-01-23 03:49:24'),
(9, 'Puzzle', 'puzzle', '2026-01-23 03:49:24', '2026-01-23 03:49:24'),
(10, 'Games', 'games', '2026-03-25 11:29:10', '2026-03-25 11:29:10'),
(11, 'VR Games', 'vr-games', '2026-03-25 11:55:25', '2026-03-25 11:55:25'),
(12, 'Online Games', 'online-games', '2026-03-25 11:55:25', '2026-03-25 11:55:25');

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `games`
--

CREATE TABLE `games` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) NOT NULL,
  `category_id` bigint(20) UNSIGNED NOT NULL,
  `description` text DEFAULT NULL,
  `image_url` varchar(255) DEFAULT NULL,
  `game_file` varchar(255) DEFAULT NULL,
  `status` enum('public','private') NOT NULL DEFAULT 'public',
  `developer_id` bigint(20) UNSIGNED DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `developer_name` varchar(255) DEFAULT NULL,
  `developer_email` varchar(255) DEFAULT NULL,
  `play_url` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `games`
--

INSERT INTO `games` (`id`, `title`, `category_id`, `description`, `image_url`, `game_file`, `status`, `developer_id`, `created_at`, `updated_at`, `developer_name`, `developer_email`, `play_url`) VALUES
(1, 'Tic Tac Toe', 5, 'testing', 'uploads/games/images/1771486781.jpg', 'uploads/games/files/1771486781.zip', 'public', NULL, '2026-02-19 02:09:41', '2026-03-26 08:49:32', NULL, NULL, NULL),
(14, 'dolor corporis quia', 5, 'Dolor est voluptatem esse. Dolores numquam facere distinctio aliquam est. Eligendi provident quis necessitatibus rem quasi.', 'assets/img/review/4.jpg', NULL, 'public', NULL, '2026-03-29 07:25:31', '2026-03-29 07:25:31', 'Dr. Cortney Toy', 'king.margaret@example.org', NULL),
(15, 'laborum ipsum a', 5, 'Ipsum velit libero consequatur natus in ea sit. Autem qui voluptatem et aut sapiente voluptas explicabo. Minus a corporis eaque accusantium expedita doloremque ex.', 'assets/img/review/3.jpg', NULL, 'public', NULL, '2026-03-29 07:25:31', '2026-03-29 07:25:31', 'Destiny Ziemann', 'marielle.feeney@example.com', NULL),
(16, 'aperiam qui et', 5, 'Est optio voluptatem corrupti saepe. Omnis velit debitis ut. Eos aut dolore neque sed sit. Beatae nam maxime eveniet sed.', 'assets/img/review/3.jpg', NULL, 'public', NULL, '2026-03-29 07:25:31', '2026-03-29 07:25:31', 'Lolita Medhurst', 'cmurray@example.org', NULL),
(17, 'sed non incidunt', 5, 'Autem ut ut qui quia consectetur. Aut molestias assumenda assumenda eum sequi quidem. Provident animi incidunt at officia.', 'assets/img/review/1.jpg', NULL, 'public', NULL, '2026-03-29 07:25:31', '2026-03-29 07:25:31', 'Dr. Esther Price', 'mose.koch@example.org', NULL),
(18, 'et rerum nihil', 5, 'Qui tempora vero ut enim porro vero quidem quam. Eos et excepturi itaque et. Laudantium omnis consequatur pariatur et.', 'assets/img/review/1.jpg', NULL, 'public', NULL, '2026-03-29 07:25:31', '2026-03-29 07:25:31', 'Levi Kunde', 'bashirian.will@example.net', NULL),
(19, 'nisi dolores consequuntur', 5, 'Sunt alias asperiores et vel doloremque. Facilis enim dolore qui nemo sit. Deleniti sed omnis labore maxime. Sunt dolorum enim quo illo vel ipsam et est.', 'assets/img/review/2.jpg', NULL, 'public', NULL, '2026-03-29 07:25:31', '2026-03-29 07:25:31', 'Prof. Chaim Zboncak', 'louie.wisozk@example.org', NULL),
(20, 'praesentium ab saepe', 5, 'Blanditiis error nulla voluptatem voluptatum. Quas sed eius magnam aut impedit eius. Quo non explicabo nisi laborum.', 'assets/img/review/1.jpg', NULL, 'public', NULL, '2026-03-29 07:25:31', '2026-03-29 07:25:31', 'Al Metz II', 'rosalind.daugherty@example.org', NULL),
(21, 'inventore debitis provident', 5, 'Debitis autem qui consequatur non est est aut. Ipsam sint commodi iusto dolor dolores et esse. Et provident quo quia suscipit eum at qui.', 'assets/img/review/3.jpg', NULL, 'public', NULL, '2026-03-29 07:25:31', '2026-03-29 07:25:31', 'Austyn Cartwright', 'kavon08@example.com', NULL),
(22, 'eum hic cumque', 5, 'Repellat ducimus soluta sapiente et earum debitis. Mollitia et omnis omnis eligendi. Voluptas qui ipsam quia repudiandae quo autem quaerat.', 'assets/img/review/3.jpg', NULL, 'public', NULL, '2026-03-29 07:25:31', '2026-03-29 07:25:31', 'Prof. Molly Wilderman II', 'kozey.eva@example.com', NULL),
(23, 'ut cumque ut', 5, 'Quibusdam error deserunt eos vel. Molestias dolorum architecto blanditiis sit officiis. Similique corrupti quisquam dolore et.', 'assets/img/review/2.jpg', NULL, 'public', NULL, '2026-03-29 07:25:31', '2026-03-29 07:25:31', 'Ken McKenzie', 'legros.delilah@example.org', NULL),
(24, 'architecto nihil omnis', 5, 'Voluptate nesciunt eligendi qui doloribus reiciendis possimus dolorem. Nihil libero in ut tempore exercitationem beatae quo. Aut dolores non omnis quis qui aut.', 'assets/img/review/2.jpg', NULL, 'public', NULL, '2026-03-29 08:15:33', '2026-03-29 08:15:33', 'Mrs. Estefania West MD', 'malika73@example.com', NULL),
(25, 'neque ullam quos', 5, 'Sed aut minima laboriosam asperiores recusandae suscipit. Sequi atque et reiciendis ut laudantium explicabo sit. Aut magnam cum consectetur soluta illum voluptate aut. Nihil aut tempora qui dignissimos dolorem voluptatem.', 'assets/img/review/3.jpg', NULL, 'public', NULL, '2026-03-29 08:15:33', '2026-03-29 08:15:33', 'Randy O\'Hara IV', 'hickle.erling@example.org', NULL),
(26, 'et veritatis qui', 5, 'Vel ut aut voluptatem delectus et. Et quam ab repellat et beatae et. Et delectus aperiam asperiores commodi. Rerum dolorem molestias eos perspiciatis voluptatem eaque incidunt dolor.', 'assets/img/review/4.jpg', NULL, 'public', NULL, '2026-03-29 08:15:33', '2026-03-29 08:15:33', 'Zella Sawayn', 'claud36@example.org', NULL),
(27, 'itaque quaerat beatae', 5, 'Quaerat quod molestias quod ut et et quod distinctio. Ex consequatur eum libero quis ut. Ut maxime ut aut quam est assumenda.', 'assets/img/review/1.jpg', NULL, 'public', NULL, '2026-03-29 08:15:33', '2026-03-29 08:15:33', 'Prof. Roselyn Waelchi MD', 'turcotte.hulda@example.net', NULL),
(28, 'perspiciatis quae soluta', 5, 'Suscipit laboriosam vel porro. Earum maiores nam vero quia dignissimos. Atque consequatur vel fugit beatae voluptatem. Nihil delectus minus labore.', 'assets/img/review/4.jpg', NULL, 'public', NULL, '2026-03-29 08:15:33', '2026-03-29 08:15:33', 'Monserrat Goldner DVM', 'andreanne.zulauf@example.net', NULL),
(29, 'debitis sint odit', 5, 'Modi distinctio a vitae repudiandae repellendus labore. Voluptatem soluta perferendis quo exercitationem illum quia ea. Asperiores pariatur rerum molestiae laboriosam modi nihil dolore.', 'assets/img/review/1.jpg', NULL, 'public', NULL, '2026-03-29 08:15:33', '2026-03-29 08:15:33', 'Gabriel Baumbach', 'wjones@example.com', NULL),
(30, 'doloribus aut vel', 5, 'Voluptate odit eum harum sit officia. Voluptatibus sed fuga dignissimos iure autem reiciendis molestias. Ratione rerum quibusdam et ut. Mollitia quis commodi soluta est reiciendis enim.', 'assets/img/review/1.jpg', NULL, 'public', NULL, '2026-03-29 08:15:33', '2026-03-29 08:15:33', 'Miss Marlene Langworth I', 'damien62@example.com', NULL),
(31, 'expedita ut dignissimos', 5, 'Molestiae id deserunt soluta doloribus nulla fugit et. Laboriosam nesciunt inventore cum temporibus et.', 'assets/img/review/2.jpg', NULL, 'public', NULL, '2026-03-29 08:15:33', '2026-03-29 08:15:33', 'Mr. Edwardo Hartmann', 'pbayer@example.net', NULL),
(32, 'architecto voluptatem quidem', 5, 'Cum unde iste quia similique quis sit. Recusandae illo sapiente aliquam quia quisquam voluptatem. Odio eos ipsa sit rerum neque sapiente. Rerum atque iste optio laborum.', 'assets/img/review/4.jpg', NULL, 'public', NULL, '2026-03-29 08:15:33', '2026-03-29 08:15:33', 'Ms. Nona Jacobson', 'demario02@example.net', NULL),
(33, 'ut voluptatem laboriosam', 5, 'Amet labore a mollitia et sit aliquam in. Explicabo placeat saepe explicabo quod enim. Sint et consectetur consequatur incidunt.', 'assets/img/review/2.jpg', NULL, 'public', NULL, '2026-03-29 08:15:33', '2026-03-29 08:15:33', 'Murl Keeling IV', 'walker.marvin@example.net', NULL),
(34, 'assumenda enim ab', 12, 'Et est repellendus molestiae asperiores. Fugit aut nihil eveniet placeat magni. Optio et neque quas quibusdam dolorem. Nesciunt ipsa cupiditate laboriosam in non et ipsum illum.', 'assets/img/review/2.jpg', NULL, 'public', NULL, '2026-03-29 08:29:35', '2026-03-29 08:29:35', 'Ashton Swift DVM', 'kling.alf@example.com', NULL),
(35, 'ipsa iste ut', 12, 'Rem ad alias veniam sit modi vel incidunt. Voluptatem dolor ipsum beatae quidem. Eligendi dolor et esse.', 'assets/img/review/4.jpg', NULL, 'public', NULL, '2026-03-29 08:29:35', '2026-03-29 08:29:35', 'Lori Lehner', 'angelita.jast@example.org', NULL),
(36, 'modi harum reiciendis', 12, 'Saepe eos est sit dolores nobis minima. Possimus molestiae accusamus dolores quia consequatur eius. Saepe voluptas asperiores optio omnis. Qui et voluptates ipsa recusandae et distinctio perferendis mollitia. Possimus harum voluptatem sed.', 'assets/img/review/1.jpg', NULL, 'public', NULL, '2026-03-29 08:29:35', '2026-03-29 08:29:35', 'Clay Leffler MD', 'glenna.mertz@example.net', NULL),
(37, 'repellat ducimus sit', 12, 'Repellendus sint sit aliquam nihil consequatur possimus. Aperiam maxime amet harum ullam qui autem dicta. Sapiente quos esse delectus. Et occaecati voluptas vel optio voluptatem qui.', 'assets/img/review/4.jpg', NULL, 'public', NULL, '2026-03-29 08:29:35', '2026-03-29 08:29:35', 'Floyd Adams', 'hansen.jakob@example.net', NULL),
(38, 'qui rerum dignissimos', 12, 'Eum qui maxime repellendus quisquam enim asperiores. Amet iure est facere consequatur ab. Dolor pariatur numquam quos velit necessitatibus quo. Voluptatibus voluptas quis error ex exercitationem mollitia.', 'assets/img/review/1.jpg', NULL, 'public', NULL, '2026-03-29 08:29:35', '2026-03-29 08:29:35', 'Teagan Brakus', 'quinten.daugherty@example.org', NULL),
(39, 'voluptatibus iure repudiandae', 12, 'Dolor sunt ex saepe facilis. Placeat eveniet impedit repudiandae est voluptatem qui tenetur. Dicta ea atque sed laboriosam dignissimos labore.', 'assets/img/review/2.jpg', NULL, 'public', NULL, '2026-03-29 08:29:35', '2026-03-29 08:29:35', 'Kylee Heaney', 'treva.harvey@example.org', NULL),
(40, 'sint maxime hic', 12, 'Commodi consequatur velit delectus quia. Deserunt nemo recusandae perspiciatis et veniam voluptas magnam.', 'assets/img/review/3.jpg', NULL, 'public', NULL, '2026-03-29 08:29:35', '2026-03-29 08:29:35', 'Dr. Dominic Beahan V', 'ignacio22@example.org', NULL),
(41, 'est ipsum inventore', 12, 'Laboriosam modi quidem omnis amet. Laudantium itaque vitae occaecati eveniet vero vitae reprehenderit. Provident non assumenda quae minima quidem aspernatur minima.', 'assets/img/review/4.jpg', NULL, 'public', NULL, '2026-03-29 08:29:35', '2026-03-29 08:29:35', 'Cecil Kihn IV', 'efren.kreiger@example.com', NULL),
(42, 'iusto eaque sint', 12, 'Vitae adipisci sunt nesciunt. Et doloribus aliquam qui recusandae. Omnis placeat magni rerum tempore. Sint qui deleniti aut et eveniet ipsam provident in.', 'assets/img/review/3.jpg', NULL, 'public', NULL, '2026-03-29 08:29:35', '2026-03-29 08:29:35', 'Dr. Hayley Shields', 'yhalvorson@example.org', NULL),
(43, 'eaque aut iusto', 12, 'Qui aut perspiciatis exercitationem vitae ut. Quis blanditiis consectetur enim ab quam sit voluptatem quia. Vero accusamus quae dolor tempora et quam dicta.', 'assets/img/review/4.jpg', NULL, 'public', NULL, '2026-03-29 08:29:35', '2026-03-29 08:29:35', 'Miss Pinkie Abernathy', 'candice65@example.net', NULL),
(50, 'Chess', 5, 'It is a game where your brain needs to run faster', 'uploads/games/images/1777192023_1777191939_master-chess.jpg', 'uploads/games/files/1777192023_1777191939_master-chess.zip', 'public', 56, '2026-04-26 02:57:06', '2026-04-26 03:02:11', 'prahar', 'dhvanitshah062@gmail.com', 'play-games/master-chess-1777192023/chess-game-offline\\chess-game\\index.html');

-- --------------------------------------------------------

--
-- Table structure for table `game_submissions`
--

CREATE TABLE `game_submissions` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) NOT NULL,
  `category_id` bigint(20) UNSIGNED NOT NULL,
  `description` text NOT NULL,
  `image_url` varchar(255) NOT NULL,
  `game_file` varchar(255) DEFAULT NULL,
  `developer_name` varchar(255) NOT NULL,
  `developer_email` varchar(255) NOT NULL,
  `status` enum('pending','approved','rejected') NOT NULL DEFAULT 'pending',
  `admin_feedback` text DEFAULT NULL,
  `developer_id` bigint(20) UNSIGNED DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `game_submissions`
--

INSERT INTO `game_submissions` (`id`, `title`, `category_id`, `description`, `image_url`, `game_file`, `developer_name`, `developer_email`, `status`, `admin_feedback`, `developer_id`, `created_at`, `updated_at`) VALUES
(1, 'sudoku', 5, 'sudoku is a good game for brain stroming', 'uploads/submissions/images/1776955358_sudoku.jpg', NULL, 'Veer', 'sdwtveer@gmail.com', 'approved', NULL, 55, '2026-04-23 09:12:38', '2026-05-02 00:02:44'),
(2, 'sudoko', 2, 'm, nv,n vjck,nvkl n', 'uploads/submissions/images/1777084898.png', 'uploads/submissions/files/1777084898.zip', 'dhvanit', 'dhvanitcshah172006@gmail.com', 'rejected', NULL, 54, '2026-04-24 21:11:38', '2026-04-25 12:44:03'),
(3, 'snake and ladder', 9, 'fsdnkcdfkjvnjkdfnvnjfevf', 'uploads/submissions/images/1777086589_snake-and-ladder.jpg', 'uploads/submissions/files/1777086590_snake-and-ladder.zip', 'dhvanit', 'dhvanitcshah172006@gmail.com', 'approved', NULL, 54, '2026-04-24 21:39:50', '2026-04-25 12:44:03'),
(5, 'snake and lader', 4, 'dmklcmsdklmckls', 'uploads/submissions/images/1777142082_snake-and-lader.png', 'uploads/submissions/files/1777142082_snake-and-lader.zip', 'Dhvanit', 'dhvanitcshah172006@gmail.com', 'approved', NULL, 54, '2026-04-25 13:04:42', '2026-04-25 13:09:05'),
(6, 'Master Chess', 5, 'It is a game where your brain needs to run faster', 'uploads/submissions/images/1777191939_master-chess.jpg', 'uploads/submissions/files/1777191939_master-chess.zip', 'prahar', 'dhvanitshah062@gmail.com', 'approved', NULL, 56, '2026-04-26 02:55:39', '2026-04-26 02:57:06');

-- --------------------------------------------------------

--
-- Table structure for table `jobs`
--

CREATE TABLE `jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `queue` varchar(255) NOT NULL,
  `payload` longtext NOT NULL,
  `attempts` tinyint(3) UNSIGNED NOT NULL,
  `reserved_at` int(10) UNSIGNED DEFAULT NULL,
  `available_at` int(10) UNSIGNED NOT NULL,
  `created_at` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `job_batches`
--

CREATE TABLE `job_batches` (
  `id` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `total_jobs` int(11) NOT NULL,
  `pending_jobs` int(11) NOT NULL,
  `failed_jobs` int(11) NOT NULL,
  `failed_job_ids` longtext NOT NULL,
  `options` mediumtext DEFAULT NULL,
  `cancelled_at` int(11) DEFAULT NULL,
  `created_at` int(11) NOT NULL,
  `finished_at` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '0001_01_01_000000_create_users_table', 1),
(2, '0001_01_01_000001_create_cache_table', 1),
(3, '0001_01_01_000002_create_jobs_table', 1),
(4, '2026_01_22_131943_create_categories_table', 1),
(5, '2026_01_22_131943_create_games_table', 1),
(6, '2026_01_22_131943_create_reviews_table', 1),
(7, '2026_01_22_131943_create_scores_table', 1),
(8, '2026_01_24_101901_create_game_submissions_table', 2),
(9, '2026_02_19_165153_add_developer_and_play_url_to_games_table', 3),
(10, '2026_03_25_164743_create_blogs_table', 4),
(11, '2026_03_29_114619_add_otp_fields_to_users_table', 5),
(12, '2026_03_29_123652_create_achievements_table', 6),
(13, '2026_03_29_123652_create_rewards_table', 6),
(14, '2026_03_29_123653_create_user_achievements_table', 6),
(15, '2026_03_29_123653_create_user_rewards_table', 6),
(16, '2026_03_29_123654_add_coins_to_users_table', 6),
(17, '2026_04_23_000001_add_developer_fields_to_users_table', 7),
(18, '2026_04_23_000002_add_developer_id_to_games_table', 7),
(19, '2026_04_23_000003_add_developer_id_to_game_submissions_table', 7),
(20, '2026_04_26_064053_add_developer_status_to_users_table', 8);

-- --------------------------------------------------------

--
-- Table structure for table `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `reviews`
--

CREATE TABLE `reviews` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `game_id` bigint(20) UNSIGNED NOT NULL,
  `rating` tinyint(4) NOT NULL,
  `comment` text DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `reviews`
--

INSERT INTO `reviews` (`id`, `user_id`, `game_id`, `rating`, `comment`, `created_at`, `updated_at`) VALUES
(8, 2, 1, 4, 'A classic game, very well implemented here.', '2026-03-25 11:55:25', '2026-03-25 12:30:48'),
(12, 22, 14, 1, 'Consequatur ea ipsum provident aliquam est ipsa qui. Sit laboriosam quam fugiat voluptatum id quis. Sit praesentium fugiat quam suscipit. Eum id ex et quo voluptatem aut.', '2026-03-29 07:25:31', '2026-03-29 07:25:31'),
(13, 17, 15, 2, 'Occaecati doloribus eos iusto ut ea. Asperiores consequatur quia ea dicta dignissimos vitae autem et. Quae rem rerum ipsum rerum ullam.', '2026-03-29 07:25:31', '2026-03-29 07:25:31'),
(14, 17, 16, 5, 'Aliquam expedita at dicta odio accusamus consequatur occaecati. Reiciendis illum voluptas tenetur adipisci sapiente molestiae. Laudantium molestias iure beatae voluptatibus. Cum sit molestiae eum tempora.', '2026-03-29 07:25:31', '2026-03-29 07:25:31'),
(15, 17, 16, 4, 'Officiis labore id est voluptatem et soluta. Vero quaerat hic et doloribus sit praesentium sunt ut. Dolore voluptas est ipsa velit nihil.', '2026-03-29 07:25:31', '2026-03-29 07:25:31'),
(16, 17, 16, 3, 'Est ea consequuntur et odio. Eum assumenda in cupiditate voluptatem debitis vitae quasi et. Mollitia dolor sit nisi quam dicta in. Ipsa et ut aut modi non. Consequatur nesciunt ex officia.', '2026-03-29 07:25:31', '2026-03-29 07:25:31'),
(17, 21, 17, 2, 'Sapiente voluptatem maxime eligendi praesentium quos. Exercitationem quae officia facilis aut. Aut aut totam odio reprehenderit perferendis rerum. Fuga occaecati ipsam aut sit.', '2026-03-29 07:25:31', '2026-03-29 07:25:31'),
(18, 21, 17, 4, 'Dolorem numquam sunt amet nobis quo ex sit. Omnis cumque ut qui quia vel possimus. Exercitationem ad consequatur qui architecto velit fugit. Aut dolor qui dolor nihil exercitationem. Veniam est sint adipisci fuga iure et sapiente.', '2026-03-29 07:25:31', '2026-03-29 07:25:31'),
(19, 21, 17, 2, 'Omnis iste explicabo iure quo earum quis. Illo dolore voluptas id rem et eos alias explicabo. Et eum ratione dolor dolor. Voluptatem placeat quidem assumenda officia.', '2026-03-29 07:25:31', '2026-03-29 07:25:31'),
(20, 23, 18, 3, 'Itaque neque quia et modi eos numquam. Et quisquam quidem possimus et molestiae ullam. Molestiae unde esse doloribus quia consectetur eligendi. Quia et eos ratione harum debitis.', '2026-03-29 07:25:31', '2026-03-29 07:25:31'),
(21, 23, 19, 5, 'Occaecati labore omnis quia voluptates id error est repellendus. Ad tempora nihil sapiente sint rerum et. Quisquam assumenda et ex.', '2026-03-29 07:25:31', '2026-03-29 07:25:31'),
(22, 23, 19, 5, 'Molestiae qui itaque nemo ut iste recusandae. Hic sunt consectetur explicabo quia reiciendis deleniti. Non ipsum dolore cum ut id.', '2026-03-29 07:25:31', '2026-03-29 07:25:31'),
(23, 23, 19, 1, 'In eum temporibus rerum qui. Ut placeat officiis amet laudantium illum sit sit. Aut odio sequi incidunt hic nesciunt. Officia praesentium cum atque dolor aut corrupti inventore quas.', '2026-03-29 07:25:31', '2026-03-29 07:25:31'),
(24, 19, 20, 3, 'Optio aliquam delectus aut ut vitae. Dolorum sequi vero voluptatem earum nam adipisci. Laborum earum consequatur illum.', '2026-03-29 07:25:31', '2026-03-29 07:25:31'),
(25, 17, 21, 5, 'Ut sed laboriosam ipsa eaque neque iste. Id consequatur temporibus qui.', '2026-03-29 07:25:31', '2026-03-29 07:25:31'),
(26, 23, 22, 5, 'Aut nam excepturi numquam voluptatem sunt saepe iure. Et modi error dolores non officiis earum molestiae. Aliquam eaque dolores est consequatur cum quis ut. Amet quae est natus vel asperiores doloribus rerum.', '2026-03-29 07:25:31', '2026-03-29 07:25:31'),
(27, 23, 22, 4, 'Eum est eos molestiae minus fugit. Quod illo corporis corrupti doloribus ut quaerat eos. Velit commodi officiis vel error. Assumenda ut aut harum accusamus.', '2026-03-29 07:25:31', '2026-03-29 07:25:31'),
(28, 21, 23, 2, 'Qui molestiae ipsam saepe aperiam reiciendis reiciendis nulla. Non aut doloremque eos est. Labore repudiandae rerum porro voluptatum quos.', '2026-03-29 07:25:31', '2026-03-29 07:25:31'),
(29, 35, 24, 5, 'Corporis non harum amet magni ea sit. Sit ab aut eum autem corrupti dolor.', '2026-03-29 08:15:33', '2026-03-29 08:15:33'),
(30, 35, 24, 5, 'Rerum odit doloremque assumenda. Quisquam voluptate vel sed ut optio consectetur. Iste ab corrupti omnis hic pariatur et. Distinctio aliquid in est vitae aut velit. Ipsa nemo esse eius voluptates fugiat.', '2026-03-29 08:15:33', '2026-03-29 08:15:33'),
(31, 26, 25, 3, 'Voluptatem est et occaecati laudantium voluptatem accusamus. Et pariatur dolore omnis rerum doloremque. Nemo ipsam nostrum odit dolorem vel. Est est aliquam doloribus sunt non. Qui amet reprehenderit cumque consequatur neque est ex.', '2026-03-29 08:15:33', '2026-03-29 08:15:33'),
(32, 26, 25, 4, 'In id nam aspernatur. Temporibus sint dolor voluptatem velit est. Odio minima tenetur omnis at voluptates. Ut ut iste atque voluptatibus voluptate corrupti.', '2026-03-29 08:15:33', '2026-03-29 08:15:33'),
(33, 26, 25, 1, 'Aut voluptates nihil asperiores vero sed. In nostrum id nisi et reiciendis rerum sint.', '2026-03-29 08:15:33', '2026-03-29 08:15:33'),
(34, 29, 26, 4, 'Saepe tempore quisquam dolor. Blanditiis quo et nisi molestias.', '2026-03-29 08:15:33', '2026-03-29 08:15:33'),
(35, 29, 26, 2, 'Ab necessitatibus maiores aut ratione praesentium assumenda molestiae. Quia itaque quis omnis at neque sunt corporis. Est nam corporis aut et id. Voluptatibus dolor ea excepturi voluptatum fugiat.', '2026-03-29 08:15:33', '2026-03-29 08:15:33'),
(36, 29, 26, 3, 'Nisi minima sunt deleniti autem soluta quaerat. Ad facere et nihil blanditiis. Aperiam voluptatibus odit omnis. Assumenda soluta est eum ut similique.', '2026-03-29 08:15:33', '2026-03-29 08:15:33'),
(37, 32, 27, 3, 'Provident et velit magni eius. Maiores quis ea eos molestiae enim error delectus. Voluptatum ut ut odit saepe consequuntur. Est ab sed corporis eos deserunt laborum a.', '2026-03-29 08:15:33', '2026-03-29 08:15:33'),
(38, 32, 27, 1, 'Voluptas ea dolores vel voluptatem rerum veniam. Voluptatem reprehenderit quo voluptatem sed exercitationem unde. Fugit et et fugit voluptas vel reprehenderit aut.', '2026-03-29 08:15:33', '2026-03-29 08:15:33'),
(39, 29, 28, 5, 'Consequatur laboriosam iusto ullam vero deleniti accusamus. Dolorem beatae saepe omnis suscipit est. Culpa doloremque ut nam quisquam placeat ut. Aliquam aut repellat impedit qui quod.', '2026-03-29 08:15:33', '2026-03-29 08:15:33'),
(40, 29, 28, 3, 'Veniam qui inventore aperiam et nesciunt maiores. Animi laudantium fugit in odit. Autem aut numquam quasi et dolorum aut sed.', '2026-03-29 08:15:33', '2026-03-29 08:15:33'),
(41, 26, 29, 5, 'Illum quas saepe quia suscipit qui est adipisci. Enim qui et aliquid dolor aspernatur qui totam.', '2026-03-29 08:15:33', '2026-03-29 08:15:33'),
(42, 26, 29, 1, 'Ut aliquam odit maiores voluptatem. Aut est est eveniet sit accusantium expedita ut. Dolorem hic architecto atque quia autem beatae.', '2026-03-29 08:15:33', '2026-03-29 08:15:33'),
(43, 32, 30, 1, 'Voluptatem dolores adipisci aliquid in ab. Quod unde aut voluptas ipsam autem accusantium omnis. Quia est dolor nostrum pariatur aut quibusdam aliquid. Beatae facilis provident laborum omnis. Et dolor maxime cumque magni voluptatem.', '2026-03-29 08:15:33', '2026-03-29 08:15:33'),
(44, 34, 31, 1, 'Quibusdam esse libero recusandae similique voluptatem. Ut delectus qui est ex ut consectetur eum nulla. Rerum culpa commodi ut.', '2026-03-29 08:15:33', '2026-03-29 08:15:33'),
(45, 34, 31, 5, 'Voluptas repellendus qui eos fuga officiis. Debitis et facilis minus inventore natus est. Expedita accusantium dolorem nemo eos voluptas corporis.', '2026-03-29 08:15:33', '2026-03-29 08:15:33'),
(46, 34, 31, 3, 'Qui rerum voluptas quo eum. Vel eligendi aut commodi est sit expedita delectus. Quae autem enim officiis molestias ut.', '2026-03-29 08:15:33', '2026-03-29 08:15:33'),
(47, 35, 32, 3, 'Asperiores eligendi autem unde. Amet non consequatur voluptas aliquid eligendi quia. Sequi dolorum blanditiis quidem consequatur. Ullam dolor perferendis dolor expedita.', '2026-03-29 08:15:33', '2026-03-29 08:15:33'),
(48, 35, 32, 1, 'Omnis rerum minus itaque. Nihil unde sunt nostrum repellat qui. Reiciendis sit atque quia neque quis quis.', '2026-03-29 08:15:33', '2026-03-29 08:15:33'),
(49, 27, 33, 5, 'Qui ut ipsum et tempore minus. Tempora culpa iusto sed voluptatibus et doloribus voluptates. Magni deserunt dignissimos et similique deserunt. Non repellendus expedita aut sapiente dolor ea saepe qui.', '2026-03-29 08:15:33', '2026-03-29 08:15:33'),
(50, 45, 34, 2, 'Esse libero animi omnis reiciendis veniam explicabo sed. Distinctio officia exercitationem veritatis qui. Sapiente eius ullam quod esse voluptatibus.', '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(51, 40, 35, 5, 'Dolor eum quibusdam aperiam iste iste magnam maxime. Ut suscipit autem eos quos nesciunt blanditiis et cumque. Totam dolorem veniam rem aut sequi adipisci aut. Itaque adipisci iste et quia repellendus voluptatem alias. Qui aspernatur alias modi ut.', '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(52, 40, 35, 5, 'Saepe eius aspernatur ea consequatur consequatur alias. Enim cupiditate harum est cupiditate rerum blanditiis. Voluptatem nemo mollitia atque provident hic autem. Aut doloribus cupiditate autem eos.', '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(53, 38, 36, 1, 'Vero aliquam suscipit iure aut sed voluptas distinctio. Maxime enim facilis non sint voluptatem incidunt sunt. Quod quibusdam nisi similique esse et eveniet maxime. Ut doloremque exercitationem itaque aliquam voluptatem fugit architecto et.', '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(54, 38, 36, 4, 'Possimus et facere tempora libero autem. Natus fugiat qui doloribus architecto vel illum. Dolorem commodi hic ut quia rerum ut exercitationem. Eveniet commodi dolorem voluptas tempore dolores.', '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(55, 38, 36, 4, 'Neque officia rem impedit recusandae quidem libero. Aut et cum omnis ratione. Sed nam aut esse non. Commodi laboriosam rerum ut magni pariatur sapiente. Esse voluptatem culpa quidem consequatur eligendi atque quod aliquam.', '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(57, 39, 38, 4, 'Sed beatae expedita saepe hic. Consequatur fuga praesentium quae repellendus dolor. Officia quidem enim esse et magnam.', '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(58, 39, 38, 3, 'Ut reiciendis est est ipsum et fugiat similique. Asperiores voluptatem saepe dicta quia. Voluptas veniam ab fuga ea impedit illum blanditiis.', '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(59, 39, 38, 4, 'Et architecto autem soluta assumenda vel quo non. Nihil dolorem hic culpa quia. Porro culpa repellat rerum. Molestias voluptatem quo ut reprehenderit aperiam odit unde.', '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(60, 43, 39, 5, 'Illo quidem adipisci voluptates autem a. Quisquam non ad id incidunt aut odio voluptate. Molestiae in id explicabo quia et quo qui. Quibusdam saepe sapiente eius et aut.', '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(61, 43, 39, 1, 'Exercitationem nulla eum sit nisi earum. Voluptas autem sunt consequatur voluptas aut quo non mollitia. Sed eum tenetur ut praesentium ut consequatur.', '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(62, 43, 39, 2, 'Quia accusamus iusto dignissimos sed. Quo eaque architecto cum nostrum atque ex necessitatibus. Omnis pariatur sit libero impedit. Et qui aut iste nobis hic qui illo.', '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(63, 45, 40, 4, 'Nesciunt voluptatem enim sequi omnis. Incidunt laudantium libero ad non deleniti quas. Perferendis veritatis temporibus magnam eum inventore sit. Sint consequatur tempora ut amet.', '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(64, 37, 41, 3, 'Sint molestiae adipisci cupiditate laudantium. Error reiciendis ea consequatur. Impedit eaque vero voluptatibus rerum possimus quibusdam illum.', '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(65, 39, 42, 2, 'Ipsum sapiente ullam est amet deserunt est hic. Error et cumque accusamus. Nulla qui qui quas porro fuga. Aspernatur tempore magni quae non.', '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(66, 39, 42, 3, 'Cupiditate aliquam corporis maxime est. Veritatis dignissimos nihil reprehenderit ut autem et et. Eligendi cum fugit a illo qui officiis velit.', '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(67, 37, 43, 3, 'Placeat qui qui eum quia. Quis dolores quis assumenda asperiores quos. Et voluptatem praesentium accusamus voluptatem consectetur.', '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(68, 37, 43, 1, 'Dolor aut non voluptate quae. Perspiciatis ut dolorem quis debitis explicabo rerum rerum. Omnis perspiciatis eaque totam. Aut praesentium magnam natus ratione ut velit.', '2026-03-29 08:29:36', '2026-03-29 08:29:36');

-- --------------------------------------------------------

--
-- Table structure for table `rewards`
--

CREATE TABLE `rewards` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` text DEFAULT NULL,
  `icon` varchar(255) DEFAULT NULL,
  `cost` int(11) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `rewards`
--

INSERT INTO `rewards` (`id`, `name`, `description`, `icon`, `cost`, `created_at`, `updated_at`) VALUES
(1, 'quasi Perk', 'Autem neque voluptatum quia nihil quod.', 'fa-magic', 962, '2026-03-29 07:25:31', '2026-03-29 07:25:31'),
(2, 'maxime Perk', 'Harum odit repudiandae quia laboriosam exercitationem unde provident.', 'fa-heart', 1710, '2026-03-29 07:25:31', '2026-03-29 07:25:31'),
(3, 'dolores Perk', 'Laborum et porro hic qui unde.', 'fa-flag', 1584, '2026-03-29 07:25:31', '2026-03-29 07:25:31'),
(4, 'est Perk', 'Voluptate consequatur debitis alias.', 'fa-heart', 157, '2026-03-29 07:25:31', '2026-03-29 07:25:31'),
(5, 'quisquam Perk', 'Vel dolorem assumenda quam optio quod ut et maiores.', 'fa-diamond', 1996, '2026-03-29 07:25:31', '2026-03-29 07:25:31'),
(6, 'minus Perk', 'Omnis autem ducimus excepturi et eum officiis consequatur.', 'fa-flag', 1807, '2026-03-29 07:25:31', '2026-03-29 07:25:31'),
(7, 'numquam Perk', 'Dolore beatae molestiae soluta distinctio doloremque.', 'fa-heart', 217, '2026-03-29 07:25:31', '2026-03-29 07:25:31'),
(8, 'quae Perk', 'Voluptatum dicta quos accusantium eos assumenda et.', 'fa-heart', 1383, '2026-03-29 07:25:31', '2026-03-29 07:25:31'),
(9, 'ut Perk', 'Delectus repudiandae autem sit rerum qui magni ea.', 'fa-flag', 1698, '2026-03-29 07:25:31', '2026-03-29 07:25:31'),
(10, 'rerum Perk', 'Ut voluptatem in quo ut perspiciatis dolorem neque.', 'fa-magic', 1172, '2026-03-29 07:25:31', '2026-03-29 07:25:31'),
(11, 'est Perk', 'Voluptates vel harum adipisci dignissimos.', 'fa-magic', 726, '2026-03-29 08:15:33', '2026-03-29 08:15:33'),
(12, 'voluptatem Perk', 'Veniam sunt alias ut dolorum aut et libero.', 'fa-heart', 1849, '2026-03-29 08:15:33', '2026-03-29 08:15:33'),
(13, 'quo Perk', 'Nihil ea id cumque consequatur magnam cupiditate.', 'fa-gift', 1772, '2026-03-29 08:15:33', '2026-03-29 08:15:33'),
(14, 'id Perk', 'Similique numquam sequi officia eaque.', 'fa-flag', 253, '2026-03-29 08:15:33', '2026-03-29 08:15:33'),
(15, 'delectus Perk', 'Excepturi sed vitae qui.', 'fa-magic', 1437, '2026-03-29 08:15:33', '2026-03-29 08:15:33'),
(16, 'delectus Perk', 'Enim vero assumenda ipsa voluptates.', 'fa-diamond', 1178, '2026-03-29 08:15:33', '2026-03-29 08:15:33'),
(17, 'explicabo Perk', 'Voluptas quia nihil eos quidem quas rerum alias optio.', 'fa-heart', 1558, '2026-03-29 08:15:33', '2026-03-29 08:15:33'),
(18, 'minima Perk', 'Ea quasi ipsam quidem tenetur voluptatem.', 'fa-flag', 1750, '2026-03-29 08:15:33', '2026-03-29 08:15:33'),
(19, 'ut Perk', 'Et facilis quia ducimus quis saepe nihil enim ea.', 'fa-heart', 115, '2026-03-29 08:15:33', '2026-03-29 08:15:33'),
(20, 'aut Perk', 'Sed sint beatae ut praesentium doloribus.', 'fa-heart', 1580, '2026-03-29 08:15:33', '2026-03-29 08:15:33'),
(21, 'et Perk', 'Ipsam expedita officiis eveniet blanditiis ipsam sed.', 'fa-magic', 645, '2026-03-29 08:29:36', '2026-04-23 07:31:49'),
(22, 'qui Perk', 'Possimus perspiciatis eveniet fugiat voluptatem.', 'fa-heart', 1756, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(23, 'alias Perk', 'Veritatis voluptas voluptates ut ullam modi asperiores.', 'fa-heart', 810, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(24, 'consequuntur Perk', 'Rerum non omnis id sit.', 'fa-magic', 1464, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(25, 'excepturi Perk', 'At praesentium et quia ducimus aut dolorum.', 'fa-heart', 410, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(26, 'ex Perk', 'Itaque perspiciatis fugit voluptates aut eligendi fuga veniam sint.', 'fa-gift', 716, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(27, 'porro Perk', 'Deleniti nam perferendis facilis molestiae explicabo.', 'fa-flag', 844, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(28, 'et Perk', 'Et deleniti doloribus autem et.', 'fa-heart', 1732, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(29, 'et Perk', 'Ipsum ipsam dolores ea exercitationem consequuntur eligendi corporis.', 'fa-diamond', 996, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(30, 'quia Perk', 'Sunt voluptate ipsam voluptatum pariatur quaerat velit qui.', 'fa-diamond', 113, '2026-03-29 08:29:36', '2026-03-29 08:29:36');

-- --------------------------------------------------------

--
-- Table structure for table `scores`
--

CREATE TABLE `scores` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `game_id` bigint(20) UNSIGNED NOT NULL,
  `score` bigint(20) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `scores`
--

INSERT INTO `scores` (`id`, `user_id`, `game_id`, `score`, `created_at`, `updated_at`) VALUES
(2, 16, 20, 5275, '2026-03-29 07:25:31', '2026-03-29 07:25:31'),
(3, 16, 20, 1707, '2026-03-29 07:25:31', '2026-03-29 07:25:31'),
(4, 17, 22, 8753, '2026-03-29 07:25:31', '2026-03-29 07:25:31'),
(5, 17, 22, 9992, '2026-03-29 07:25:31', '2026-03-29 07:25:31'),
(6, 17, 22, 7348, '2026-03-29 07:25:31', '2026-03-29 07:25:31'),
(7, 17, 22, 2050, '2026-03-29 07:25:31', '2026-03-29 07:25:31'),
(8, 17, 22, 4768, '2026-03-29 07:25:31', '2026-03-29 07:25:31'),
(9, 18, 17, 8549, '2026-03-29 07:25:31', '2026-03-29 07:25:31'),
(10, 18, 17, 2117, '2026-03-29 07:25:31', '2026-03-29 07:25:31'),
(11, 18, 17, 4057, '2026-03-29 07:25:31', '2026-03-29 07:25:31'),
(12, 19, 20, 9900, '2026-03-29 07:25:31', '2026-03-29 07:25:31'),
(13, 19, 20, 8145, '2026-03-29 07:25:31', '2026-03-29 07:25:31'),
(14, 19, 20, 6229, '2026-03-29 07:25:31', '2026-03-29 07:25:31'),
(15, 20, 18, 9326, '2026-03-29 07:25:31', '2026-03-29 07:25:31'),
(16, 20, 18, 8803, '2026-03-29 07:25:31', '2026-03-29 07:25:31'),
(17, 20, 18, 2535, '2026-03-29 07:25:31', '2026-03-29 07:25:31'),
(18, 21, 15, 3530, '2026-03-29 07:25:31', '2026-03-29 07:25:31'),
(19, 21, 15, 8626, '2026-03-29 07:25:31', '2026-03-29 07:25:31'),
(20, 21, 15, 182, '2026-03-29 07:25:31', '2026-03-29 07:25:31'),
(21, 21, 15, 2982, '2026-03-29 07:25:31', '2026-03-29 07:25:31'),
(22, 21, 15, 2426, '2026-03-29 07:25:31', '2026-03-29 07:25:31'),
(23, 22, 15, 9163, '2026-03-29 07:25:31', '2026-03-29 07:25:31'),
(24, 22, 15, 3506, '2026-03-29 07:25:31', '2026-03-29 07:25:31'),
(25, 22, 15, 2293, '2026-03-29 07:25:31', '2026-03-29 07:25:31'),
(26, 22, 15, 4276, '2026-03-29 07:25:31', '2026-03-29 07:25:31'),
(27, 22, 15, 5753, '2026-03-29 07:25:31', '2026-03-29 07:25:31'),
(28, 23, 17, 4528, '2026-03-29 07:25:31', '2026-03-29 07:25:31'),
(29, 23, 17, 2263, '2026-03-29 07:25:31', '2026-03-29 07:25:31'),
(30, 23, 17, 7626, '2026-03-29 07:25:31', '2026-03-29 07:25:31'),
(31, 24, 17, 1803, '2026-03-29 07:25:31', '2026-03-29 07:25:31'),
(32, 24, 17, 1758, '2026-03-29 07:25:31', '2026-03-29 07:25:31'),
(33, 24, 17, 168, '2026-03-29 07:25:31', '2026-03-29 07:25:31'),
(34, 24, 17, 3159, '2026-03-29 07:25:31', '2026-03-29 07:25:31'),
(35, 25, 21, 1967, '2026-03-29 07:25:31', '2026-03-29 07:25:31'),
(37, 26, 28, 7732, '2026-03-29 08:15:33', '2026-03-29 08:15:33'),
(38, 26, 28, 9314, '2026-03-29 08:15:33', '2026-03-29 08:15:33'),
(39, 27, 24, 1206, '2026-03-29 08:15:33', '2026-03-29 08:15:33'),
(40, 27, 24, 4526, '2026-03-29 08:15:33', '2026-03-29 08:15:33'),
(41, 27, 24, 4252, '2026-03-29 08:15:33', '2026-03-29 08:15:33'),
(42, 28, 28, 3930, '2026-03-29 08:15:33', '2026-03-29 08:15:33'),
(43, 28, 28, 6336, '2026-03-29 08:15:33', '2026-03-29 08:15:33'),
(44, 29, 26, 8185, '2026-03-29 08:15:33', '2026-03-29 08:15:33'),
(45, 29, 26, 9512, '2026-03-29 08:15:33', '2026-03-29 08:15:33'),
(46, 29, 26, 6808, '2026-03-29 08:15:33', '2026-03-29 08:15:33'),
(47, 29, 26, 9707, '2026-03-29 08:15:33', '2026-03-29 08:15:33'),
(48, 30, 27, 6710, '2026-03-29 08:15:33', '2026-03-29 08:15:33'),
(49, 30, 27, 8740, '2026-03-29 08:15:33', '2026-03-29 08:15:33'),
(50, 31, 24, 3648, '2026-03-29 08:15:33', '2026-03-29 08:15:33'),
(51, 31, 24, 9060, '2026-03-29 08:15:33', '2026-03-29 08:15:33'),
(52, 31, 24, 8163, '2026-03-29 08:15:33', '2026-03-29 08:15:33'),
(53, 31, 24, 5797, '2026-03-29 08:15:33', '2026-03-29 08:15:33'),
(54, 32, 25, 6633, '2026-03-29 08:15:33', '2026-03-29 08:15:33'),
(55, 32, 25, 3036, '2026-03-29 08:15:33', '2026-03-29 08:15:33'),
(56, 32, 25, 227, '2026-03-29 08:15:33', '2026-03-29 08:15:33'),
(57, 33, 27, 7081, '2026-03-29 08:15:33', '2026-03-29 08:15:33'),
(58, 33, 27, 6156, '2026-03-29 08:15:33', '2026-03-29 08:15:33'),
(59, 33, 27, 5565, '2026-03-29 08:15:33', '2026-03-29 08:15:33'),
(60, 33, 27, 8922, '2026-03-29 08:15:33', '2026-03-29 08:15:33'),
(61, 34, 26, 3529, '2026-03-29 08:15:33', '2026-03-29 08:15:33'),
(62, 34, 26, 939, '2026-03-29 08:15:33', '2026-03-29 08:15:33'),
(63, 35, 30, 4954, '2026-03-29 08:15:33', '2026-03-29 08:15:33'),
(64, 36, 34, 2307, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(65, 36, 34, 8749, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(66, 36, 34, 6561, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(67, 36, 34, 5222, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(68, 36, 34, 6538, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(69, 36, 34, 9293, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(70, 36, 34, 2708, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(71, 36, 34, 295, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(72, 36, 34, 8805, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(73, 36, 34, 3440, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(74, 36, 34, 4774, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(75, 36, 34, 3075, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(76, 36, 34, 5912, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(77, 36, 34, 5853, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(78, 36, 34, 6446, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(79, 36, 34, 4095, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(80, 36, 34, 7787, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(81, 36, 34, 5381, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(82, 36, 34, 3968, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(83, 36, 34, 9166, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(84, 36, 34, 4774, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(85, 36, 34, 801, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(86, 36, 34, 908, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(87, 36, 34, 3225, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(88, 36, 34, 5151, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(89, 36, 34, 7510, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(90, 36, 34, 5042, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(91, 36, 34, 6251, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(92, 36, 34, 9480, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(93, 36, 34, 8938, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(94, 36, 34, 9785, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(95, 36, 34, 1652, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(96, 36, 34, 1168, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(97, 36, 34, 7611, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(98, 36, 34, 4643, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(99, 36, 34, 7863, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(100, 36, 34, 4084, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(101, 36, 34, 5155, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(102, 36, 34, 4661, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(103, 36, 34, 2401, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(104, 36, 34, 1267, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(105, 36, 34, 2097, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(106, 36, 34, 8540, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(107, 36, 34, 891, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(108, 36, 34, 3313, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(109, 36, 34, 9533, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(110, 36, 34, 8878, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(111, 36, 34, 4138, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(112, 36, 34, 334, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(113, 36, 34, 8164, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(114, 36, 34, 8466, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(115, 36, 34, 8707, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(116, 36, 34, 1462, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(117, 36, 34, 132, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(118, 36, 34, 1321, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(119, 36, 34, 4469, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(120, 36, 34, 5330, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(121, 36, 34, 341, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(122, 37, 40, 8234, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(123, 37, 40, 5853, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(124, 37, 40, 5271, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(125, 37, 40, 1158, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(126, 37, 40, 2925, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(127, 37, 40, 7381, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(128, 37, 40, 5010, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(129, 37, 40, 2554, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(130, 37, 40, 4618, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(131, 37, 40, 8004, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(132, 37, 40, 5871, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(133, 37, 40, 698, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(134, 37, 40, 1097, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(135, 37, 40, 8572, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(136, 37, 40, 1542, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(137, 37, 40, 5060, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(138, 37, 40, 9568, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(139, 37, 40, 2871, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(140, 37, 40, 9676, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(141, 37, 40, 865, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(142, 37, 40, 4685, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(143, 37, 40, 9552, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(144, 37, 40, 4585, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(145, 37, 40, 9083, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(146, 37, 40, 7113, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(147, 37, 40, 340, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(148, 37, 40, 6371, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(149, 37, 40, 3362, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(150, 37, 40, 159, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(151, 37, 40, 9804, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(152, 37, 40, 6105, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(153, 37, 40, 8998, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(154, 37, 40, 4820, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(155, 37, 40, 8045, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(156, 37, 40, 6340, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(157, 37, 40, 622, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(158, 37, 40, 8294, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(159, 37, 40, 3577, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(160, 37, 40, 563, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(161, 37, 40, 4231, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(162, 37, 40, 7382, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(163, 37, 40, 6177, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(164, 37, 40, 7287, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(165, 37, 40, 920, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(166, 37, 40, 843, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(167, 37, 40, 8683, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(168, 37, 40, 106, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(169, 37, 40, 9075, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(170, 37, 40, 6143, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(171, 37, 40, 2394, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(172, 37, 40, 6115, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(173, 37, 40, 9305, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(174, 37, 40, 7706, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(175, 37, 40, 2519, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(176, 37, 40, 8603, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(177, 37, 40, 829, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(178, 37, 40, 9164, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(179, 37, 40, 8743, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(180, 37, 40, 1774, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(181, 37, 40, 2035, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(182, 37, 40, 3306, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(183, 37, 40, 9413, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(184, 37, 40, 5609, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(185, 37, 40, 997, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(186, 37, 40, 2777, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(187, 37, 40, 4858, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(188, 37, 40, 3846, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(189, 37, 40, 173, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(190, 37, 40, 3183, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(191, 37, 40, 6219, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(192, 37, 40, 5588, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(193, 37, 40, 7067, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(194, 37, 40, 7605, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(195, 37, 40, 7180, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(196, 37, 40, 940, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(197, 37, 40, 7397, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(198, 37, 40, 7704, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(199, 37, 40, 6473, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(200, 37, 40, 5337, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(201, 37, 40, 3953, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(202, 37, 40, 9149, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(203, 37, 40, 9691, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(204, 37, 40, 6479, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(205, 37, 40, 3670, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(206, 37, 40, 1073, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(207, 37, 40, 5362, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(208, 38, 38, 771, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(209, 38, 38, 3252, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(210, 38, 38, 4397, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(211, 38, 38, 1481, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(212, 38, 38, 8444, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(213, 38, 38, 1177, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(214, 38, 38, 9071, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(215, 38, 38, 8266, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(216, 38, 38, 7228, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(217, 38, 38, 7754, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(218, 38, 38, 1962, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(219, 38, 38, 423, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(220, 38, 38, 8578, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(221, 38, 38, 252, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(222, 38, 38, 5169, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(223, 38, 38, 8264, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(224, 38, 38, 5723, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(225, 38, 38, 1121, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(226, 38, 38, 6886, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(227, 38, 38, 4368, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(228, 38, 38, 4516, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(229, 38, 38, 5940, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(230, 38, 38, 320, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(231, 38, 38, 8790, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(232, 38, 38, 7001, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(233, 38, 38, 3745, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(234, 38, 38, 2190, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(235, 38, 38, 2266, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(236, 38, 38, 7232, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(237, 38, 38, 8273, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(238, 38, 38, 929, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(239, 38, 38, 6125, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(240, 38, 38, 345, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(241, 38, 38, 1951, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(242, 38, 38, 7644, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(243, 38, 38, 258, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(244, 38, 38, 4708, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(245, 38, 38, 1621, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(246, 38, 38, 3578, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(247, 38, 38, 9957, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(248, 38, 38, 7974, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(249, 38, 38, 4339, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(250, 38, 38, 7265, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(251, 38, 38, 3689, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(252, 38, 38, 4296, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(253, 38, 38, 3302, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(254, 38, 38, 9119, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(255, 38, 38, 5327, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(256, 38, 38, 8222, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(257, 38, 38, 3623, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(258, 38, 38, 5518, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(259, 38, 38, 9074, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(260, 38, 38, 5134, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(261, 38, 38, 6129, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(262, 38, 38, 1339, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(263, 38, 38, 8820, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(264, 38, 38, 7417, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(265, 38, 38, 5639, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(266, 38, 38, 3124, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(267, 38, 38, 9173, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(268, 38, 38, 275, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(269, 38, 38, 5019, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(270, 39, 36, 6259, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(271, 39, 36, 5798, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(272, 39, 36, 9269, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(273, 39, 36, 8052, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(274, 39, 36, 3620, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(275, 39, 36, 564, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(276, 39, 36, 3227, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(277, 39, 36, 4740, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(278, 39, 36, 5975, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(279, 39, 36, 3570, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(280, 39, 36, 8383, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(281, 39, 36, 7124, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(282, 39, 36, 1277, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(283, 39, 36, 9307, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(284, 39, 36, 7347, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(285, 39, 36, 9407, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(286, 39, 36, 6717, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(287, 39, 36, 6962, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(288, 39, 36, 5865, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(289, 39, 36, 3091, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(290, 39, 36, 4824, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(291, 39, 36, 1699, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(292, 39, 36, 7686, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(293, 39, 36, 9538, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(294, 39, 36, 968, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(295, 39, 36, 3334, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(296, 39, 36, 8332, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(297, 39, 36, 7345, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(298, 39, 36, 8370, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(299, 39, 36, 4847, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(300, 39, 36, 6689, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(301, 39, 36, 4603, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(302, 39, 36, 4280, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(303, 39, 36, 1712, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(304, 39, 36, 1903, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(305, 39, 36, 1733, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(306, 39, 36, 380, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(307, 39, 36, 7947, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(308, 39, 36, 6591, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(309, 39, 36, 4658, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(310, 39, 36, 5391, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(311, 39, 36, 5314, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(312, 39, 36, 569, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(313, 39, 36, 2595, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(314, 39, 36, 5058, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(315, 39, 36, 2631, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(316, 39, 36, 3880, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(317, 39, 36, 2756, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(318, 39, 36, 476, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(319, 39, 36, 1006, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(320, 39, 36, 2885, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(321, 39, 36, 9670, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(322, 39, 36, 6133, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(323, 39, 36, 144, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(324, 39, 36, 5340, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(325, 39, 36, 1136, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(326, 40, 37, 4565, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(327, 40, 37, 4355, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(328, 40, 37, 8955, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(329, 40, 37, 9256, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(330, 40, 37, 1473, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(331, 40, 37, 9316, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(332, 40, 37, 9784, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(333, 40, 37, 1826, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(334, 40, 37, 8257, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(335, 40, 37, 9944, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(336, 40, 37, 6088, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(337, 40, 37, 7270, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(338, 40, 37, 6727, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(339, 40, 37, 8452, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(340, 40, 37, 4648, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(341, 40, 37, 1282, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(342, 40, 37, 1805, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(343, 40, 37, 2682, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(344, 40, 37, 3465, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(345, 40, 37, 7995, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(346, 40, 37, 7229, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(347, 40, 37, 6148, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(348, 40, 37, 1211, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(349, 40, 37, 8256, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(350, 40, 37, 8410, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(351, 40, 37, 3156, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(352, 40, 37, 7008, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(353, 40, 37, 414, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(354, 40, 37, 4689, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(355, 40, 37, 5784, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(356, 40, 37, 5241, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(357, 40, 37, 598, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(358, 40, 37, 8262, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(359, 40, 37, 3521, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(360, 40, 37, 7218, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(361, 40, 37, 3465, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(362, 40, 37, 9941, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(363, 40, 37, 1019, '2026-03-29 08:29:35', '2026-03-29 08:29:35'),
(364, 40, 37, 3009, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(365, 40, 37, 4100, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(366, 40, 37, 6485, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(367, 40, 37, 977, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(368, 40, 37, 4843, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(369, 40, 37, 6028, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(370, 40, 37, 7469, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(371, 40, 37, 8127, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(372, 40, 37, 6529, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(373, 40, 37, 4221, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(374, 40, 37, 1608, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(375, 40, 37, 4337, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(376, 40, 37, 4479, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(377, 40, 37, 6978, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(378, 40, 37, 6041, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(379, 40, 37, 7601, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(380, 40, 37, 3534, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(381, 40, 37, 1877, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(382, 40, 37, 7861, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(383, 40, 37, 5476, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(384, 40, 37, 9867, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(385, 40, 37, 4086, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(386, 40, 37, 8873, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(387, 40, 37, 8486, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(388, 40, 37, 8452, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(389, 40, 37, 1049, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(390, 40, 37, 4898, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(391, 40, 37, 4272, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(392, 40, 37, 7358, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(393, 40, 37, 8876, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(394, 40, 37, 2350, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(395, 40, 37, 3050, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(396, 41, 40, 3858, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(397, 41, 40, 2294, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(398, 41, 40, 7364, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(399, 41, 40, 9143, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(400, 41, 40, 923, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(401, 41, 40, 7519, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(402, 41, 40, 2641, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(403, 41, 40, 7111, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(404, 41, 40, 9841, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(405, 41, 40, 5204, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(406, 41, 40, 2218, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(407, 41, 40, 4843, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(408, 41, 40, 331, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(409, 41, 40, 3777, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(410, 41, 40, 6606, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(411, 41, 40, 7748, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(412, 41, 40, 2723, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(413, 41, 40, 2033, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(414, 41, 40, 6584, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(415, 41, 40, 4508, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(416, 41, 40, 5623, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(417, 41, 40, 6544, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(418, 41, 40, 4705, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(419, 41, 40, 3848, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(420, 41, 40, 3399, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(421, 41, 40, 6088, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(422, 41, 40, 9151, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(423, 41, 40, 1374, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(424, 41, 40, 7793, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(425, 41, 40, 8371, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(426, 41, 40, 1452, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(427, 41, 40, 7981, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(428, 41, 40, 968, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(429, 41, 40, 6741, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(430, 41, 40, 770, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(431, 41, 40, 2356, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(432, 41, 40, 9588, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(433, 41, 40, 8855, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(434, 41, 40, 6760, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(435, 41, 40, 2503, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(436, 41, 40, 4167, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(437, 41, 40, 2791, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(438, 41, 40, 2016, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(439, 41, 40, 137, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(440, 41, 40, 827, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(441, 41, 40, 7094, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(442, 41, 40, 130, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(443, 41, 40, 3194, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(444, 41, 40, 4380, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(445, 41, 40, 6419, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(446, 41, 40, 4490, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(447, 41, 40, 9770, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(448, 41, 40, 356, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(449, 41, 40, 1534, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(450, 41, 40, 5831, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(451, 42, 43, 3647, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(452, 42, 43, 9589, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(453, 42, 43, 1883, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(454, 42, 43, 1155, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(455, 42, 43, 6126, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(456, 42, 43, 7456, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(457, 42, 43, 8226, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(458, 42, 43, 899, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(459, 42, 43, 6285, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(460, 42, 43, 5147, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(461, 42, 43, 4176, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(462, 42, 43, 9668, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(463, 42, 43, 9412, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(464, 42, 43, 457, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(465, 42, 43, 2670, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(466, 42, 43, 2411, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(467, 42, 43, 3296, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(468, 42, 43, 4308, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(469, 42, 43, 3416, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(470, 42, 43, 6981, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(471, 42, 43, 3435, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(472, 42, 43, 430, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(473, 42, 43, 3559, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(474, 42, 43, 2232, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(475, 42, 43, 5049, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(476, 42, 43, 687, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(477, 42, 43, 371, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(478, 42, 43, 3823, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(479, 42, 43, 3675, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(480, 42, 43, 4845, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(481, 42, 43, 3383, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(482, 42, 43, 812, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(483, 42, 43, 8993, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(484, 42, 43, 1928, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(485, 42, 43, 6602, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(486, 42, 43, 2459, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(487, 42, 43, 8097, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(488, 42, 43, 3626, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(489, 42, 43, 281, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(490, 42, 43, 2160, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(491, 42, 43, 8915, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(492, 42, 43, 6553, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(493, 42, 43, 7661, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(494, 42, 43, 8877, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(495, 42, 43, 7662, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(496, 42, 43, 4314, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(497, 42, 43, 7905, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(498, 42, 43, 3312, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(499, 42, 43, 8242, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(500, 42, 43, 5635, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(501, 42, 43, 4919, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(502, 42, 43, 5056, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(503, 42, 43, 7261, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(504, 42, 43, 3182, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(505, 42, 43, 1606, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(506, 42, 43, 9316, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(507, 42, 43, 8434, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(508, 42, 43, 5830, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(509, 42, 43, 1438, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(510, 42, 43, 1737, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(511, 42, 43, 4849, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(512, 42, 43, 9437, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(513, 42, 43, 8571, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(514, 42, 43, 8640, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(515, 42, 43, 8343, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(516, 42, 43, 4902, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(517, 42, 43, 5317, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(518, 42, 43, 3676, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(519, 42, 43, 4274, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(520, 42, 43, 6914, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(521, 42, 43, 6056, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(522, 42, 43, 4966, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(523, 42, 43, 4431, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(524, 42, 43, 5194, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(525, 42, 43, 419, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(526, 42, 43, 1457, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(527, 42, 43, 4864, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(528, 42, 43, 2411, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(529, 42, 43, 9852, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(530, 42, 43, 9751, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(531, 42, 43, 6026, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(532, 42, 43, 8323, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(533, 42, 43, 7398, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(534, 42, 43, 2294, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(535, 42, 43, 9415, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(536, 42, 43, 9476, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(537, 42, 43, 3689, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(538, 42, 43, 5441, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(539, 42, 43, 2335, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(540, 42, 43, 6347, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(541, 42, 43, 3100, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(542, 43, 35, 6509, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(543, 43, 35, 4926, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(544, 43, 35, 1480, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(545, 43, 35, 8430, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(546, 43, 35, 2219, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(547, 43, 35, 2389, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(548, 43, 35, 9468, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(549, 43, 35, 2510, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(550, 43, 35, 3224, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(551, 43, 35, 5588, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(552, 43, 35, 1787, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(553, 43, 35, 5961, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(554, 43, 35, 3620, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(555, 43, 35, 6145, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(556, 43, 35, 8408, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(557, 43, 35, 6666, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(558, 43, 35, 5539, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(559, 43, 35, 3689, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(560, 43, 35, 7221, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(561, 43, 35, 6889, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(562, 43, 35, 4558, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(563, 43, 35, 6159, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(564, 43, 35, 4716, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(565, 43, 35, 2663, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(566, 43, 35, 3195, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(567, 43, 35, 5734, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(568, 43, 35, 3974, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(569, 43, 35, 867, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(570, 43, 35, 9230, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(571, 43, 35, 2133, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(572, 43, 35, 3253, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(573, 43, 35, 9547, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(574, 43, 35, 9173, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(575, 43, 35, 8138, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(576, 43, 35, 9937, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(577, 43, 35, 8365, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(578, 43, 35, 103, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(579, 43, 35, 8889, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(580, 43, 35, 1745, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(581, 43, 35, 1899, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(582, 43, 35, 9243, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(583, 43, 35, 4958, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(584, 43, 35, 5601, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(585, 43, 35, 629, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(586, 43, 35, 7736, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(587, 43, 35, 4225, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(588, 43, 35, 8847, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(589, 43, 35, 6276, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(590, 43, 35, 1719, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(591, 43, 35, 6311, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(592, 43, 35, 628, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(593, 43, 35, 5201, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(594, 43, 35, 5013, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(595, 43, 35, 6028, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(596, 43, 35, 4501, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(597, 43, 35, 6764, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(598, 43, 35, 9227, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(599, 43, 35, 876, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(600, 43, 35, 5036, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(601, 43, 35, 7684, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(602, 43, 35, 8579, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(603, 43, 35, 9903, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(604, 43, 35, 3926, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(605, 43, 35, 7469, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(606, 43, 35, 3388, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(607, 43, 35, 2461, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(608, 43, 35, 9568, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(609, 43, 35, 1425, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(610, 43, 35, 6990, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(611, 43, 35, 3656, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(612, 43, 35, 3292, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(613, 43, 35, 1866, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(614, 43, 35, 3026, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(615, 43, 35, 5429, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(616, 43, 35, 3801, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(617, 43, 35, 9698, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(618, 43, 35, 1311, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(619, 43, 35, 1445, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(620, 43, 35, 8204, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(621, 43, 35, 288, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(622, 43, 35, 3740, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(623, 43, 35, 6147, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(624, 43, 35, 208, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(625, 43, 35, 1933, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(626, 43, 35, 1369, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(627, 43, 35, 6354, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(628, 43, 35, 2571, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(629, 43, 35, 4256, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(709, 45, 42, 8553, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(710, 45, 42, 4786, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(711, 45, 42, 2791, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(712, 45, 42, 8316, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(713, 45, 42, 3635, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(714, 45, 42, 1670, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(715, 45, 42, 2334, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(716, 45, 42, 6214, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(717, 45, 42, 3263, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(718, 45, 42, 4169, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(719, 45, 42, 5570, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(720, 45, 42, 5421, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(721, 45, 42, 6742, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(722, 45, 42, 6769, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(723, 45, 42, 6140, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(724, 45, 42, 4335, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(725, 45, 42, 7470, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(726, 45, 42, 2718, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(727, 45, 42, 4300, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(728, 45, 42, 3881, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(729, 45, 42, 4223, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(730, 45, 42, 2669, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(731, 45, 42, 984, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(732, 45, 42, 635, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(733, 45, 42, 2599, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(734, 45, 42, 6288, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(735, 45, 42, 8009, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(736, 45, 42, 2900, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(737, 45, 42, 4936, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(738, 45, 42, 9556, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(739, 45, 42, 8282, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(740, 45, 42, 9185, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(741, 45, 42, 9009, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(742, 45, 42, 3742, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(743, 45, 42, 9141, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(744, 45, 42, 4245, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(745, 45, 42, 5714, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(746, 45, 42, 8683, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(747, 45, 42, 8305, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(748, 45, 42, 2461, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(749, 45, 42, 8827, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(750, 45, 42, 5466, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(751, 45, 42, 2618, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(752, 45, 42, 3205, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(753, 45, 42, 7314, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(754, 45, 42, 6292, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(755, 45, 42, 5712, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(756, 45, 42, 1868, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(757, 45, 42, 5611, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(758, 45, 42, 565, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(759, 45, 42, 8942, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(760, 45, 42, 4840, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(761, 45, 42, 5894, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(762, 45, 42, 9874, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(763, 45, 42, 7129, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(764, 45, 42, 7488, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(765, 45, 42, 3181, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(766, 45, 42, 7810, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(767, 45, 42, 8901, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(768, 45, 42, 1420, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(769, 45, 42, 5313, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(770, 45, 42, 699, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(771, 45, 42, 5660, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(772, 45, 42, 6687, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(773, 45, 42, 7270, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(774, 45, 42, 6970, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(775, 45, 42, 2403, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(776, 45, 42, 7273, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(777, 45, 42, 3954, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(778, 45, 42, 649, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(779, 45, 42, 7128, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(780, 45, 42, 5380, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(781, 45, 42, 341, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(782, 56, 50, 1, '2026-04-26 03:14:40', '2026-04-26 03:14:40');

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

CREATE TABLE `sessions` (
  `id` varchar(255) NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `ip_address` varchar(45) DEFAULT NULL,
  `user_agent` text DEFAULT NULL,
  `payload` longtext NOT NULL,
  `last_activity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `sessions`
--

INSERT INTO `sessions` (`id`, `user_id`, `ip_address`, `user_agent`, `payload`, `last_activity`) VALUES
('0fF9AmW6nJYInv2EUiQPbEXcWgSTVduinWO3FQGH', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiU0dremZsMjhnbHRCOTB2czR3Tm5QSEpURFJTWGQxVU1naW1lejRRRiI7czo5OiJfcHJldmlvdXMiO2E6Mjp7czozOiJ1cmwiO3M6MjE6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMCI7czo1OiJyb3V0ZSI7czo0OiJob21lIjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1769229800),
('2M2BdSjaIvXLPpwEI2ziQOuZeH9gjnbjGlSC3Rpw', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiMzhSS1JoRUVTU09DbG56aDNrR1YyOVhIcHZHa2YwSzBNRHF1Y0poayI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319czo5OiJfcHJldmlvdXMiO2E6Mjp7czozOiJ1cmwiO3M6MjE6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMCI7czo1OiJyb3V0ZSI7czo0OiJob21lIjt9fQ==', 1769235666),
('DF2g8Sg8VMpMLQqrnD4pu2olS8UFi1bm3jUNxFln', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiM0d2WlJVcUNjd1lzQVpYMkZEZDgydERhVGVVSXNqRWdmalBYek1WSCI7czo5OiJfcHJldmlvdXMiO2E6Mjp7czozOiJ1cmwiO3M6MjE6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMCI7czo1OiJyb3V0ZSI7czo0OiJob21lIjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1769161126),
('HVlQfyPYKYfyHv6S9rDIR1DeQj6MqlRAusvFgmaA', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiYnZNdDZMeGxmRlFEUDdia1ZIQVAzd1FQTTFhOWVEaUpWb3BMOXgyMSI7czo5OiJfcHJldmlvdXMiO2E6Mjp7czozOiJ1cmwiO3M6MjE6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMCI7czo1OiJyb3V0ZSI7czo0OiJob21lIjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1769159223),
('iSGJplsJcjfFSPZqN90rtCkiDUOUp58uWEwUweZA', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoicDVPU0hsMTJia2EwRXVyZ2dJdVhmc0hsUTcwQWlDb0YxT2UycXEyUyI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319czo5OiJfcHJldmlvdXMiO2E6Mjp7czozOiJ1cmwiO3M6MjE6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMCI7czo1OiJyb3V0ZSI7czo0OiJob21lIjt9fQ==', 1769161706),
('pTmLOgOhfY4VJRMqUDwA38faYHvoGyIvXTuopDAQ', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiRFQ4Y1FHT0xhQzJJcU13ZnhSRVdXVVM0cFpWWVY4Zk5sV2xPcnNQMyI7czo5OiJfcHJldmlvdXMiO2E6Mjp7czozOiJ1cmwiO3M6MjE6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMCI7czo1OiJyb3V0ZSI7czo0OiJob21lIjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1769229398),
('py7yfu7Qe0c3ahv3YC8NFVWm2Pq7lJ2kB8NR2xeq', 2, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36', 'YTo1OntzOjY6Il90b2tlbiI7czo0MDoiQmJJdEkwZ0F0Q1pFM0ZjaFdTZjdwSllUQVZPZkx6TW5oc2JnN0cwWCI7czo5OiJfcHJldmlvdXMiO2E6Mjp7czozOiJ1cmwiO3M6Mjc6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9hZG1pbiI7czo1OiJyb3V0ZSI7czoxNToiYWRtaW4uZGFzaGJvYXJkIjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319czo1MDoibG9naW5fd2ViXzU5YmEzNmFkZGMyYjJmOTQwMTU4MGYwMTRjN2Y1OGVhNGUzMDk4OWQiO2k6MjtzOjQ6ImF1dGgiO2E6MTp7czoyMToicGFzc3dvcmRfY29uZmlybWVkX2F0IjtpOjE3NjkyMjk0NjI7fX0=', 1769229530),
('TRqCe0r8DF92LFJT1z6jqsZ9VD6vpfmIagdng6qT', 2, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36', 'YTo1OntzOjY6Il90b2tlbiI7czo0MDoiUFZVcWlIWmtaREhiUU1vRDJyRHY0cWJyRHhRUTl1V2luY3ZveUtCYiI7czo5OiJfcHJldmlvdXMiO2E6Mjp7czozOiJ1cmwiO3M6Mjc6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9sb2dpbiI7czo1OiJyb3V0ZSI7czo1OiJsb2dpbiI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fXM6NTA6ImxvZ2luX3dlYl81OWJhMzZhZGRjMmIyZjk0MDE1ODBmMDE0YzdmNThlYTRlMzA5ODlkIjtpOjI7czo0OiJhdXRoIjthOjE6e3M6MjE6InBhc3N3b3JkX2NvbmZpcm1lZF9hdCI7aToxNzY5MTU5MjU1O319', 1769159255),
('Y6o86WNG2A1neCYtHDfmW5dM1byPOpNjkCD0mvtm', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiQ0VjVzdZYktaUGtHSUNsM3NPM3FHSDBWYVhJaGxKNjUzd2ZKcVN1YSI7czo5OiJfcHJldmlvdXMiO2E6Mjp7czozOiJ1cmwiO3M6Mjc6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9sb2dpbiI7czo1OiJyb3V0ZSI7czo1OiJsb2dpbiI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1769161538);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `role` varchar(255) NOT NULL DEFAULT 'player',
  `studio_name` varchar(255) DEFAULT NULL,
  `bio` text DEFAULT NULL,
  `website` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `developer_status` varchar(255) DEFAULT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `otp` varchar(255) DEFAULT NULL,
  `otp_expires_at` timestamp NULL DEFAULT NULL,
  `coins` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `role`, `studio_name`, `bio`, `website`, `phone`, `developer_status`, `remember_token`, `created_at`, `updated_at`, `otp`, `otp_expires_at`, `coins`) VALUES
(2, 'Admin Boss', 'admin@gmail.com', NULL, '$2y$12$mvdkNpYVKwMVR9.gB7TbEuV8.Jkzrqv85y3OzK6NZjcXSwgmV..12', 'admin', NULL, NULL, NULL, NULL, NULL, NULL, '2026-01-22 08:04:00', '2026-01-22 08:04:00', NULL, NULL, 0),
(6, 'Florence Klein', 'ybeahan@example.net', '2026-03-29 07:25:17', '$2y$12$bgxyKXyjdZ35z0KppqnQkON2bglFAClUv.u20wnixpLeDqFVqpdqq', 'player', NULL, NULL, NULL, NULL, NULL, '1nZsrMKV1E', '2026-03-29 07:25:17', '2026-03-29 07:25:17', NULL, NULL, 2666),
(7, 'Olaf O\'Keefe', 'shawna.cummerata@example.net', '2026-03-29 07:25:17', '$2y$12$bgxyKXyjdZ35z0KppqnQkON2bglFAClUv.u20wnixpLeDqFVqpdqq', 'player', NULL, NULL, NULL, NULL, NULL, 'RBRF3OyUZd', '2026-03-29 07:25:17', '2026-03-29 07:25:17', NULL, NULL, 4973),
(8, 'Dr. Yolanda Wisoky DVM', 'wcummerata@example.com', '2026-03-29 07:25:17', '$2y$12$bgxyKXyjdZ35z0KppqnQkON2bglFAClUv.u20wnixpLeDqFVqpdqq', 'player', NULL, NULL, NULL, NULL, NULL, '6EQ5Uoc2hG', '2026-03-29 07:25:17', '2026-03-29 07:25:17', NULL, NULL, 745),
(9, 'Prof. Dominic Fahey Jr.', 'reece.hackett@example.net', '2026-03-29 07:25:17', '$2y$12$bgxyKXyjdZ35z0KppqnQkON2bglFAClUv.u20wnixpLeDqFVqpdqq', 'player', NULL, NULL, NULL, NULL, NULL, 'cMlxs31225', '2026-03-29 07:25:17', '2026-03-29 07:25:17', NULL, NULL, 1722),
(10, 'Carroll Hermiston', 'sberge@example.org', '2026-03-29 07:25:17', '$2y$12$bgxyKXyjdZ35z0KppqnQkON2bglFAClUv.u20wnixpLeDqFVqpdqq', 'player', NULL, NULL, NULL, NULL, NULL, 'h6fWaQU7ee', '2026-03-29 07:25:17', '2026-03-29 07:25:17', NULL, NULL, 864),
(11, 'Mrs. Maud Koepp', 'schimmel.ford@example.com', '2026-03-29 07:25:17', '$2y$12$bgxyKXyjdZ35z0KppqnQkON2bglFAClUv.u20wnixpLeDqFVqpdqq', 'player', NULL, NULL, NULL, NULL, NULL, '3sWBHXUX9a', '2026-03-29 07:25:17', '2026-03-29 07:25:17', NULL, NULL, 2274),
(12, 'Mr. Quinton Grant Jr.', 'meredith.ortiz@example.org', '2026-03-29 07:25:17', '$2y$12$bgxyKXyjdZ35z0KppqnQkON2bglFAClUv.u20wnixpLeDqFVqpdqq', 'player', NULL, NULL, NULL, NULL, NULL, 'DeTq2qkZcm', '2026-03-29 07:25:17', '2026-03-29 07:25:17', NULL, NULL, 3189),
(13, 'Quinn Gottlieb', 'idell83@example.net', '2026-03-29 07:25:17', '$2y$12$bgxyKXyjdZ35z0KppqnQkON2bglFAClUv.u20wnixpLeDqFVqpdqq', 'player', NULL, NULL, NULL, NULL, NULL, 'hdWzZkM38e', '2026-03-29 07:25:17', '2026-03-29 07:25:17', NULL, NULL, 3642),
(14, 'Claud Larson', 'hobart.okon@example.net', '2026-03-29 07:25:17', '$2y$12$bgxyKXyjdZ35z0KppqnQkON2bglFAClUv.u20wnixpLeDqFVqpdqq', 'player', NULL, NULL, NULL, NULL, NULL, 'VkX8EW67OZ', '2026-03-29 07:25:17', '2026-03-29 07:25:17', NULL, NULL, 3471),
(15, 'Mrs. Maurine Rice', 'gianni.ferry@example.org', '2026-03-29 07:25:17', '$2y$12$bgxyKXyjdZ35z0KppqnQkON2bglFAClUv.u20wnixpLeDqFVqpdqq', 'player', NULL, NULL, NULL, NULL, NULL, 'wCAFhjEMzloOf1yApk4tBQZlZarnz5AeBZ0E59ciTwDLJjk6Ad9uKMg224vj', '2026-03-29 07:25:17', '2026-03-29 08:12:36', NULL, NULL, 1110),
(16, 'Orie Kreiger', 'jefferey38@example.com', '2026-03-29 07:25:31', '$2y$12$MDZ7INGHDYSiOX3afyfsqOMLuYuRMBxvbdbnS7f57O8B/vZWJVQnq', 'player', NULL, NULL, NULL, NULL, NULL, 'hMxyCtJA6j', '2026-03-29 07:25:31', '2026-03-29 07:25:31', NULL, NULL, 4772),
(17, 'Mr. Xzavier Harvey V', 'shane.zemlak@example.com', '2026-03-29 07:25:31', '$2y$12$MDZ7INGHDYSiOX3afyfsqOMLuYuRMBxvbdbnS7f57O8B/vZWJVQnq', 'player', NULL, NULL, NULL, NULL, NULL, 'vYNdSeY0Lr', '2026-03-29 07:25:31', '2026-03-29 07:25:31', NULL, NULL, 1401),
(18, 'Prof. Adriel Crooks Sr.', 'avis.bernier@example.org', '2026-03-29 07:25:31', '$2y$12$MDZ7INGHDYSiOX3afyfsqOMLuYuRMBxvbdbnS7f57O8B/vZWJVQnq', 'player', NULL, NULL, NULL, NULL, NULL, 'DwibSleoty', '2026-03-29 07:25:31', '2026-03-29 07:25:31', NULL, NULL, 965),
(19, 'Prof. Conor Gusikowski', 'wanderson@example.org', '2026-03-29 07:25:31', '$2y$12$MDZ7INGHDYSiOX3afyfsqOMLuYuRMBxvbdbnS7f57O8B/vZWJVQnq', 'player', NULL, NULL, NULL, NULL, NULL, 'iFQH0jyQv9', '2026-03-29 07:25:31', '2026-03-29 07:25:31', NULL, NULL, 4240),
(20, 'Mr. John Marvin', 'pouros.erica@example.org', '2026-03-29 07:25:31', '$2y$12$MDZ7INGHDYSiOX3afyfsqOMLuYuRMBxvbdbnS7f57O8B/vZWJVQnq', 'player', NULL, NULL, NULL, NULL, NULL, 'K5cqUur5K7', '2026-03-29 07:25:31', '2026-03-29 07:25:31', NULL, NULL, 605),
(21, 'Ari Lakin', 'xlynch@example.com', '2026-03-29 07:25:31', '$2y$12$MDZ7INGHDYSiOX3afyfsqOMLuYuRMBxvbdbnS7f57O8B/vZWJVQnq', 'player', NULL, NULL, NULL, NULL, NULL, 'JfZ8vxja2D', '2026-03-29 07:25:31', '2026-03-29 07:25:31', NULL, NULL, 3444),
(22, 'Mrs. Gretchen McLaughlin', 'eflatley@example.net', '2026-03-29 07:25:31', '$2y$12$MDZ7INGHDYSiOX3afyfsqOMLuYuRMBxvbdbnS7f57O8B/vZWJVQnq', 'player', NULL, NULL, NULL, NULL, NULL, '1TrY50UrZU', '2026-03-29 07:25:31', '2026-03-29 07:25:31', NULL, NULL, 1690),
(23, 'Michele Swift', 'mhaley@example.org', '2026-03-29 07:25:31', '$2y$12$MDZ7INGHDYSiOX3afyfsqOMLuYuRMBxvbdbnS7f57O8B/vZWJVQnq', 'player', NULL, NULL, NULL, NULL, NULL, 'IbqMxmQIh4', '2026-03-29 07:25:31', '2026-03-29 07:25:31', NULL, NULL, 4257),
(24, 'Arlo Donnelly', 'schulist.cassandra@example.org', '2026-03-29 07:25:31', '$2y$12$MDZ7INGHDYSiOX3afyfsqOMLuYuRMBxvbdbnS7f57O8B/vZWJVQnq', 'player', NULL, NULL, NULL, NULL, NULL, '2rouu1Ku9E', '2026-03-29 07:25:31', '2026-03-29 07:25:31', NULL, NULL, 103),
(25, 'Ms. Yolanda Johns', 'dulce.schumm@example.org', '2026-03-29 07:25:31', '$2y$12$MDZ7INGHDYSiOX3afyfsqOMLuYuRMBxvbdbnS7f57O8B/vZWJVQnq', 'player', NULL, NULL, NULL, NULL, NULL, 'nl4YjYrt4h', '2026-03-29 07:25:31', '2026-03-29 07:25:31', NULL, NULL, 352),
(26, 'Ms. Leola Lakin', 'virginia.wiegand@example.org', '2026-03-29 08:15:33', '$2y$12$9sYsUSvKivsSxffolqRnSeq1VhXdDHnJ3bKY98xrEyKT2qrLEhqcK', 'player', NULL, NULL, NULL, NULL, NULL, 'tqppGkBGGd', '2026-03-29 08:15:33', '2026-03-29 08:15:33', NULL, NULL, 3421),
(27, 'Otha Aufderhar', 'jaquan.ward@example.org', '2026-03-29 08:15:33', '$2y$12$9sYsUSvKivsSxffolqRnSeq1VhXdDHnJ3bKY98xrEyKT2qrLEhqcK', 'player', NULL, NULL, NULL, NULL, NULL, 'TVo3jIvP5X', '2026-03-29 08:15:33', '2026-03-29 08:15:33', NULL, NULL, 493),
(28, 'Mr. Bartholome Armstrong', 'tanya78@example.org', '2026-03-29 08:15:33', '$2y$12$9sYsUSvKivsSxffolqRnSeq1VhXdDHnJ3bKY98xrEyKT2qrLEhqcK', 'player', NULL, NULL, NULL, NULL, NULL, '3vRSUBCH2x', '2026-03-29 08:15:33', '2026-03-29 08:15:33', NULL, NULL, 2312),
(29, 'Taylor Roob V', 'qbode@example.org', '2026-03-29 08:15:33', '$2y$12$9sYsUSvKivsSxffolqRnSeq1VhXdDHnJ3bKY98xrEyKT2qrLEhqcK', 'player', NULL, NULL, NULL, NULL, NULL, 'cn79Lq7hQ9', '2026-03-29 08:15:33', '2026-03-29 08:15:33', NULL, NULL, 1700),
(30, 'Dr. Maeve Thiel', 'ondricka.jenifer@example.org', '2026-03-29 08:15:33', '$2y$12$9sYsUSvKivsSxffolqRnSeq1VhXdDHnJ3bKY98xrEyKT2qrLEhqcK', 'player', NULL, NULL, NULL, NULL, NULL, '5YfTd1gnVV', '2026-03-29 08:15:33', '2026-03-29 08:15:33', NULL, NULL, 781),
(31, 'Burley Abshire V', 'tatyana57@example.org', '2026-03-29 08:15:33', '$2y$12$9sYsUSvKivsSxffolqRnSeq1VhXdDHnJ3bKY98xrEyKT2qrLEhqcK', 'player', NULL, NULL, NULL, NULL, NULL, 'pxlHOdwjfq', '2026-03-29 08:15:33', '2026-03-29 08:15:33', NULL, NULL, 24),
(32, 'Jerad Ratke MD', 'hermiston.willa@example.com', '2026-03-29 08:15:33', '$2y$12$9sYsUSvKivsSxffolqRnSeq1VhXdDHnJ3bKY98xrEyKT2qrLEhqcK', 'player', NULL, NULL, NULL, NULL, NULL, 'tw8xdLr9OZ', '2026-03-29 08:15:33', '2026-03-29 08:15:33', NULL, NULL, 766),
(33, 'Geraldine Dicki Sr.', 'jamie55@example.com', '2026-03-29 08:15:33', '$2y$12$9sYsUSvKivsSxffolqRnSeq1VhXdDHnJ3bKY98xrEyKT2qrLEhqcK', 'player', NULL, NULL, NULL, NULL, NULL, 'RwRh0M0UA6', '2026-03-29 08:15:33', '2026-03-29 08:15:33', NULL, NULL, 4952),
(34, 'Lorenzo Ankunding', 'jade61@example.org', '2026-03-29 08:15:33', '$2y$12$9sYsUSvKivsSxffolqRnSeq1VhXdDHnJ3bKY98xrEyKT2qrLEhqcK', 'player', NULL, NULL, NULL, NULL, NULL, '54KuxIR9pS', '2026-03-29 08:15:33', '2026-03-29 08:15:33', NULL, NULL, 2981),
(35, 'Tom Hermiston', 'alba02@example.com', '2026-03-29 08:15:33', '$2y$12$9sYsUSvKivsSxffolqRnSeq1VhXdDHnJ3bKY98xrEyKT2qrLEhqcK', 'player', NULL, NULL, NULL, NULL, NULL, 'EPcwWa9XdS', '2026-03-29 08:15:33', '2026-03-29 08:15:33', NULL, NULL, 404),
(36, 'Arnaldo Rosenbaum', 'irath@example.net', '2026-03-29 08:29:35', '$2y$12$pQAhNs0pi9tydxAqD3g2EeWR65Nd5kldMMkHB2b3F//KuefD5cwBC', 'player', NULL, NULL, NULL, NULL, NULL, 'l4SFlOurqjCxQUOKYmbkDfmqrB6Uj7LhWrdNgmejY0J6Me7t9qcN6gomGT7V', '2026-03-29 08:29:35', '2026-04-05 00:13:39', NULL, NULL, 2744),
(37, 'Kellie Breitenberg', 'slabadie@example.org', '2026-03-29 08:29:35', '$2y$12$pQAhNs0pi9tydxAqD3g2EeWR65Nd5kldMMkHB2b3F//KuefD5cwBC', 'player', NULL, NULL, NULL, NULL, NULL, '2tbqjsDdB8', '2026-03-29 08:29:35', '2026-03-29 08:29:35', NULL, NULL, 1968),
(38, 'Clay Flatley', 'schamberger.murl@example.org', '2026-03-29 08:29:35', '$2y$12$pQAhNs0pi9tydxAqD3g2EeWR65Nd5kldMMkHB2b3F//KuefD5cwBC', 'player', NULL, NULL, NULL, NULL, NULL, 'kskS9aOIxR', '2026-03-29 08:29:35', '2026-03-29 08:29:35', NULL, NULL, 4295),
(39, 'Charlie Jast I', 'tohara@example.com', '2026-03-29 08:29:35', '$2y$12$pQAhNs0pi9tydxAqD3g2EeWR65Nd5kldMMkHB2b3F//KuefD5cwBC', 'player', NULL, NULL, NULL, NULL, NULL, 'lMrHin1HZp', '2026-03-29 08:29:35', '2026-03-29 08:29:35', NULL, NULL, 3496),
(40, 'Nicolas Fritsch', 'qankunding@example.com', '2026-03-29 08:29:35', '$2y$12$pQAhNs0pi9tydxAqD3g2EeWR65Nd5kldMMkHB2b3F//KuefD5cwBC', 'player', NULL, NULL, NULL, NULL, NULL, 'u07mACcUvn', '2026-03-29 08:29:35', '2026-03-29 08:29:35', NULL, NULL, 77),
(41, 'Deon Zemlak PhD', 'monty34@example.com', '2026-03-29 08:29:35', '$2y$12$pQAhNs0pi9tydxAqD3g2EeWR65Nd5kldMMkHB2b3F//KuefD5cwBC', 'player', NULL, NULL, NULL, NULL, NULL, 'D55w57CTzr', '2026-03-29 08:29:35', '2026-03-29 08:29:35', NULL, NULL, 1492),
(42, 'Kyler Keebler', 'andre21@example.net', '2026-03-29 08:29:35', '$2y$12$pQAhNs0pi9tydxAqD3g2EeWR65Nd5kldMMkHB2b3F//KuefD5cwBC', 'player', NULL, NULL, NULL, NULL, NULL, 'y5Y8eNi7Qe', '2026-03-29 08:29:35', '2026-03-29 08:29:35', NULL, NULL, 1389),
(43, 'Dr. Julio Greenfelder IV', 'astracke@example.net', '2026-03-29 08:29:35', '$2y$12$pQAhNs0pi9tydxAqD3g2EeWR65Nd5kldMMkHB2b3F//KuefD5cwBC', 'player', NULL, NULL, NULL, NULL, NULL, 'tXtqk4uwfK', '2026-03-29 08:29:35', '2026-03-29 08:29:35', NULL, NULL, 1628),
(45, 'Laney Okuneva DVM', 'goldner.adolphus@example.com', '2026-03-29 08:29:35', '$2y$12$pQAhNs0pi9tydxAqD3g2EeWR65Nd5kldMMkHB2b3F//KuefD5cwBC', 'player', NULL, NULL, NULL, NULL, NULL, '6IZSm9WXOu', '2026-03-29 08:29:35', '2026-03-29 08:29:35', NULL, NULL, 3817),
(47, 'veer', 'veershah@gmail.com', NULL, '$2y$12$kk2g9CoqSfZ6FwYJJ2nJ4uU/p6WcrclugjWr54Jor6BVoWRYXWsMm', 'player', NULL, NULL, NULL, NULL, NULL, NULL, '2026-04-03 22:22:32', '2026-04-03 22:23:33', '419266', '2026-04-03 22:33:33', 0),
(50, 'Ankur sir', 'ankur.dey@ljku.edu.in', '2026-04-17 23:31:03', '$2y$12$Dq8.S/cWYRQDa6qYyb0A8uk5WYBIQJyz9RCbHecEjO7DGc/G96rLu', 'player', NULL, NULL, NULL, NULL, NULL, NULL, '2026-04-17 23:30:27', '2026-04-17 23:31:37', NULL, NULL, 962),
(52, 'Dr. Francesco Wilkinson MD', 'marguerite57@example.net', NULL, '$2y$12$LMGDjw1FSoaded2YYfgqHOBhdnvOP59/CUSUDUTEI/Mlu1HjZPa4q', 'player', NULL, NULL, NULL, NULL, NULL, NULL, '2026-04-24 20:50:31', '2026-04-24 20:50:31', NULL, NULL, 0),
(53, 'veer', 'veer@gmail.com', NULL, '$2y$12$t0oIpPUkwY1FK1a1CFFQweGly5r5mpTj89z3jRDl60d7jEh25tT8O', 'player', NULL, NULL, NULL, NULL, NULL, NULL, '2026-04-24 20:50:32', '2026-04-24 20:50:32', NULL, NULL, 0),
(54, 'Dhvanit', 'dhvanitcshah172006@gmail.com', '2026-04-25 13:30:52', '$2y$12$Q7dxHGX.aA1Yb3WkhgcDBe5lQrtlHvrKcqRxivMm9YICT.1XLoJBe', 'developer', NULL, NULL, NULL, NULL, NULL, '42gDklfCByU0Y8jrJtC9R4LaWn0FnbQXOLvJC0cqjdThgXCejLhwq85ubIm3', '2026-04-25 02:04:50', '2026-04-25 13:30:52', NULL, NULL, 0),
(55, 'Veer', 'sdwtveer@gmail.com', NULL, '$2y$12$LiX5kYzBPRu8Nbeg5ogKlezTSSQvFiO/aoavuSpSsgMx3zixW2him', 'developer', NULL, NULL, NULL, NULL, NULL, NULL, '2026-04-25 02:04:50', '2026-04-25 02:04:50', NULL, NULL, 0),
(56, 'prahar', 'dhvanitshah062@gmail.com', '2026-04-26 00:58:14', '$2y$12$A4b5RIXLmCSJZTidwQRUC.J2ELjwam923LTU4jc/QRvDX/Ko7EM.G', 'developer', 'prahar', 'fvskjvnfdklvnf', NULL, '9998322429', 'approved', NULL, '2026-04-26 00:57:42', '2026-04-26 01:18:18', NULL, NULL, 0);

-- --------------------------------------------------------

--
-- Table structure for table `user_achievements`
--

CREATE TABLE `user_achievements` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `achievement_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `user_achievements`
--

INSERT INTO `user_achievements` (`id`, `user_id`, `achievement_id`, `created_at`, `updated_at`) VALUES
(1, 16, 5, '2026-03-29 07:25:31', '2026-03-29 07:25:31'),
(2, 17, 1, '2026-03-29 07:25:31', '2026-03-29 07:25:31'),
(3, 17, 8, '2026-03-29 07:25:31', '2026-03-29 07:25:31'),
(4, 18, 8, '2026-03-29 07:25:31', '2026-03-29 07:25:31'),
(5, 18, 10, '2026-03-29 07:25:31', '2026-03-29 07:25:31'),
(6, 19, 6, '2026-03-29 07:25:31', '2026-03-29 07:25:31'),
(7, 19, 9, '2026-03-29 07:25:31', '2026-03-29 07:25:31'),
(8, 20, 4, '2026-03-29 07:25:31', '2026-03-29 07:25:31'),
(9, 21, 5, '2026-03-29 07:25:31', '2026-03-29 07:25:31'),
(10, 22, 2, '2026-03-29 07:25:31', '2026-03-29 07:25:31'),
(11, 22, 4, '2026-03-29 07:25:31', '2026-03-29 07:25:31'),
(12, 23, 5, '2026-03-29 07:25:31', '2026-03-29 07:25:31'),
(13, 24, 5, '2026-03-29 07:25:31', '2026-03-29 07:25:31'),
(14, 24, 6, '2026-03-29 07:25:31', '2026-03-29 07:25:31'),
(15, 25, 3, '2026-03-29 07:25:31', '2026-03-29 07:25:31'),
(16, 25, 8, '2026-03-29 07:25:31', '2026-03-29 07:25:31'),
(17, 2, 12, '2026-03-29 08:15:33', '2026-03-29 08:15:33'),
(18, 2, 13, '2026-03-29 08:15:33', '2026-03-29 08:15:33'),
(19, 2, 14, '2026-03-29 08:15:33', '2026-03-29 08:15:33'),
(20, 2, 17, '2026-03-29 08:15:33', '2026-03-29 08:15:33'),
(21, 2, 19, '2026-03-29 08:15:33', '2026-03-29 08:15:33'),
(26, 6, 15, '2026-03-29 08:15:33', '2026-03-29 08:15:33'),
(27, 6, 18, '2026-03-29 08:15:33', '2026-03-29 08:15:33'),
(28, 6, 20, '2026-03-29 08:15:33', '2026-03-29 08:15:33'),
(29, 7, 12, '2026-03-29 08:15:33', '2026-03-29 08:15:33'),
(30, 7, 14, '2026-03-29 08:15:33', '2026-03-29 08:15:33'),
(31, 7, 15, '2026-03-29 08:15:33', '2026-03-29 08:15:33'),
(32, 7, 17, '2026-03-29 08:15:33', '2026-03-29 08:15:33'),
(33, 8, 14, '2026-03-29 08:15:33', '2026-03-29 08:15:33'),
(34, 8, 15, '2026-03-29 08:15:33', '2026-03-29 08:15:33'),
(35, 8, 16, '2026-03-29 08:15:33', '2026-03-29 08:15:33'),
(36, 8, 18, '2026-03-29 08:15:33', '2026-03-29 08:15:33'),
(37, 8, 20, '2026-03-29 08:15:33', '2026-03-29 08:15:33'),
(38, 9, 13, '2026-03-29 08:15:33', '2026-03-29 08:15:33'),
(39, 9, 15, '2026-03-29 08:15:33', '2026-03-29 08:15:33'),
(40, 9, 16, '2026-03-29 08:15:33', '2026-03-29 08:15:33'),
(41, 9, 20, '2026-03-29 08:15:33', '2026-03-29 08:15:33'),
(42, 10, 13, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(43, 10, 14, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(44, 10, 15, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(45, 10, 16, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(46, 10, 19, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(47, 11, 14, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(48, 11, 18, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(49, 11, 20, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(50, 12, 16, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(51, 12, 17, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(52, 12, 18, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(53, 12, 19, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(54, 12, 20, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(55, 13, 11, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(56, 13, 12, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(57, 13, 14, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(58, 13, 16, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(59, 13, 19, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(60, 14, 13, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(61, 14, 16, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(62, 14, 20, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(63, 15, 13, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(64, 15, 15, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(65, 15, 20, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(66, 16, 11, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(67, 16, 13, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(68, 16, 20, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(69, 17, 12, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(70, 17, 13, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(71, 17, 19, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(72, 18, 12, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(73, 18, 13, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(74, 18, 16, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(75, 19, 13, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(76, 19, 17, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(77, 19, 18, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(78, 19, 19, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(79, 19, 20, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(80, 20, 12, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(81, 20, 13, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(82, 20, 19, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(83, 21, 12, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(84, 21, 14, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(85, 21, 16, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(86, 21, 20, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(87, 22, 11, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(88, 22, 13, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(89, 22, 16, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(90, 22, 20, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(91, 23, 11, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(92, 23, 12, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(93, 23, 13, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(94, 23, 17, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(95, 23, 20, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(96, 24, 14, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(97, 24, 16, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(98, 24, 18, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(99, 24, 19, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(100, 24, 20, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(101, 25, 11, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(102, 25, 13, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(103, 25, 17, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(104, 25, 18, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(105, 25, 20, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(106, 26, 12, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(107, 26, 14, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(108, 26, 18, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(109, 26, 20, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(110, 27, 17, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(111, 27, 18, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(112, 27, 19, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(113, 27, 20, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(114, 28, 12, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(115, 28, 13, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(116, 28, 16, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(117, 28, 17, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(118, 28, 19, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(119, 29, 11, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(120, 29, 16, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(121, 29, 20, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(122, 30, 13, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(123, 30, 14, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(124, 30, 15, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(125, 30, 16, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(126, 30, 19, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(127, 31, 11, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(128, 31, 12, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(129, 31, 15, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(130, 31, 18, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(131, 32, 12, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(132, 32, 13, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(133, 32, 19, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(134, 32, 20, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(135, 33, 14, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(136, 33, 15, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(137, 33, 16, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(138, 33, 18, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(139, 33, 20, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(140, 34, 11, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(141, 34, 13, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(142, 34, 16, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(143, 34, 17, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(144, 34, 20, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(145, 35, 11, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(146, 35, 16, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(147, 35, 18, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(148, 35, 19, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(149, 2, 21, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(150, 2, 23, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(151, 2, 27, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(152, 2, 28, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(153, 2, 30, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(158, 6, 24, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(159, 6, 25, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(160, 6, 26, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(161, 7, 21, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(162, 7, 24, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(163, 7, 26, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(164, 7, 27, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(165, 7, 29, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(166, 8, 23, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(167, 8, 24, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(168, 8, 29, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(169, 8, 30, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(170, 9, 22, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(171, 9, 25, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(172, 9, 27, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(173, 9, 28, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(174, 9, 30, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(175, 10, 21, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(176, 10, 23, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(177, 10, 29, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(178, 10, 30, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(179, 11, 21, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(180, 11, 22, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(181, 11, 25, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(182, 11, 26, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(183, 11, 27, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(184, 12, 21, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(185, 12, 23, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(186, 12, 24, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(187, 12, 26, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(188, 12, 30, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(189, 13, 23, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(190, 13, 24, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(191, 13, 26, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(192, 13, 29, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(193, 13, 30, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(194, 14, 26, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(195, 14, 28, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(196, 14, 30, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(197, 15, 28, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(198, 15, 29, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(199, 15, 30, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(200, 16, 21, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(201, 16, 23, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(202, 16, 24, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(203, 17, 26, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(204, 17, 27, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(205, 17, 29, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(206, 18, 23, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(207, 18, 24, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(208, 18, 25, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(209, 18, 27, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(210, 18, 28, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(211, 19, 21, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(212, 19, 24, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(213, 19, 26, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(214, 19, 30, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(215, 20, 22, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(216, 20, 23, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(217, 20, 25, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(218, 20, 29, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(219, 20, 30, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(220, 21, 23, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(221, 21, 24, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(222, 21, 28, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(223, 22, 21, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(224, 22, 22, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(225, 22, 23, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(226, 22, 28, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(227, 23, 22, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(228, 23, 23, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(229, 23, 28, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(230, 24, 24, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(231, 24, 27, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(232, 24, 28, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(233, 25, 22, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(234, 25, 23, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(235, 25, 24, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(236, 25, 25, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(237, 25, 28, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(238, 26, 22, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(239, 26, 23, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(240, 26, 26, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(241, 26, 29, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(242, 27, 25, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(243, 27, 28, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(244, 27, 29, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(245, 27, 30, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(246, 28, 21, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(247, 28, 22, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(248, 28, 25, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(249, 28, 26, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(250, 29, 21, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(251, 29, 22, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(252, 29, 23, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(253, 29, 30, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(254, 30, 21, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(255, 30, 22, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(256, 30, 29, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(257, 31, 22, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(258, 31, 24, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(259, 31, 26, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(260, 31, 27, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(261, 32, 24, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(262, 32, 25, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(263, 32, 27, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(264, 32, 28, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(265, 33, 22, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(266, 33, 25, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(267, 33, 27, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(268, 33, 28, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(269, 33, 30, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(270, 34, 22, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(271, 34, 25, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(272, 34, 27, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(273, 34, 30, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(274, 35, 21, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(275, 35, 22, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(276, 35, 25, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(277, 35, 30, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(278, 36, 22, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(279, 36, 26, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(280, 36, 30, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(281, 37, 24, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(282, 37, 26, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(283, 37, 27, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(284, 37, 29, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(285, 38, 22, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(286, 38, 23, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(287, 38, 27, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(288, 39, 24, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(289, 39, 27, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(290, 39, 28, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(291, 40, 23, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(292, 40, 24, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(293, 40, 27, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(294, 40, 28, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(295, 41, 21, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(296, 41, 22, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(297, 41, 26, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(298, 41, 29, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(299, 41, 30, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(300, 42, 21, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(301, 42, 25, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(302, 42, 27, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(303, 42, 28, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(304, 43, 22, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(305, 43, 25, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(306, 43, 26, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(307, 43, 28, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(311, 45, 23, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(312, 45, 24, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(313, 45, 25, '2026-03-29 08:29:37', '2026-03-29 08:29:37');

-- --------------------------------------------------------

--
-- Table structure for table `user_rewards`
--

CREATE TABLE `user_rewards` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `reward_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `user_rewards`
--

INSERT INTO `user_rewards` (`id`, `user_id`, `reward_id`, `created_at`, `updated_at`) VALUES
(1, 16, 4, '2026-03-29 07:25:31', '2026-03-29 07:25:31'),
(2, 17, 2, '2026-03-29 07:25:31', '2026-03-29 07:25:31'),
(3, 17, 5, '2026-03-29 07:25:31', '2026-03-29 07:25:31'),
(4, 18, 7, '2026-03-29 07:25:31', '2026-03-29 07:25:31'),
(5, 18, 10, '2026-03-29 07:25:31', '2026-03-29 07:25:31'),
(6, 19, 1, '2026-03-29 07:25:31', '2026-03-29 07:25:31'),
(7, 19, 2, '2026-03-29 07:25:31', '2026-03-29 07:25:31'),
(8, 20, 6, '2026-03-29 07:25:31', '2026-03-29 07:25:31'),
(9, 21, 7, '2026-03-29 07:25:31', '2026-03-29 07:25:31'),
(10, 22, 3, '2026-03-29 07:25:31', '2026-03-29 07:25:31'),
(11, 23, 9, '2026-03-29 07:25:31', '2026-03-29 07:25:31'),
(12, 24, 2, '2026-03-29 07:25:31', '2026-03-29 07:25:31'),
(13, 24, 5, '2026-03-29 07:25:31', '2026-03-29 07:25:31'),
(14, 25, 2, '2026-03-29 07:25:31', '2026-03-29 07:25:31'),
(15, 15, 1, '2026-03-29 08:12:36', '2026-03-29 08:12:36'),
(16, 2, 17, '2026-03-29 08:15:33', '2026-03-29 08:15:33'),
(17, 2, 19, '2026-03-29 08:15:33', '2026-03-29 08:15:33'),
(20, 6, 12, '2026-03-29 08:15:33', '2026-03-29 08:15:33'),
(21, 6, 16, '2026-03-29 08:15:33', '2026-03-29 08:15:33'),
(22, 6, 18, '2026-03-29 08:15:33', '2026-03-29 08:15:33'),
(23, 6, 19, '2026-03-29 08:15:33', '2026-03-29 08:15:33'),
(24, 7, 12, '2026-03-29 08:15:33', '2026-03-29 08:15:33'),
(25, 7, 14, '2026-03-29 08:15:33', '2026-03-29 08:15:33'),
(26, 8, 12, '2026-03-29 08:15:33', '2026-03-29 08:15:33'),
(27, 8, 13, '2026-03-29 08:15:33', '2026-03-29 08:15:33'),
(28, 8, 16, '2026-03-29 08:15:33', '2026-03-29 08:15:33'),
(29, 8, 17, '2026-03-29 08:15:33', '2026-03-29 08:15:33'),
(30, 9, 16, '2026-03-29 08:15:33', '2026-03-29 08:15:33'),
(31, 9, 17, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(32, 9, 18, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(33, 9, 20, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(34, 10, 13, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(35, 10, 15, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(36, 10, 16, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(37, 10, 20, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(38, 11, 17, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(39, 11, 18, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(40, 11, 20, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(41, 12, 12, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(42, 12, 17, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(43, 12, 18, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(44, 12, 19, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(45, 13, 13, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(46, 13, 14, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(47, 13, 19, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(48, 13, 20, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(49, 14, 14, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(50, 14, 17, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(51, 14, 20, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(52, 15, 13, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(53, 15, 18, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(54, 16, 17, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(55, 16, 18, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(56, 16, 20, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(57, 17, 16, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(58, 17, 18, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(59, 18, 14, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(60, 18, 16, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(61, 19, 17, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(62, 19, 18, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(63, 19, 20, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(64, 20, 13, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(65, 20, 14, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(66, 20, 16, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(67, 21, 16, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(68, 21, 17, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(69, 21, 18, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(70, 21, 20, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(71, 22, 11, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(72, 22, 14, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(73, 22, 15, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(74, 23, 11, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(75, 23, 12, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(76, 23, 17, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(77, 23, 18, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(78, 24, 13, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(79, 24, 18, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(80, 24, 19, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(81, 25, 13, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(82, 25, 14, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(83, 25, 19, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(84, 26, 13, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(85, 26, 14, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(86, 26, 17, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(87, 26, 20, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(88, 27, 16, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(89, 27, 20, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(90, 28, 12, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(91, 28, 15, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(92, 28, 16, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(93, 28, 17, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(94, 29, 11, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(95, 29, 12, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(96, 29, 16, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(97, 29, 19, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(98, 30, 11, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(99, 30, 15, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(100, 30, 16, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(101, 30, 17, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(102, 31, 13, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(103, 31, 17, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(104, 31, 19, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(105, 31, 20, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(106, 32, 11, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(107, 32, 16, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(108, 32, 18, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(109, 32, 20, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(110, 33, 13, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(111, 33, 17, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(112, 33, 18, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(113, 34, 15, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(114, 34, 18, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(115, 35, 13, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(116, 35, 16, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(117, 35, 17, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(118, 35, 19, '2026-03-29 08:15:34', '2026-03-29 08:15:34'),
(119, 2, 23, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(120, 2, 24, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(121, 2, 25, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(122, 2, 29, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(126, 6, 25, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(127, 6, 27, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(128, 6, 29, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(129, 7, 23, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(130, 7, 25, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(131, 7, 29, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(132, 8, 21, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(133, 8, 27, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(134, 8, 29, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(135, 9, 26, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(136, 9, 27, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(137, 10, 21, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(138, 10, 23, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(139, 10, 24, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(140, 10, 25, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(141, 11, 21, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(142, 11, 22, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(143, 11, 29, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(144, 12, 23, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(145, 12, 24, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(146, 12, 25, '2026-03-29 08:29:36', '2026-03-29 08:29:36'),
(147, 12, 29, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(148, 13, 25, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(149, 13, 27, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(150, 14, 21, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(151, 14, 24, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(152, 14, 26, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(153, 14, 29, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(154, 15, 21, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(155, 15, 25, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(156, 15, 26, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(157, 15, 29, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(158, 16, 24, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(159, 16, 25, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(160, 16, 26, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(161, 16, 29, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(162, 17, 21, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(163, 17, 26, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(164, 18, 21, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(165, 18, 22, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(166, 18, 29, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(167, 19, 24, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(168, 19, 26, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(169, 19, 30, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(170, 20, 22, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(171, 20, 23, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(172, 20, 27, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(173, 20, 29, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(174, 21, 21, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(175, 21, 22, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(176, 21, 24, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(177, 21, 28, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(178, 22, 22, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(179, 22, 24, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(180, 22, 27, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(181, 23, 22, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(182, 23, 28, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(183, 24, 25, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(184, 24, 28, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(185, 25, 27, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(186, 25, 30, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(187, 26, 21, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(188, 26, 25, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(189, 27, 22, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(190, 27, 27, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(191, 27, 29, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(192, 28, 21, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(193, 28, 24, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(194, 29, 26, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(195, 29, 27, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(196, 30, 28, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(197, 30, 29, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(198, 31, 22, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(199, 31, 29, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(200, 32, 26, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(201, 32, 27, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(202, 33, 22, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(203, 33, 25, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(204, 33, 26, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(205, 33, 29, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(206, 34, 21, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(207, 34, 29, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(208, 35, 22, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(209, 35, 29, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(210, 36, 21, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(211, 36, 22, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(212, 36, 24, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(213, 36, 29, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(214, 37, 25, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(215, 37, 26, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(216, 37, 27, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(217, 37, 29, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(218, 38, 22, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(219, 38, 25, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(220, 38, 26, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(221, 38, 27, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(222, 39, 21, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(223, 39, 22, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(224, 40, 22, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(225, 40, 27, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(226, 41, 24, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(227, 41, 27, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(228, 42, 23, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(229, 42, 26, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(230, 42, 28, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(231, 42, 30, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(232, 43, 26, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(233, 43, 29, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(238, 45, 25, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(239, 45, 27, '2026-03-29 08:29:37', '2026-03-29 08:29:37'),
(240, 36, 1, '2026-04-03 22:30:53', '2026-04-03 22:30:53'),
(241, 36, 2, '2026-04-03 22:31:04', '2026-04-03 22:31:04'),
(242, 36, 4, '2026-04-03 22:31:21', '2026-04-03 22:31:21'),
(243, 36, 7, '2026-04-03 22:31:50', '2026-04-03 22:31:50'),
(244, 36, 3, '2026-04-05 00:13:39', '2026-04-05 00:13:39'),
(245, 50, 1, '2026-04-17 23:31:37', '2026-04-17 23:31:37');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `achievements`
--
ALTER TABLE `achievements`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `blogs`
--
ALTER TABLE `blogs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `blogs_slug_unique` (`slug`);

--
-- Indexes for table `cache`
--
ALTER TABLE `cache`
  ADD PRIMARY KEY (`key`);

--
-- Indexes for table `cache_locks`
--
ALTER TABLE `cache_locks`
  ADD PRIMARY KEY (`key`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `categories_name_unique` (`name`),
  ADD UNIQUE KEY `categories_slug_unique` (`slug`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `games`
--
ALTER TABLE `games`
  ADD PRIMARY KEY (`id`),
  ADD KEY `games_category_id_foreign` (`category_id`),
  ADD KEY `games_developer_id_foreign` (`developer_id`);

--
-- Indexes for table `game_submissions`
--
ALTER TABLE `game_submissions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `game_submissions_category_id_foreign` (`category_id`),
  ADD KEY `game_submissions_developer_id_foreign` (`developer_id`);

--
-- Indexes for table `jobs`
--
ALTER TABLE `jobs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `jobs_queue_index` (`queue`);

--
-- Indexes for table `job_batches`
--
ALTER TABLE `job_batches`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `reviews`
--
ALTER TABLE `reviews`
  ADD PRIMARY KEY (`id`),
  ADD KEY `reviews_user_id_foreign` (`user_id`),
  ADD KEY `reviews_game_id_foreign` (`game_id`);

--
-- Indexes for table `rewards`
--
ALTER TABLE `rewards`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `scores`
--
ALTER TABLE `scores`
  ADD PRIMARY KEY (`id`),
  ADD KEY `scores_user_id_foreign` (`user_id`),
  ADD KEY `scores_game_id_foreign` (`game_id`);

--
-- Indexes for table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sessions_user_id_index` (`user_id`),
  ADD KEY `sessions_last_activity_index` (`last_activity`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- Indexes for table `user_achievements`
--
ALTER TABLE `user_achievements`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `user_achievements_user_id_achievement_id_unique` (`user_id`,`achievement_id`),
  ADD KEY `user_achievements_achievement_id_foreign` (`achievement_id`);

--
-- Indexes for table `user_rewards`
--
ALTER TABLE `user_rewards`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_rewards_user_id_foreign` (`user_id`),
  ADD KEY `user_rewards_reward_id_foreign` (`reward_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `achievements`
--
ALTER TABLE `achievements`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT for table `blogs`
--
ALTER TABLE `blogs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `games`
--
ALTER TABLE `games`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;

--
-- AUTO_INCREMENT for table `game_submissions`
--
ALTER TABLE `game_submissions`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `jobs`
--
ALTER TABLE `jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `reviews`
--
ALTER TABLE `reviews`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=69;

--
-- AUTO_INCREMENT for table `rewards`
--
ALTER TABLE `rewards`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT for table `scores`
--
ALTER TABLE `scores`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=783;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=57;

--
-- AUTO_INCREMENT for table `user_achievements`
--
ALTER TABLE `user_achievements`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=314;

--
-- AUTO_INCREMENT for table `user_rewards`
--
ALTER TABLE `user_rewards`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=246;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `games`
--
ALTER TABLE `games`
  ADD CONSTRAINT `games_category_id_foreign` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `games_developer_id_foreign` FOREIGN KEY (`developer_id`) REFERENCES `users` (`id`) ON DELETE SET NULL;

--
-- Constraints for table `game_submissions`
--
ALTER TABLE `game_submissions`
  ADD CONSTRAINT `game_submissions_category_id_foreign` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `game_submissions_developer_id_foreign` FOREIGN KEY (`developer_id`) REFERENCES `users` (`id`) ON DELETE SET NULL;

--
-- Constraints for table `reviews`
--
ALTER TABLE `reviews`
  ADD CONSTRAINT `reviews_game_id_foreign` FOREIGN KEY (`game_id`) REFERENCES `games` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `reviews_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `scores`
--
ALTER TABLE `scores`
  ADD CONSTRAINT `scores_game_id_foreign` FOREIGN KEY (`game_id`) REFERENCES `games` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `scores_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `user_achievements`
--
ALTER TABLE `user_achievements`
  ADD CONSTRAINT `user_achievements_achievement_id_foreign` FOREIGN KEY (`achievement_id`) REFERENCES `achievements` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `user_achievements_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `user_rewards`
--
ALTER TABLE `user_rewards`
  ADD CONSTRAINT `user_rewards_reward_id_foreign` FOREIGN KEY (`reward_id`) REFERENCES `rewards` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `user_rewards_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
