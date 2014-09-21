-- phpMyAdmin SQL Dump
-- version 4.1.6
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Erstellungszeit: 21. Sep 2014 um 11:20
-- Server Version: 5.6.16
-- PHP-Version: 5.5.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Datenbank: `llbec`
--

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `art`
--

CREATE TABLE IF NOT EXISTS `art` (
  `id` int(2) NOT NULL AUTO_INCREMENT,
  `Name` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=5 ;

--
-- Daten für Tabelle `art`
--

INSERT INTO `art` (`id`, `Name`) VALUES
(1, 'Restaurant'),
(2, 'Bar'),
(3, 'Club'),
(4, 'Sonstiges');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `eventkommentare`
--

CREATE TABLE IF NOT EXISTS `eventkommentare` (
  `Id` int(5) NOT NULL AUTO_INCREMENT,
  `Text` varchar(200) NOT NULL,
  `Writer` varchar(50) NOT NULL,
  `EventId` int(11) NOT NULL,
  `Timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=53 ;

--
-- Daten für Tabelle `eventkommentare`
--

INSERT INTO `eventkommentare` (`Id`, `Text`, `Writer`, `EventId`, `Timestamp`) VALUES
(38, 'eins', 'eins', 326, '2014-08-16 20:21:30'),
(39, 'zwei', 'zwei', 331, '2014-08-16 20:22:20'),
(44, 'drei', 'drei', 331, '2014-08-16 20:49:44'),
(45, 'vier', 'vier', 331, '2014-08-16 20:51:59'),
(46, 'sieben', 'acht', 331, '2014-08-16 20:52:10'),
(47, 'zwei', 'zwei', 326, '2014-08-16 20:52:50'),
(48, 'drei', 'drei', 326, '2014-08-16 20:52:54'),
(49, 'vier', 'fuenf', 326, '2014-08-16 20:53:00'),
(50, '', '', 0, '2014-08-27 20:04:42'),
(51, '', '', 0, '2014-08-27 20:07:49'),
(52, 'd', 'ddd', 326, '2014-09-13 10:53:07');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `events`
--

CREATE TABLE IF NOT EXISTS `events` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Name` varchar(100) NOT NULL,
  `Description` varchar(200) NOT NULL,
  `Specials` varchar(200) NOT NULL,
  `Date` date NOT NULL,
  `Uhrzeit` varchar(30) NOT NULL,
  `Turnus` int(1) NOT NULL,
  `Location` int(5) NOT NULL,
  `Likes` int(5) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=358 ;

--
-- Daten für Tabelle `events`
--

INSERT INTO `events` (`Id`, `Name`, `Description`, `Specials`, `Date`, `Uhrzeit`, `Turnus`, `Location`, `Likes`) VALUES
(44, 'theatro', 'theatro', 'theatro', '2014-06-01', '12-8', 0, 5, 0),
(45, 'myers', 'myers', 'myers', '2014-06-01', '5-18', 0, 6, 0),
(46, 'zur forelle', 'zur forelle', 'zur forelle', '2014-06-01', '23-13', 0, 4, 0),
(48, 'tortuga', 'tortuga', 'tortuga', '2014-06-01', '19-5', 0, 7, 0),
(51, 'choclet', 'choclet', 'choclet', '2014-06-01', '3-6', 0, 10, 0),
(52, 'citrus', 'citrus', 'citrus', '2014-06-01', '19-3', 0, 11, 0),
(54, 'roxy', 'roxy', 'roxy', '2014-06-01', '15-22', 0, 12, 0),
(55, 'wiley', 'wiley', 'wiley', '2013-06-01', '19-2', 0, 14, 0),
(56, 'olga', 'olga', 'olga', '2014-06-01', '10-22', 0, 17, 0),
(57, 'schloessle', 'schloessle', 'schloessle', '2014-06-01', '18-9', 0, 15, 0),
(60, 'joes', 'joes', 'joes', '2014-06-01', '20-24', 0, 19, 0),
(61, 'cinemaxx', 'cinemaxx', 'cinemaxx', '2014-06-01', '11-19', 0, 20, 0),
(62, 'barfÃ¼ÃŸer neu ulm', 'barfÃ¼ÃŸer neu ulm', 'barfÃ¼ÃŸer neu ulm', '2014-06-01', '24-23', 0, 21, 0),
(63, 'konzertsaal', 'konzertsaal', 'konzertsaal', '2014-06-01', '17-6', 0, 22, 0),
(64, 'theatro', 'theatro', 'theatro', '2013-06-02', '24-11', 0, 5, 0),
(65, 'myers', 'myers', 'myers', '2014-06-02', '17-8', 0, 6, 0),
(66, 'tortuga', 'tortuga', 'tortuga', '2013-06-02', '15-8', 0, 7, 0),
(67, 'zur forelle', 'zur forelle', 'zur forelle', '2014-06-02', '17-22', 0, 4, 0),
(68, 'capos', 'capos', 'capos', '2014-06-02', '17-7', 0, 3, 0),
(69, 'Barfuesser', 'Barfuesser', 'Barfuesser', '2013-06-02', '11-14', 0, 2, 0),
(70, 'mÃ¼nster', 'mÃ¼nster', 'mÃ¼nster', '2013-06-02', '11-12', 0, 9, 0),
(71, 'Theater', 'Theater', 'Theater', '2013-06-02', '13-10', 0, 8, 0),
(72, 'choclet', 'choclet', 'choclet', '2013-06-02', '3-4', 0, 10, 0),
(73, 'roxy', 'roxy', 'roxy', '2014-06-02', '4-8', 0, 12, 0),
(74, 'citrus', 'citrus', 'citrus', '2014-06-02', '13-9', 0, 11, 0),
(75, 'bla', 'bla', 'bla', '2013-06-02', '24-5', 0, 13, 0),
(76, 'wiley', 'wiley', 'wiley', '2013-06-02', '15-19', 0, 14, 0),
(77, 'schloessle', 'schloessle', 'schloessle', '2014-06-02', '4-13', 0, 15, 0),
(78, 'olga', 'olga', 'olga', '2013-06-02', '7-10', 0, 18, 0),
(79, 'olga', 'olga', 'olga', '2014-06-02', '11-15', 0, 17, 0),
(80, 'cinemaxx', 'cinemaxx', 'cinemaxx', '2014-06-02', '13-20', 0, 20, 0),
(81, 'joes', 'joes', 'joes', '2014-06-02', '24-17', 0, 19, 0),
(82, 'barfÃ¼ÃŸer neu ulm', 'barfÃ¼ÃŸer neu ulm', 'barfÃ¼ÃŸer neu ulm', '2013-06-02', '21-8', 0, 21, 0),
(83, 'olga', 'olga', 'olga', '2013-06-02', '9-17', 0, 16, 0),
(84, 'konzertsaal', 'konzertsaal', 'konzertsaal', '2014-06-02', '18-1', 0, 22, 0),
(85, 'theatro', 'theatro', 'theatro', '2013-06-25', '19-1', 0, 5, 0),
(86, 'capos', 'capos', 'capos', '2013-06-25', '20-21', 0, 3, 0),
(87, 'tortuga', 'tortuga', 'tortuga', '2013-06-25', '22-15', 0, 7, 0),
(88, 'Barfuesser', 'Barfuesser', 'Barfuesser', '2013-06-25', '17-19', 0, 2, 0),
(89, 'myers', 'myers', 'myers', '2014-06-25', '13-23', 0, 6, 0),
(90, 'zur forelle', 'zur forelle', 'zur forelle', '2013-06-25', '7-18', 0, 4, 0),
(91, 'Theater', 'Theater', 'Theater', '2014-06-25', '16-1', 0, 8, 0),
(92, 'mÃ¼nster', 'mÃ¼nster', 'mÃ¼nster', '2014-06-25', '9-22', 0, 9, 0),
(93, 'choclet', 'choclet', 'choclet', '2013-06-25', '9-13', 0, 10, 0),
(94, 'bla', 'bla', 'bla', '2014-06-25', '10-8', 0, 13, 0),
(95, 'citrus', 'citrus', 'citrus', '2013-06-25', '13-12', 0, 11, 0),
(96, 'wiley', 'wiley', 'wiley', '2014-06-25', '21-15', 0, 14, 0),
(97, 'schloessle', 'schloessle', 'schloessle', '2014-06-25', '22-14', 0, 15, 0),
(98, 'roxy', 'roxy', 'roxy', '2013-06-25', '4-15', 0, 12, 0),
(99, 'olga', 'olga', 'olga', '2013-06-25', '1-17', 0, 16, 0),
(100, 'olga', 'olga', 'olga', '2013-06-25', '11-8', 0, 17, 0),
(101, 'olga', 'olga', 'olga', '2014-06-25', '21-22', 0, 18, 0),
(102, 'joes', 'joes', 'joes', '2014-06-25', '11-7', 0, 19, 0),
(103, 'cinemaxx', 'cinemaxx', 'cinemaxx', '2014-06-25', '19-4', 0, 20, 0),
(104, 'barfÃ¼ÃŸer neu ulm', 'barfÃ¼ÃŸer neu ulm', 'barfÃ¼ÃŸer neu ulm', '2013-06-25', '10-8', 0, 21, 0),
(105, 'konzertsaal', 'konzertsaal', 'konzertsaal', '2014-06-25', '23-12', 0, 22, 0),
(106, 'tortuga', 'tortuga', 'tortuga', '2014-07-07', '20-23', 0, 7, 0),
(107, 'Barfuesser', 'Barfuesser', 'Barfuesser', '2014-07-07', '7-3', 0, 2, 0),
(108, 'theatro', 'theatro', 'theatro', '2013-07-07', '11-6', 0, 5, 0),
(109, 'myers', 'myers', 'myers', '2013-07-07', '3-24', 0, 6, 0),
(110, 'zur forelle', 'zur forelle', 'zur forelle', '2014-07-07', '3-18', 0, 4, 0),
(111, 'capos', 'capos', 'capos', '2014-07-07', '20-12', 0, 3, 0),
(112, 'Theater', 'Theater', 'Theater', '2014-07-07', '11-9', 0, 8, 0),
(113, 'bla', 'bla', 'bla', '2014-07-07', '14-2', 0, 13, 0),
(114, 'citrus', 'citrus', 'citrus', '2013-07-07', '19-12', 0, 11, 0),
(115, 'wiley', 'wiley', 'wiley', '2014-07-07', '15-13', 0, 14, 0),
(116, 'roxy', 'roxy', 'roxy', '2013-07-07', '23-7', 0, 12, 0),
(117, 'choclet', 'choclet', 'choclet', '2014-07-07', '13-23', 0, 10, 0),
(118, 'mÃ¼nster', 'mÃ¼nster', 'mÃ¼nster', '2013-07-07', '23-17', 0, 9, 0),
(119, 'Barfuesser', 'Barfuesser', 'Barfuesser', '2014-07-07', '9-12', 0, 2, 0),
(120, 'capos', 'capos', 'capos', '2014-07-07', '10-14', 0, 3, 0),
(121, 'zur forelle', 'zur forelle', 'zur forelle', '2013-07-07', '20-5', 0, 4, 0),
(122, 'tortuga', 'tortuga', 'tortuga', '2014-07-07', '11-23', 0, 7, 0),
(123, 'myers', 'myers', 'myers', '2013-07-07', '10-3', 0, 6, 0),
(124, 'theatro', 'theatro', 'theatro', '2014-07-07', '20-7', 0, 5, 0),
(125, 'Theater', 'Theater', 'Theater', '2013-07-07', '8-12', 0, 8, 0),
(126, 'mÃ¼nster', 'mÃ¼nster', 'mÃ¼nster', '2014-07-07', '3-5', 0, 9, 0),
(127, 'citrus', 'citrus', 'citrus', '2013-07-07', '17-20', 0, 11, 0),
(128, 'choclet', 'choclet', 'choclet', '2014-07-07', '7-7', 0, 10, 0),
(129, 'roxy', 'roxy', 'roxy', '2013-07-07', '7-5', 0, 12, 0),
(130, 'bla', 'bla', 'bla', '2013-07-07', '14-21', 0, 13, 0),
(131, 'schloessle', 'schloessle', 'schloessle', '2014-07-07', '2-11', 0, 15, 0),
(132, 'olga', 'olga', 'olga', '2013-07-07', '19-12', 0, 16, 0),
(133, 'olga', 'olga', 'olga', '2013-07-07', '8-7', 0, 17, 0),
(134, 'olga', 'olga', 'olga', '2013-07-07', '13-16', 0, 18, 0),
(135, 'wiley', 'wiley', 'wiley', '2013-07-07', '11-23', 0, 14, 0),
(136, 'joes', 'joes', 'joes', '2014-07-07', '2-8', 0, 19, 0),
(137, 'barfÃ¼ÃŸer neu ulm', 'barfÃ¼ÃŸer neu ulm', 'barfÃ¼ÃŸer neu ulm', '2013-07-07', '17-24', 0, 21, 0),
(138, 'cinemaxx', 'cinemaxx', 'cinemaxx', '2013-07-07', '22-8', 0, 20, 0),
(139, 'konzertsaal', 'konzertsaal', 'konzertsaal', '2013-07-07', '16-10', 0, 22, 0),
(140, 'Barfuesser', 'Barfuesser', 'Barfuesser', '2013-07-08', '10-24', 0, 2, 0),
(141, 'capos', 'capos', 'capos', '2013-07-08', '5-10', 0, 3, 0),
(142, 'tortuga', 'tortuga', 'tortuga', '2014-07-08', '1-13', 0, 7, 0),
(143, 'myers', 'myers', 'myers', '2014-07-08', '7-12', 0, 6, 0),
(144, 'zur forelle', 'zur forelle', 'zur forelle', '2014-07-08', '21-14', 0, 4, 0),
(145, 'theatro', 'theatro', 'theatro', '2013-07-08', '21-5', 0, 5, 0),
(146, 'mÃ¼nster', 'mÃ¼nster', 'mÃ¼nster', '2014-07-08', '9-11', 0, 9, 0),
(147, 'choclet', 'choclet', 'choclet', '2014-07-08', '7-10', 0, 10, 0),
(148, 'citrus', 'citrus', 'citrus', '2013-07-08', '20-23', 0, 11, 0),
(149, 'bla', 'bla', 'bla', '2014-07-08', '10-11', 0, 13, 0),
(150, 'wiley', 'wiley', 'wiley', '2014-07-08', '22-6', 0, 14, 0),
(151, 'roxy', 'roxy', 'roxy', '2014-07-08', '9-19', 0, 12, 0),
(152, 'schloessle', 'schloessle', 'schloessle', '2013-07-08', '22-15', 0, 15, 0),
(153, 'olga', 'olga', 'olga', '2014-07-08', '15-19', 0, 16, 0),
(154, 'olga', 'olga', 'olga', '2014-07-08', '2-5', 0, 18, 0),
(155, 'joes', 'joes', 'joes', '2014-07-08', '20-14', 0, 19, 0),
(156, 'cinemaxx', 'cinemaxx', 'cinemaxx', '2014-07-08', '22-7', 0, 20, 0),
(157, 'olga', 'olga', 'olga', '2013-07-08', '20-24', 0, 17, 0),
(158, 'barfÃ¼ÃŸer neu ulm', 'barfÃ¼ÃŸer neu ulm', 'barfÃ¼ÃŸer neu ulm', '2013-07-08', '20-4', 0, 21, 0),
(159, 'konzertsaal', 'konzertsaal', 'konzertsaal', '2013-07-08', '9-13', 0, 22, 0),
(160, 'Theater', 'Theater', 'Theater', '2014-07-08', '17-1', 0, 8, 0),
(161, 'tortuga', 'tortuga', 'tortuga', '2014-07-09', '17-14', 0, 7, 0),
(162, 'capos', 'capos', 'capos', '2013-07-09', '12-1', 0, 3, 0),
(163, 'Barfuesser', 'Barfuesser', 'Barfuesser', '2013-07-09', '17-17', 0, 2, 0),
(164, 'myers', 'myers', 'myers', '2013-07-09', '21-21', 0, 6, 0),
(165, 'zur forelle', 'zur forelle', 'zur forelle', '2013-07-09', '10-15', 0, 4, 0),
(166, 'theatro', 'theatro', 'theatro', '2014-07-09', '10-22', 0, 5, 0),
(167, 'mÃ¼nster', 'mÃ¼nster', 'mÃ¼nster', '2014-07-09', '22-13', 0, 9, 0),
(168, 'citrus', 'citrus', 'citrus', '2014-07-09', '23-9', 0, 11, 0),
(169, 'choclet', 'choclet', 'choclet', '2013-07-09', '10-22', 0, 10, 0),
(170, 'bla', 'bla', 'bla', '2014-07-09', '9-1', 0, 13, 0),
(171, 'roxy', 'roxy', 'roxy', '2013-07-09', '17-23', 0, 12, 0),
(172, 'olga', 'olga', 'olga', '2013-07-09', '15-7', 0, 17, 0),
(173, 'wiley', 'wiley', 'wiley', '2013-07-09', '2-21', 0, 14, 0),
(174, 'olga', 'olga', 'olga', '2014-07-09', '23-14', 0, 16, 0),
(175, 'schloessle', 'schloessle', 'schloessle', '2013-07-09', '22-24', 0, 15, 0),
(176, 'joes', 'joes', 'joes', '2013-07-09', '2-21', 0, 19, 0),
(177, 'olga', 'olga', 'olga', '2014-07-09', '3-9', 0, 18, 0),
(178, 'cinemaxx', 'cinemaxx', 'cinemaxx', '2013-07-09', '4-9', 0, 20, 0),
(179, 'barfÃ¼ÃŸer neu ulm', 'barfÃ¼ÃŸer neu ulm', 'barfÃ¼ÃŸer neu ulm', '2014-07-09', '22-21', 0, 21, 0),
(180, 'konzertsaal', 'konzertsaal', 'konzertsaal', '2014-07-09', '2-4', 0, 22, 0),
(181, 'Theater', 'Theater', 'Theater', '2013-07-09', '7-15', 0, 8, 0),
(182, 'theatro', 'theatro', 'theatro', '2013-07-10', '3-16', 0, 5, 0),
(183, 'capos', 'capos', 'capos', '2013-07-10', '7-10', 0, 3, 0),
(184, 'zur forelle', 'zur forelle', 'zur forelle', '2014-07-10', '4-3', 0, 4, 0),
(185, 'myers', 'myers', 'myers', '2013-07-10', '20-16', 0, 6, 0),
(186, 'mÃ¼nster', 'mÃ¼nster', 'mÃ¼nster', '2013-07-10', '19-22', 0, 9, 0),
(187, 'citrus', 'citrus', 'citrus', '2013-07-10', '17-21', 0, 11, 0),
(188, 'Theater', 'Theater', 'Theater', '2013-07-10', '11-4', 0, 8, 0),
(189, 'roxy', 'roxy', 'roxy', '2013-07-10', '16-24', 0, 12, 0),
(190, 'tortuga', 'tortuga', 'tortuga', '2013-07-10', '12-14', 0, 7, 0),
(191, 'Barfuesser', 'Barfuesser', 'Barfuesser', '2014-07-10', '11-16', 0, 2, 0),
(192, 'choclet', 'choclet', 'choclet', '2014-07-10', '14-4', 0, 10, 0),
(193, 'bla', 'bla', 'bla', '2014-07-10', '20-21', 0, 13, 0),
(194, 'wiley', 'wiley', 'wiley', '2014-07-10', '13-9', 0, 14, 0),
(195, 'olga', 'olga', 'olga', '2013-07-10', '3-12', 0, 18, 0),
(196, 'olga', 'olga', 'olga', '2014-07-10', '11-12', 0, 16, 0),
(197, 'schloessle', 'schloessle', 'schloessle', '2013-07-10', '14-3', 0, 15, 0),
(198, 'olga', 'olga', 'olga', '2013-07-10', '24-15', 0, 17, 0),
(199, 'konzertsaal', 'konzertsaal', 'konzertsaal', '2014-07-10', '10-15', 0, 22, 0),
(200, 'joes', 'joes', 'joes', '2013-07-10', '6-1', 0, 19, 0),
(201, 'cinemaxx', 'cinemaxx', 'cinemaxx', '2014-07-10', '2-1', 0, 20, 0),
(202, 'barfÃ¼ÃŸer neu ulm', 'barfÃ¼ÃŸer neu ulm', 'barfÃ¼ÃŸer neu ulm', '2014-07-10', '15-22', 0, 21, 0),
(203, 'tortuga', 'tortuga', 'tortuga', '2014-07-11', '4-12', 0, 7, 0),
(204, 'capos', 'capos', 'capos', '2013-07-11', '4-19', 0, 3, 0),
(205, 'zur forelle', 'zur forelle', 'zur forelle', '2014-07-11', '5-3', 0, 4, 0),
(206, 'theatro', 'theatro', 'theatro', '2013-07-11', '5-6', 0, 5, 0),
(207, 'Barfuesser', 'Barfuesser', 'Barfuesser', '2014-07-11', '15-6', 0, 2, 0),
(208, 'myers', 'myers', 'myers', '2014-07-11', '3-12', 0, 6, 0),
(209, 'Theater', 'Theater', 'Theater', '2014-07-11', '7-8', 0, 8, 0),
(210, 'mÃ¼nster', 'mÃ¼nster', 'mÃ¼nster', '2013-07-11', '23-13', 0, 9, 0),
(211, 'choclet', 'choclet', 'choclet', '2013-07-11', '6-11', 0, 10, 0),
(212, 'bla', 'bla', 'bla', '2014-07-11', '5-11', 0, 13, 0),
(213, 'citrus', 'citrus', 'citrus', '2013-07-11', '11-5', 0, 11, 0),
(214, 'roxy', 'roxy', 'roxy', '2014-07-11', '16-1', 0, 12, 0),
(215, 'wiley', 'wiley', 'wiley', '2014-07-11', '13-5', 0, 14, 0),
(216, 'schloessle', 'schloessle', 'schloessle', '2014-07-11', '13-12', 0, 15, 0),
(217, 'olga', 'olga', 'olga', '2014-07-11', '18-5', 0, 16, 0),
(218, 'olga', 'olga', 'olga', '2014-07-11', '5-6', 0, 18, 0),
(219, 'joes', 'joes', 'joes', '2013-07-11', '4-11', 0, 19, 0),
(220, 'cinemaxx', 'cinemaxx', 'cinemaxx', '2013-07-11', '1-5', 0, 20, 0),
(221, 'olga', 'olga', 'olga', '2014-07-11', '13-11', 0, 17, 0),
(222, 'barfÃ¼ÃŸer neu ulm', 'barfÃ¼ÃŸer neu ulm', 'barfÃ¼ÃŸer neu ulm', '2013-07-11', '4-5', 0, 21, 0),
(223, 'konzertsaal', 'konzertsaal', 'konzertsaal', '2014-07-11', '2-24', 0, 22, 0),
(224, 'tortuga', 'tortuga', 'tortuga', '2013-07-23', '5-19', 0, 7, 0),
(225, 'theatro', 'theatro', 'theatro', '2013-07-23', '24-21', 0, 5, 0),
(226, 'capos', 'capos', 'capos', '2014-07-23', '17-9', 0, 3, 0),
(227, 'Barfuesser', 'Barfuesser', 'Barfuesser', '2013-07-23', '22-14', 0, 2, 0),
(228, 'zur forelle', 'zur forelle', 'zur forelle', '2014-07-23', '3-12', 0, 4, 0),
(229, 'myers', 'myers', 'myers', '2014-07-23', '19-19', 0, 6, 0),
(230, 'Theater', 'Theater', 'Theater', '2014-07-23', '1-9', 0, 8, 0),
(231, 'choclet', 'choclet', 'choclet', '2014-07-23', '4-4', 0, 10, 0),
(232, 'mÃ¼nster', 'mÃ¼nster', 'mÃ¼nster', '2013-07-23', '8-17', 0, 9, 0),
(233, 'citrus', 'citrus', 'citrus', '2013-07-23', '2-8', 0, 11, 0),
(234, 'roxy', 'roxy', 'roxy', '2013-07-23', '5-23', 0, 12, 0),
(235, 'bla', 'bla', 'bla', '2013-07-23', '14-15', 0, 13, 0),
(236, 'wiley', 'wiley', 'wiley', '2013-07-23', '12-10', 0, 14, 0),
(237, 'olga', 'olga', 'olga', '2013-07-23', '9-17', 0, 16, 0),
(238, 'olga', 'olga', 'olga', '2014-07-23', '9-1', 0, 17, 0),
(239, 'olga', 'olga', 'olga', '2014-07-23', '11-22', 0, 18, 0),
(240, 'joes', 'joes', 'joes', '2014-07-23', '8-2', 0, 19, 0),
(241, 'cinemaxx', 'cinemaxx', 'cinemaxx', '2014-07-23', '16-22', 0, 20, 0),
(242, 'schloessle', 'schloessle', 'schloessle', '2013-07-23', '7-10', 0, 15, 0),
(243, 'barfÃ¼ÃŸer neu ulm', 'barfÃ¼ÃŸer neu ulm', 'barfÃ¼ÃŸer neu ulm', '2013-07-23', '8-1', 0, 21, 0),
(244, 'konzertsaal', 'konzertsaal', 'konzertsaal', '2014-07-23', '7-9', 0, 22, 0),
(245, 'bla', 'bla', 'bla', '2013-07-23', '18-19', 0, 23, 0),
(246, 'bla', 'bla', 'bla', '2014-07-23', '22-16', 0, 24, 0),
(247, 'Barfuesser', 'Barfuesser', 'Barfuesser', '2013-08-12', '6-23', 0, 2, 0),
(248, 'capos', 'capos', 'capos', '2014-08-12', '10-3', 0, 3, 0),
(249, 'myers', 'myers', 'myers', '2013-08-12', '18-24', 0, 6, 0),
(250, 'zur forelle', 'zur forelle', 'zur forelle', '2014-08-12', '21-22', 0, 4, 0),
(251, 'theatro', 'theatro', 'theatro', '2014-08-12', '20-23', 0, 5, 0),
(252, 'tortuga', 'tortuga', 'tortuga', '2013-08-12', '15-9', 0, 7, 0),
(253, 'citrus', 'citrus', 'citrus', '2013-08-12', '11-17', 0, 11, 0),
(254, 'Theater', 'Theater', 'Theater', '2013-08-12', '23-20', 0, 8, 0),
(255, 'choclet', 'choclet', 'choclet', '2014-08-12', '11-1', 0, 10, 0),
(256, 'mÃ¼nster', 'mÃ¼nster', 'mÃ¼nster', '2013-08-12', '7-5', 0, 9, 0),
(257, 'roxy', 'roxy', 'roxy', '2013-08-12', '2-11', 0, 12, 0),
(258, 'olga', 'olga', 'olga', '2014-08-12', '20-10', 0, 17, 0),
(259, 'olga', 'olga', 'olga', '2013-08-12', '13-23', 0, 18, 0),
(260, 'bla', 'bla', 'bla', '2013-08-12', '23-10', 0, 13, 0),
(261, 'schloessle', 'schloessle', 'schloessle', '2014-08-12', '20-1', 0, 15, 0),
(262, 'wiley', 'wiley', 'wiley', '2014-08-12', '4-14', 0, 14, 0),
(263, 'joes', 'joes', 'joes', '2013-08-12', '21-22', 0, 19, 0),
(264, 'olga', 'olga', 'olga', '2013-08-12', '3-2', 0, 16, 0),
(265, 'cinemaxx', 'cinemaxx', 'cinemaxx', '2013-08-12', '3-15', 0, 20, 0),
(266, 'barfÃ¼ÃŸer neu ulm', 'barfÃ¼ÃŸer neu ulm', 'barfÃ¼ÃŸer neu ulm', '2013-08-12', '12-20', 0, 21, 0),
(267, 'konzertsaal', 'konzertsaal', 'konzertsaal', '2014-08-12', '7-15', 0, 22, 0),
(268, 'bla', 'bla', 'bla', '2014-08-12', '5-2', 0, 23, 0),
(269, 'bla', 'bla', 'bla', '2014-08-12', '1-8', 0, 24, 0),
(272, 'tortuga', '', 'tortuga', '2013-08-14', '13-8', 0, 7, 0),
(273, 'myers', '', 'myers', '2013-08-14', '24-22', 0, 6, 0),
(274, 'theatro', '', 'theatro', '2013-08-14', '12-16', 0, 5, 0),
(275, 'capos', '', 'capos', '2013-08-14', '18-15', 0, 3, 0),
(276, 'zur forelle', '', 'zur forelle', '2013-08-14', '3-11', 0, 4, 0),
(277, 'Barfuesser', '', 'Barfuesser', '2013-08-14', '2-9', 0, 2, 0),
(278, 'mÃ¼nster', '', 'mÃ¼nster', '2013-08-14', '15-3', 0, 9, 0),
(279, 'Theater', '', 'Theater', '2014-08-14', '4-12', 0, 8, 0),
(280, 'choclet', '', 'choclet', '2013-08-14', '9-19', 0, 10, 0),
(281, 'citrus', '', 'citrus', '2014-08-14', '2-2', 0, 11, 0),
(282, 'roxy', '', 'roxy', '2013-08-14', '19-16', 0, 12, 0),
(283, 'bla', '', 'bla', '2013-08-14', '4-13', 0, 13, 0),
(284, 'wiley', '', 'wiley', '2014-08-14', '3-19', 0, 14, 0),
(285, 'olga', '', 'olga', '2013-08-14', '10-17', 0, 16, 0),
(286, 'schloessle', '', 'schloessle', '2013-08-14', '13-22', 0, 15, 0),
(287, 'olga', '', 'olga', '2013-08-14', '21-10', 0, 17, 0),
(288, 'olga', '', 'olga', '2014-08-14', '24-19', 0, 18, 0),
(289, 'cinemaxx', '', 'cinemaxx', '2014-08-14', '7-11', 0, 20, 0),
(290, 'joes', '', 'joes', '2013-08-14', '24-7', 0, 19, 0),
(291, 'barfÃ¼ÃŸer neu ulm', '', 'barfÃ¼ÃŸer neu ulm', '2014-08-14', '14-22', 0, 21, 0),
(292, 'konzertsaal', '', 'konzertsaal', '2014-08-14', '23-7', 0, 22, 0),
(293, 'bla', '', 'bla', '2014-08-14', '11-10', 0, 24, 0),
(294, 'bla', '', 'bla', '2014-08-14', '8-24', 0, 23, 0),
(295, 'Joes Garage', '', 'Joes Garage', '2013-08-14', '13-5', 0, 25, 0),
(296, 'capos', '', 'capos', '2013-08-15', '17-4', 0, 3, 0),
(297, 'myers', '', 'myers', '2013-08-15', '10-1', 0, 6, 0),
(298, 'Barfuesser', '', 'Barfuesser', '2013-08-15', '11-24', 0, 2, 0),
(299, 'theatro', '', 'theatro', '2013-08-15', '4-7', 0, 5, 0),
(300, 'zur forelle', '', 'zur forelle', '2014-08-15', '11-1', 0, 4, 0),
(301, 'citrus', '', 'citrus', '2013-08-15', '1-12', 0, 11, 0),
(302, 'mÃ¼nster', '', 'mÃ¼nster', '2013-08-15', '23-2', 0, 9, 0),
(303, 'roxy', '', 'roxy', '2013-08-15', '11-19', 0, 12, 0),
(304, 'Theater', '', 'Theater', '2014-08-15', '18-10', 0, 8, 0),
(305, 'choclet', '', 'choclet', '2013-08-15', '9-9', 0, 10, 0),
(306, 'olga', '', 'olga', '2013-08-15', '3-7', 0, 16, 0),
(307, 'bla', '', 'bla', '2013-08-15', '9-14', 0, 13, 0),
(308, 'wiley', '', 'wiley', '2013-08-15', '14-8', 0, 14, 0),
(309, 'schloessle', '', 'schloessle', '2013-08-15', '3-10', 0, 15, 0),
(310, 'olga', '', 'olga', '2013-08-15', '14-4', 0, 18, 0),
(311, 'joes', '', 'joes', '2014-08-15', '13-20', 0, 19, 0),
(312, 'cinemaxx', '', 'cinemaxx', '2013-08-15', '7-8', 0, 20, 0),
(313, 'barfÃ¼ÃŸer neu ulm', '', 'barfÃ¼ÃŸer neu ulm', '2014-08-15', '5-7', 0, 21, 0),
(314, 'konzertsaal', '', 'konzertsaal', '2013-08-15', '7-14', 0, 22, 0),
(315, 'bla', '', 'bla', '2013-08-15', '9-21', 0, 23, 0),
(316, 'bla', '', 'bla', '2013-08-15', '8-22', 0, 24, 0),
(317, 'Joes Garage', '', 'Joes Garage', '2013-08-15', '18-11', 0, 25, 0),
(318, 'olga', '', 'olga', '2013-08-15', '8-6', 0, 17, 0),
(319, 'zur forelle', '', 'zur forelle', '2014-08-16', '20-5', 0, 4, 0),
(320, 'Barfuesser', '', 'Barfuesser', '2014-08-16', '23-23', 0, 2, 0),
(321, 'theatro', '', 'theatro', '2013-08-16', '18-23', 0, 5, 0),
(322, 'tortuga', '', 'tortuga', '2014-08-16', '12-14', 0, 7, 0),
(323, 'capos', '', 'capos', '2014-08-16', '23-4', 0, 3, 0),
(324, 'Theater', '', 'Theater', '2014-08-16', '10-24', 0, 8, 0),
(325, 'mÃ¼nster', '', 'mÃ¼nster', '2014-08-16', '8-6', 0, 9, 0),
(326, 'choclet', '', 'choclet', '2014-08-16', '18-10', 0, 10, 0),
(327, 'citrus', '', 'citrus', '2013-08-16', '21-13', 0, 11, 0),
(328, 'joes', '', 'joes', '2013-08-16', '14-23', 0, 19, 0),
(329, 'cinemaxx', '', 'cinemaxx', '2013-08-16', '19-8', 0, 20, 0),
(330, 'konzertsaal', '', 'konzertsaal', '2014-08-16', '3-3', 0, 22, 0),
(331, 'barfÃ¼ÃŸer neu ulm', '', 'barfÃ¼ÃŸer neu ulm', '2014-08-16', '10-5', 0, 21, 0),
(332, 'olga', '', 'olga', '2014-08-16', '22-14', 0, 17, 0),
(333, 'olga', '', 'olga', '2013-08-16', '9-15', 0, 18, 0),
(334, 'Barfuesser', '', 'Barfuesser', '2013-08-17', '10-10', 0, 2, 0),
(336, 'zur forelle', '', 'zur forelle', '2014-08-17', '13-4', 0, 4, 0),
(337, 'tortuga', '', 'tortuga', '2013-08-17', '4-21', 0, 7, 0),
(338, 'theatro', '', 'theatro', '2014-08-17', '7-24', 0, 5, 0),
(339, 'capos', '', 'capos', '2013-08-17', '14-19', 0, 3, 0),
(340, 'Theater', '', 'Theater', '2014-08-17', '24-11', 0, 8, 0),
(341, 'choclet', '', 'choclet', '2013-08-17', '23-10', 0, 10, 0),
(342, 'mÃ¼nster', '', 'mÃ¼nster', '2013-08-17', '11-4', 0, 9, 0),
(343, 'roxy', '', 'roxy', '2013-08-17', '20-14', 0, 12, 0),
(344, 'citrus', '', 'citrus', '2014-08-17', '23-18', 0, 11, 0),
(345, 'bla', '', 'bla', '2013-08-17', '10-15', 0, 13, 0),
(346, 'schloessle', '', 'schloessle', '2013-08-17', '6-21', 0, 15, 0),
(347, 'olga', '', 'olga', '2014-08-17', '19-18', 0, 16, 0),
(348, 'wiley', '', 'wiley', '2014-08-17', '10-11', 0, 14, 0),
(349, 'olga', '', 'olga', '2014-08-17', '5-1', 0, 17, 0),
(350, 'olga', '', 'olga', '2013-08-17', '12-7', 0, 18, 0),
(351, 'joes', '', 'joes', '2013-08-17', '3-8', 0, 19, 0),
(352, 'cinemaxx', '', 'cinemaxx', '2014-08-17', '13-4', 0, 20, 0),
(353, 'konzertsaal', '', 'konzertsaal', '2014-08-17', '5-24', 0, 22, 0),
(354, 'bla', '', 'bla', '2013-08-17', '22-14', 0, 23, 0),
(355, 'bla', '', 'bla', '2014-08-17', '14-15', 0, 24, 0),
(356, 'Joes Garage', '', 'Joes Garage', '2014-08-17', '20-10', 0, 25, 0),
(357, 'barfÃ¼ÃŸer neu ulm', '', 'barfÃ¼ÃŸer neu ulm', '2014-08-17', '23-10', 0, 21, 0);

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `locationkommentare`
--

CREATE TABLE IF NOT EXISTS `locationkommentare` (
  `Id` int(5) NOT NULL AUTO_INCREMENT,
  `Location` int(5) NOT NULL,
  `Text` varchar(200) NOT NULL,
  `Writer` varchar(50) NOT NULL,
  `Timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=74 ;

--
-- Daten für Tabelle `locationkommentare`
--

INSERT INTO `locationkommentare` (`Id`, `Location`, `Text`, `Writer`, `Timestamp`) VALUES
(67, 11, 'eins', 'eins', '2014-08-16 20:23:29'),
(68, 11, 'zwei', 'zwei', '2014-08-16 20:23:40'),
(69, 10, 'asd', 'asd', '2014-08-27 19:20:25'),
(70, 10, 'blub', 'bla', '2014-08-27 19:54:40'),
(71, 10, 'asd', 'asdasd', '2014-08-27 19:58:44'),
(72, 10, 'asdasd', 'asdasd', '2014-08-27 20:00:00'),
(73, 10, 'asd', 'd', '2014-09-13 10:53:01');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `locations`
--

CREATE TABLE IF NOT EXISTS `locations` (
  `Id` int(5) NOT NULL AUTO_INCREMENT,
  `Name` varchar(60) NOT NULL,
  `GeoLocation` varchar(20) NOT NULL,
  `Oeffnungszeiten` varchar(20) NOT NULL,
  `Art` int(20) NOT NULL,
  `Likes` int(5) DEFAULT NULL,
  `Adresse` varchar(200) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=26 ;

--
-- Daten für Tabelle `locations`
--

INSERT INTO `locations` (`Id`, `Name`, `GeoLocation`, `Oeffnungszeiten`, `Art`, `Likes`, `Adresse`) VALUES
(2, 'Barfuesser', '(48.396754, 9.989834', '8-12', 2, 1, 'Schwoerhausgasse 19, Ulm, Deutschland'),
(3, 'capos', '(48.400884, 9.991201', '8-10', 2, 0, 'Platzgasse 22, Ulm, Deutschland'),
(4, 'zur forelle', '(48.395323, 9.990409', '9-13', 1, 0, 'Fischergasse 25, Ulm, Deutschland'),
(5, 'theatro', '(48.3991, 9.98946000', '2-3', 3, 0, 'Hirschstrasse 12, Ulm, Deutschland'),
(6, 'myers', '(48.397813, 9.989723', '1-2', 3, 0, 'Lautenberg 1, Ulm, Deutschland'),
(7, 'tortuga', '(48.397021, 9.995180', '5-4', 2, 0, 'Schelergasse 3, Ulm , Deutschland'),
(8, 'Theater', '(48.401057, 9.986697', '12-14', 4, 0, 'Herbert-von-Karajan-Platz 1, Ulm, Deutschland'),
(9, 'mÃ¼nster', '(48.398523, 9.992555', '8', 4, 0, 'Muensterplatz 21, Ulm, Deutschland'),
(10, 'choclet', '(48.396278, 9.994727', '8-12', 2, 5, 'Herdbruckerstrasse 14, Ulm, Deutschland'),
(11, 'citrus', '(48.399877, 9.996631', '1-3', 3, 0, 'Frauenstrasse 29, Ulm, Deutschland'),
(12, 'roxy', '(48.391555, 9.985777', '12-24', 4, 0, 'Schillerstrasse 1/12, Ulm, Deutschland'),
(13, 'bla', '(48.39857, 10.006020', '10-12', 2, 0, 'Paulstrasse 4, Neu-Ulm, Deutschland'),
(14, 'wiley', '(48.38059, 10.007182', '12-14', 3, 0, 'Wileystrasse 4, Neu-Ulm, Deutschland'),
(15, 'schloessle', '(48.403182, 10.02031', '14-16', 1, 0, 'Schloessleweg, Neu-Ulm, Deutschland'),
(16, 'olga', '(48.4018318, 9.99241', '16-18', 2, 0, 'bla adresse'),
(17, 'olga', '(51.494149, 9.601675', '20-22', 2, 0, 'eine ADrese'),
(21, 'barfÃ¼ÃŸer neu ulm', '(48.39677, 10.002302', '14-18', 2, 0, 'eine ADrese'),
(22, 'konzertsaal', '(48.393796, 9.995728', '10-22', 1, 0, 'Silcherstrasse 2, Neu-Ulm, Deutschland'),
(23, 'bla', '(51.744002, 7.187624', '8-12', 2, 0, 'MÃ¼hlenstraÃŸe 13, Haltern am See, Deutschland'),
(24, 'bla', '(48.2181674, 9.87372', '8-12', 3, 0, 'B30, 88471 Laupheim, Deutschland'),
(25, 'Joes Garage', '(51.315432, 9.479607', '8-12', 2, 0, 'Friedrich-Ebert-StraÃŸe 60, Kassel, Deutschland');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `responsibility`
--

CREATE TABLE IF NOT EXISTS `responsibility` (
  `Id` int(5) NOT NULL AUTO_INCREMENT,
  `LocationId` int(5) NOT NULL,
  `UserId` int(5) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Username` varchar(20) NOT NULL,
  `Password` varchar(10) NOT NULL,
  `Role` varchar(20) NOT NULL,
  `Email` varchar(30) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Daten für Tabelle `users`
--

INSERT INTO `users` (`Id`, `Username`, `Password`, `Role`, `Email`) VALUES
(1, 'admin', 'admin', 'Admin', 'philippstr@gmx.de'),
(2, 'Peter', 'Klaus', 'Veranstalter', 'philipp.streicher@uni-ulm.de');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
