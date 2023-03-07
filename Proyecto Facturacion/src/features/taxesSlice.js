import { createSlice } from '@reduxjs/toolkit';

export const taxesSlice = createSlice({
  name: 'taxes',
  initialState: [],
  reducers: {
    addTax: (state, action) => {
      const { taxId, taxName, taxAmount } = action.payload;
      state.push({ taxId, taxName, taxAmount });
    },
    editTax: (state, action) => {
      const { taxId, taxName, taxAmount } = action.payload;
      const existingTax = state.find((tax) => tax.taxId === taxId);
      if (existingTax) {
        existingTax.taxName = taxName;
        existingTax.taxAmount = taxAmount;
      }
    },
    deleteTax: (state, action) => {
      const taxId = action.payload;
      const index = state.findIndex((tax) => tax.taxId === taxId);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
  },
});

export const { addTax, editTax, deleteTax } = taxesSlice.actions;

export default taxesSlice.reducer;
