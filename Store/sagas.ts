import { all } from 'redux-saga/effects';

import { regionSagas } from "../app/features/regions/regionSagas"
import { customerSagas } from '@/app/features/customers/customerSagas';
export default function* rootSaga() {
  yield all([
    customerSagas(),
    regionSagas(),
  ]);
}
