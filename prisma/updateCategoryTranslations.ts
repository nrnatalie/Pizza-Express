import { prisma } from "./prisma-client.js";

async function updateCategoryTranslations() {
  const translations = {
    Пиццы: "Pizzas",
    Завтрак: "Breakfast",
    Закуски: "Snacks",
    Коктейли: "Cocktails",
    Напитки: "Drinks",
  };

  for (const [ruName, enName] of Object.entries(translations)) {
    await prisma.category.updateMany({
      where: {
        name: ruName,
      },
      data: {
        name: enName,
      },
    });
  }

  console.log("Categories updated successfully!");
}

updateCategoryTranslations()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });




// node --loader ts-node/esm prisma/updateCategoryTranslations.ts