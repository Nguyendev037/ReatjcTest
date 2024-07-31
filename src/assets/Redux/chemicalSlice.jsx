import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  chemicals: [
    { id: 1, name: "Hydrochloric Acid", formula: "HCI" },
    { id: 2, name: "Sodium Chloride", formula: "NaCl" },
    { id: 3, name: "Sulfuric Acide", formula: "H2S04" },
    { id: 4, name: "Ammonia", formula: "NH3" },
    { id: 5, name: "Ethanol", formula: "C2H5OH" },
  ],
};

export const chemicalSlice = createSlice({
  name: "chemical",
  initialState,
  reducers: {
    addChemical: (state, action) => {
      const nextID =
        state.chemicals.reduce(
          (maxId, chemical) => Math.max(chemical.id, maxId),
          0
        ) + 1;
      const newFormular = {
        id: nextID,
        ...action.payload.newName,
        ...action.payload.formu,
      };
      
      state.chemicals = [...state.chemicals, newFormular];
      localStorage.setItem("chemicalList", JSON.stringify(state.chemicals));
    },

    deleteChemical: (state, action) => {
      const index = state.chemicals.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index !== -1) {
        state.chemicals.splice(index, 1);
      }

      localStorage.setItem("chemicalList", JSON.stringify(state.chemicals));
    },

    filterName: (state, action) => {
      state.chemicals = state.chemicals.filter(
        (item) => item.id === action.payload
      );
    },
  },
});

export const { addChemical, deleteChemical } = chemicalSlice.actions;
export default chemicalSlice.reducer;
