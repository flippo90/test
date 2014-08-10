-- phpMyAdmin SQL Dump
-- version 4.1.6
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Erstellungszeit: 10. Aug 2014 um 12:09
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
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=28 ;

--
-- Daten für Tabelle `eventkommentare`
--

INSERT INTO `eventkommentare` (`Id`, `Text`, `Writer`, `EventId`, `Timestamp`) VALUES
(1, 'Das ist ein kommentar', 'event$eventId=undefined', 0, '2014-07-13 11:25:32'),
(2, '', '$eventId=undefined', 0, '2014-07-13 11:25:32'),
(3, 'bla', 'bla$eventId=undefined', 0, '2014-07-13 11:25:32'),
(4, 'bla', 'bla', 0, '2014-07-13 11:25:32'),
(5, 'bla', 'bla', 0, '2014-07-13 11:25:32'),
(6, 'bla', 'blaa', 0, '2014-07-13 11:25:32'),
(7, 'post', 'comment', 0, '2014-07-13 11:25:32'),
(8, 'Bla', 'Blaaa', 43, '2014-07-13 11:25:32'),
(9, 'blaaaab', 'blaaaaaaa', 43, '2014-07-13 11:25:32'),
(10, 'another', 'comment', 53, '2014-07-13 11:25:32'),
(11, 'Hallo ein', 'Kommentar', 72, '2014-07-13 11:25:32'),
(12, '1', '2', 72, '2014-07-13 11:25:32'),
(13, 'hallo', 'peter', 203, '2014-07-13 11:25:32'),
(14, '21', '31', 48, '2014-07-13 11:25:32'),
(15, '21', '34', 48, '2014-07-13 11:25:32'),
(16, '21', '40', 48, '2014-07-13 11:25:32'),
(17, 'c', 'd', 48, '2014-07-13 11:25:32'),
(18, 'bla', 'mein bla', 48, '2014-07-13 11:25:32'),
(19, 'kommentar', 'von', 48, '2014-07-13 11:25:32'),
(20, 'kommentar mit timestamp', 'bla', 48, '2014-07-13 11:36:15'),
(21, 'Nooch ein KOmmentar', 'mit Timestamp', 48, '2014-07-13 11:40:56'),
(22, 'Das', 'ist ein', 226, '2014-07-23 08:31:54'),
(23, 'Noch ein', 'Kommentar', 226, '2014-07-23 08:32:13'),
(24, 'check', 'if', 226, '2014-07-23 08:34:54'),
(25, 'this', 'works', 226, '2014-07-23 08:35:10'),
(26, 'Mein', 'Kommentar', 231, '2014-07-23 08:39:07'),
(27, 'Mein erster', 'Kommentar', 229, '2014-07-23 08:41:12');

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
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=247 ;

--
-- Daten für Tabelle `events`
--

INSERT INTO `events` (`Id`, `Name`, `Description`, `Specials`, `Date`, `Uhrzeit`, `Turnus`, `Location`, `Likes`) VALUES
(43, 'Barfuesser', 'Barfuesser', 'Barfuesser', '2013-06-01', '14-13', 0, 2, 0),
(44, 'theatro', 'theatro', 'theatro', '2014-06-01', '12-8', 0, 5, 0),
(45, 'myers', 'myers', 'myers', '2014-06-01', '5-18', 0, 6, 0),
(46, 'zur forelle', 'zur forelle', 'zur forelle', '2014-06-01', '23-13', 0, 4, 0),
(47, 'capos', 'capos', 'capos', '2013-06-01', '8-11', 0, 3, 0),
(48, 'tortuga', 'tortuga', 'tortuga', '2014-06-01', '19-5', 0, 7, 0),
(49, 'mÃ¼nster', 'mÃ¼nster', 'mÃ¼nster', '2013-06-01', '20-1', 0, 9, 0),
(50, 'Theater', 'Theater', 'Theater', '2013-06-01', '10-19', 0, 8, 0),
(51, 'choclet', 'choclet', 'choclet', '2014-06-01', '3-6', 0, 10, 0),
(52, 'citrus', 'citrus', 'citrus', '2014-06-01', '19-3', 0, 11, 0),
(53, 'bla', 'bla', 'bla', '2013-06-01', '12-2', 0, 13, 0),
(54, 'roxy', 'roxy', 'roxy', '2014-06-01', '15-22', 0, 12, 0),
(55, 'wiley', 'wiley', 'wiley', '2013-06-01', '19-2', 0, 14, 0),
(56, 'olga', 'olga', 'olga', '2014-06-01', '10-22', 0, 17, 0),
(57, 'schloessle', 'schloessle', 'schloessle', '2014-06-01', '18-9', 0, 15, 0),
(58, 'olga', 'olga', 'olga', '2013-06-01', '6-19', 0, 16, 0),
(59, 'olga', 'olga', 'olga', '2013-06-01', '8-3', 0, 18, 0),
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
(246, 'bla', 'bla', 'bla', '2014-07-23', '22-16', 0, 24, 0);

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
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=63 ;

--
-- Daten für Tabelle `locationkommentare`
--

INSERT INTO `locationkommentare` (`Id`, `Location`, `Text`, `Writer`, `Timestamp`) VALUES
(1, 10, 'Hallo mein test', 'Peter', '2014-07-13 11:38:27'),
(2, 10, 'Meine zweiter Test', 'Klaus', '2014-07-13 11:38:27'),
(3, 7, 'Ein Kommentar fÃ¼r die Tortuga', 'TestUser', '2014-07-13 11:38:27'),
(4, 10, 'Noch ein Kommentar', 'Maike', '2014-07-13 11:38:27'),
(5, 10, 'Noch einer', 'Manu', '2014-07-13 11:38:27'),
(6, 10, 'Bla', 'Bla', '2014-07-13 11:38:27'),
(7, 7, 'Ein Kommentar', 'Besitzer', '2014-07-13 11:38:27'),
(8, 13, 'one', 'comment', '2014-07-13 11:38:27'),
(9, 7, '1', '2', '2014-07-13 11:38:27'),
(10, 10, 'zwei', 'drei', '2014-07-13 11:38:27'),
(11, 10, 'vier', 'fuenf', '2014-07-13 11:38:27'),
(12, 10, 'sechs', 'sieben', '2014-07-13 11:38:27'),
(13, 5, 'ein Test', 'User', '2014-07-13 11:38:27'),
(14, 0, '20', '41', '2014-07-13 11:38:27'),
(15, 0, '20', '53', '2014-07-13 11:38:27'),
(16, 0, 'bla', 'blub', '2014-07-13 11:38:27'),
(17, 10, '21', '00', '2014-07-13 11:38:27'),
(18, 10, 'a', 'd', '2014-07-13 11:38:27'),
(19, 10, 'bc', 'asd', '2014-07-13 11:38:27'),
(20, 10, 'a', 's', '2014-07-13 11:38:27'),
(21, 10, 'a', 'd', '2014-07-13 11:38:27'),
(22, 10, 'posting', 'comment', '2014-07-13 11:38:27'),
(23, 10, 'next', 'comment', '2014-07-13 11:38:27'),
(24, 7, '21', '31', '2014-07-13 11:38:27'),
(25, 7, 'post', 'reload', '2014-07-13 11:38:27'),
(26, 7, 'test', 'testtt', '2014-07-13 11:38:27'),
(27, 7, 'd', 'b', '2014-07-13 11:38:27'),
(28, 7, 'a', 'd', '2014-07-13 11:38:27'),
(29, 7, 'c', 'y', '2014-07-13 11:38:27'),
(30, 7, 'das ist ein richtig langer text und ich wollte mal testen ob es hier probleme mit der anzeige gibt oder ob das automatisch von der komponente geregelt wird... na dann schauen wir mal :)', 'das hier ist der autor des textes', '2014-07-13 11:38:27'),
(31, 7, 'Kommentar mit Timestamp', 'undefined', '2014-07-13 11:38:27'),
(32, 2, 'Kommentar', 'Noch einer', '2014-07-23 08:35:28'),
(33, 2, 'noch', 'ein', '2014-07-23 08:35:58'),
(34, 2, 'bla', 'blabla', '2014-07-23 08:38:02'),
(35, 9, 'Hallp', 'Kommentar', '2014-07-23 09:44:55'),
(36, 10, 'Kommentar', 'Neu', '2014-08-06 19:37:19'),
(37, 4, 'Das ist', 'ein Kommentar', '2014-08-07 09:59:01'),
(38, 4, 'Noch ein', 'Kommentar', '2014-08-07 10:10:45'),
(39, 4, 'Noch ein', 'Kommentar', '2014-08-07 10:10:55'),
(40, 4, 'Noche', 'einer', '2014-08-07 10:12:14'),
(41, 4, 'asd', 'aaa', '2014-08-07 10:20:13'),
(42, 4, 'a', 'ss', '2014-08-07 10:21:48'),
(43, 4, 'bla', 'ble', '2014-08-07 10:22:04'),
(44, 4, 'komment', 'AE', '2014-08-07 10:27:54'),
(45, 4, 'komment', 'AE', '2014-08-07 10:28:37'),
(46, 4, 'BLA', 'BLAAA', '2014-08-07 10:28:44'),
(47, 4, 'BLA', 'BLAAA', '2014-08-07 10:28:45'),
(48, 4, 'Noch', 'einer', '2014-08-07 10:34:30'),
(49, 4, 'test', 't', '2014-08-07 10:35:48'),
(50, 4, 'a', 's', '2014-08-07 10:42:46'),
(51, 4, 'as', 'asd', '2014-08-07 10:46:50'),
(52, 4, 'asdasd', 'asdasd', '2014-08-07 10:47:16'),
(53, 4, 'asd', 'asdasd', '2014-08-07 10:48:08'),
(54, 4, 'a', 'aa', '2014-08-07 10:48:28'),
(55, 4, 'noche', 'einer', '2014-08-07 10:49:48'),
(56, 4, 'as', 'dd', '2014-08-07 10:50:43'),
(57, 22, 'bla', 'blub', '2014-08-07 11:16:09'),
(58, 21, 'a', 's', '2014-08-07 12:38:37'),
(59, 21, 'd', 'd', '2014-08-07 12:38:39'),
(60, 21, 'a', 's', '2014-08-07 12:38:41'),
(61, 21, 'd', 'a', '2014-08-07 12:38:43'),
(62, 21, 'd', 'a', '2014-08-07 12:38:45');

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
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=25 ;

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
(18, 'olga', '(48.41939, 9.8987899', '22-24', 4, 0, 'eine ADrese'),
(19, 'joes', '(51.315432, 9.479607', '1-3', 4, 0, 'eine ADrese'),
(20, 'cinemaxx', '(51.537053, 9.923545', '3-5', 4, 0, 'eine ADrese'),
(21, 'barfÃ¼ÃŸer neu ulm', '(48.39677, 10.002302', '14-18', 2, 0, 'eine ADrese'),
(22, 'konzertsaal', '(48.393796, 9.995728', '10-22', 1, 0, 'Silcherstrasse 2, Neu-Ulm, Deutschland'),
(23, 'bla', '(51.744002, 7.187624', '8-12', 2, 0, 'MÃ¼hlenstraÃŸe 13, Haltern am See, Deutschland'),
(24, 'bla', '(48.2181674, 9.87372', '8-12', 3, 0, 'B30, 88471 Laupheim, Deutschland');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `responsibility`
--

CREATE TABLE IF NOT EXISTS `responsibility` (
  `Id` int(5) NOT NULL AUTO_INCREMENT,
  `LocationId` int(5) NOT NULL,
  `UserId` int(5) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=69 ;

--
-- Daten für Tabelle `responsibility`
--

INSERT INTO `responsibility` (`Id`, `LocationId`, `UserId`) VALUES
(66, 2, 49),
(67, 4, 49),
(68, 3, 49);

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
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=50 ;

--
-- Daten für Tabelle `users`
--

INSERT INTO `users` (`Id`, `Username`, `Password`, `Role`, `Email`) VALUES
(1, 'admin', 'admin', 'Admin', 'philippstr@gmx.de'),
(2, 'Peter', 'Klaus', 'Veranstalter', 'philipp.streicher@uni-ulm.de'),
(49, 'Benutzernameeee', 'Wowww', 'Admin', 'Klausss');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
