/*
  Warnings:

  - Added the required column `icon` to the `Menu` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `menu` ADD COLUMN `icon` VARCHAR(191) NOT NULL;
