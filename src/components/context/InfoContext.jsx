import React, { useContext, useState } from "react";

const Context = React.createContext();

export const InfoContext = (props) => {
  //
  const [username, setUsername] = useState("");
  const [isModeAdmin, setIsModeAdmin] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [isAdding, setIsAdding] = useState(true);
  const [currentTabSelected, setCurrentTabSelected] = useState("add");
  //
  const contextValue = {
    username,
    setUsername,
    isModeAdmin,
    setIsModeAdmin,
    isCollapsed,
    setIsCollapsed,
    isEditing,
    setIsEditing,
    isAdding,
    setIsAdding,
    currentTabSelected,
    setCurrentTabSelected,
  };
  //
  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

export const useInfoContext = () => useContext(Context);
