import { call, put, takeLatest, ForkEffect } from 'redux-saga/effects';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setCustomers } from './customerSlice';
import { PayloadAction } from '@reduxjs/toolkit'; // Import PayloadAction for typing actions

// Define a Customer type (adjust according to your actual customer structure)
interface Customer {
  id: string; // or number, based on your use case
  name: string;
  email?: string;
  // Optional fields can be added as necessary
  // Add other relevant fields for a customer
}

// Fetch customers from AsyncStorage
function* fetchCustomers(): Generator<unknown, void, unknown> { // Specify return type
  try {
    const customers = yield call(AsyncStorage.getItem, 'customers');
    if (customers) {
      yield put(setCustomers(JSON.parse(customers as string) as Customer[])); // Cast to Customer array
    }
  } catch (error) {
    console.error('Failed to load customers', error);
  }
}

// Save a new customer to AsyncStorage
function* saveCustomer(action: PayloadAction<Customer>): Generator<unknown, void, unknown> { // Specify return type
  try {
    const customers = yield call(AsyncStorage.getItem, 'customers');
    const updatedCustomers: Customer[] = customers ? JSON.parse(customers as string) : [];
    updatedCustomers.push(action.payload);
    yield call(AsyncStorage.setItem, 'customers', JSON.stringify(updatedCustomers));
  } catch (error) {
    console.error('Failed to save customer', error);
  }
}

// Watcher saga to trigger fetch and save actions
export function* customerSagas(): Generator<ForkEffect<never>, void, unknown> {
  yield takeLatest('customers/fetchCustomers', fetchCustomers);
  yield takeLatest('customers/addCustomer', saveCustomer);
}
