-- phpMyAdmin SQL Dump
-- version 4.3.11
-- http://www.phpmyadmin.net
--
-- Vært: 127.0.0.1
-- Genereringstid: 24. 06 2019 kl. 15:16:42
-- Serverversion: 5.6.24
-- PHP-version: 5.6.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `slayerofspire`
--

-- --------------------------------------------------------

--
-- Struktur-dump for tabellen `cards`
--

CREATE TABLE IF NOT EXISTS `cards` (
  `id` int(11) NOT NULL,
  `name` varchar(20) NOT NULL,
  `image` varchar(120) NOT NULL,
  `fk_rarity` int(11) NOT NULL,
  `fk_type` int(11) NOT NULL,
  `fk_energy` int(11) NOT NULL,
  `description` text NOT NULL,
  `name_plus` varchar(20) DEFAULT NULL,
  `fk_energy_plus` int(11) DEFAULT NULL,
  `description_plus` text,
  `fk_charclass` int(11) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

--
-- Data dump for tabellen `cards`
--

INSERT INTO `cards` (`id`, `name`, `image`, `fk_rarity`, `fk_type`, `fk_energy`, `description`, `name_plus`, `fk_energy_plus`, `description_plus`, `fk_charclass`) VALUES
(1, 'Bash', 'Bash.png', 1, 1, 4, 'Deal 8 damage. Apply 2 Vulnerable.', 'Bash+', 3, 'Deal 10 damage. Apply 3 Vulnerable.', 1),
(2, 'Defend', 'Defend.png', 1, 1, 3, 'Gain 5 Block.', 'Defend+', 2, 'Gain 8 Block.', 1),
(7, 'test', '1561364566787_30aa6fswa2l11.jpg', 4, 3, 0, 'fgagdsgadagd', 'test+', 3, 'grgrgrgrsad', 1),
(8, 'hytteost', '1561363326039_51U6YeKxV4L._SX679_.jpg', 3, 2, 0, 'sdfgdsdsggasd', NULL, NULL, NULL, 1),
(9, 'test', '1561366210217_30aa6fswa2l11.jpg', 4, 2, 6, 'herhhgashashagf', NULL, NULL, NULL, 2),
(10, 'testfasfasd', '1561366506182_51U6YeKxV4L._SX679_.jpg', 4, 1, 3, 'rsgagdgadsgads', NULL, NULL, NULL, 1);

-- --------------------------------------------------------

--
-- Struktur-dump for tabellen `cardtypes`
--

CREATE TABLE IF NOT EXISTS `cardtypes` (
  `id` int(11) NOT NULL,
  `variant` varchar(15) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

--
-- Data dump for tabellen `cardtypes`
--

INSERT INTO `cardtypes` (`id`, `variant`) VALUES
(1, 'Attack'),
(2, 'Skill'),
(3, 'Power'),
(4, 'Status'),
(5, 'Curse'),
(6, 'Special Curse');

-- --------------------------------------------------------

--
-- Struktur-dump for tabellen `characters`
--

CREATE TABLE IF NOT EXISTS `characters` (
  `id` int(11) NOT NULL,
  `char_name` varchar(15) NOT NULL,
  `bio` text NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

--
-- Data dump for tabellen `characters`
--

INSERT INTO `characters` (`id`, `char_name`, `bio`) VALUES
(1, 'The Ironclad', 'Blood and Iron'),
(2, 'The Silent', 'Assassin'),
(3, 'The Defect', 'Rouge AI');

-- --------------------------------------------------------

--
-- Struktur-dump for tabellen `charclasses`
--

CREATE TABLE IF NOT EXISTS `charclasses` (
  `id` int(11) NOT NULL,
  `chars` varchar(15) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

--
-- Data dump for tabellen `charclasses`
--

INSERT INTO `charclasses` (`id`, `chars`) VALUES
(1, 'The Ironclad'),
(2, 'The Silent'),
(3, 'The Defect'),
(4, 'Neutral');

-- --------------------------------------------------------

--
-- Struktur-dump for tabellen `energys`
--

CREATE TABLE IF NOT EXISTS `energys` (
  `id` int(10) NOT NULL,
  `cost` varchar(1) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

--
-- Data dump for tabellen `energys`
--

INSERT INTO `energys` (`id`, `cost`) VALUES
(1, '-'),
(2, '0'),
(3, '1'),
(4, '2'),
(5, '3');

-- --------------------------------------------------------

--
-- Struktur-dump for tabellen `pages`
--

CREATE TABLE IF NOT EXISTS `pages` (
  `id` int(11) NOT NULL,
  `titel` varchar(25) NOT NULL,
  `content` text NOT NULL,
  `fk_author` int(11) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

--
-- Data dump for tabellen `pages`
--

INSERT INTO `pages` (`id`, `titel`, `content`, `fk_author`) VALUES
(1, 'wizard wizard', 'fireball wiskey yesss', 1),
(2, 'bard', 'i can sing loude', 1),
(3, 'hej', 'med dig bum', 5);

-- --------------------------------------------------------

--
-- Struktur-dump for tabellen `photos`
--

CREATE TABLE IF NOT EXISTS `photos` (
  `id` int(11) NOT NULL,
  `name` varchar(120) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

--
-- Data dump for tabellen `photos`
--

INSERT INTO `photos` (`id`, `name`) VALUES
(1, 'default.jpg'),
(2, 'default.jpg');

-- --------------------------------------------------------

--
-- Struktur-dump for tabellen `profiles`
--

CREATE TABLE IF NOT EXISTS `profiles` (
  `id` int(11) NOT NULL,
  `firstname` varchar(45) DEFAULT NULL,
  `lastname` varchar(45) DEFAULT NULL,
  `bio` text,
  `users_id` int(11) NOT NULL,
  `photos_id` int(11) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

--
-- Data dump for tabellen `profiles`
--

INSERT INTO `profiles` (`id`, `firstname`, `lastname`, `bio`, `users_id`, `photos_id`) VALUES
(1, NULL, NULL, NULL, 1, 1),
(2, NULL, NULL, NULL, 2, 1),
(3, NULL, NULL, NULL, 3, 1),
(4, NULL, NULL, NULL, 4, 1),
(5, NULL, NULL, NULL, 5, 1),
(6, NULL, NULL, NULL, 6, 1);

-- --------------------------------------------------------

--
-- Struktur-dump for tabellen `raritys`
--

CREATE TABLE IF NOT EXISTS `raritys` (
  `id` int(11) NOT NULL,
  `niveau` varchar(10) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

--
-- Data dump for tabellen `raritys`
--

INSERT INTO `raritys` (`id`, `niveau`) VALUES
(1, 'Starter'),
(2, 'Common'),
(3, 'Uncommon'),
(4, 'Rare'),
(5, 'None'),
(6, 'Special');

-- --------------------------------------------------------

--
-- Struktur-dump for tabellen `roles`
--

CREATE TABLE IF NOT EXISTS `roles` (
  `id` int(11) NOT NULL,
  `name` varchar(15) NOT NULL,
  `level` int(11) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

--
-- Data dump for tabellen `roles`
--

INSERT INTO `roles` (`id`, `name`, `level`) VALUES
(1, 'Super admin', 100),
(2, 'Admin', 90),
(3, 'Moderator', 80),
(4, 'Author', 40),
(5, 'User', 10),
(6, 'Guest', 1);

-- --------------------------------------------------------

--
-- Struktur-dump for tabellen `tableformlists`
--

CREATE TABLE IF NOT EXISTS `tableformlists` (
  `id` int(11) NOT NULL,
  `list` varchar(45) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

--
-- Data dump for tabellen `tableformlists`
--

INSERT INTO `tableformlists` (`id`, `list`) VALUES
(1, 'Character'),
(2, 'Card'),
(3, 'Relic'),
(4, 'Enemy'),
(5, 'Event');

-- --------------------------------------------------------

--
-- Stand-in-struktur for visning `userprofiles`
--
CREATE TABLE IF NOT EXISTS `userprofiles` (
`id` int(11)
,`username` varchar(100)
,`firstname` varchar(45)
,`lastname` varchar(45)
,`fullname` varchar(90)
,`bio` text
,`photo` varchar(120)
,`role` varchar(15)
);

-- --------------------------------------------------------

--
-- Struktur-dump for tabellen `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL,
  `username` varchar(100) NOT NULL,
  `passphrase` varchar(76) NOT NULL,
  `roles_id` int(11) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

--
-- Data dump for tabellen `users`
--

INSERT INTO `users` (`id`, `username`, `passphrase`, `roles_id`) VALUES
(1, 'admin', '1234', 1),
(2, 'author', '2345', 4),
(3, 'standard', '3456', 5),
(4, 'knup', '1235', 5),
(5, 'jens', '$2a$10$Rv6flcfD2yHATDPC.lJKZuBQ0UBg3tcUQ3.6vns9Aq2y/mSwf0dJ2', 1),
(6, 'karl', '$2a$10$k0ra5xvMlRculb7gxpMnMOkdZdvBkuk8Lme0oH/ooT0yd1HwWUu92', 5);

--
-- Triggers/udløsere `users`
--
DELIMITER $$
CREATE TRIGGER `createprofile` AFTER INSERT ON `users`
 FOR EACH ROW BEGIN
	INSERT INTO profiles SET users_id = NEW.id, photos_id = 1;
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Struktur for visning `userprofiles`
--
DROP TABLE IF EXISTS `userprofiles`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `userprofiles` AS select `users`.`id` AS `id`,`users`.`username` AS `username`,`profiles`.`firstname` AS `firstname`,`profiles`.`lastname` AS `lastname`,concat(`profiles`.`firstname`,'',`profiles`.`lastname`) AS `fullname`,`profiles`.`bio` AS `bio`,`photos`.`name` AS `photo`,`roles`.`name` AS `role` from (((`users` join `profiles` on((`users`.`id` = `profiles`.`id`))) join `photos` on((`profiles`.`photos_id` = `photos`.`id`))) join `roles` on((`users`.`roles_id` = `roles`.`id`)));

--
-- Begrænsninger for dumpede tabeller
--

--
-- Indeks for tabel `cards`
--
ALTER TABLE `cards`
  ADD PRIMARY KEY (`id`,`fk_energy`), ADD KEY `rarity_cards_idx` (`fk_rarity`), ADD KEY `typeofcards_idx` (`fk_type`), ADD KEY `whocanuseit_idx` (`fk_charclass`), ADD KEY `whocanduseit_idx` (`fk_charclass`);

--
-- Indeks for tabel `cardtypes`
--
ALTER TABLE `cardtypes`
  ADD PRIMARY KEY (`id`);

--
-- Indeks for tabel `characters`
--
ALTER TABLE `characters`
  ADD PRIMARY KEY (`id`);

--
-- Indeks for tabel `charclasses`
--
ALTER TABLE `charclasses`
  ADD PRIMARY KEY (`id`);

--
-- Indeks for tabel `energys`
--
ALTER TABLE `energys`
  ADD PRIMARY KEY (`id`);

--
-- Indeks for tabel `pages`
--
ALTER TABLE `pages`
  ADD PRIMARY KEY (`id`), ADD KEY `pagetouserfk_idx` (`fk_author`);

--
-- Indeks for tabel `photos`
--
ALTER TABLE `photos`
  ADD PRIMARY KEY (`id`);

--
-- Indeks for tabel `profiles`
--
ALTER TABLE `profiles`
  ADD PRIMARY KEY (`id`);

--
-- Indeks for tabel `raritys`
--
ALTER TABLE `raritys`
  ADD PRIMARY KEY (`id`);

--
-- Indeks for tabel `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Indeks for tabel `tableformlists`
--
ALTER TABLE `tableformlists`
  ADD PRIMARY KEY (`id`);

--
-- Indeks for tabel `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`), ADD UNIQUE KEY `username_UNIQUE` (`username`);

--
-- Brug ikke AUTO_INCREMENT for slettede tabeller
--

--
-- Tilføj AUTO_INCREMENT i tabel `cards`
--
ALTER TABLE `cards`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=11;
--
-- Tilføj AUTO_INCREMENT i tabel `cardtypes`
--
ALTER TABLE `cardtypes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=7;
--
-- Tilføj AUTO_INCREMENT i tabel `characters`
--
ALTER TABLE `characters`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=4;
--
-- Tilføj AUTO_INCREMENT i tabel `charclasses`
--
ALTER TABLE `charclasses`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=5;
--
-- Tilføj AUTO_INCREMENT i tabel `energys`
--
ALTER TABLE `energys`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=6;
--
-- Tilføj AUTO_INCREMENT i tabel `pages`
--
ALTER TABLE `pages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=4;
--
-- Tilføj AUTO_INCREMENT i tabel `photos`
--
ALTER TABLE `photos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=3;
--
-- Tilføj AUTO_INCREMENT i tabel `profiles`
--
ALTER TABLE `profiles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=7;
--
-- Tilføj AUTO_INCREMENT i tabel `raritys`
--
ALTER TABLE `raritys`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=7;
--
-- Tilføj AUTO_INCREMENT i tabel `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=7;
--
-- Tilføj AUTO_INCREMENT i tabel `tableformlists`
--
ALTER TABLE `tableformlists`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=6;
--
-- Tilføj AUTO_INCREMENT i tabel `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=7;
--
-- Begrænsninger for dumpede tabeller
--

--
-- Begrænsninger for tabel `cards`
--
ALTER TABLE `cards`
ADD CONSTRAINT `classesofcards` FOREIGN KEY (`fk_charclass`) REFERENCES `charclasses` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
ADD CONSTRAINT `rarityofcards` FOREIGN KEY (`fk_rarity`) REFERENCES `raritys` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
ADD CONSTRAINT `typeofcards` FOREIGN KEY (`fk_type`) REFERENCES `cardtypes` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Begrænsninger for tabel `pages`
--
ALTER TABLE `pages`
ADD CONSTRAINT `pagetouserfk` FOREIGN KEY (`fk_author`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
