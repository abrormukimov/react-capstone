const COMPANY_FINANCES = 'app/company/FETCH_FINANCES';

const initialState = {};

const companyFinances = (payload) => ({
  type: COMPANY_FINANCES,
  payload,
});

export const fetchCompanyFinancials = (symbol) => async (dispatch) => {
  const requestOptions = {
    method: 'GET',
    redirect: 'follow',
  };
  const details = await fetch(`https://financialmodelingprep.com/api/v3/ratios-ttm/${symbol}?apikey=7633c175e59520304718759bb0627163`, requestOptions);
  const finances = await fetch(`https://financialmodelingprep.com/api/v3/profile/${symbol}?apikey=7633c175e59520304718759bb0627163`, requestOptions);
  const responseFinancials = await finances.json();
  const responseData = await details.json();
  const obj = {
    responseFinancials,
    responseData,
  };
  dispatch(companyFinances(obj));
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case COMPANY_FINANCES:
      return {
        payload: action.payload,
      };
    default: return state;
  }
};

export default reducer;
