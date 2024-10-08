import { call, put, takeLatest } from 'redux-saga/effects';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setRegions } from './regionSlice';

function* fetchRegions() {
  try {
    const regions = yield call(AsyncStorage.getItem, 'regions');
    if (regions) {
      yield put(setRegions(JSON.parse(regions)));
    }
  } catch (error) {
    console.error('Failed to load regions', error);
  }
}

export function* regionSagas() {
  yield takeLatest('regions/fetchRegions', fetchRegions);
}
