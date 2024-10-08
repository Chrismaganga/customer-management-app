import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define a Customer type based on your application's requirements
interface Customer {
  id: string; // or number, depending on your application logic
  name: string;
  email?: string; // Optional field
  // Add any additional fields you might need for a customer
}

// Define the initial state type
type CustomerState = Customer[];

// Create the customer slice
const customerSlice = createSlice({
  name: 'customers',
  initialState: [] as CustomerState, // Specify the initial state type
  reducers: {
    addCustomer: (state, action: PayloadAction<Customer>) => {
      state.push(action.payload);
    },
    editCustomer: (state, action: PayloadAction<Customer>) => {
      const index = state.findIndex(customer => customer.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
    setCustomers: (state, action: PayloadAction<Customer[]>) => {
      return action.payload;
    },
  },
});

// Export the actions and reducer
export const { addCustomer, editCustomer, setCustomers } = customerSlice.actions;
export default customerSlice.reducer;
