-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Dec 11, 2015 at 01:41 PM
-- Server version: 5.6.17
-- PHP Version: 5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `dj`
--

-- --------------------------------------------------------

--
-- Table structure for table `newsfeed`
--

CREATE TABLE IF NOT EXISTS `newsfeed` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_user` int(11) NOT NULL,
  `title` varchar(150) NOT NULL,
  `text` text NOT NULL,
  `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=8 ;

--
-- Dumping data for table `newsfeed`
--

INSERT INTO `newsfeed` (`id`, `id_user`, `title`, `text`, `date`) VALUES
(1, 1, 'Updating', 'Cras non dolor. Etiam iaculis nunc ac metus. Fusce risus nisl, viverra et, tempor et, pretium in, sapien. Quisque libero metus, condimentum nec, tempor a, commodo mollis, magna. Sed libero.\n\nNam pretium turpis et arcu. Curabitur a felis in nunc fringilla tristique. Maecenas ullamcorper, dui et placerat feugiat, eros pede varius nisi, condimentum viverra felis nunc et lorem. Praesent porttitor, nulla vitae posuere iaculis, arcu nisl dignissim dolor, a pretium mi sem ut ipsum. Nunc nonummy metus.\n\nCurabitur turpis. Proin faucibus arcu quis ante. Quisque ut nisi. Curabitur nisi. Sed libero.', '2015-10-01 02:02:31'),
(2, 1, 'ASDASDA', 'Fusce vel dui. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Maecenas vestibulum mollis diam. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Phasellus dolor.\r\n\r\nClass aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Proin magna. Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi. Praesent egestas neque eu enim. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.\r\n\r\nIn auctor lobortis lacus. Donec venenatis vulputate lorem. Duis vel nibh at velit scelerisque suscipit. Donec posuere vulputate arcu..\r\n\r\nPhasellus dolor. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia. Curabitur ullamcorper ultricies nisi. Pellentesque posuere.\r\n\r\nNullam quis ante. Proin pretium, leo ac pellentesque mollis, felis nunc ultrices eros, sed gravida augue augue mollis justo. Curabitur ullamcorper ultricies nisi. Phasellus viverra nulla ut metus varius laoreet. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.', '2015-10-01 02:02:43'),
(3, 1, 'asdasdasdas', 'Vestibulum eu odio. Donec sodales sagittis magna. Etiam feugiat lorem non metus. Pellentesque auctor neque nec urna. Nullam vel sem.\r\n\r\nNam adipiscing. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Phasellus tempus. Fusce vulputate eleifend sapien. Nunc nec neque.\r\n\r\nIn turpis. Fusce risus nisl, viverra et, tempor et, pretium in, sapien.. Cras non dolor. Ut tincidunt tincidunt erat.\r\n\r\nPhasellus ullamcorper ipsum rutrum nunc. Donec sodales sagittis magna. Aenean imperdiet. Vivamus euismod mauris. Fusce egestas elit eget lorem.\r\n\r\nNulla sit amet est. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus. Donec posuere vulputate arcu. Vivamus consectetuer hendrerit lacus. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo.', '2015-09-22 20:33:38'),
(4, 1, 'asdasd', 'Sed magna purus, fermentum eu, tincidunt eu, varius ut, felis. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. Morbi mollis tellus ac sapien. Phasellus consectetuer vestibulum elit.\r\n\r\nNullam accumsan lorem in dui. Vestibulum turpis sem, aliquet eget, lobortis pellentesque, rutrum eu, nisl. Vivamus quis mi. Aenean ut eros et nisl sagittis vestibulum. Nullam nulla eros, ultricies sit amet, nonummy id, imperdiet feugiat, pede.\r\n\r\nVestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia. Etiam imperdiet imperdiet orci. Donec interdum, metus et hendrerit aliquet, dolor diam sagittis ligula, eget egestas libero turpis vel mi. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. Proin faucibus arcu quis ante.\r\n\r\nNulla facilisi. Phasellus ullamcorper ipsum rutrum nunc. Aenean commodo ligula eget dolor. Vestibulum ullamcorper mauris at ligula. Pellentesque dapibus hendrerit tortor.\r\n\r\nPraesent turpis. Fusce ac felis sit amet ligula pharetra condimentum. Nunc nulla. Aenean vulputate eleifend tellus. Praesent nonummy mi in odio.\r\n\r\nNullam nulla eros, ultricies sit amet, nonummy id, imperdiet feugiat, pede. Fusce convallis metus id felis luctus adipiscing. Donec sodales sagittis magna. Praesent blandit laoreet nibh. Phasellus tempus.\r\n\r\nMaecenas nec odio et ante tincidunt tempus. Proin pretium, leo ac pellentesque mollis, felis nunc ultrices eros, sed gravida augue augue mollis justo. Donec posuere vulputate arcu. Sed lectus. Etiam vitae tortor.\r\n\r\nProin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. Vivamus in erat ut urna cursus vestibulum. In ut quam vitae odio lacinia tincidunt. Ut id nisl quis enim dignissim sagittis. Duis lobortis massa imperdiet quam.\r\n\r\nSed in libero ut nibh placerat accumsan. Nulla facilisi. Donec posuere vulputate arcu. Vestibulum ullamcorper mauris at ligula. Praesent turpis.\r\n\r\nQuisque libero metus, condimentum nec, tempor a, commodo mollis, magna. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Vestibulum turpis sem, aliquet eget, lobortis pellentesque, rutrum eu, nisl. Phasellus dolor. Aenean imperdiet.\r\n\r\n\r\n\r\nUt tincidunt tincidunt erat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi ac felis. Quisque id mi. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci.\r\n\r\nFusce convallis metus id felis luctus adipiscing. Nullam nulla eros, ultricies sit amet, nonummy id, imperdiet feugiat, pede. Proin magna. Mauris turpis nunc, blandit et, volutpat molestie, porta ut, ligula. Praesent nonummy mi in odio.\r\n\r\nMorbi ac felis. Etiam sit amet orci eget eros faucibus tincidunt. In consectetuer turpis ut velit. Quisque rutrum. Curabitur ullamcorper ultricies nisi.\r\n\r\nEtiam ut purus mattis mauris sodales aliquam. Suspendisse eu ligula. Praesent nonummy mi in odio. Phasellus magna. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros.\r\n\r\nMaecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Maecenas malesuada. Nunc nonummy metus. Donec id justo. Praesent adipiscing.', '2015-10-01 02:02:49'),
(5, 1, 'Welcome to the site', 'Hello everyone, My name is Daniel, also known as Djackbyron or Dj. \n\nAlong side Chido I made this site in the hopes to bring all sorts of online free to play games to people. You might know the games or maybe you just found your new favorite game on here. We will have game reviews, games in general for you to play and enjoy, and might possibly have a forum for you to get to know the other members of this site. Enjoy! and give me feedback by emailing me @ Djackbyron@tgn.com</br>\n<img src="http://i.imgur.com/BkcD9ud.png">', '2015-10-01 02:02:55'),
(6, 1, 'blah blah blah', 'diwjdwidjwidjwjdjwidjwid', '2015-10-16 18:32:53'),
(7, 1, 'Forever', 'Forever is a long time</br></br>\r\nBut forever is all that I need</br></br>\r\nTo find that feeling that we strive for\r\nis to live for what most die for</br></br>\r\nNo one ever said that life would be easy\r\nBut if it was, would it be worth it ? </br></br>\r\nThe pain that we go through\r\nFor those that we love</br></br>\r\nis like a sword stabbing me through my heart</br></br>\r\nAnd once again, I ask myself, is it really worth it ? </br></br>\r\nHardest question that I''ll ever ask myself.', '2015-11-17 18:35:56');

-- --------------------------------------------------------

--
-- Table structure for table `pages`
--

CREATE TABLE IF NOT EXISTS `pages` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `filename` varchar(50) NOT NULL,
  `name` varchar(25) NOT NULL,
  `title` text,
  `active` smallint(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=5 ;

--
-- Dumping data for table `pages`
--

INSERT INTO `pages` (`id`, `filename`, `name`, `title`, `active`) VALUES
(1, 'aboutus.php', 'About', 'Fusce convallis metus id felis luctus adipiscing. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nulla consequat massa quis enim. Etiam sollicitudin, ipsum eu pulvinar rutrum, tellus ipsum laoreet sapien, quis venenatis ante odio sit amet eros. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc.\n\nEtiam sit amet orci eget eros faucibus tincidunt. Praesent metus tellus, elementum eu, semper a, adipiscing nec, purus. Maecenas egestas arcu quis ligula mattis placerat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros.\n\nIn hac habitasse platea dictumst. Sed magna purus, fermentum eu, tincidunt eu, varius ut, felis. Phasellus accumsan cursus velit. Vivamus quis mi. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus.\n\nVestibulum volutpat pretium libero. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. Donec posuere vulputate arcu. Phasellus magna. Praesent egestas tristique nibh.\n\nVivamus consectetuer hendrerit lacus. Morbi nec metus. Nam pretium turpis et arcu. Vestibulum rutrum, mi nec elementum vehicula, eros quam gravida nisl, id fringilla neque ante vel mi. Praesent venenatis metus at tortor pulvinar varius.', 1),
(2, 'games.php', 'Games', NULL, 1),
(4, 'tips.php', 'tips and tricks', NULL, 1);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `name` varchar(150) NOT NULL,
  `email` varchar(200) NOT NULL,
  `rank` int(11) NOT NULL,
  `active` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=9 ;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `name`, `email`, `rank`, `active`) VALUES
(1, 'djackbyron', 'dj', 'Daniel Jack Byron', 'djackbyron@gmail.com', 7, 1),
(2, 'chido', 'chidorasenking', 'Ruben Manuel Gonçalves Santos', 'playtrolltard@gmail.com', 0, 1),
(3, 'charizard', 'bama', '', 'charizard@hotmail.com', 6, 1),
(4, 'djack', 'naruto123', 'Daniel etc etc', 'djackbyron@hotmail.com', 2, 1),
(5, 'Whitney', 'whitbit', 'Whitney', 'eptical@gmail.com', 6, 1),
(6, 'Shotoken', 'shoto', 'Shakeel', 'kiyomura@hotmail.com', 1, 1),
(7, 'Wolf', 'wolf', 'wolf', 'wolf', 3, 1),
(8, 'hehe', 'hehe', 'hehe', 'hehe', 4, 1);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
