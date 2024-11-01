import { Story, StoryItem } from "@prisma/client";
import { axiosInstance } from "./instance";

export type IStory = Story & {
  items: StoryItem[];
};

export const getAll = async () => {
  try {
    const { data } = await axiosInstance.get<IStory[]>("/stories");
    return data;
  } catch (error) {
    console.error("Error fetching stories:", error);
    throw error;
  }
};
