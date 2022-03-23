/*
  Warnings:

  - You are about to alter the column `policy_agreed` on the `users` table. The data in that column could be lost. The data in that column will be cast from `Int` to `TinyInt`.
  - A unique constraint covering the columns `[product_id]` on the table `nutritions` will be added. If there are existing duplicate values, this will fail.
  - Made the column `phone_number` on table `users` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `users` MODIFY `phone_number` VARCHAR(191) NOT NULL,
    MODIFY `policy_agreed` BOOLEAN NULL DEFAULT true;

-- CreateIndex
CREATE UNIQUE INDEX `nutritions_product_id_key` ON `nutritions`(`product_id`);
