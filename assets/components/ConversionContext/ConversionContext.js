import React, { createContext, useState, Children } from 'react';
import CurrancyList from '../../Screens/CurrancyList';
export const ConversionContext = createContext();

export const ConversionContextProvider = ({ children }) => {
    const [baseCurrency, setBaseCurrency] = useState('USD');
    const [quoteCurrency, setQuoteCurrency] = useState('GBP');
    const [currancyvalue, setCurrancyValue] = useState('GBP');
    
    const swap = () => {
        setBaseCurrency(quoteCurrency);
        setQuoteCurrency(baseCurrency);
      };
    const contextValue = {
        baseCurrency,
        quoteCurrency,
        setBaseCurrency,
        setQuoteCurrency,
        setCurrancyValue,
        currancyvalue,
        swap,
    }
  return (
    <ConversionContext.Provider value={contextValue}>
      
      {children}
    </ConversionContext.Provider>
  );
};