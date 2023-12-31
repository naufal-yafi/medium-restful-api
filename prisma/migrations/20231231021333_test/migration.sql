-- CreateTable
CREATE TABLE `products` (
    `slug` VARCHAR(191) NOT NULL,
    `title` VARCHAR(65) NOT NULL,
    `description` TEXT NOT NULL,
    `category_slug` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NULL,

    UNIQUE INDEX `products_title_key`(`title`),
    PRIMARY KEY (`slug`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `categories` (
    `slug` VARCHAR(191) NOT NULL,
    `name` VARCHAR(30) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NULL,

    UNIQUE INDEX `categories_name_key`(`name`),
    PRIMARY KEY (`slug`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `products` ADD CONSTRAINT `products_category_slug_fkey` FOREIGN KEY (`category_slug`) REFERENCES `categories`(`slug`) ON DELETE RESTRICT ON UPDATE CASCADE;
