/*
  Warnings:

  - You are about to drop the column `make` on the `Car` table. All the data in the column will be lost.
  - You are about to drop the column `vin` on the `Car` table. All the data in the column will be lost.
  - You are about to drop the column `reading` on the `CarReading` table. All the data in the column will be lost.
  - You are about to drop the column `readingAt` on the `CarReading` table. All the data in the column will be lost.
  - The `role` column on the `User` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - A unique constraint covering the columns `[licensePlate]` on the table `Car` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `brand` to the `Car` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Car` table without a default value. This is not possible if the table is not empty.
  - Added the required column `odometer` to the `CarReading` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "public"."UserRole" AS ENUM ('DRIVER', 'MANAGER', 'ADMIN', 'OTHER');

-- DropIndex
DROP INDEX "public"."Car_vin_key";

-- AlterTable
ALTER TABLE "public"."Car" DROP COLUMN "make",
DROP COLUMN "vin",
ADD COLUMN     "brand" TEXT NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "public"."CarReading" DROP COLUMN "reading",
DROP COLUMN "readingAt",
ADD COLUMN     "fuelLevel" DOUBLE PRECISION,
ADD COLUMN     "odometer" INTEGER NOT NULL,
ADD COLUMN     "recordedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "public"."User" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
DROP COLUMN "role",
ADD COLUMN     "role" "public"."UserRole" NOT NULL DEFAULT 'OTHER';

-- CreateIndex
CREATE UNIQUE INDEX "Car_licensePlate_key" ON "public"."Car"("licensePlate");

-- CreateIndex
CREATE INDEX "CarReading_carId_idx" ON "public"."CarReading"("carId");
