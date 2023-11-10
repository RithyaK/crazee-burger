import React, { useContext, useState } from "react";

const Context = React.createContext();

export const InfoContext = (props) => {
  //
  const [username, setUsername] = useState("");
  //

  //
  return (
    <Context.Provider value={[username, setUsername]}>
      {props.children}
    </Context.Provider>
  );
};

export const useInfoContext = () => useContext(Context);
