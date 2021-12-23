export const GET_COUNTRIES = "GET_COUNTRIES";
export const SET_COUNTRIES = "SET_COUNTRIES";

export const getCountries = () => ({
  type: GET_COUNTRIES,
});

export const setCountries = (countries) => ({
  type: SET_COUNTRIES,
  countries,
});

const initialState = {
  countries: undefined,
};

export default (state = initialState, action) => {
  console.log("Enter ", action);

  switch (action.type) {
    case SET_COUNTRIES:
      const { countries } = action;
      return { ...state, countries };
    default:
      return state;
  }
};
