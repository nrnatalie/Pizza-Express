import { prisma } from "./prisma-client.js";

const updateProductNames = async () => {
  try {
    await prisma.product.updateMany({
      where: {
        name: "Пепперони фреш",
      },
      data: {
        name: "Pepperoni Fresh",
      },
    });

    await prisma.product.updateMany({
      where: {
        name: "Сырная",
      },
      data: {
        name: "Cheesy",
      },
    });

    await prisma.product.updateMany({
      where: {
        name: "Чоризо фреш",
      },
      data: {
        name: "Chorizo Fresh",
      },
    });

    console.log("Product names updated!");
  } catch (e) {
    console.error("Error updating product names:", e);
  } finally {
    await prisma.$disconnect();
  }
};

updateProductNames();

// node --loader ts-node/esm prisma/updateProductNames.ts
