import { PrismaClient, UserRole } from '../lib/generated/prisma'

const prisma = new PrismaClient()

async function main() {
  // Create sample users
const now = new Date()

await prisma.user.createMany({
  data: [
    {
      name: 'John Driver',
      email: 'john.driver@example.com',
      role: "DRIVER",
      createdAt: now,
      updatedAt: now,
    },
    {
      name: 'Jane Manager',
      email: 'jane.manager@example.com',
      role: "MANAGER",
      createdAt: now,
      updatedAt: now,
    },
    {
      name: 'Mike Technician',
      email: 'mike.tech@example.com',
      role: "OTHER",
      createdAt: now,
      updatedAt: now,
    },
  ],
  skipDuplicates: true,
})
  // Create sample cars
  await prisma.car.createMany({
    data: [
      {
        licensePlate: 'ABC123',
        model: 'Camry',
        brand: 'Toyota',
        year: 2022,
      },
      {
        licensePlate: 'XYZ789',
        model: 'Transit',
        brand: 'Ford',
        year: 2021,
      },
    ],
    skipDuplicates: true,
  })

  console.log('Seed data created successfully!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
