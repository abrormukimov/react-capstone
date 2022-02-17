const COMPANIES = 'app/home/FETCH-COMPANIES';

const initialState = [];

const fetchData = (payload) => (
  {
    type: COMPANIES,
    payload,
  }
);

export const listAPIcall = () => async (dispatch) => {
  const requestOptions = {
    method: 'GET',
    redirect: 'follow',
  };
  const finalData = await fetch('https://financialmodelingprep.com/api/v3/gainers?apikey=7633c175e59520304718759bb0627163', requestOptions);
  const data = await finalData.json();
  dispatch(fetchData(data));
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case COMPANIES:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
