import { categories } from "@/data/categories";
import { type Category } from "@/types/categories";
import { create } from "zustand";

interface CategoriesStore {
  categories: Category[];
  setCategories: (newCategories: Category[]) => void;
  changeLimit: (categoryName: string, newLimit: number) => void;
  getCategoryByName: (categoryName: string) => Category | undefined;
  categorySelected?: string;
  setCategorySelected?: (categoryName: string) => void;
  isModificated: boolean
  setIsModificated: (isModificated: boolean) => void;
}

export const useCategoriesStore = create<CategoriesStore>((set) => ({
  categories: categories,
  setCategories: (newCategories) => set({ categories: newCategories }),
  changeLimit: (categoryName, newLimit) => {
    set((state) => {
      const category = state.categories.find(cat => cat.name === categoryName);
      if (category) {
        category.spentLimit = newLimit;
      }
      return { categories: [...state.categories] };
    });
  },
  getCategoryByName: (categoryName) => {
    const category = categories.find(cat => cat.name === categoryName);
    return category;
  },
  categorySelected: undefined,
  setCategorySelected: (categoryName) => {
    set({ categorySelected: categoryName });
  },
  isModificated: false,
  setIsModificated: (isModificated) => set({ isModificated }),
}))