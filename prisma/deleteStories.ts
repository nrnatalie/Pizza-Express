import { prisma } from "../prisma/prisma-client";

async function deleteAllStories() {
  try {
    await prisma.storyItem.deleteMany({});
    await prisma.story.deleteMany({});
    console.log("All stories and story items have been deleted.");
  } catch (error) {
    console.error("Error deleting stories:", error);
  } finally {
    await prisma.$disconnect();
  }
}

deleteAllStories();
