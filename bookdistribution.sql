-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 16, 2023 at 08:50 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bookdistribution`
--

-- --------------------------------------------------------

--
-- Table structure for table `distributed_books`
--

CREATE TABLE `distributed_books` (
  `id` int(11) NOT NULL,
  `class` int(11) NOT NULL,
  `roll` int(11) NOT NULL,
  `bangla` tinyint(1) NOT NULL,
  `english` tinyint(1) NOT NULL,
  `math` tinyint(1) NOT NULL,
  `science` tinyint(1) NOT NULL,
  `social_science` tinyint(1) NOT NULL,
  `religion` tinyint(1) DEFAULT NULL,
  `comment` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `distributed_books`
--

INSERT INTO `distributed_books` (`id`, `class`, `roll`, `bangla`, `english`, `math`, `science`, `social_science`, `religion`, `comment`) VALUES
(1, 2, 234234, 1, 1, 0, 0, 0, NULL, '43534');

-- --------------------------------------------------------

--
-- Table structure for table `students`
--

CREATE TABLE `students` (
  `id` int(11) NOT NULL,
  `class` int(11) NOT NULL,
  `first_name` varchar(20) NOT NULL,
  `last_name` varchar(20) NOT NULL,
  `roll` int(11) NOT NULL,
  `phone` int(11) NOT NULL,
  `father_name` varchar(20) NOT NULL,
  `mother_name` varchar(25) NOT NULL,
  `address` varchar(255) NOT NULL,
  `comment` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `students`
--

INSERT INTO `students` (`id`, `class`, `first_name`, `last_name`, `roll`, `phone`, `father_name`, `mother_name`, `address`, `comment`) VALUES
(1, 1, 'Maruf', 'Nahid', 223, 1521727413, 'Jhon Doe', 'Elon', 'Khulna 9203', '232'),
(2, 2, 'Jhon', 'Doe', 2323, 1726171412, 'Jhon Doe', 'Elon', 'Khulna 9203', 'dsdfs');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `distributed_books`
--
ALTER TABLE `distributed_books`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `students`
--
ALTER TABLE `students`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `roll` (`roll`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `distributed_books`
--
ALTER TABLE `distributed_books`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `students`
--
ALTER TABLE `students`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;


/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
