import React, { createContext, useState } from "react";
const CustomContext = createContext();

export function ContextProvider({ children }) {
  const [profileData, setProfileData] = useState(null);
  const [sendDataFunction, setSendDataFunction] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [dataFavorite, setDataFavorite] = useState([]);
  const [isUserLogged, setIsUserLogged] = useState(false);

  const [kolicina, setKolicina] = useState(0);

  return (
    <CustomContext.Provider
      value={{
        profileData,
        setProfileData,
        sendDataFunction,
        setSendDataFunction,
        totalPrice,
        setTotalPrice,
        dataFavorite,
        setDataFavorite,
        kolicina,
        setKolicina,
        isUserLogged,
        setIsUserLogged,
      }}
    >
      {children}
    </CustomContext.Provider>
  );
}

export default ContextProvider;
export { CustomContext };
