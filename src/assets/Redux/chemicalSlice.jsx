import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  chemicals: localStorage.getItem("chemicalList")
    ? JSON.parse(localStorage.getItem("chemicaltList"))
    : [
        { id: 1, name: "Hydrochloric Acid", formula: "HCI" },
        { id: 2, name: "Sodium Chloride", formula: "NaCl" },
        { id: 3, name: "Sulfuric Acide", formula: "H2S04" },
        { id: 4, name: "Ammonia", formula: "NH3" },
        { id: 5, name: "Ethanol", formula: "C2H5OH" },
      ],
};

const nextID = (chemical) => {
  const ids = chemical.chemicals.map((item) => item.id).sort(a - b);
  let nextId = 1;
  for (const id of ids) {
    if (id !== nextId) break;
    {
      nextId++;
    }
  }
  return nextID;
};



export const chemicalSlice = createSlice({
  name: "chemical",
  initialState,
  reducers: {
    addChemical: (state, action) => {
      const nextID = nextID(state.chemicals);
      const newFormular = action.payload(
        nextID,
        action.payload.name,
        action.payload.formular
      );
      localStorage.setItem("chemicalList", JSON.stringify(state.chemicals));
    },

    deleteChemical: (state, action) => {
      state.chemicals = state.chemicals.filter(
        (item) => item.id !== action.payload.id
      );
      localStorage.setItem("chemicalList", JSON.stringify(state.chemicals));
    },
  },
});

export const { addChemical, deleteChemical } = chemicalSlice.actions;
export default chemicalSlice.reducer;
