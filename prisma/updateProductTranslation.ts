import { register } from "node:module";
import { pathToFileURL } from "node:url";
import { prisma } from "./prisma-client.js";

register("ts-node/esm", pathToFileURL("./"));

interface UpdateProductInput {
  id: number;
  name: string;
  imageUrl: string;
  categoryId: number;
}

interface UpdateIngredientInput {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
}

const updatedProducts: UpdateProductInput[] = [
  {
    id: 1,
    name: "Omelette with ham and mushrooms",
    imageUrl:
      "https://media.dodostatic.net/image/r:292x292/11EE7970321044479C1D1085457A36EB.webp",
    categoryId: 2,
  },
  {
    id: 2,
    name: "Omelette with pepperoni",
    imageUrl:
      "https://media.dodostatic.net/image/r:292x292/11EE94ECF33B0C46BA410DEC1B1DD6F8.webp",
    categoryId: 2,
  },
  {
    id: 3,
    name: "Coffee latte",
    imageUrl:
      "https://media.dodostatic.net/image/r:292x292/11EE7D61B0C26A3F85D97A78FEEE00AD.webp",
    categoryId: 2,
  },
  {
    id: 4,
    name: "Ham and cheese sandwich",
    imageUrl:
      "https://media.dodostatic.net/image/r:292x292/11EE796FF0059B799A17F57A9E64C725.webp",
    categoryId: 3,
  },
  {
    id: 5,
    name: "Chicken nuggets",
    imageUrl:
      "https://media.dodostatic.net/image/r:292x292/11EE7D618B5C7EC29350069AE9532C6E.webp",
    categoryId: 3,
  },
  {
    id: 6,
    name: "Baked potatoes with sauce 🌱",
    imageUrl:
      "https://media.dodostatic.net/image/r:292x292/11EED646A9CD324C962C6BEA78124F19.webp",
    categoryId: 3,
  },
  {
    id: 7,
    name: "Dostler",
    imageUrl:
      "https://media.dodostatic.net/image/r:292x292/11EE796F96D11392A2F6DD73599921B9.webp",
    categoryId: 3,
  },
  {
    id: 8,
    name: "Spicy Dostler 🌶️🌶️",
    imageUrl:
      "https://media.dodostatic.net/image/r:292x292/11EE796FD3B594068F7A752DF8161D04.webp",
    categoryId: 3,
  },
  {
    id: 9,
    name: "Banana milkshake",
    imageUrl:
      "https://media.dodostatic.net/image/r:292x292/11EEE20B8772A72A9B60CFB20012C185.webp",
    categoryId: 4,
  },
  {
    id: 10,
    name: "Caramel apple milkshake",
    imageUrl:
      "https://media.dodostatic.net/image/r:292x292/11EE79702E2A22E693D96133906FB1B8.webp",
    categoryId: 4,
  },
  {
    id: 11,
    name: "Oreo cookie milkshake",
    imageUrl:
      "https://media.dodostatic.net/image/r:292x292/11EE796FA1F50F8F8111A399E4C1A1E3.webp",
    categoryId: 4,
  },
  {
    id: 12,
    name: "Classic milkshake 👶",
    imageUrl:
      "https://media.dodostatic.net/image/r:292x292/11EE796F93FB126693F96CB1D3E403FB.webp",
    categoryId: 4,
  },
  {
    id: 13,
    name: "Irish cappuccino",
    imageUrl:
      "https://media.dodostatic.net/image/r:292x292/11EE7D61999EBDA59C10E216430A6093.webp",
    categoryId: 5,
  },
  {
    id: 14,
    name: "Caramel cappuccino",
    imageUrl:
      "https://media.dodostatic.net/image/r:292x292/11EE7D61AED6B6D4BFDAD4E58D76CF56.webp",
    categoryId: 5,
  },
  {
    id: 15,
    name: "Coconut latte",
    imageUrl:
      "https://media.dodostatic.net/image/r:292x292/11EE7D61B19FA07090EE88B0ED347F42.webp",
    categoryId: 5,
  },
  {
    id: 16,
    name: "Americano coffee",
    imageUrl:
      "https://media.dodostatic.net/image/r:292x292/11EE7D61B044583596548A59078BBD33.webp",
    categoryId: 5,
  },
  {
    id: 17,
    name: "Coffee latte",
    imageUrl:
      "https://media.dodostatic.net/image/r:292x292/11EE7D61B0C26A3F85D97A78FEEE00AD.webp",
    categoryId: 5,
  },
];

const updatedIngredients: UpdateIngredientInput[] = [
  {
    id: 1,
    name: "Cheese crust",
    price: 179,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/99f5cb91225b4875bd06a26d2e842106.png",
  },
  {
    id: 2,
    name: "Creamy mozzarella",
    price: 79,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/cdea869ef287426386ed634e6099a5ba.png",
  },
  {
    id: 3,
    name: "Cheddar and Parmesan cheeses",
    price: 79,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA69C1FE796",
  },
  {
    id: 4,
    name: "Spicy jalapeno pepper",
    price: 59,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/11ee95b6bfdf98fb88a113db92d7b3df.png",
  },
  {
    id: 5,
    name: "Tender chicken",
    price: 79,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA5B328D35A",
  },
  {
    id: 6,
    name: "Champignon mushrooms",
    price: 59,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA67259A324",
  },
  {
    id: 7,
    name: "Bacon",
    price: 79,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA637AAB68F",
  },
  {
    id: 8,
    name: "Ham",
    price: 79,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA61B9A8D61",
  },
  {
    id: 9,
    name: "Spicy pepperoni",
    price: 79,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA6258199C3",
  },
  {
    id: 10,
    name: "Spicy chorizo",
    price: 79,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA62D5D6027",
  },
  {
    id: 11,
    name: "Pickled cucumbers",
    price: 59,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A21DA51A81211E9EA89958D782B",
  },
  {
    id: 12,
    name: "Fresh tomatoes",
    price: 59,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA7AC1A1D67",
  },
  {
    id: 13,
    name: "Red onion",
    price: 59,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA60AE6464C",
  },
  {
    id: 14,
    name: "Pineapple",
    price: 59,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A21DA51A81211E9AFA6795BA2A0",
  },
  {
    id: 15,
    name: "Fresh basil",
    price: 59,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/370dac9ed21e4bffaf9bc2618d258734.png",
  },
  {
    id: 16,
    name: "Champignons",
    price: 59,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA67259A324",
  },
  {
    id: 17,
    name: "Feta cheese",
    price: 59,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA6B0FFC349",
  },
  {
    id: 18,
    name: "Meatballs",
    price: 59,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/b2f3a5d5afe44516a93cfc0d2ee60088.png",
  },
];

async function updateTranslations() {
  try {
    for (const product of updatedProducts) {
      const existingProduct = await prisma.product.findUnique({
        where: { id: product.id },
      });

      if (existingProduct) {
        const isDifferent =
          existingProduct.name !== product.name ||
          existingProduct.imageUrl !== product.imageUrl ||
          existingProduct.categoryId !== product.categoryId;

        if (isDifferent) {
          await prisma.product.update({
            where: { id: product.id },
            data: {
              name: product.name,
              imageUrl: product.imageUrl,
              categoryId: product.categoryId,
            },
          });
          console.log(`Product ${product.id} updated successfully`);
        } else {
          console.log(`Product ${product.id} is unchanged`);
        }
      } else {
        console.warn(`Product ${product.id} not found`);
      }
    }

    console.log("The products have been successfully updated");

    for (const ingredient of updatedIngredients) {
      const existingIngredient = await prisma.ingredient.findUnique({
        where: { id: ingredient.id },
      });

      if (existingIngredient) {
        const isDifferent =
          existingIngredient.name !== ingredient.name ||
          existingIngredient.price !== ingredient.price ||
          existingIngredient.imageUrl !== ingredient.imageUrl;

        if (isDifferent) {
          await prisma.ingredient.update({
            where: { id: ingredient.id },
            data: {
              name: ingredient.name,
              price: ingredient.price,
              imageUrl: ingredient.imageUrl,
            },
          });
          console.log(`Ingredient ${ingredient.id} updated successfully`);
        } else {
          console.log(`Ingredient ${ingredient.id} is unchanged`);
        }
      } else {
        console.warn(`Ingredient ${ingredient.id} not found`);
      }
    }

    console.log("The ingredients have been successfully updated");
  } catch (error) {
    console.error("Update error:", error);
  } finally {
    await prisma.$disconnect();
  }
}

updateTranslations();

// node --loader ts-node/esm prisma/updateProductTranslation.ts
