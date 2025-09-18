import { PrismaClient } from '../lib/generated/prisma'

const prisma = new PrismaClient()

async function main() {
  // Create sample users
  const users = await prisma.user.createMany({
    data: [
      {
        id: 1,
        name: 'John Driver',
        email: 'john.driver@example.com',
        role: 'DRIVER',
      },
      {
        id: 2,
        name: 'Jane Manager',
        email: 'jane.manager@example.com',
        role: 'FLEET_MANAGER',
      },
      {
        id: 3,
        name: 'Mike Technician',
        email: 'mike.tech@example.com',
        role: 'TECHNICIAN',
      },
    ],
    skipDuplicates: true,
  })

  // Create sample cars
  const cars = await prisma.car.createMany({
    data: [
      {
        id: 1,
        make: 'Toyota',
        model: 'Camry',
        year: 2022,
        licensePlate: 'ABC123',
        vin: '1HGCM82633A123456',
      },
      {
        id: 2,
        make: 'Ford',
        model: 'Transit',
        year: 2021,
        licensePlate: 'XYZ789',
        vin: '1FDOW48L98VA98765',
      },
    ],
    skipDuplicates: true,
  })

  console.log('Seed data created:', { users, cars })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })