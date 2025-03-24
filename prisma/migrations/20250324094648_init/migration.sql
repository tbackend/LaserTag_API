-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `hexcode` INTEGER NOT NULL,
    `player` VARCHAR(191) NULL,

    UNIQUE INDEX `User_id_key`(`id`),
    UNIQUE INDEX `User_hexcode_key`(`hexcode`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
