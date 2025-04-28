// const { PrismaClient } = require('@prisma/client');
const { PrismaClient } = require('./generated/prisma');

const prisma = new PrismaClient();

// async function main() {
// 	const folder = await prisma.folder.update({
// 		where: { id: 1 },
// 		data: { published: true },
// 	});
// 	console.log(folder);
// }

async function main() {
	const folder = await prisma.folder.createMany({
		data: [
			{ name: 'A' },
			{ name: 'B' },
			{ name: 'C' },
		],
		skipDuplicates: true,
	});
	console.log(folder);
}

main()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});
