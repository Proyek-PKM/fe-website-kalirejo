import type { DataTable } from "./../components/types/Table.types";
import { create } from "zustand";

interface DataTableState {
  data: DataTable[];
  addData: (item: DataTable) => void;
  removeData: (no: string) => void;
  updateData: (no: string, updatedItem: Partial<DataTable>) => void;
  clearData: () => void;
}

export const useDataTableStore = create<DataTableState>((set: unknown) => ({
  data: [],

  addData: (item: DataTable) =>
    set((state: DataTableState) => ({ data: [...state.data, item] })),

  removeData: (no: string) =>
    set((state: DataTableState) => ({
      data: state.data.filter((d) => d.no !== no),
    })),

  updateData: (no: string, updatedItem: Partial<DataTable>) =>
    set((state: DataTableState) => ({
      data: state.data.map((d) => (d.no === no ? { ...d, ...updatedItem } : d)),
    })),

  clearData: () => set({ data: [] }),
}));
