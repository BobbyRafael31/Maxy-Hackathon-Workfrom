-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 11 Okt 2023 pada 12.48
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
-- Struktur dari tabel `amenities`
--

CREATE TABLE `amenities` (
  `id` int(11) NOT NULL,
  `amenity` varchar(255) NOT NULL,
  `locationId` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `amenities`
--

INSERT INTO `amenities` (`id`, `amenity`, `locationId`, `createdAt`, `updatedAt`) VALUES
(1, 'Smoking Room', 1, '2023-10-11 10:26:11', '2023-10-11 10:30:33');

-- --------------------------------------------------------

--
-- Struktur dari tabel `facility`
--

CREATE TABLE `facility` (
  `id` int(11) NOT NULL,
  `category` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `range` int(11) NOT NULL,
  `locationId` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
  `description` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `location_url` varchar(255) DEFAULT NULL,
  `userId` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `locations`
--

INSERT INTO `locations` (`id`, `building_id`, `name`, `city`, `address`, `description`, `image`, `url`, `location_url`, `userId`, `createdAt`, `updatedAt`) VALUES
(1, 'aa965d2a-e4ab-4d87-9763-0c108aed49df', 'Tower', 'Medan', 'Clapham Co-working & Event Space.\nRuko Centre Point Medan.\nJalan Timor Blok G No. III/IV 2nd Floor,\nGang Buntu, Medan Timur, Medan City,\nNorth Sumatra 20231', 'Event Space paid tribute to the Clapham Sect who was instrumental in eradicating modern slavery in England.', '26fd9710acd3ef804ab41f2fc906c809.jpg', 'http://localhost:3000/images/26fd9710acd3ef804ab41f2fc906c809.jpg', 'https://www.google.com/maps?ll=3.592618,98.681436&z=14&t=m&hl=en-US&gl=US&mapclient=embed&cid=2021951983991219041', 2, '2023-10-11 09:09:38', '2023-10-11 09:37:25'),
(2, '371a2e38-603c-4176-83f1-37ab65ceb777', 'MDEAN TOWER', 'Medan', 'Clapham Co-working & Event Space.\nRuko Centre Point Medan.\nJalan Timor Blok G No. III/IV 2nd Floor,\nGang Buntu, Medan Timur, Medan City,\nNorth Sumatra 20231', 'Event Space paid tribute to the Clapham Sect who was instrumental in eradicating modern slavery in England.', '26fd9710acd3ef804ab41f2fc906c809.jpg', 'http://localhost:3000/images/26fd9710acd3ef804ab41f2fc906c809.jpg', 'https://www.google.com/maps?ll=3.592618,98.681436&z=14&t=m&hl=en-US&gl=US&mapclient=embed&cid=2021951983991219041', 2, '2023-10-11 09:45:50', '2023-10-11 09:45:50');

-- --------------------------------------------------------

--
-- Struktur dari tabel `orders`
--

CREATE TABLE `orders` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `phone_number` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `company_name` varchar(255) DEFAULT NULL,
  `bookplan` varchar(255) NOT NULL,
  `capacity` varchar(255) NOT NULL,
  `contactby` varchar(255) NOT NULL,
  `locationId` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `orders`
--

INSERT INTO `orders` (`id`, `name`, `phone_number`, `email`, `company_name`, `bookplan`, `capacity`, `contactby`, `locationId`, `createdAt`, `updatedAt`) VALUES
(1, 'Bobby', '0812312221', 'buyyer@email.com', 'Veteran Company', 'Meeting', '5', 'Bobby', 1, '2023-10-11 10:42:35', '2023-10-11 10:42:35');

-- --------------------------------------------------------

--
-- Struktur dari tabel `pricings`
--

CREATE TABLE `pricings` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `price` int(11) NOT NULL,
  `pax` varchar(255) NOT NULL,
  `locationId` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
('JrSHGk5RWxToLPEBz-XO-4Bzmv0Coooe', '2023-10-12 09:37:25', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"},\"userId\":\"9196b422-3d28-474f-8282-bc074434af3a\"}', '2023-10-10 16:24:22', '2023-10-11 09:37:25'),
('QAQZmZKHSOTc6JRS4nis24gh4ePzzw2q', '2023-10-12 10:47:29', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"},\"userId\":\"9196b422-3d28-474f-8282-bc074434af3a\"}', '2023-10-11 09:45:29', '2023-10-11 10:47:29');

-- --------------------------------------------------------

--
-- Struktur dari tabel `usecases`
--

CREATE TABLE `usecases` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `category` varchar(255) NOT NULL,
  `capacity` int(11) NOT NULL,
  `price` int(11) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `locationId` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `usecases`
--

INSERT INTO `usecases` (`id`, `name`, `category`, `capacity`, `price`, `image`, `url`, `locationId`, `createdAt`, `updatedAt`) VALUES
(1, 'Medan Tower Co-working Floor 5', 'Meeting Room', 12, 100000, '30fc35f32dce7633888d9212eb5f50ca.jpg', 'http://localhost:3000/images/30fc35f32dce7633888d9212eb5f50ca.jpg', 1, '2023-10-11 10:08:43', '2023-10-11 10:14:22');

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
-- Indeks untuk tabel `amenities`
--
ALTER TABLE `amenities`
  ADD PRIMARY KEY (`id`),
  ADD KEY `locationId` (`locationId`);

--
-- Indeks untuk tabel `facility`
--
ALTER TABLE `facility`
  ADD PRIMARY KEY (`id`),
  ADD KEY `locationId` (`locationId`);

--
-- Indeks untuk tabel `locations`
--
ALTER TABLE `locations`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`);

--
-- Indeks untuk tabel `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `locationId` (`locationId`);

--
-- Indeks untuk tabel `pricings`
--
ALTER TABLE `pricings`
  ADD PRIMARY KEY (`id`),
  ADD KEY `locationId` (`locationId`);

--
-- Indeks untuk tabel `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`sid`);

--
-- Indeks untuk tabel `usecases`
--
ALTER TABLE `usecases`
  ADD PRIMARY KEY (`id`),
  ADD KEY `locationId` (`locationId`);

--
-- Indeks untuk tabel `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `amenities`
--
ALTER TABLE `amenities`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT untuk tabel `facility`
--
ALTER TABLE `facility`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT untuk tabel `locations`
--
ALTER TABLE `locations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT untuk tabel `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT untuk tabel `pricings`
--
ALTER TABLE `pricings`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT untuk tabel `usecases`
--
ALTER TABLE `usecases`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT untuk tabel `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Ketidakleluasaan untuk tabel pelimpahan (Dumped Tables)
--

--
-- Ketidakleluasaan untuk tabel `amenities`
--
ALTER TABLE `amenities`
  ADD CONSTRAINT `amenities_ibfk_1` FOREIGN KEY (`locationId`) REFERENCES `locations` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ketidakleluasaan untuk tabel `facility`
--
ALTER TABLE `facility`
  ADD CONSTRAINT `facility_ibfk_1` FOREIGN KEY (`locationId`) REFERENCES `locations` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ketidakleluasaan untuk tabel `locations`
--
ALTER TABLE `locations`
  ADD CONSTRAINT `locations_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ketidakleluasaan untuk tabel `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`locationId`) REFERENCES `locations` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ketidakleluasaan untuk tabel `pricings`
--
ALTER TABLE `pricings`
  ADD CONSTRAINT `pricings_ibfk_1` FOREIGN KEY (`locationId`) REFERENCES `locations` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ketidakleluasaan untuk tabel `usecases`
--
ALTER TABLE `usecases`
  ADD CONSTRAINT `usecases_ibfk_1` FOREIGN KEY (`locationId`) REFERENCES `locations` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
