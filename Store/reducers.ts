import { combineReducers } from 'redux';
import customerReducer from '../app/features/customers/customerSlice';
import regionReducer from '../app/features/regions/regionSlice';
import authReducer from '../app/features/auth/authSlice'

const rootReducer = combineReducers({
  customers: customerReducer,
  regions: regionReducer,
  auth: authReducer

});

export default rootReducer;
