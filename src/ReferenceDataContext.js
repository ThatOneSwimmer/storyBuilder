import React, { createContext, useState } from "react";
// The createContext  and useState functions are imported from React.

export const ReferenceDataContext = createContext({ userData: undefined, setUserData: undefined });
// UserData is a value and setUserData is a function.

export const ReferenceDataContextProvider = ({ children }) => 
// This function is able to wrap children.
{
  const [userData, setUserData] = useState(undefined);

  return (
    <ReferenceDataContext.Provider value={{ userData, setUserData }}>
      {children}
    </ReferenceDataContext.Provider>
    // Allows components that are wrapped around ReferenceDataContextProvider to access children as seen in App.js
  );
};

// This file allows any components in the app that need access to userData and setUserData.
// They can update userData by using the useContext hook and ReferenceDataContext context.