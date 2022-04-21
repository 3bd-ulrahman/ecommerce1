-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Apr 19, 2022 at 02:53 AM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.0.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ecommerce1`
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int(10) UNSIGNED NOT NULL,
  `parent_id` int(10) UNSIGNED DEFAULT NULL,
  `order` int(11) NOT NULL DEFAULT 1,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `parent_id`, `order`, `name`, `slug`, `created_at`, `updated_at`) VALUES
(1, NULL, 1, 'Category 1', 'category-1', '2022-03-23 18:36:27', '2022-03-23 18:36:27'),
(2, NULL, 1, 'Category 2', 'category-2', '2022-03-23 18:36:27', '2022-03-23 18:36:27');

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`id`, `name`, `slug`, `created_at`, `updated_at`) VALUES
(1, 'Laptops', 'laptops', '2022-03-23 18:26:00', '2022-03-23 18:26:00'),
(2, 'Desktops', 'desktops', '2022-03-23 18:26:00', '2022-03-23 18:26:00'),
(3, 'Mobile Phones', 'mobile-phones', '2022-03-23 18:26:00', '2022-03-23 18:26:00'),
(4, 'Tablets', 'tablets', '2022-03-23 18:26:00', '2022-03-23 18:26:00'),
(5, 'TVs', 'tvs', '2022-03-23 18:26:00', '2022-03-23 18:26:00'),
(6, 'Digital Cameras', 'digital-cameras', '2022-03-23 18:26:00', '2022-03-23 18:26:00'),
(7, 'Appliances', 'appliances', '2022-03-23 18:26:00', '2022-03-23 18:26:00'),
(8, 'Instrument', 'instrument', '2022-03-26 09:53:55', '2022-03-26 09:53:57');

-- --------------------------------------------------------

--
-- Table structure for table `category_product`
--

CREATE TABLE `category_product` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `product_id` bigint(20) UNSIGNED DEFAULT NULL,
  `category_id` bigint(20) UNSIGNED DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `category_product`
--

INSERT INTO `category_product` (`id`, `product_id`, `category_id`, `created_at`, `updated_at`) VALUES
(435, 1, 1, NULL, NULL),
(436, 2, 1, NULL, NULL),
(437, 3, 1, NULL, NULL),
(438, 4, 1, NULL, NULL),
(439, 5, 1, NULL, NULL),
(440, 6, 1, NULL, NULL),
(441, 7, 1, NULL, NULL),
(442, 8, 1, NULL, NULL),
(443, 9, 1, NULL, NULL),
(444, 10, 1, NULL, NULL),
(445, 11, 1, NULL, NULL),
(446, 12, 1, NULL, NULL),
(447, 13, 1, NULL, NULL),
(448, 14, 1, NULL, NULL),
(449, 15, 1, NULL, NULL),
(450, 16, 1, NULL, NULL),
(451, 17, 1, NULL, NULL),
(452, 18, 1, NULL, NULL),
(453, 19, 1, NULL, NULL),
(454, 20, 1, NULL, NULL),
(455, 21, 1, NULL, NULL),
(456, 22, 1, NULL, NULL),
(457, 23, 1, NULL, NULL),
(458, 24, 1, NULL, NULL),
(459, 25, 1, NULL, NULL),
(460, 26, 1, NULL, NULL),
(461, 27, 1, NULL, NULL),
(462, 28, 1, NULL, NULL),
(463, 29, 1, NULL, NULL),
(464, 30, 1, NULL, NULL),
(465, 1, 2, NULL, NULL),
(466, 31, 2, NULL, NULL),
(467, 32, 2, NULL, NULL),
(468, 33, 2, NULL, NULL),
(469, 34, 2, NULL, NULL),
(470, 35, 2, NULL, NULL),
(471, 36, 2, NULL, NULL),
(472, 37, 2, NULL, NULL),
(473, 38, 2, NULL, NULL),
(474, 39, 2, NULL, NULL),
(475, 40, 3, NULL, NULL),
(476, 41, 3, NULL, NULL),
(477, 42, 3, NULL, NULL),
(478, 43, 3, NULL, NULL),
(479, 44, 3, NULL, NULL),
(480, 45, 3, NULL, NULL),
(481, 46, 3, NULL, NULL),
(482, 47, 3, NULL, NULL),
(483, 48, 3, NULL, NULL),
(484, 49, 4, NULL, NULL),
(485, 50, 4, NULL, NULL),
(486, 51, 4, NULL, NULL),
(487, 52, 4, NULL, NULL),
(488, 53, 4, NULL, NULL),
(489, 54, 4, NULL, NULL),
(490, 55, 4, NULL, NULL),
(491, 56, 4, NULL, NULL),
(492, 57, 4, NULL, NULL),
(493, 58, 5, NULL, NULL),
(494, 59, 5, NULL, NULL),
(495, 60, 5, NULL, NULL),
(496, 61, 5, NULL, NULL),
(497, 62, 5, NULL, NULL),
(498, 63, 5, NULL, NULL),
(499, 64, 5, NULL, NULL),
(500, 65, 5, NULL, NULL),
(501, 66, 5, NULL, NULL),
(502, 67, 6, NULL, NULL),
(503, 68, 6, NULL, NULL),
(504, 69, 6, NULL, NULL),
(505, 70, 6, NULL, NULL),
(506, 71, 6, NULL, NULL),
(507, 72, 6, NULL, NULL),
(508, 73, 6, NULL, NULL),
(509, 74, 6, NULL, NULL),
(510, 75, 6, NULL, NULL),
(511, 76, 7, NULL, NULL),
(512, 77, 7, NULL, NULL),
(513, 78, 7, NULL, NULL),
(514, 79, 7, NULL, NULL),
(515, 80, 7, NULL, NULL),
(516, 81, 7, NULL, NULL),
(517, 82, 7, NULL, NULL),
(518, 83, 7, NULL, NULL),
(519, 84, 7, NULL, NULL),
(533, 85, 8, NULL, NULL),
(534, 85, 6, NULL, NULL),
(535, 85, 7, NULL, NULL),
(536, 85, 1, NULL, NULL),
(537, 85, 2, NULL, NULL),
(538, 85, 3, NULL, NULL),
(539, 85, 4, NULL, NULL),
(540, 85, 5, NULL, NULL),
(541, 86, 7, NULL, NULL),
(542, 86, 8, NULL, NULL),
(543, 87, 1, NULL, NULL),
(544, 87, 2, NULL, NULL),
(546, 87, 3, NULL, NULL),
(547, 87, 4, NULL, NULL),
(548, 88, 3, NULL, NULL),
(549, 88, 4, NULL, NULL),
(550, 88, 7, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `coupons`
--

CREATE TABLE `coupons` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `code` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `type` enum('fixed','percent') COLLATE utf8mb4_unicode_ci NOT NULL,
  `value` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `coupons`
--

INSERT INTO `coupons` (`id`, `code`, `type`, `value`, `created_at`, `updated_at`) VALUES
(1, 'ABC123', 'fixed', 30, '2022-03-23 18:26:11', '2022-03-23 18:26:11'),
(2, 'DEF456', 'percent', 50, '2022-03-23 18:26:11', '2022-03-23 18:26:11'),
(3, 'Coupon', 'percent', 10, '2022-03-24 19:17:56', '2022-03-24 19:17:56');

-- --------------------------------------------------------

--
-- Table structure for table `data_rows`
--

CREATE TABLE `data_rows` (
  `id` int(10) UNSIGNED NOT NULL,
  `data_type_id` int(10) UNSIGNED NOT NULL,
  `field` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `display_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `required` tinyint(1) NOT NULL DEFAULT 0,
  `browse` tinyint(1) NOT NULL DEFAULT 1,
  `read` tinyint(1) NOT NULL DEFAULT 1,
  `edit` tinyint(1) NOT NULL DEFAULT 1,
  `add` tinyint(1) NOT NULL DEFAULT 1,
  `delete` tinyint(1) NOT NULL DEFAULT 1,
  `details` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `order` int(11) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `data_rows`
--

INSERT INTO `data_rows` (`id`, `data_type_id`, `field`, `type`, `display_name`, `required`, `browse`, `read`, `edit`, `add`, `delete`, `details`, `order`) VALUES
(1, 1, 'id', 'number', 'ID', 1, 0, 0, 0, 0, 0, NULL, 1),
(2, 1, 'name', 'text', 'Name', 1, 1, 1, 1, 1, 1, NULL, 2),
(3, 1, 'email', 'text', 'Email', 1, 1, 1, 1, 1, 1, NULL, 3),
(4, 1, 'password', 'password', 'Password', 1, 0, 0, 1, 1, 0, NULL, 4),
(5, 1, 'remember_token', 'text', 'Remember Token', 0, 0, 0, 0, 0, 0, NULL, 5),
(6, 1, 'created_at', 'timestamp', 'Created At', 0, 1, 1, 0, 0, 0, NULL, 6),
(7, 1, 'updated_at', 'timestamp', 'Updated At', 0, 0, 0, 0, 0, 0, NULL, 7),
(8, 1, 'avatar', 'image', 'Avatar', 0, 1, 1, 1, 1, 1, NULL, 8),
(9, 1, 'user_belongsto_role_relationship', 'relationship', 'Role', 0, 1, 1, 1, 1, 0, '{\"model\":\"TCG\\\\Voyager\\\\Models\\\\Role\",\"table\":\"roles\",\"type\":\"belongsTo\",\"column\":\"role_id\",\"key\":\"id\",\"label\":\"display_name\",\"pivot_table\":\"roles\",\"pivot\":0}', 10),
(10, 1, 'user_belongstomany_role_relationship', 'relationship', 'voyager::seeders.data_rows.roles', 0, 1, 1, 1, 1, 0, '{\"model\":\"TCG\\\\Voyager\\\\Models\\\\Role\",\"table\":\"roles\",\"type\":\"belongsToMany\",\"column\":\"id\",\"key\":\"id\",\"label\":\"display_name\",\"pivot_table\":\"user_roles\",\"pivot\":\"1\",\"taggable\":\"0\"}', 11),
(11, 1, 'settings', 'hidden', 'Settings', 0, 0, 0, 0, 0, 0, NULL, 12),
(12, 2, 'id', 'number', 'ID', 1, 0, 0, 0, 0, 0, NULL, 1),
(13, 2, 'name', 'text', 'Name', 1, 1, 1, 1, 1, 1, NULL, 2),
(14, 2, 'created_at', 'timestamp', 'Created At', 0, 0, 0, 0, 0, 0, NULL, 3),
(15, 2, 'updated_at', 'timestamp', 'Updated At', 0, 0, 0, 0, 0, 0, NULL, 4),
(16, 3, 'id', 'number', 'ID', 1, 0, 0, 0, 0, 0, NULL, 1),
(17, 3, 'name', 'text', 'Name', 1, 1, 1, 1, 1, 1, NULL, 2),
(18, 3, 'created_at', 'timestamp', 'Created At', 0, 0, 0, 0, 0, 0, NULL, 3),
(19, 3, 'updated_at', 'timestamp', 'Updated At', 0, 0, 0, 0, 0, 0, NULL, 4),
(20, 3, 'display_name', 'text', 'Display Name', 1, 1, 1, 1, 1, 1, NULL, 5),
(21, 1, 'role_id', 'text', 'Role', 1, 1, 1, 1, 1, 1, NULL, 9),
(22, 4, 'id', 'number', 'ID', 1, 0, 0, 0, 0, 0, NULL, 1),
(23, 4, 'parent_id', 'select_dropdown', 'Parent', 0, 0, 1, 1, 1, 1, '{\"default\":\"\",\"null\":\"\",\"options\":{\"\":\"-- None --\"},\"relationship\":{\"key\":\"id\",\"label\":\"name\"}}', 2),
(24, 4, 'order', 'text', 'Order', 1, 1, 1, 1, 1, 1, '{\"default\":1}', 3),
(25, 4, 'name', 'text', 'Name', 1, 1, 1, 1, 1, 1, NULL, 4),
(26, 4, 'slug', 'text', 'Slug', 1, 1, 1, 1, 1, 1, '{\"slugify\":{\"origin\":\"name\"}}', 5),
(27, 4, 'created_at', 'timestamp', 'Created At', 0, 0, 1, 0, 0, 0, NULL, 6),
(28, 4, 'updated_at', 'timestamp', 'Updated At', 0, 0, 0, 0, 0, 0, NULL, 7),
(29, 5, 'id', 'number', 'ID', 1, 0, 0, 0, 0, 0, NULL, 1),
(30, 5, 'author_id', 'text', 'Author', 1, 0, 1, 1, 0, 1, NULL, 2),
(31, 5, 'category_id', 'text', 'Category', 1, 0, 1, 1, 1, 0, NULL, 3),
(32, 5, 'title', 'text', 'Title', 1, 1, 1, 1, 1, 1, NULL, 4),
(33, 5, 'excerpt', 'text_area', 'Excerpt', 1, 0, 1, 1, 1, 1, NULL, 5),
(34, 5, 'body', 'rich_text_box', 'Body', 1, 0, 1, 1, 1, 1, NULL, 6),
(35, 5, 'image', 'image', 'Post Image', 0, 1, 1, 1, 1, 1, '{\"resize\":{\"width\":\"1000\",\"height\":\"null\"},\"quality\":\"70%\",\"upsize\":true,\"thumbnails\":[{\"name\":\"medium\",\"scale\":\"50%\"},{\"name\":\"small\",\"scale\":\"25%\"},{\"name\":\"cropped\",\"crop\":{\"width\":\"300\",\"height\":\"250\"}}]}', 7),
(36, 5, 'slug', 'text', 'Slug', 1, 0, 1, 1, 1, 1, '{\"slugify\":{\"origin\":\"title\",\"forceUpdate\":true},\"validation\":{\"rule\":\"unique:posts,slug\"}}', 8),
(37, 5, 'meta_description', 'text_area', 'Meta Description', 1, 0, 1, 1, 1, 1, NULL, 9),
(38, 5, 'meta_keywords', 'text_area', 'Meta Keywords', 1, 0, 1, 1, 1, 1, NULL, 10),
(39, 5, 'status', 'select_dropdown', 'Status', 1, 1, 1, 1, 1, 1, '{\"default\":\"DRAFT\",\"options\":{\"PUBLISHED\":\"published\",\"DRAFT\":\"draft\",\"PENDING\":\"pending\"}}', 11),
(40, 5, 'created_at', 'timestamp', 'Created At', 0, 1, 1, 0, 0, 0, NULL, 12),
(41, 5, 'updated_at', 'timestamp', 'Updated At', 0, 0, 0, 0, 0, 0, NULL, 13),
(42, 5, 'seo_title', 'text', 'SEO Title', 0, 1, 1, 1, 1, 1, NULL, 14),
(43, 5, 'featured', 'checkbox', 'Featured', 1, 1, 1, 1, 1, 1, NULL, 15),
(44, 6, 'id', 'number', 'ID', 1, 0, 0, 0, 0, 0, NULL, 1),
(45, 6, 'author_id', 'text', 'Author', 1, 0, 0, 0, 0, 0, NULL, 2),
(46, 6, 'title', 'text', 'Title', 1, 1, 1, 1, 1, 1, NULL, 3),
(47, 6, 'excerpt', 'text_area', 'Excerpt', 1, 0, 1, 1, 1, 1, NULL, 4),
(48, 6, 'body', 'rich_text_box', 'Body', 1, 0, 1, 1, 1, 1, NULL, 5),
(49, 6, 'slug', 'text', 'Slug', 1, 0, 1, 1, 1, 1, '{\"slugify\":{\"origin\":\"title\"},\"validation\":{\"rule\":\"unique:pages,slug\"}}', 6),
(50, 6, 'meta_description', 'text', 'Meta Description', 1, 0, 1, 1, 1, 1, NULL, 7),
(51, 6, 'meta_keywords', 'text', 'Meta Keywords', 1, 0, 1, 1, 1, 1, NULL, 8),
(52, 6, 'status', 'select_dropdown', 'Status', 1, 1, 1, 1, 1, 1, '{\"default\":\"INACTIVE\",\"options\":{\"INACTIVE\":\"INACTIVE\",\"ACTIVE\":\"ACTIVE\"}}', 9),
(53, 6, 'created_at', 'timestamp', 'Created At', 1, 1, 1, 0, 0, 0, NULL, 10),
(54, 6, 'updated_at', 'timestamp', 'Updated At', 1, 0, 0, 0, 0, 0, NULL, 11),
(55, 6, 'image', 'image', 'Page Image', 0, 1, 1, 1, 1, 1, NULL, 12),
(56, 7, 'id', 'hidden', 'Id', 1, 1, 1, 1, 1, 0, '{}', 1),
(57, 7, 'name', 'text', 'name', 1, 1, 1, 1, 1, 1, '{\"validation\":{\"rule\":\"required|max:50\"}}', 2),
(58, 7, 'slug', 'text', 'Slug', 1, 1, 1, 1, 1, 1, '{}', 3),
(59, 7, 'details', 'text', 'Details', 0, 1, 1, 1, 1, 1, '{}', 4),
(60, 7, 'description', 'rich_text_box', 'Description', 1, 1, 1, 1, 1, 1, '{}', 5),
(61, 7, 'price', 'number', 'Price', 1, 1, 1, 1, 1, 1, '{\"validation\":{\"rule\":\"required|regex:\\/^\\\\d*(\\\\.\\\\d{1,2})?$\\/\"}}', 6),
(62, 7, 'image', 'image', 'Image', 1, 1, 1, 1, 1, 1, '{\"resize\":{\"width\":\"1000\",\"height\":null},\"quality\":\"70%\",\"upsize\":false,\"thumbnails\":[{\"name\":\"medium\",\"scale\":\"50%\"},{\"name\":\"small\",\"scale\":\"25%\"},{\"name\":\"cropped\",\"crop\":{\"width\":\"300\",\"height\":\"250\"}}]}', 7),
(63, 7, 'featured', 'checkbox', 'Featured', 1, 1, 1, 1, 1, 1, '{\"on\":\"Yes\",\"off\":\"No\"}', 8),
(64, 7, 'created_at', 'timestamp', 'Created At', 0, 0, 0, 0, 0, 0, '{}', 9),
(65, 7, 'updated_at', 'timestamp', 'Updated At', 0, 0, 0, 0, 0, 0, '{}', 10),
(66, 9, 'id', 'hidden', 'Id', 1, 1, 1, 1, 1, 0, '{}', 1),
(67, 9, 'name', 'text', 'Name', 1, 1, 1, 1, 1, 1, '{}', 2),
(68, 9, 'slug', 'text', 'Slug', 1, 1, 1, 1, 1, 1, '{}', 3),
(69, 9, 'created_at', 'timestamp', 'Created At', 0, 0, 0, 0, 0, 0, '{}', 4),
(70, 9, 'updated_at', 'timestamp', 'Updated At', 0, 0, 0, 0, 0, 0, '{}', 5),
(71, 10, 'id', 'hidden', 'Id', 1, 1, 1, 1, 1, 0, '{}', 1),
(72, 10, 'code', 'text', 'Code', 1, 1, 1, 1, 1, 1, '{}', 2),
(73, 10, 'type', 'select_dropdown', 'Type', 1, 1, 1, 1, 1, 1, '{\"default\":\"fixed\",\"options\":{\"fixed\":\"Fixed Value\",\"percent\":\"Percent Off\"}}', 3),
(74, 10, 'value', 'text', 'Value', 0, 1, 1, 1, 1, 1, '{\"null\":\"\"}', 4),
(75, 10, 'created_at', 'timestamp', 'Created At', 0, 1, 1, 1, 0, 1, '{}', 5),
(76, 10, 'updated_at', 'timestamp', 'Updated At', 0, 0, 0, 0, 0, 0, '{}', 6),
(77, 11, 'id', 'text', 'Id', 1, 0, 0, 0, 0, 0, '{}', 1),
(78, 11, 'product_id', 'number', 'Product Id', 0, 1, 1, 1, 1, 1, '{}', 2),
(79, 11, 'category_id', 'number', 'Category Id', 0, 1, 1, 1, 1, 1, '{}', 3),
(80, 11, 'created_at', 'timestamp', 'Created At', 0, 0, 0, 0, 0, 0, '{}', 4),
(81, 11, 'updated_at', 'timestamp', 'Updated At', 0, 0, 0, 0, 0, 0, '{}', 5),
(82, 7, 'images', 'multiple_images', 'Images', 0, 1, 1, 1, 1, 1, '{}', 8);

-- --------------------------------------------------------

--
-- Table structure for table `data_types`
--

CREATE TABLE `data_types` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `display_name_singular` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `display_name_plural` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `icon` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `model_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `policy_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `controller` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `generate_permissions` tinyint(1) NOT NULL DEFAULT 0,
  `server_side` tinyint(4) NOT NULL DEFAULT 0,
  `details` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `data_types`
--

INSERT INTO `data_types` (`id`, `name`, `slug`, `display_name_singular`, `display_name_plural`, `icon`, `model_name`, `policy_name`, `controller`, `description`, `generate_permissions`, `server_side`, `details`, `created_at`, `updated_at`) VALUES
(1, 'users', 'users', 'User', 'Users', 'voyager-person', 'TCG\\Voyager\\Models\\User', 'TCG\\Voyager\\Policies\\UserPolicy', 'TCG\\Voyager\\Http\\Controllers\\VoyagerUserController', '', 1, 0, NULL, '2022-03-23 18:36:20', '2022-03-23 18:36:20'),
(2, 'menus', 'menus', 'Menu', 'Menus', 'voyager-list', 'TCG\\Voyager\\Models\\Menu', NULL, '', '', 1, 0, NULL, '2022-03-23 18:36:20', '2022-03-23 18:36:20'),
(3, 'roles', 'roles', 'Role', 'Roles', 'voyager-lock', 'TCG\\Voyager\\Models\\Role', NULL, 'TCG\\Voyager\\Http\\Controllers\\VoyagerRoleController', '', 1, 0, NULL, '2022-03-23 18:36:20', '2022-03-23 18:36:20'),
(4, 'categories', 'categories', 'Category', 'Categories', 'voyager-categories', 'TCG\\Voyager\\Models\\Category', NULL, '', '', 1, 0, NULL, '2022-03-23 18:36:26', '2022-03-23 18:36:26'),
(5, 'posts', 'posts', 'Post', 'Posts', 'voyager-news', 'TCG\\Voyager\\Models\\Post', 'TCG\\Voyager\\Policies\\PostPolicy', '', '', 1, 0, NULL, '2022-03-23 18:36:27', '2022-03-23 18:36:27'),
(6, 'pages', 'pages', 'Page', 'Pages', 'voyager-file-text', 'TCG\\Voyager\\Models\\Page', NULL, '', '', 1, 0, NULL, '2022-03-23 18:36:30', '2022-03-23 18:36:30'),
(7, 'products', 'products', 'Product', 'Products', 'voyager-bag', 'App\\Models\\Product', NULL, '\\App\\Http\\Controllers\\Voyager\\PorductsController', NULL, 1, 0, '{\"order_column\":null,\"order_display_column\":null,\"order_direction\":\"asc\",\"default_search_key\":null,\"scope\":null}', '2022-03-24 06:51:03', '2022-04-17 02:52:36'),
(9, 'category', 'category', 'Category', 'Categories', 'voyager-categories', 'App\\Models\\Category', NULL, NULL, NULL, 1, 0, '{\"order_column\":null,\"order_display_column\":null,\"order_direction\":\"asc\",\"default_search_key\":null}', '2022-03-24 17:12:55', '2022-03-24 17:12:55'),
(10, 'coupons', 'coupons', 'Coupon', 'Coupons', 'voyager-dollar', 'App\\Models\\Coupon', NULL, NULL, NULL, 1, 0, '{\"order_column\":null,\"order_display_column\":null,\"order_direction\":\"asc\",\"default_search_key\":null}', '2022-03-24 18:21:26', '2022-03-24 18:21:26'),
(11, 'category_product', 'category-product', 'Category Product', 'Category Products', 'voyager-tag', 'App\\Models\\CategoryProduct', NULL, NULL, NULL, 1, 0, '{\"order_column\":null,\"order_display_column\":null,\"order_direction\":\"asc\",\"default_search_key\":null}', '2022-03-26 07:01:51', '2022-03-26 07:01:51');

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `menus`
--

CREATE TABLE `menus` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `menus`
--

INSERT INTO `menus` (`id`, `name`, `created_at`, `updated_at`) VALUES
(1, 'admin', '2022-03-23 18:36:22', '2022-03-23 18:36:22'),
(2, 'main', '2022-03-26 17:12:29', '2022-03-26 17:12:29'),
(3, 'footer', '2022-03-27 07:14:43', '2022-03-27 07:14:43');

-- --------------------------------------------------------

--
-- Table structure for table `menu_items`
--

CREATE TABLE `menu_items` (
  `id` int(10) UNSIGNED NOT NULL,
  `menu_id` int(10) UNSIGNED DEFAULT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `url` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `target` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '_self',
  `icon_class` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `color` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `parent_id` int(11) DEFAULT NULL,
  `order` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `route` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `parameters` text COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `menu_items`
--

INSERT INTO `menu_items` (`id`, `menu_id`, `title`, `url`, `target`, `icon_class`, `color`, `parent_id`, `order`, `created_at`, `updated_at`, `route`, `parameters`) VALUES
(1, 1, 'Dashboard', '', '_self', 'voyager-boat', NULL, NULL, 1, '2022-03-23 18:36:22', '2022-03-23 18:36:22', 'voyager.dashboard', NULL),
(2, 1, 'Media', '', '_self', 'voyager-images', NULL, NULL, 8, '2022-03-23 18:36:22', '2022-03-26 07:02:33', 'voyager.media.index', NULL),
(3, 1, 'Users', '', '_self', 'voyager-person', NULL, NULL, 7, '2022-03-23 18:36:22', '2022-03-26 07:02:33', 'voyager.users.index', NULL),
(4, 1, 'Roles', '', '_self', 'voyager-lock', NULL, NULL, 6, '2022-03-23 18:36:22', '2022-03-26 07:02:33', 'voyager.roles.index', NULL),
(5, 1, 'Tools', '', '_self', 'voyager-tools', NULL, NULL, 11, '2022-03-23 18:36:22', '2022-03-26 07:02:33', NULL, NULL),
(6, 1, 'Menu Builder', '', '_self', 'voyager-list', NULL, 5, 1, '2022-03-23 18:36:22', '2022-03-24 14:29:46', 'voyager.menus.index', NULL),
(7, 1, 'Database', '', '_self', 'voyager-data', NULL, 5, 2, '2022-03-23 18:36:22', '2022-03-24 14:29:46', 'voyager.database.index', NULL),
(8, 1, 'Compass', '', '_self', 'voyager-compass', NULL, 5, 3, '2022-03-23 18:36:22', '2022-03-24 14:29:46', 'voyager.compass.index', NULL),
(9, 1, 'BREAD', '', '_self', 'voyager-bread', NULL, 5, 4, '2022-03-23 18:36:22', '2022-03-24 14:29:46', 'voyager.bread.index', NULL),
(10, 1, 'Settings', '', '_self', 'voyager-settings', NULL, NULL, 12, '2022-03-23 18:36:22', '2022-03-26 07:02:33', 'voyager.settings.index', NULL),
(11, 1, 'Categories', '', '_self', 'voyager-categories', NULL, NULL, 13, '2022-03-23 18:36:27', '2022-03-26 07:02:33', 'voyager.categories.index', NULL),
(12, 1, 'Posts', '', '_self', 'voyager-news', NULL, NULL, 9, '2022-03-23 18:36:29', '2022-03-26 07:02:33', 'voyager.posts.index', NULL),
(13, 1, 'Pages', '', '_self', 'voyager-file-text', NULL, NULL, 10, '2022-03-23 18:36:30', '2022-03-26 07:02:33', 'voyager.pages.index', NULL),
(14, 1, 'Products', '', '_self', 'voyager-bag', NULL, NULL, 3, '2022-03-24 06:51:04', '2022-03-24 18:23:44', 'voyager.products.index', NULL),
(15, 1, 'Categories', '', '_self', 'voyager-categories', NULL, NULL, 2, '2022-03-24 17:12:55', '2022-03-24 18:23:43', 'voyager.category.index', NULL),
(16, 1, 'Coupons', '', '_self', 'voyager-dollar', NULL, NULL, 5, '2022-03-24 18:21:26', '2022-03-26 07:02:33', 'voyager.coupons.index', NULL),
(17, 1, 'Category Products', '', '_self', 'voyager-tag', NULL, NULL, 4, '2022-03-26 07:01:51', '2022-03-26 07:02:33', 'voyager.category-product.index', NULL),
(18, 2, 'Shop', '', '_self', NULL, '#000000', NULL, 14, '2022-03-26 17:14:36', '2022-03-26 17:14:36', 'shop.index', NULL),
(19, 2, 'About', '#', '_self', NULL, '#000000', NULL, 15, '2022-03-26 17:16:47', '2022-03-26 17:16:47', NULL, ''),
(20, 2, 'Blog', '#', '_self', NULL, '#000000', NULL, 16, '2022-03-26 17:19:58', '2022-03-26 17:19:58', NULL, ''),
(22, 3, 'fa-globe', 'https://abdulrahman5648.github.io/abdulrahman5648/', '_self', NULL, '#000000', NULL, 2, '2022-03-27 07:16:20', '2022-03-27 08:07:31', NULL, ''),
(23, 3, 'fa-github', 'https://github.com/abdulrahman5648', '_self', NULL, '#000000', NULL, 3, '2022-03-27 07:16:54', '2022-03-27 08:07:31', NULL, ''),
(24, 3, 'Follow Me', '', '_self', NULL, '#000000', NULL, 1, '2022-03-27 08:07:23', '2022-03-27 08:07:31', NULL, '');

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2022_02_20_151808_create_products_table', 1),
(5, '2022_03_10_173603_create_category_table', 1),
(6, '2022_03_13_144325_create_category_product', 1),
(7, '2022_03_15_211411_create_coupons_table', 1),
(8, '2016_01_01_000000_add_voyager_user_fields', 2),
(9, '2016_01_01_000000_create_data_types_table', 2),
(10, '2016_05_19_173453_create_menu_table', 2),
(11, '2016_10_21_190000_create_roles_table', 2),
(12, '2016_10_21_190000_create_settings_table', 2),
(13, '2016_11_30_135954_create_permission_table', 2),
(14, '2016_11_30_141208_create_permission_role_table', 2),
(15, '2016_12_26_201236_data_types__add__server_side', 2),
(16, '2017_01_13_000000_add_route_to_menu_items_table', 2),
(17, '2017_01_14_005015_create_translations_table', 2),
(18, '2017_01_15_000000_make_table_name_nullable_in_permissions_table', 2),
(19, '2017_03_06_000000_add_controller_to_data_types_table', 2),
(20, '2017_04_21_000000_add_order_to_data_rows_table', 2),
(21, '2017_07_05_210000_add_policyname_to_data_types_table', 2),
(22, '2017_08_05_000000_add_group_to_settings_table', 2),
(23, '2017_11_26_013050_add_user_role_relationship', 2),
(24, '2017_11_26_015000_create_user_roles_table', 2),
(25, '2018_03_11_000000_add_user_settings', 2),
(26, '2018_03_14_000000_add_details_to_data_types_table', 2),
(27, '2018_03_16_000000_make_settings_value_nullable', 2),
(28, '2016_01_01_000000_create_pages_table', 3),
(29, '2016_01_01_000000_create_posts_table', 3),
(30, '2016_02_15_204651_create_categories_table', 3),
(31, '2017_04_11_000000_alter_post_nullable_fields_table', 3),
(32, '2022_03_28_220153_create_tests_table', 4);

-- --------------------------------------------------------

--
-- Table structure for table `pages`
--

CREATE TABLE `pages` (
  `id` int(10) UNSIGNED NOT NULL,
  `author_id` int(11) NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `excerpt` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `body` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `meta_description` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `meta_keywords` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` enum('ACTIVE','INACTIVE') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'INACTIVE',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `pages`
--

INSERT INTO `pages` (`id`, `author_id`, `title`, `excerpt`, `body`, `image`, `slug`, `meta_description`, `meta_keywords`, `status`, `created_at`, `updated_at`) VALUES
(1, 0, 'Hello World', 'Hang the jib grog grog blossom grapple dance the hempen jig gangway pressgang bilge rat to go on account lugger. Nelsons folly gabion line draught scallywag fire ship gaff fluke fathom case shot. Sea Legs bilge rat sloop matey gabion long clothes run a shot across the bow Gold Road cog league.', '<p>Hello World. Scallywag grog swab Cat o\'nine tails scuttle rigging hardtack cable nipper Yellow Jack. Handsomely spirits knave lad killick landlubber or just lubber deadlights chantey pinnace crack Jennys tea cup. Provost long clothes black spot Yellow Jack bilged on her anchor league lateen sail case shot lee tackle.</p>\n<p>Ballast spirits fluke topmast me quarterdeck schooner landlubber or just lubber gabion belaying pin. Pinnace stern galleon starboard warp carouser to go on account dance the hempen jig jolly boat measured fer yer chains. Man-of-war fire in the hole nipperkin handsomely doubloon barkadeer Brethren of the Coast gibbet driver squiffy.</p>', 'pages/page1.jpg', 'hello-world', 'Yar Meta Description', 'Keyword1, Keyword2', 'ACTIVE', '2022-03-23 18:36:31', '2022-03-23 18:36:31');

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `permissions`
--

CREATE TABLE `permissions` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `key` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `table_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `permissions`
--

INSERT INTO `permissions` (`id`, `key`, `table_name`, `created_at`, `updated_at`) VALUES
(1, 'browse_admin', NULL, '2022-03-23 18:36:22', '2022-03-23 18:36:22'),
(2, 'browse_bread', NULL, '2022-03-23 18:36:22', '2022-03-23 18:36:22'),
(3, 'browse_database', NULL, '2022-03-23 18:36:23', '2022-03-23 18:36:23'),
(4, 'browse_media', NULL, '2022-03-23 18:36:23', '2022-03-23 18:36:23'),
(5, 'browse_compass', NULL, '2022-03-23 18:36:23', '2022-03-23 18:36:23'),
(6, 'browse_menus', 'menus', '2022-03-23 18:36:23', '2022-03-23 18:36:23'),
(7, 'read_menus', 'menus', '2022-03-23 18:36:23', '2022-03-23 18:36:23'),
(8, 'edit_menus', 'menus', '2022-03-23 18:36:23', '2022-03-23 18:36:23'),
(9, 'add_menus', 'menus', '2022-03-23 18:36:23', '2022-03-23 18:36:23'),
(10, 'delete_menus', 'menus', '2022-03-23 18:36:23', '2022-03-23 18:36:23'),
(11, 'browse_roles', 'roles', '2022-03-23 18:36:23', '2022-03-23 18:36:23'),
(12, 'read_roles', 'roles', '2022-03-23 18:36:23', '2022-03-23 18:36:23'),
(13, 'edit_roles', 'roles', '2022-03-23 18:36:23', '2022-03-23 18:36:23'),
(14, 'add_roles', 'roles', '2022-03-23 18:36:23', '2022-03-23 18:36:23'),
(15, 'delete_roles', 'roles', '2022-03-23 18:36:23', '2022-03-23 18:36:23'),
(16, 'browse_users', 'users', '2022-03-23 18:36:23', '2022-03-23 18:36:23'),
(17, 'read_users', 'users', '2022-03-23 18:36:23', '2022-03-23 18:36:23'),
(18, 'edit_users', 'users', '2022-03-23 18:36:23', '2022-03-23 18:36:23'),
(19, 'add_users', 'users', '2022-03-23 18:36:23', '2022-03-23 18:36:23'),
(20, 'delete_users', 'users', '2022-03-23 18:36:23', '2022-03-23 18:36:23'),
(21, 'browse_settings', 'settings', '2022-03-23 18:36:24', '2022-03-23 18:36:24'),
(22, 'read_settings', 'settings', '2022-03-23 18:36:24', '2022-03-23 18:36:24'),
(23, 'edit_settings', 'settings', '2022-03-23 18:36:24', '2022-03-23 18:36:24'),
(24, 'add_settings', 'settings', '2022-03-23 18:36:24', '2022-03-23 18:36:24'),
(25, 'delete_settings', 'settings', '2022-03-23 18:36:24', '2022-03-23 18:36:24'),
(26, 'browse_categories', 'categories', '2022-03-23 18:36:27', '2022-03-23 18:36:27'),
(27, 'read_categories', 'categories', '2022-03-23 18:36:27', '2022-03-23 18:36:27'),
(28, 'edit_categories', 'categories', '2022-03-23 18:36:27', '2022-03-23 18:36:27'),
(29, 'add_categories', 'categories', '2022-03-23 18:36:27', '2022-03-23 18:36:27'),
(30, 'delete_categories', 'categories', '2022-03-23 18:36:27', '2022-03-23 18:36:27'),
(31, 'browse_posts', 'posts', '2022-03-23 18:36:29', '2022-03-23 18:36:29'),
(32, 'read_posts', 'posts', '2022-03-23 18:36:29', '2022-03-23 18:36:29'),
(33, 'edit_posts', 'posts', '2022-03-23 18:36:29', '2022-03-23 18:36:29'),
(34, 'add_posts', 'posts', '2022-03-23 18:36:29', '2022-03-23 18:36:29'),
(35, 'delete_posts', 'posts', '2022-03-23 18:36:29', '2022-03-23 18:36:29'),
(36, 'browse_pages', 'pages', '2022-03-23 18:36:31', '2022-03-23 18:36:31'),
(37, 'read_pages', 'pages', '2022-03-23 18:36:31', '2022-03-23 18:36:31'),
(38, 'edit_pages', 'pages', '2022-03-23 18:36:31', '2022-03-23 18:36:31'),
(39, 'add_pages', 'pages', '2022-03-23 18:36:31', '2022-03-23 18:36:31'),
(40, 'delete_pages', 'pages', '2022-03-23 18:36:31', '2022-03-23 18:36:31'),
(41, 'browse_products', 'products', '2022-03-24 06:51:04', '2022-03-24 06:51:04'),
(42, 'read_products', 'products', '2022-03-24 06:51:04', '2022-03-24 06:51:04'),
(43, 'edit_products', 'products', '2022-03-24 06:51:04', '2022-03-24 06:51:04'),
(44, 'add_products', 'products', '2022-03-24 06:51:04', '2022-03-24 06:51:04'),
(45, 'delete_products', 'products', '2022-03-24 06:51:04', '2022-03-24 06:51:04'),
(46, 'browse_category', 'category', '2022-03-24 17:12:55', '2022-03-24 17:12:55'),
(47, 'read_category', 'category', '2022-03-24 17:12:55', '2022-03-24 17:12:55'),
(48, 'edit_category', 'category', '2022-03-24 17:12:55', '2022-03-24 17:12:55'),
(49, 'add_category', 'category', '2022-03-24 17:12:55', '2022-03-24 17:12:55'),
(50, 'delete_category', 'category', '2022-03-24 17:12:55', '2022-03-24 17:12:55'),
(51, 'browse_coupons', 'coupons', '2022-03-24 18:21:26', '2022-03-24 18:21:26'),
(52, 'read_coupons', 'coupons', '2022-03-24 18:21:26', '2022-03-24 18:21:26'),
(53, 'edit_coupons', 'coupons', '2022-03-24 18:21:26', '2022-03-24 18:21:26'),
(54, 'add_coupons', 'coupons', '2022-03-24 18:21:26', '2022-03-24 18:21:26'),
(55, 'delete_coupons', 'coupons', '2022-03-24 18:21:26', '2022-03-24 18:21:26'),
(56, 'browse_category_product', 'category_product', '2022-03-26 07:01:51', '2022-03-26 07:01:51'),
(57, 'read_category_product', 'category_product', '2022-03-26 07:01:51', '2022-03-26 07:01:51'),
(58, 'edit_category_product', 'category_product', '2022-03-26 07:01:51', '2022-03-26 07:01:51'),
(59, 'add_category_product', 'category_product', '2022-03-26 07:01:51', '2022-03-26 07:01:51'),
(60, 'delete_category_product', 'category_product', '2022-03-26 07:01:51', '2022-03-26 07:01:51');

-- --------------------------------------------------------

--
-- Table structure for table `permission_role`
--

CREATE TABLE `permission_role` (
  `permission_id` bigint(20) UNSIGNED NOT NULL,
  `role_id` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `permission_role`
--

INSERT INTO `permission_role` (`permission_id`, `role_id`) VALUES
(1, 1),
(2, 1),
(3, 1),
(4, 1),
(5, 1),
(6, 1),
(7, 1),
(8, 1),
(9, 1),
(10, 1),
(11, 1),
(12, 1),
(13, 1),
(14, 1),
(15, 1),
(16, 1),
(17, 1),
(18, 1),
(19, 1),
(20, 1),
(21, 1),
(22, 1),
(23, 1),
(24, 1),
(25, 1),
(26, 1),
(27, 1),
(28, 1),
(29, 1),
(30, 1),
(31, 1),
(32, 1),
(33, 1),
(34, 1),
(35, 1),
(36, 1),
(37, 1),
(38, 1),
(39, 1),
(40, 1),
(41, 1),
(42, 1),
(43, 1),
(44, 1),
(45, 1),
(46, 1),
(47, 1),
(48, 1),
(49, 1),
(50, 1),
(51, 1),
(52, 1),
(53, 1),
(54, 1),
(55, 1),
(56, 1),
(57, 1),
(58, 1),
(59, 1),
(60, 1);

-- --------------------------------------------------------

--
-- Table structure for table `posts`
--

CREATE TABLE `posts` (
  `id` int(10) UNSIGNED NOT NULL,
  `author_id` int(11) NOT NULL,
  `category_id` int(11) DEFAULT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `seo_title` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `excerpt` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `body` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `meta_description` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `meta_keywords` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` enum('PUBLISHED','DRAFT','PENDING') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'DRAFT',
  `featured` tinyint(1) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `posts`
--

INSERT INTO `posts` (`id`, `author_id`, `category_id`, `title`, `seo_title`, `excerpt`, `body`, `image`, `slug`, `meta_description`, `meta_keywords`, `status`, `featured`, `created_at`, `updated_at`) VALUES
(1, 0, NULL, 'Lorem Ipsum Post', NULL, 'This is the excerpt for the Lorem Ipsum Post', '<p>This is the body of the lorem ipsum post</p>', 'posts/post1.jpg', 'lorem-ipsum-post', 'This is the meta description', 'keyword1, keyword2, keyword3', 'PUBLISHED', 0, '2022-03-23 18:36:29', '2022-03-23 18:36:29'),
(2, 0, NULL, 'My Sample Post', NULL, 'This is the excerpt for the sample Post', '<p>This is the body for the sample post, which includes the body.</p>\n                <h2>We can use all kinds of format!</h2>\n                <p>And include a bunch of other stuff.</p>', 'posts/post2.jpg', 'my-sample-post', 'Meta Description for sample post', 'keyword1, keyword2, keyword3', 'PUBLISHED', 0, '2022-03-23 18:36:30', '2022-03-23 18:36:30'),
(3, 0, NULL, 'Latest Post', NULL, 'This is the excerpt for the latest post', '<p>This is the body for the latest post</p>', 'posts/post3.jpg', 'latest-post', 'This is the meta description', 'keyword1, keyword2, keyword3', 'PUBLISHED', 0, '2022-03-23 18:36:30', '2022-03-23 18:36:30'),
(4, 0, NULL, 'Yarr Post', NULL, 'Reef sails nipperkin bring a spring upon her cable coffer jury mast spike marooned Pieces of Eight poop deck pillage. Clipper driver coxswain galleon hempen halter come about pressgang gangplank boatswain swing the lead. Nipperkin yard skysail swab lanyard Blimey bilge water ho quarter Buccaneer.', '<p>Swab deadlights Buccaneer fire ship square-rigged dance the hempen jig weigh anchor cackle fruit grog furl. Crack Jennys tea cup chase guns pressgang hearties spirits hogshead Gold Road six pounders fathom measured fer yer chains. Main sheet provost come about trysail barkadeer crimp scuttle mizzenmast brig plunder.</p>\n<p>Mizzen league keelhaul galleon tender cog chase Barbary Coast doubloon crack Jennys tea cup. Blow the man down lugsail fire ship pinnace cackle fruit line warp Admiral of the Black strike colors doubloon. Tackle Jack Ketch come about crimp rum draft scuppers run a shot across the bow haul wind maroon.</p>\n<p>Interloper heave down list driver pressgang holystone scuppers tackle scallywag bilged on her anchor. Jack Tar interloper draught grapple mizzenmast hulk knave cable transom hogshead. Gaff pillage to go on account grog aft chase guns piracy yardarm knave clap of thunder.</p>', 'posts/post4.jpg', 'yarr-post', 'this be a meta descript', 'keyword1, keyword2, keyword3', 'PUBLISHED', 0, '2022-03-23 18:36:30', '2022-03-23 18:36:30');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `details` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` double(8,2) NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `images` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `featured` tinyint(1) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `slug`, `details`, `description`, `price`, `image`, `images`, `featured`, `created_at`, `updated_at`) VALUES
(1, 'Laptop 1', 'laptop-1', '14 inch, 1 TB SSD, 32GB RAM', 'Lorem 1 ipsum dolor sit amet, consectetur adipisicing elit. Ipsum temporibus iusto ipsa, asperiores voluptas unde aspernatur praesentium in? Aliquam, dolore!', 236337.00, 'products/April2022/laptop-1.jpg', NULL, 0, '2022-04-13 04:03:40', '2022-04-13 04:03:40'),
(2, 'Laptop 2', 'laptop-2', '15 inch, 1 TB SSD, 32GB RAM', 'Lorem 2 ipsum dolor sit amet, consectetur adipisicing elit. Ipsum temporibus iusto ipsa, asperiores voluptas unde aspernatur praesentium in? Aliquam, dolore!', 195737.00, 'products/April2022/laptop-2.jpg', NULL, 0, '2022-04-13 04:03:40', '2022-04-13 04:03:40'),
(3, 'Laptop 3', 'laptop-3', '15 inch, 1 TB SSD, 32GB RAM', 'Lorem 3 ipsum dolor sit amet, consectetur adipisicing elit. Ipsum temporibus iusto ipsa, asperiores voluptas unde aspernatur praesentium in? Aliquam, dolore!', 168496.00, 'products/April2022/laptop-3.jpg', NULL, 0, '2022-04-13 04:03:40', '2022-04-13 04:03:40'),
(4, 'Laptop 4', 'laptop-4', '14 inch, 1 TB SSD, 32GB RAM', 'Lorem 4 ipsum dolor sit amet, consectetur adipisicing elit. Ipsum temporibus iusto ipsa, asperiores voluptas unde aspernatur praesentium in? Aliquam, dolore!', 211484.00, 'products/April2022/laptop-4.jpg', NULL, 0, '2022-04-13 04:03:41', '2022-04-13 04:03:41'),
(5, 'Laptop 5', 'laptop-5', '14 inch, 1 TB SSD, 32GB RAM', 'Lorem 5 ipsum dolor sit amet, consectetur adipisicing elit. Ipsum temporibus iusto ipsa, asperiores voluptas unde aspernatur praesentium in? Aliquam, dolore!', 240540.00, 'products/April2022/laptop-5.jpg', NULL, 0, '2022-04-13 04:03:41', '2022-04-13 04:03:41'),
(6, 'Laptop 6', 'laptop-6', '15 inch, 2 TB SSD, 32GB RAM', 'Lorem 6 ipsum dolor sit amet, consectetur adipisicing elit. Ipsum temporibus iusto ipsa, asperiores voluptas unde aspernatur praesentium in? Aliquam, dolore!', 210063.00, 'products/April2022/laptop-6.jpg', NULL, 0, '2022-04-13 04:03:41', '2022-04-13 04:03:41'),
(7, 'Laptop 7', 'laptop-7', '14 inch, 3 TB SSD, 32GB RAM', 'Lorem 7 ipsum dolor sit amet, consectetur adipisicing elit. Ipsum temporibus iusto ipsa, asperiores voluptas unde aspernatur praesentium in? Aliquam, dolore!', 197963.00, 'products/April2022/laptop-7.jpg', NULL, 0, '2022-04-13 04:03:41', '2022-04-13 04:03:41'),
(8, 'Laptop 8', 'laptop-8', '15 inch, 3 TB SSD, 32GB RAM', 'Lorem 8 ipsum dolor sit amet, consectetur adipisicing elit. Ipsum temporibus iusto ipsa, asperiores voluptas unde aspernatur praesentium in? Aliquam, dolore!', 168083.00, 'products/April2022/laptop-8.jpg', NULL, 0, '2022-04-13 04:03:41', '2022-04-13 04:03:41'),
(9, 'Laptop 9', 'laptop-9', '14 inch, 2 TB SSD, 32GB RAM', 'Lorem 9 ipsum dolor sit amet, consectetur adipisicing elit. Ipsum temporibus iusto ipsa, asperiores voluptas unde aspernatur praesentium in? Aliquam, dolore!', 243711.00, 'products/April2022/laptop-9.jpg', NULL, 0, '2022-04-13 04:03:41', '2022-04-13 04:03:41'),
(10, 'Laptop 10', 'laptop-10', '13 inch, 1 TB SSD, 32GB RAM', 'Lorem 10 ipsum dolor sit amet, consectetur adipisicing elit. Ipsum temporibus iusto ipsa, asperiores voluptas unde aspernatur praesentium in? Aliquam, dolore!', 170337.00, 'products/April2022/laptop-10.jpg', NULL, 0, '2022-04-13 04:03:41', '2022-04-13 04:03:41'),
(11, 'Laptop 11', 'laptop-11', '14 inch, 1 TB SSD, 32GB RAM', 'Lorem 11 ipsum dolor sit amet, consectetur adipisicing elit. Ipsum temporibus iusto ipsa, asperiores voluptas unde aspernatur praesentium in? Aliquam, dolore!', 188839.00, 'products/April2022/laptop-11.jpg', NULL, 0, '2022-04-13 04:03:41', '2022-04-13 04:03:41'),
(12, 'Laptop 12', 'laptop-12', '13 inch, 1 TB SSD, 32GB RAM', 'Lorem 12 ipsum dolor sit amet, consectetur adipisicing elit. Ipsum temporibus iusto ipsa, asperiores voluptas unde aspernatur praesentium in? Aliquam, dolore!', 175766.00, 'products/April2022/laptop-12.jpg', NULL, 0, '2022-04-13 04:03:41', '2022-04-13 04:03:41'),
(13, 'Laptop 13', 'laptop-13', '15 inch, 3 TB SSD, 32GB RAM', 'Lorem 13 ipsum dolor sit amet, consectetur adipisicing elit. Ipsum temporibus iusto ipsa, asperiores voluptas unde aspernatur praesentium in? Aliquam, dolore!', 158233.00, 'products/April2022/laptop-13.jpg', NULL, 0, '2022-04-13 04:03:41', '2022-04-13 04:03:41'),
(14, 'Laptop 14', 'laptop-14', '14 inch, 1 TB SSD, 32GB RAM', 'Lorem 14 ipsum dolor sit amet, consectetur adipisicing elit. Ipsum temporibus iusto ipsa, asperiores voluptas unde aspernatur praesentium in? Aliquam, dolore!', 207921.00, 'products/April2022/laptop-14.jpg', NULL, 0, '2022-04-13 04:03:42', '2022-04-13 04:03:42'),
(15, 'Laptop 15', 'laptop-15', '14 inch, 3 TB SSD, 32GB RAM', 'Lorem 15 ipsum dolor sit amet, consectetur adipisicing elit. Ipsum temporibus iusto ipsa, asperiores voluptas unde aspernatur praesentium in? Aliquam, dolore!', 183237.00, 'products/April2022/laptop-15.jpg', NULL, 0, '2022-04-13 04:03:42', '2022-04-13 04:03:42'),
(16, 'Laptop 16', 'laptop-16', '13 inch, 3 TB SSD, 32GB RAM', 'Lorem 16 ipsum dolor sit amet, consectetur adipisicing elit. Ipsum temporibus iusto ipsa, asperiores voluptas unde aspernatur praesentium in? Aliquam, dolore!', 246006.00, 'products/April2022/laptop-16.jpg', NULL, 0, '2022-04-13 04:03:42', '2022-04-13 04:03:42'),
(17, 'Laptop 17', 'laptop-17', '14 inch, 2 TB SSD, 32GB RAM', 'Lorem 17 ipsum dolor sit amet, consectetur adipisicing elit. Ipsum temporibus iusto ipsa, asperiores voluptas unde aspernatur praesentium in? Aliquam, dolore!', 217810.00, 'products/April2022/laptop-17.jpg', NULL, 0, '2022-04-13 04:03:42', '2022-04-13 04:03:42'),
(18, 'Laptop 18', 'laptop-18', '14 inch, 2 TB SSD, 32GB RAM', 'Lorem 18 ipsum dolor sit amet, consectetur adipisicing elit. Ipsum temporibus iusto ipsa, asperiores voluptas unde aspernatur praesentium in? Aliquam, dolore!', 210819.00, 'products/April2022/laptop-18.jpg', NULL, 0, '2022-04-13 04:03:42', '2022-04-13 04:03:42'),
(19, 'Laptop 19', 'laptop-19', '15 inch, 2 TB SSD, 32GB RAM', 'Lorem 19 ipsum dolor sit amet, consectetur adipisicing elit. Ipsum temporibus iusto ipsa, asperiores voluptas unde aspernatur praesentium in? Aliquam, dolore!', 199221.00, 'products/April2022/laptop-19.jpg', NULL, 0, '2022-04-13 04:03:42', '2022-04-13 04:03:42'),
(20, 'Laptop 20', 'laptop-20', '15 inch, 3 TB SSD, 32GB RAM', 'Lorem 20 ipsum dolor sit amet, consectetur adipisicing elit. Ipsum temporibus iusto ipsa, asperiores voluptas unde aspernatur praesentium in? Aliquam, dolore!', 212565.00, 'products/April2022/laptop-20.jpg', NULL, 0, '2022-04-13 04:03:42', '2022-04-13 04:03:42'),
(21, 'Laptop 21', 'laptop-21', '13 inch, 3 TB SSD, 32GB RAM', 'Lorem 21 ipsum dolor sit amet, consectetur adipisicing elit. Ipsum temporibus iusto ipsa, asperiores voluptas unde aspernatur praesentium in? Aliquam, dolore!', 156230.00, 'products/April2022/laptop-21.jpg', NULL, 0, '2022-04-13 04:03:42', '2022-04-13 04:03:42'),
(22, 'Laptop 22', 'laptop-22', '13 inch, 2 TB SSD, 32GB RAM', 'Lorem 22 ipsum dolor sit amet, consectetur adipisicing elit. Ipsum temporibus iusto ipsa, asperiores voluptas unde aspernatur praesentium in? Aliquam, dolore!', 174736.00, 'products/April2022/laptop-22.jpg', NULL, 0, '2022-04-13 04:03:42', '2022-04-13 04:03:42'),
(23, 'Laptop 23', 'laptop-23', '14 inch, 3 TB SSD, 32GB RAM', 'Lorem 23 ipsum dolor sit amet, consectetur adipisicing elit. Ipsum temporibus iusto ipsa, asperiores voluptas unde aspernatur praesentium in? Aliquam, dolore!', 248518.00, 'products/April2022/laptop-23.jpg', NULL, 0, '2022-04-13 04:03:42', '2022-04-13 04:03:42'),
(24, 'Laptop 24', 'laptop-24', '13 inch, 2 TB SSD, 32GB RAM', 'Lorem 24 ipsum dolor sit amet, consectetur adipisicing elit. Ipsum temporibus iusto ipsa, asperiores voluptas unde aspernatur praesentium in? Aliquam, dolore!', 218407.00, 'products/April2022/laptop-24.jpg', NULL, 0, '2022-04-13 04:03:42', '2022-04-13 04:03:42'),
(25, 'Laptop 25', 'laptop-25', '15 inch, 2 TB SSD, 32GB RAM', 'Lorem 25 ipsum dolor sit amet, consectetur adipisicing elit. Ipsum temporibus iusto ipsa, asperiores voluptas unde aspernatur praesentium in? Aliquam, dolore!', 195818.00, 'products/April2022/laptop-25.jpg', NULL, 0, '2022-04-13 04:03:43', '2022-04-13 04:03:43'),
(26, 'Laptop 26', 'laptop-26', '15 inch, 2 TB SSD, 32GB RAM', 'Lorem 26 ipsum dolor sit amet, consectetur adipisicing elit. Ipsum temporibus iusto ipsa, asperiores voluptas unde aspernatur praesentium in? Aliquam, dolore!', 219221.00, 'products/April2022/laptop-26.jpg', NULL, 0, '2022-04-13 04:03:43', '2022-04-13 04:03:43'),
(27, 'Laptop 27', 'laptop-27', '14 inch, 3 TB SSD, 32GB RAM', 'Lorem 27 ipsum dolor sit amet, consectetur adipisicing elit. Ipsum temporibus iusto ipsa, asperiores voluptas unde aspernatur praesentium in? Aliquam, dolore!', 216985.00, 'products/April2022/laptop-27.jpg', NULL, 0, '2022-04-13 04:03:43', '2022-04-13 04:03:43'),
(28, 'Laptop 28', 'laptop-28', '13 inch, 1 TB SSD, 32GB RAM', 'Lorem 28 ipsum dolor sit amet, consectetur adipisicing elit. Ipsum temporibus iusto ipsa, asperiores voluptas unde aspernatur praesentium in? Aliquam, dolore!', 202822.00, 'products/April2022/laptop-28.jpg', NULL, 0, '2022-04-13 04:03:43', '2022-04-13 04:03:43'),
(29, 'Laptop 29', 'laptop-29', '14 inch, 2 TB SSD, 32GB RAM', 'Lorem 29 ipsum dolor sit amet, consectetur adipisicing elit. Ipsum temporibus iusto ipsa, asperiores voluptas unde aspernatur praesentium in? Aliquam, dolore!', 212559.00, 'products/April2022/laptop-29.jpg', NULL, 0, '2022-04-13 04:03:43', '2022-04-13 04:03:43'),
(30, 'Laptop 30', 'laptop-30', '13 inch, 1 TB SSD, 32GB RAM', 'Lorem 30 ipsum dolor sit amet, consectetur adipisicing elit. Ipsum temporibus iusto ipsa, asperiores voluptas unde aspernatur praesentium in? Aliquam, dolore!', 157765.00, 'products/April2022/laptop-30.jpg', NULL, 0, '2022-04-13 04:03:43', '2022-04-13 04:03:43'),
(31, 'Desktop 1', 'desktop-1', '27 inch, 1 TB SSD, 32GB RAM', 'Lorem 1 ipsum dolor sit amet, consectetur adipisicing elit. Ipsum temporibus iusto ipsa, asperiores voluptas unde aspernatur praesentium in? Aliquam, dolore!', 375577.00, 'products/April2022/desktop-1.jpg', NULL, 0, '2022-04-13 04:03:43', '2022-04-13 04:03:43'),
(32, 'Desktop 2', 'desktop-2', '25 inch, 3 TB SSD, 32GB RAM', 'Lorem 2 ipsum dolor sit amet, consectetur adipisicing elit. Ipsum temporibus iusto ipsa, asperiores voluptas unde aspernatur praesentium in? Aliquam, dolore!', 282289.00, 'products/April2022/desktop-2.jpg', NULL, 0, '2022-04-13 04:03:43', '2022-04-13 04:03:43'),
(33, 'Desktop 3', 'desktop-3', '25 inch, 3 TB SSD, 32GB RAM', 'Lorem 3 ipsum dolor sit amet, consectetur adipisicing elit. Ipsum temporibus iusto ipsa, asperiores voluptas unde aspernatur praesentium in? Aliquam, dolore!', 369186.00, 'products/April2022/desktop-3.jpg', NULL, 0, '2022-04-13 04:03:44', '2022-04-13 04:03:44'),
(34, 'Desktop 4', 'desktop-4', '25 inch, 2 TB SSD, 32GB RAM', 'Lorem 4 ipsum dolor sit amet, consectetur adipisicing elit. Ipsum temporibus iusto ipsa, asperiores voluptas unde aspernatur praesentium in? Aliquam, dolore!', 277378.00, 'products/April2022/desktop-4.jpg', NULL, 0, '2022-04-13 04:03:44', '2022-04-13 04:03:44'),
(35, 'Desktop 5', 'desktop-5', '25 inch, 1 TB SSD, 32GB RAM', 'Lorem 5 ipsum dolor sit amet, consectetur adipisicing elit. Ipsum temporibus iusto ipsa, asperiores voluptas unde aspernatur praesentium in? Aliquam, dolore!', 274539.00, 'products/April2022/desktop-5.jpg', NULL, 0, '2022-04-13 04:03:44', '2022-04-13 04:03:44'),
(36, 'Desktop 6', 'desktop-6', '27 inch, 3 TB SSD, 32GB RAM', 'Lorem 6 ipsum dolor sit amet, consectetur adipisicing elit. Ipsum temporibus iusto ipsa, asperiores voluptas unde aspernatur praesentium in? Aliquam, dolore!', 302716.00, 'products/April2022/desktop-6.jpg', NULL, 0, '2022-04-13 04:03:44', '2022-04-13 04:03:44'),
(37, 'Desktop 7', 'desktop-7', '25 inch, 2 TB SSD, 32GB RAM', 'Lorem 7 ipsum dolor sit amet, consectetur adipisicing elit. Ipsum temporibus iusto ipsa, asperiores voluptas unde aspernatur praesentium in? Aliquam, dolore!', 337820.00, 'products/April2022/desktop-7.jpg', NULL, 0, '2022-04-13 04:03:44', '2022-04-13 04:03:44'),
(38, 'Desktop 8', 'desktop-8', '25 inch, 3 TB SSD, 32GB RAM', 'Lorem 8 ipsum dolor sit amet, consectetur adipisicing elit. Ipsum temporibus iusto ipsa, asperiores voluptas unde aspernatur praesentium in? Aliquam, dolore!', 256657.00, 'products/April2022/desktop-8.jpg', NULL, 0, '2022-04-13 04:03:44', '2022-04-13 04:03:44'),
(39, 'Desktop 9', 'desktop-9', '24 inch, 1 TB SSD, 32GB RAM', 'Lorem 9 ipsum dolor sit amet, consectetur adipisicing elit. Ipsum temporibus iusto ipsa, asperiores voluptas unde aspernatur praesentium in? Aliquam, dolore!', 292468.00, 'products/April2022/desktop-9.jpg', NULL, 0, '2022-04-13 04:03:44', '2022-04-13 04:03:44'),
(40, 'Phone 1', 'phone-1', '16GB, 5.7 inch screen, 4GHz Quad Core', 'Lorem 1 ipsum dolor sit amet, consectetur adipisicing elit. Ipsum temporibus iusto ipsa, asperiores voluptas unde aspernatur praesentium in? Aliquam, dolore!', 139266.00, 'products/April2022/phone-1.jpg', NULL, 0, '2022-04-13 04:03:45', '2022-04-13 04:03:45'),
(41, 'Phone 2', 'phone-2', '16GB, 5.7 inch screen, 4GHz Quad Core', 'Lorem 2 ipsum dolor sit amet, consectetur adipisicing elit. Ipsum temporibus iusto ipsa, asperiores voluptas unde aspernatur praesentium in? Aliquam, dolore!', 127159.00, 'products/April2022/phone-2.jpg', NULL, 0, '2022-04-13 04:03:45', '2022-04-13 04:03:45'),
(42, 'Phone 3', 'phone-3', '16GB, 5.9 inch screen, 4GHz Quad Core', 'Lorem 3 ipsum dolor sit amet, consectetur adipisicing elit. Ipsum temporibus iusto ipsa, asperiores voluptas unde aspernatur praesentium in? Aliquam, dolore!', 133860.00, 'products/April2022/phone-3.jpg', NULL, 0, '2022-04-13 04:03:45', '2022-04-13 04:03:45'),
(43, 'Phone 4', 'phone-4', '64GB, 5.9 inch screen, 4GHz Quad Core', 'Lorem 4 ipsum dolor sit amet, consectetur adipisicing elit. Ipsum temporibus iusto ipsa, asperiores voluptas unde aspernatur praesentium in? Aliquam, dolore!', 107090.00, 'products/April2022/phone-4.jpg', NULL, 0, '2022-04-13 04:03:45', '2022-04-13 04:03:45'),
(44, 'Phone 5', 'phone-5', '64GB, 5.9 inch screen, 4GHz Quad Core', 'Lorem 5 ipsum dolor sit amet, consectetur adipisicing elit. Ipsum temporibus iusto ipsa, asperiores voluptas unde aspernatur praesentium in? Aliquam, dolore!', 107582.00, 'products/April2022/phone-5.jpg', NULL, 0, '2022-04-13 04:03:45', '2022-04-13 04:03:45'),
(45, 'Phone 6', 'phone-6', '32GB, 5.8 inch screen, 4GHz Quad Core', 'Lorem 6 ipsum dolor sit amet, consectetur adipisicing elit. Ipsum temporibus iusto ipsa, asperiores voluptas unde aspernatur praesentium in? Aliquam, dolore!', 99427.00, 'products/April2022/phone-6.jpg', NULL, 0, '2022-04-13 04:03:45', '2022-04-13 04:03:45'),
(46, 'Phone 7', 'phone-7', '64GB, 5.7 inch screen, 4GHz Quad Core', 'Lorem 7 ipsum dolor sit amet, consectetur adipisicing elit. Ipsum temporibus iusto ipsa, asperiores voluptas unde aspernatur praesentium in? Aliquam, dolore!', 114728.00, 'products/April2022/phone-7.jpg', NULL, 0, '2022-04-13 04:03:45', '2022-04-13 04:03:45'),
(47, 'Phone 8', 'phone-8', '64GB, 5.8 inch screen, 4GHz Quad Core', 'Lorem 8 ipsum dolor sit amet, consectetur adipisicing elit. Ipsum temporibus iusto ipsa, asperiores voluptas unde aspernatur praesentium in? Aliquam, dolore!', 148356.00, 'products/April2022/phone-8.jpg', NULL, 0, '2022-04-13 04:03:45', '2022-04-13 04:03:45'),
(48, 'Phone 9', 'phone-9', '32GB, 5.7 inch screen, 4GHz Quad Core', 'Lorem 9 ipsum dolor sit amet, consectetur adipisicing elit. Ipsum temporibus iusto ipsa, asperiores voluptas unde aspernatur praesentium in? Aliquam, dolore!', 135097.00, 'products/April2022/phone-9.jpg', NULL, 0, '2022-04-13 04:03:45', '2022-04-13 04:03:45'),
(49, 'Tablet 1', 'tablet-1', '64GB, 5.10 inch screen, 4GHz Quad Core', 'Lorem 1 ipsum dolor sit amet, consectetur adipisicing elit. Ipsum temporibus iusto ipsa, asperiores voluptas unde aspernatur praesentium in? Aliquam, dolore!', 128965.00, 'products/April2022/tablet-1.jpg', NULL, 0, '2022-04-13 04:03:46', '2022-04-13 04:03:46'),
(50, 'Tablet 2', 'tablet-2', '32GB, 5.12 inch screen, 4GHz Quad Core', 'Lorem 2 ipsum dolor sit amet, consectetur adipisicing elit. Ipsum temporibus iusto ipsa, asperiores voluptas unde aspernatur praesentium in? Aliquam, dolore!', 97601.00, 'products/April2022/tablet-2.jpg', NULL, 0, '2022-04-13 04:03:46', '2022-04-13 04:03:46'),
(51, 'Tablet 3', 'tablet-3', '32GB, 5.12 inch screen, 4GHz Quad Core', 'Lorem 3 ipsum dolor sit amet, consectetur adipisicing elit. Ipsum temporibus iusto ipsa, asperiores voluptas unde aspernatur praesentium in? Aliquam, dolore!', 111807.00, 'products/April2022/tablet-3.jpg', NULL, 0, '2022-04-13 04:03:46', '2022-04-13 04:03:46'),
(52, 'Tablet 4', 'tablet-4', '16GB, 5.10 inch screen, 4GHz Quad Core', 'Lorem 4 ipsum dolor sit amet, consectetur adipisicing elit. Ipsum temporibus iusto ipsa, asperiores voluptas unde aspernatur praesentium in? Aliquam, dolore!', 101567.00, 'products/April2022/tablet-4.jpg', NULL, 0, '2022-04-13 04:03:46', '2022-04-13 04:03:46'),
(53, 'Tablet 5', 'tablet-5', '16GB, 5.10 inch screen, 4GHz Quad Core', 'Lorem 5 ipsum dolor sit amet, consectetur adipisicing elit. Ipsum temporibus iusto ipsa, asperiores voluptas unde aspernatur praesentium in? Aliquam, dolore!', 146505.00, 'products/April2022/tablet-5.jpg', NULL, 0, '2022-04-13 04:03:46', '2022-04-13 04:03:46'),
(54, 'Tablet 6', 'tablet-6', '16GB, 5.11 inch screen, 4GHz Quad Core', 'Lorem 6 ipsum dolor sit amet, consectetur adipisicing elit. Ipsum temporibus iusto ipsa, asperiores voluptas unde aspernatur praesentium in? Aliquam, dolore!', 125206.00, 'products/April2022/tablet-6.jpg', NULL, 0, '2022-04-13 04:03:46', '2022-04-13 04:03:46'),
(55, 'Tablet 7', 'tablet-7', '64GB, 5.12 inch screen, 4GHz Quad Core', 'Lorem 7 ipsum dolor sit amet, consectetur adipisicing elit. Ipsum temporibus iusto ipsa, asperiores voluptas unde aspernatur praesentium in? Aliquam, dolore!', 128839.00, 'products/April2022/tablet-7.jpg', NULL, 0, '2022-04-13 04:03:46', '2022-04-13 04:03:46'),
(56, 'Tablet 8', 'tablet-8', '16GB, 5.12 inch screen, 4GHz Quad Core', 'Lorem 8 ipsum dolor sit amet, consectetur adipisicing elit. Ipsum temporibus iusto ipsa, asperiores voluptas unde aspernatur praesentium in? Aliquam, dolore!', 116061.00, 'products/April2022/tablet-8.jpg', NULL, 0, '2022-04-13 04:03:46', '2022-04-13 04:03:46'),
(57, 'Tablet 9', 'tablet-9', '64GB, 5.10 inch screen, 4GHz Quad Core', 'Lorem 9 ipsum dolor sit amet, consectetur adipisicing elit. Ipsum temporibus iusto ipsa, asperiores voluptas unde aspernatur praesentium in? Aliquam, dolore!', 139223.00, 'products/April2022/tablet-9.jpg', NULL, 0, '2022-04-13 04:03:47', '2022-04-13 04:03:47'),
(58, 'TV 1', 'tv-1', '46 inch screen, Smart TV, 4K', 'Lorem 1 ipsum dolor sit amet, consectetur adipisicing elit. Ipsum temporibus iusto ipsa, asperiores voluptas unde aspernatur praesentium in? Aliquam, dolore!', 96317.00, 'products/April2022/tv-1.jpg', NULL, 0, '2022-04-13 04:03:47', '2022-04-13 04:03:47'),
(59, 'TV 2', 'tv-2', '60 inch screen, Smart TV, 4K', 'Lorem 2 ipsum dolor sit amet, consectetur adipisicing elit. Ipsum temporibus iusto ipsa, asperiores voluptas unde aspernatur praesentium in? Aliquam, dolore!', 116560.00, 'products/April2022/tv-2.jpg', NULL, 0, '2022-04-13 04:03:47', '2022-04-13 04:03:47'),
(60, 'TV 3', 'tv-3', '60 inch screen, Smart TV, 4K', 'Lorem 3 ipsum dolor sit amet, consectetur adipisicing elit. Ipsum temporibus iusto ipsa, asperiores voluptas unde aspernatur praesentium in? Aliquam, dolore!', 98036.00, 'products/April2022/tv-3.jpg', NULL, 0, '2022-04-13 04:03:47', '2022-04-13 04:03:47'),
(61, 'TV 4', 'tv-4', '50 inch screen, Smart TV, 4K', 'Lorem 4 ipsum dolor sit amet, consectetur adipisicing elit. Ipsum temporibus iusto ipsa, asperiores voluptas unde aspernatur praesentium in? Aliquam, dolore!', 98465.00, 'products/April2022/tv-4.jpg', NULL, 0, '2022-04-13 04:03:47', '2022-04-13 04:03:47'),
(62, 'TV 5', 'tv-5', '46 inch screen, Smart TV, 4K', 'Lorem 5 ipsum dolor sit amet, consectetur adipisicing elit. Ipsum temporibus iusto ipsa, asperiores voluptas unde aspernatur praesentium in? Aliquam, dolore!', 96312.00, 'products/April2022/tv-5.jpg', NULL, 0, '2022-04-13 04:03:47', '2022-04-13 04:03:47'),
(63, 'TV 6', 'tv-6', '60 inch screen, Smart TV, 4K', 'Lorem 6 ipsum dolor sit amet, consectetur adipisicing elit. Ipsum temporibus iusto ipsa, asperiores voluptas unde aspernatur praesentium in? Aliquam, dolore!', 122523.00, 'products/April2022/tv-6.jpg', NULL, 0, '2022-04-13 04:03:47', '2022-04-13 04:03:47'),
(64, 'TV 7', 'tv-7', '46 inch screen, Smart TV, 4K', 'Lorem 7 ipsum dolor sit amet, consectetur adipisicing elit. Ipsum temporibus iusto ipsa, asperiores voluptas unde aspernatur praesentium in? Aliquam, dolore!', 93950.00, 'products/April2022/tv-7.jpg', NULL, 0, '2022-04-13 04:03:47', '2022-04-13 04:03:47'),
(65, 'TV 8', 'tv-8', '46 inch screen, Smart TV, 4K', 'Lorem 8 ipsum dolor sit amet, consectetur adipisicing elit. Ipsum temporibus iusto ipsa, asperiores voluptas unde aspernatur praesentium in? Aliquam, dolore!', 112963.00, 'products/April2022/tv-8.jpg', NULL, 0, '2022-04-13 04:03:47', '2022-04-13 04:03:47'),
(66, 'TV 9', 'tv-9', '60 inch screen, Smart TV, 4K', 'Lorem 9 ipsum dolor sit amet, consectetur adipisicing elit. Ipsum temporibus iusto ipsa, asperiores voluptas unde aspernatur praesentium in? Aliquam, dolore!', 86193.00, 'products/April2022/tv-9.jpg', NULL, 0, '2022-04-13 04:03:47', '2022-04-13 04:03:47'),
(67, 'Camera 1', 'camera-1', 'Full Frame DSLR, with 18-55mm kit lens.', 'Lorem 1 ipsum dolor sit amet, consectetur adipisicing elit. Ipsum temporibus iusto ipsa, asperiores voluptas unde aspernatur praesentium in? Aliquam, dolore!', 145853.00, 'products/April2022/camera-1.jpg', NULL, 0, '2022-04-13 04:03:48', '2022-04-13 04:03:48'),
(68, 'Camera 2', 'camera-2', 'Full Frame DSLR, with 18-55mm kit lens.', 'Lorem 2 ipsum dolor sit amet, consectetur adipisicing elit. Ipsum temporibus iusto ipsa, asperiores voluptas unde aspernatur praesentium in? Aliquam, dolore!', 158939.00, 'products/April2022/camera-2.jpg', NULL, 0, '2022-04-13 04:03:48', '2022-04-13 04:03:48'),
(69, 'Camera 3', 'camera-3', 'Full Frame DSLR, with 18-55mm kit lens.', 'Lorem 3 ipsum dolor sit amet, consectetur adipisicing elit. Ipsum temporibus iusto ipsa, asperiores voluptas unde aspernatur praesentium in? Aliquam, dolore!', 192019.00, 'products/April2022/camera-3.jpg', NULL, 0, '2022-04-13 04:03:48', '2022-04-13 04:03:48'),
(70, 'Camera 4', 'camera-4', 'Full Frame DSLR, with 18-55mm kit lens.', 'Lorem 4 ipsum dolor sit amet, consectetur adipisicing elit. Ipsum temporibus iusto ipsa, asperiores voluptas unde aspernatur praesentium in? Aliquam, dolore!', 179997.00, 'products/April2022/camera-4.jpg', NULL, 0, '2022-04-13 04:03:48', '2022-04-13 04:03:48'),
(71, 'Camera 5', 'camera-5', 'Full Frame DSLR, with 18-55mm kit lens.', 'Lorem 5 ipsum dolor sit amet, consectetur adipisicing elit. Ipsum temporibus iusto ipsa, asperiores voluptas unde aspernatur praesentium in? Aliquam, dolore!', 127037.00, 'products/April2022/camera-5.jpg', NULL, 0, '2022-04-13 04:03:48', '2022-04-13 04:03:48'),
(72, 'Camera 6', 'camera-6', 'Full Frame DSLR, with 18-55mm kit lens.', 'Lorem 6 ipsum dolor sit amet, consectetur adipisicing elit. Ipsum temporibus iusto ipsa, asperiores voluptas unde aspernatur praesentium in? Aliquam, dolore!', 168825.00, 'products/April2022/camera-6.jpg', NULL, 0, '2022-04-13 04:03:48', '2022-04-13 04:03:48'),
(73, 'Camera 7', 'camera-7', 'Full Frame DSLR, with 18-55mm kit lens.', 'Lorem 7 ipsum dolor sit amet, consectetur adipisicing elit. Ipsum temporibus iusto ipsa, asperiores voluptas unde aspernatur praesentium in? Aliquam, dolore!', 174183.00, 'products/April2022/camera-7.jpg', NULL, 0, '2022-04-13 04:03:48', '2022-04-13 04:03:48'),
(74, 'Camera 8', 'camera-8', 'Full Frame DSLR, with 18-55mm kit lens.', 'Lorem 8 ipsum dolor sit amet, consectetur adipisicing elit. Ipsum temporibus iusto ipsa, asperiores voluptas unde aspernatur praesentium in? Aliquam, dolore!', 209812.00, 'products/April2022/camera-8.jpg', NULL, 0, '2022-04-13 04:03:49', '2022-04-13 04:03:49'),
(75, 'Camera 9', 'camera-9', 'Full Frame DSLR, with 18-55mm kit lens.', 'Lorem 9 ipsum dolor sit amet, consectetur adipisicing elit. Ipsum temporibus iusto ipsa, asperiores voluptas unde aspernatur praesentium in? Aliquam, dolore!', 175755.00, 'products/April2022/camera-9.jpg', NULL, 0, '2022-04-13 04:03:49', '2022-04-13 04:03:49'),
(76, 'Appliance 1', 'appliance-1', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, dolorum!', 'Lorem 1 ipsum dolor sit amet, consectetur adipisicing elit. Ipsum temporibus iusto ipsa, asperiores voluptas unde aspernatur praesentium in? Aliquam, dolore!', 119257.00, 'products/April2022/appliance-1.jpg', NULL, 0, '2022-04-13 04:03:49', '2022-04-13 04:03:49'),
(77, 'Appliance 2', 'appliance-2', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, dolorum!', 'Lorem 2 ipsum dolor sit amet, consectetur adipisicing elit. Ipsum temporibus iusto ipsa, asperiores voluptas unde aspernatur praesentium in? Aliquam, dolore!', 137638.00, 'products/April2022/appliance-2.jpg', NULL, 0, '2022-04-13 04:03:49', '2022-04-13 04:03:49'),
(78, 'Appliance 3', 'appliance-3', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, dolorum!', 'Lorem 3 ipsum dolor sit amet, consectetur adipisicing elit. Ipsum temporibus iusto ipsa, asperiores voluptas unde aspernatur praesentium in? Aliquam, dolore!', 113828.00, 'products/April2022/appliance-3.jpg', NULL, 0, '2022-04-13 04:03:49', '2022-04-13 04:03:49'),
(79, 'Appliance 4', 'appliance-4', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, dolorum!', 'Lorem 4 ipsum dolor sit amet, consectetur adipisicing elit. Ipsum temporibus iusto ipsa, asperiores voluptas unde aspernatur praesentium in? Aliquam, dolore!', 130112.00, 'products/April2022/appliance-4.jpg', NULL, 0, '2022-04-13 04:03:49', '2022-04-13 04:03:49'),
(80, 'Appliance 5', 'appliance-5', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, dolorum!', 'Lorem 5 ipsum dolor sit amet, consectetur adipisicing elit. Ipsum temporibus iusto ipsa, asperiores voluptas unde aspernatur praesentium in? Aliquam, dolore!', 90929.00, 'products/April2022/appliance-5.jpg', NULL, 0, '2022-04-13 04:03:49', '2022-04-13 04:03:49'),
(81, 'Appliance 6', 'appliance-6', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, dolorum!', 'Lorem 6 ipsum dolor sit amet, consectetur adipisicing elit. Ipsum temporibus iusto ipsa, asperiores voluptas unde aspernatur praesentium in? Aliquam, dolore!', 97360.00, 'products/April2022/appliance-6.jpg', NULL, 0, '2022-04-13 04:03:50', '2022-04-13 04:03:50'),
(82, 'Appliance 7', 'appliance-7', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, dolorum!', 'Lorem 7 ipsum dolor sit amet, consectetur adipisicing elit. Ipsum temporibus iusto ipsa, asperiores voluptas unde aspernatur praesentium in? Aliquam, dolore!', 110571.00, 'products/April2022/appliance-7.jpg', NULL, 0, '2022-04-13 04:03:50', '2022-04-13 04:03:50'),
(83, 'Appliance 8', 'appliance-8', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, dolorum!', 'Lorem 8 ipsum dolor sit amet, consectetur adipisicing elit. Ipsum temporibus iusto ipsa, asperiores voluptas unde aspernatur praesentium in? Aliquam, dolore!', 106834.00, 'products/April2022/appliance-8.jpg', NULL, 0, '2022-04-13 04:03:50', '2022-04-13 04:03:50'),
(84, 'Appliance 9', 'appliance-9', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, dolorum!', 'Lorem 9 ipsum dolor sit amet, consectetur adipisicing elit. Ipsum temporibus iusto ipsa, asperiores voluptas unde aspernatur praesentium in? Aliquam, dolore!', 115696.00, 'products/April2022/appliance-9.jpg', NULL, 0, '2022-04-13 04:03:51', '2022-04-13 04:03:51'),
(85, 'New Product', 'new-product', 'Details here', '<p>more details about project here</p>', 1000.00, 'products/April2022/P4VTvGTu8WPbAF04u1bw.jpeg', NULL, 0, '2022-04-13 04:05:32', '2022-04-13 05:01:42'),
(86, 'Another one', 'another-one', 'Details', '<p>Description</p>', 1000.00, 'products/April2022/IxEIhaFUJP9SgaUuy0b4.jpeg', NULL, 1, '2022-04-13 13:04:20', '2022-04-14 02:23:23'),
(87, 'Another two', 'another-two', 'Details', '<p>Description</p>', 1000.00, 'products/April2022/a1EgZ1AnQnacOW2kraly.jpeg', NULL, 1, '2022-04-14 02:24:28', '2022-04-14 16:16:17'),
(88, 'new one again', 'new-one-again', 'Details', '<p>Description</p>', 2000.99, 'products/April2022/JhZdIa8rLX60ZS3DvbiW.jpeg', NULL, 1, '2022-04-14 16:34:36', '2022-04-17 02:52:56');

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `display_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`id`, `name`, `display_name`, `created_at`, `updated_at`) VALUES
(1, 'admin', 'Administrator', '2022-03-23 18:36:22', '2022-03-23 18:36:22'),
(2, 'user', 'Normal User', '2022-03-23 18:36:22', '2022-03-23 18:36:22');

-- --------------------------------------------------------

--
-- Table structure for table `settings`
--

CREATE TABLE `settings` (
  `id` int(10) UNSIGNED NOT NULL,
  `key` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `display_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `value` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `details` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `order` int(11) NOT NULL DEFAULT 1,
  `group` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `settings`
--

INSERT INTO `settings` (`id`, `key`, `display_name`, `value`, `details`, `type`, `order`, `group`) VALUES
(1, 'site.title', 'Site Title', 'Site Title', '', 'text', 1, 'Site'),
(2, 'site.description', 'Site Description', 'Site Description', '', 'text', 2, 'Site'),
(3, 'site.logo', 'Site Logo', '', '', 'image', 3, 'Site'),
(4, 'site.google_analytics_tracking_id', 'Google Analytics Tracking ID', NULL, '', 'text', 4, 'Site'),
(5, 'admin.bg_image', 'Admin Background Image', '', '', 'image', 5, 'Admin'),
(6, 'admin.title', 'Admin Title', 'Abdulrahman', '', 'text', 1, 'Admin'),
(7, 'admin.description', 'Admin Description', 'Welcome to the Admin.', '', 'text', 2, 'Admin'),
(8, 'admin.loader', 'Admin Loader', '', '', 'image', 3, 'Admin'),
(9, 'admin.icon_image', 'Admin Icon Image', '', '', 'image', 4, 'Admin'),
(10, 'admin.google_analytics_client_id', 'Google Analytics Client ID (used for admin dashboard)', NULL, '', 'text', 1, 'Admin');

-- --------------------------------------------------------

--
-- Table structure for table `translations`
--

CREATE TABLE `translations` (
  `id` int(10) UNSIGNED NOT NULL,
  `table_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `column_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `foreign_key` int(10) UNSIGNED NOT NULL,
  `locale` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `value` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `translations`
--

INSERT INTO `translations` (`id`, `table_name`, `column_name`, `foreign_key`, `locale`, `value`, `created_at`, `updated_at`) VALUES
(1, 'data_types', 'display_name_singular', 5, 'pt', 'Post', '2022-03-23 18:36:31', '2022-03-23 18:36:31'),
(2, 'data_types', 'display_name_singular', 6, 'pt', 'Página', '2022-03-23 18:36:31', '2022-03-23 18:36:31'),
(3, 'data_types', 'display_name_singular', 1, 'pt', 'Utilizador', '2022-03-23 18:36:31', '2022-03-23 18:36:31'),
(4, 'data_types', 'display_name_singular', 4, 'pt', 'Categoria', '2022-03-23 18:36:31', '2022-03-23 18:36:31'),
(5, 'data_types', 'display_name_singular', 2, 'pt', 'Menu', '2022-03-23 18:36:31', '2022-03-23 18:36:31'),
(6, 'data_types', 'display_name_singular', 3, 'pt', 'Função', '2022-03-23 18:36:31', '2022-03-23 18:36:31'),
(7, 'data_types', 'display_name_plural', 5, 'pt', 'Posts', '2022-03-23 18:36:31', '2022-03-23 18:36:31'),
(8, 'data_types', 'display_name_plural', 6, 'pt', 'Páginas', '2022-03-23 18:36:31', '2022-03-23 18:36:31'),
(9, 'data_types', 'display_name_plural', 1, 'pt', 'Utilizadores', '2022-03-23 18:36:31', '2022-03-23 18:36:31'),
(10, 'data_types', 'display_name_plural', 4, 'pt', 'Categorias', '2022-03-23 18:36:31', '2022-03-23 18:36:31'),
(11, 'data_types', 'display_name_plural', 2, 'pt', 'Menus', '2022-03-23 18:36:31', '2022-03-23 18:36:31'),
(12, 'data_types', 'display_name_plural', 3, 'pt', 'Funções', '2022-03-23 18:36:31', '2022-03-23 18:36:31'),
(13, 'categories', 'slug', 1, 'pt', 'categoria-1', '2022-03-23 18:36:32', '2022-03-23 18:36:32'),
(14, 'categories', 'name', 1, 'pt', 'Categoria 1', '2022-03-23 18:36:32', '2022-03-23 18:36:32'),
(15, 'categories', 'slug', 2, 'pt', 'categoria-2', '2022-03-23 18:36:32', '2022-03-23 18:36:32'),
(16, 'categories', 'name', 2, 'pt', 'Categoria 2', '2022-03-23 18:36:32', '2022-03-23 18:36:32'),
(17, 'pages', 'title', 1, 'pt', 'Olá Mundo', '2022-03-23 18:36:32', '2022-03-23 18:36:32'),
(18, 'pages', 'slug', 1, 'pt', 'ola-mundo', '2022-03-23 18:36:32', '2022-03-23 18:36:32'),
(19, 'pages', 'body', 1, 'pt', '<p>Olá Mundo. Scallywag grog swab Cat o\'nine tails scuttle rigging hardtack cable nipper Yellow Jack. Handsomely spirits knave lad killick landlubber or just lubber deadlights chantey pinnace crack Jennys tea cup. Provost long clothes black spot Yellow Jack bilged on her anchor league lateen sail case shot lee tackle.</p>\r\n<p>Ballast spirits fluke topmast me quarterdeck schooner landlubber or just lubber gabion belaying pin. Pinnace stern galleon starboard warp carouser to go on account dance the hempen jig jolly boat measured fer yer chains. Man-of-war fire in the hole nipperkin handsomely doubloon barkadeer Brethren of the Coast gibbet driver squiffy.</p>', '2022-03-23 18:36:32', '2022-03-23 18:36:32'),
(20, 'menu_items', 'title', 1, 'pt', 'Painel de Controle', '2022-03-23 18:36:32', '2022-03-23 18:36:32'),
(21, 'menu_items', 'title', 2, 'pt', 'Media', '2022-03-23 18:36:32', '2022-03-23 18:36:32'),
(22, 'menu_items', 'title', 12, 'pt', 'Publicações', '2022-03-23 18:36:32', '2022-03-23 18:36:32'),
(23, 'menu_items', 'title', 3, 'pt', 'Utilizadores', '2022-03-23 18:36:32', '2022-03-23 18:36:32'),
(24, 'menu_items', 'title', 11, 'pt', 'Categorias', '2022-03-23 18:36:32', '2022-03-23 18:36:32'),
(25, 'menu_items', 'title', 13, 'pt', 'Páginas', '2022-03-23 18:36:32', '2022-03-23 18:36:32'),
(26, 'menu_items', 'title', 4, 'pt', 'Funções', '2022-03-23 18:36:32', '2022-03-23 18:36:32'),
(27, 'menu_items', 'title', 5, 'pt', 'Ferramentas', '2022-03-23 18:36:32', '2022-03-23 18:36:32'),
(28, 'menu_items', 'title', 6, 'pt', 'Menus', '2022-03-23 18:36:32', '2022-03-23 18:36:32'),
(29, 'menu_items', 'title', 7, 'pt', 'Base de dados', '2022-03-23 18:36:32', '2022-03-23 18:36:32'),
(30, 'menu_items', 'title', 10, 'pt', 'Configurações', '2022-03-23 18:36:32', '2022-03-23 18:36:32');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `role_id` bigint(20) UNSIGNED DEFAULT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `avatar` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT 'users/default.png',
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `settings` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `role_id`, `name`, `email`, `avatar`, `email_verified_at`, `password`, `remember_token`, `settings`, `created_at`, `updated_at`) VALUES
(1, 1, 'Admin', 'admin@admin.com', 'users/default.png', NULL, '$2y$10$e6im9UNHbt7.sxLTgyTaw.NhegHhsP.vNCb5tayuL606l4wZwl.9C', 'aspxlPlB63ligti5KweAA6L7aIXRbmu0YvwL343CsUvOVxbtNtctMryC58Hz', NULL, '2022-03-23 18:36:27', '2022-03-23 18:36:27'),
(2, 2, 'user', 'user@user.com', 'users/default.png', NULL, '$2y$10$g60FKbGsrR.PaHn3PI5cN.nKzSyeM6lUoZPk.nHiMuw9p3z3ax6dq', NULL, NULL, '2022-04-07 07:56:44', '2022-04-07 07:56:46'),
(3, 2, 'Abdulrahman', 'abdulrahman@gmail.com', 'users/default.png', NULL, '$2y$10$5E4iowXtbDDBXK0PdeGfQ.lJtdHf2uoI4iAAQHAa6tjHOHK9IFYyC', NULL, NULL, '2022-04-07 08:02:02', '2022-04-07 08:02:03');

-- --------------------------------------------------------

--
-- Table structure for table `user_roles`
--

CREATE TABLE `user_roles` (
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `role_id` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `categories_slug_unique` (`slug`),
  ADD KEY `categories_parent_id_foreign` (`parent_id`);

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `category_name_unique` (`name`),
  ADD UNIQUE KEY `category_slug_unique` (`slug`);

--
-- Indexes for table `category_product`
--
ALTER TABLE `category_product`
  ADD PRIMARY KEY (`id`),
  ADD KEY `category_product_product_id_foreign` (`product_id`),
  ADD KEY `category_product_category_id_foreign` (`category_id`);

--
-- Indexes for table `coupons`
--
ALTER TABLE `coupons`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `coupons_code_unique` (`code`);

--
-- Indexes for table `data_rows`
--
ALTER TABLE `data_rows`
  ADD PRIMARY KEY (`id`),
  ADD KEY `data_rows_data_type_id_foreign` (`data_type_id`);

--
-- Indexes for table `data_types`
--
ALTER TABLE `data_types`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `data_types_name_unique` (`name`),
  ADD UNIQUE KEY `data_types_slug_unique` (`slug`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `menus`
--
ALTER TABLE `menus`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `menus_name_unique` (`name`);

--
-- Indexes for table `menu_items`
--
ALTER TABLE `menu_items`
  ADD PRIMARY KEY (`id`),
  ADD KEY `menu_items_menu_id_foreign` (`menu_id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `pages`
--
ALTER TABLE `pages`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `pages_slug_unique` (`slug`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `permissions`
--
ALTER TABLE `permissions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `permissions_key_index` (`key`);

--
-- Indexes for table `permission_role`
--
ALTER TABLE `permission_role`
  ADD PRIMARY KEY (`permission_id`,`role_id`),
  ADD KEY `permission_role_permission_id_index` (`permission_id`),
  ADD KEY `permission_role_role_id_index` (`role_id`);

--
-- Indexes for table `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `posts_slug_unique` (`slug`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `products_name_unique` (`name`),
  ADD UNIQUE KEY `products_slug_unique` (`slug`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `roles_name_unique` (`name`);

--
-- Indexes for table `settings`
--
ALTER TABLE `settings`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `settings_key_unique` (`key`);

--
-- Indexes for table `translations`
--
ALTER TABLE `translations`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `translations_table_name_column_name_foreign_key_locale_unique` (`table_name`,`column_name`,`foreign_key`,`locale`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`),
  ADD KEY `users_role_id_foreign` (`role_id`);

--
-- Indexes for table `user_roles`
--
ALTER TABLE `user_roles`
  ADD PRIMARY KEY (`user_id`,`role_id`),
  ADD KEY `user_roles_user_id_index` (`user_id`),
  ADD KEY `user_roles_role_id_index` (`role_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `category_product`
--
ALTER TABLE `category_product`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=551;

--
-- AUTO_INCREMENT for table `coupons`
--
ALTER TABLE `coupons`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `data_rows`
--
ALTER TABLE `data_rows`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=83;

--
-- AUTO_INCREMENT for table `data_types`
--
ALTER TABLE `data_types`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `menus`
--
ALTER TABLE `menus`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `menu_items`
--
ALTER TABLE `menu_items`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT for table `pages`
--
ALTER TABLE `pages`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `permissions`
--
ALTER TABLE `permissions`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=61;

--
-- AUTO_INCREMENT for table `posts`
--
ALTER TABLE `posts`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=89;

--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `settings`
--
ALTER TABLE `settings`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `translations`
--
ALTER TABLE `translations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `categories`
--
ALTER TABLE `categories`
  ADD CONSTRAINT `categories_parent_id_foreign` FOREIGN KEY (`parent_id`) REFERENCES `categories` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `category_product`
--
ALTER TABLE `category_product`
  ADD CONSTRAINT `category_product_category_id_foreign` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `category_product_product_id_foreign` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `data_rows`
--
ALTER TABLE `data_rows`
  ADD CONSTRAINT `data_rows_data_type_id_foreign` FOREIGN KEY (`data_type_id`) REFERENCES `data_types` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `menu_items`
--
ALTER TABLE `menu_items`
  ADD CONSTRAINT `menu_items_menu_id_foreign` FOREIGN KEY (`menu_id`) REFERENCES `menus` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `permission_role`
--
ALTER TABLE `permission_role`
  ADD CONSTRAINT `permission_role_permission_id_foreign` FOREIGN KEY (`permission_id`) REFERENCES `permissions` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `permission_role_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`);

--
-- Constraints for table `user_roles`
--
ALTER TABLE `user_roles`
  ADD CONSTRAINT `user_roles_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `user_roles_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
