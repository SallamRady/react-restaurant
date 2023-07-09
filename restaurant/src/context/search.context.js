import React, { createContext, useState } from "react";

export const searchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchWord, setSearchWord] = useState('');
  return (
    <searchContext.Provider value={{ searchWord, setSearchWord }}>
      {children}
    </searchContext.Provider>
  );
};
