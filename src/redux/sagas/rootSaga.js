import { takeLatest } from "redux-saga/effects";
import { handleGetCountries } from "./countries/handlers/countriesHandler";
import { GET_COUNTRIES } from "../ducks/countries";

export function* watcherSaga() {
  yield takeLatest(GET_COUNTRIES, handleGetCountries);
}
