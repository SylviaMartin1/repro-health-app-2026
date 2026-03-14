
import React, { useState } from "react";
import uuid from 'react-native-uuid';

export const LogsContext = React.createContext(null)

const LogsContextProvider = (props) => {
      const [ logs, setLogs] = useState([
      {id:1, startDate: "2026-02-19", flowLevel:"5", painLevel:"4", symptoms:"cramps", emotions:"sad"},
      {id:2, startDate: "2026-02-19", flowLevel:"5", painLevel:"4", symptoms:"cramps", emotions:"sad"},
      {id:3, startDate: "2026-02-19", flowLevel:"5", painLevel:"4", symptoms:"cramps", emotions:"sad"}
  ])

    const addLog = (log) => {
    const newLog = {
      ...log,
      id: uuid.v4()
    };
    setLogs((prevLogs) => [...prevLogs, newLog]);
}  

return (
    <LogsContext.Provider
        value={{
            logs,
            addLog
        }}
    >
        {props.children}
        </LogsContext.Provider>
)
}

export default LogsContextProvider;