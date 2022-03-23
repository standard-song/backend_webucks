/*
  Warnings:

  - You are about to alter the column `caffein` on the `nutritions` table. The data in that column could be lost. The data in that column will be cast from `Double` to `VarChar(191)`.
  - You are about to alter the column `fat` on the `nutritions` table. The data in that column could be lost. The data in that column will be cast from `Double` to `VarChar(191)`.
  - You are about to alter the column `sugar` on the `nutritions` table. The data in that column could be lost. The data in that column will be cast from `Double` to `VarChar(191)`.
  - You are about to alter the column `sodium` on the `nutritions` table. The data in that column could be lost. The data in that column will be cast from `Double` to `VarChar(191)`.
  - You are about to alter the column `calories` on the `nutritions` table. The data in that column could be lost. The data in that column will be cast from `Double` to `VarChar(191)`.

*/
-- AlterTable
ALTER TABLE `nutritions` MODIFY `caffein` VARCHAR(191) NULL,
    MODIFY `fat` VARCHAR(191) NULL,
    MODIFY `sugar` VARCHAR(191) NULL,
    MODIFY `sodium` VARCHAR(191) NULL,
    MODIFY `calories` VARCHAR(191) NULL;
