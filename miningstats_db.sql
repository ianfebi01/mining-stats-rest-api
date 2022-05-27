-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: May 23, 2022 at 12:13 PM
-- Server version: 5.7.34
-- PHP Version: 7.4.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `miningstats_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `cost`
--

CREATE TABLE `cost` (
  `id` int(11) NOT NULL,
  `detail` varchar(200) DEFAULT NULL,
  `price` double DEFAULT NULL,
  `date` date DEFAULT NULL,
  `createdAt` date DEFAULT NULL,
  `updatedAt` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `cost`
--

INSERT INTO `cost` (`id`, `detail`, `price`, `date`, `createdAt`, `updatedAt`) VALUES
(9, 'Kuota', 0.0005, '2022-01-21', '2022-05-23', '2022-05-23'),
(11, 'Kuota', 0.0005, '2022-02-21', '2022-05-23', '2022-05-23'),
(12, 'Kuota', 0.0005, '2022-03-21', '2022-05-23', '2022-05-23'),
(13, 'Kuota', 0.0005, '2022-04-21', '2022-05-23', '2022-05-23'),
(14, 'Kuota', 0.0005, '2022-05-01', '2022-05-23', '2022-05-23'),
(15, 'Listrik', 0.0066, '2022-01-31', '2022-05-23', '2022-05-23'),
(16, 'Listrik', 0.0066, '2022-02-28', '2022-05-23', '2022-05-23'),
(17, 'Listrik', 0.0066, '2022-03-31', '2022-05-23', '2022-05-23'),
(18, 'Listrik', 0.0066, '2022-04-30', '2022-05-23', '2022-05-23');

-- --------------------------------------------------------

--
-- Table structure for table `incomes`
--

CREATE TABLE `incomes` (
  `id` int(11) NOT NULL,
  `value` double DEFAULT NULL,
  `fee` double DEFAULT NULL,
  `date` date DEFAULT NULL,
  `createdAt` date DEFAULT NULL,
  `updatedAt` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `incomes`
--

INSERT INTO `incomes` (`id`, `value`, `fee`, `date`, `createdAt`, `updatedAt`) VALUES
(10, 0.0350768, 0.00083, '2022-02-05', '2022-05-23', '2022-05-23'),
(11, 0.01909045, 0.00049, '2022-02-27', '2022-05-23', '2022-05-23'),
(12, 0.00499, 0.00067, '2022-03-06', '2022-05-23', '2022-05-23'),
(13, 0.01121, 0.00048, '2022-03-20', '2022-05-23', '2022-05-23'),
(14, 0.00529, 0.00043, '2022-03-27', '2022-05-23', '2022-05-23'),
(15, 0.01049, 0.00048, '2022-04-11', '2022-05-23', '2022-05-23'),
(16, 0.01058, 0.00059, '2022-04-26', '2022-05-23', '2022-05-23'),
(17, 0.02043, 0.00024, '2022-05-22', '2022-05-23', '2022-05-23');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cost`
--
ALTER TABLE `cost`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `incomes`
--
ALTER TABLE `incomes`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cost`
--
ALTER TABLE `cost`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `incomes`
--
ALTER TABLE `incomes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
