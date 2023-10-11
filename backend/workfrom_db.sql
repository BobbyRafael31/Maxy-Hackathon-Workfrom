-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 11 Okt 2023 pada 06.56
-- Versi server: 10.4.11-MariaDB
-- Versi PHP: 7.4.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `workfrom_db`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `locations`
--

CREATE TABLE `locations` (
  `id` int(11) NOT NULL,
  `building_id` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `city` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `location_url` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `userId` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `locations`
--

INSERT INTO `locations` (`id`, `building_id`, `name`, `city`, `address`, `description`, `location_url`, `image`, `userId`, `createdAt`, `updatedAt`) VALUES
(5, '40198421-7f7a-47a9-8615-aac9391d1bad', ' Yafurni Working Space', 'Medan', 'YAFURNI Working Space 4th Floor, Plaza Furniture Yafurni, JL Iskandar Muda No.7, Petisah Hulu, Medan City, Petisah Hulu, Medan Baru, Medan City, North Sumatra 20153', 'This is description', 'https://www.google.com/maps/place/Yafurni+Working+Space/@3.5838582,98.6631465,18z/data=!4m6!3m5!1s0x30313119284c93e1:0x37957c852bec59d7!8m2!3d3.583322!4d98.6615196!16s%2Fg%2F11tnh_khdk?coh=164777&entry=tt&shorturl=1', 'image.png', 2, '2023-10-11 04:44:45', '2023-10-11 04:44:45');

-- --------------------------------------------------------

--
-- Struktur dari tabel `sessions`
--

CREATE TABLE `sessions` (
  `sid` varchar(36) NOT NULL,
  `expires` datetime DEFAULT NULL,
  `data` text DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `sessions`
--

INSERT INTO `sessions` (`sid`, `expires`, `data`, `createdAt`, `updatedAt`) VALUES
('JrSHGk5RWxToLPEBz-XO-4Bzmv0Coooe', '2023-10-12 04:50:01', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"},\"userId\":\"9196b422-3d28-474f-8282-bc074434af3a\"}', '2023-10-10 16:24:22', '2023-10-11 04:50:01');

-- --------------------------------------------------------

--
-- Struktur dari tabel `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `users`
--

INSERT INTO `users` (`id`, `uuid`, `name`, `email`, `password`, `role`, `createdAt`, `updatedAt`) VALUES
(1, '704080ba-ea03-416e-b144-40cb760acb9d', 'Bobby Rafael Sembiring', 'admin@gmail.com', '$argon2id$v=19$m=65536,t=3,p=4$7a/RPg86fWGi+kDQHn1Etg$x+9Ma73Ma7S59f/zXpHd9vTmc8h71x6mYoEEKvbRtJs', 'admin', '2023-10-10 14:19:02', '2023-10-10 14:19:02'),
(2, '9196b422-3d28-474f-8282-bc074434af3a', 'Rafael Sembiring', 'user@email.com', '$argon2id$v=19$m=65536,t=3,p=4$coW8ygku17YXWkIJWuEWrQ$HZdgZP9QZvqeV+vjg52nh7yVnQpNvl3dYf/Lyj7uYog', 'user', '2023-10-10 14:37:40', '2023-10-10 14:37:40'),
(3, 'aa990fac-4332-450b-b7fb-fdddf23b73c9', 'Sembiring Keloko', 'owner@email.com', '$argon2id$v=19$m=65536,t=3,p=4$YTRXiQ3tcFf3bHV2rjvClQ$H0ywq9VJRFQPCKipjLLHuQUoKIik9Xy7JT4V/Kt31ww', 'owner', '2023-10-10 14:38:55', '2023-10-10 14:38:55'),
(5, 'ce2f8c8b-80d4-47de-9897-4ec5fb5db629', 'Bobby Rafael', 'bobbyrafael233133@gmail.com', '$argon2id$v=19$m=65536,t=3,p=4$TqIRCfS6kuldt3QdPQitKQ$ckyil50O7qLm8wHohGtJ5PVz1VV7AG77x1seESI7+mo', 'admin', '2023-10-11 03:19:02', '2023-10-11 03:19:02');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `locations`
--
ALTER TABLE `locations`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`);

--
-- Indeks untuk tabel `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`sid`);

--
-- Indeks untuk tabel `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `locations`
--
ALTER TABLE `locations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT untuk tabel `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Ketidakleluasaan untuk tabel pelimpahan (Dumped Tables)
--

--
-- Ketidakleluasaan untuk tabel `locations`
--
ALTER TABLE `locations`
  ADD CONSTRAINT `locations_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
