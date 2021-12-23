import { call, put } from "redux-saga/effects";
import { setCountries } from "../../../ducks/countries";
import { getCountries } from "../requests/countriesRequests";

export function* handleGetCountries(action) {
  try {
    console.log('handler')
    const response = yield call(getCountries);
    const { data } = response;
    yield put(setCountries(data));
  } catch (error) {
    console.log(error);
  }
}
