import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCompanyFinancials } from '../redux/company';
import CompanyPage from '../components/CompanyPage';
import '../index.css';

const Company = function pgCompany() {
  const data = useLocation();
  const url = window.location.href;
  const newString = url.substring(39);

  const splitSymbolArr = data.pathname.split('/');
  let symbol = splitSymbolArr[splitSymbolArr.length - 1];

  if (typeof symbol === 'undefined') {
    symbol = newString;
  }
  const dispatch = useDispatch();
  useEffect(() => {
    if (symbol) {
      dispatch(fetchCompanyFinancials(symbol));
    }
  }, [symbol]);
  const companyData = useSelector((state) => state.companyReducer.payload);
  const [newState, setState] = useState(companyData);
  setTimeout(() => {
    setState(companyData);
  }, 2000);
  return (
    <CompanyPage info={newState} symbol={symbol} />
  );
};

export default Company;
