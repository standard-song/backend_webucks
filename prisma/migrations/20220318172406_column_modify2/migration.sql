/*
  Warnings:

  - You are about to drop the column `english_name` on the `products` table. All the data in the column will be lost.
  - You are about to drop the column `korean_name` on the `products` table. All the data in the column will be lost.
  - Added the required column `koreanname` to the `products` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `products` DROP COLUMN `english_name`,
    DROP COLUMN `korean_name`,
    ADD COLUMN `englishname` VARCHAR(191) NULL,
    ADD COLUMN `koreanname` VARCHAR(191) NOT NULL;
