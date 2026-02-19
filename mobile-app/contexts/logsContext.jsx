import React, { useState } from "react";
import uuid from 'react-native-uuid';
// import { addLog as addLogApi} from "../api/api";

export const LogsContext = React.createContext(null)

const LogsContextProvider = (props) => {
      const [ logs, setLogs] = useState([
      {id:1, date:"13-11-2024", cycleLength:"26", startDate: "2026-02-19"},
      {id:2, date:"12-11-2024", cycleLength:"28", startDate: "2026-02-19"},
      {id:3, date:"10-11-2024", cycleLength:"30", startDate: "2026-02-19"}
  ])

    const addLog = (log) => {
    const newLog = {
      ...log,
      id: uuid.v4()
    };
    setLogs((prevLogs) => [...prevLogs, newLog]);
} 

/* const addLog = async (log) => {
        const newLog = await addLogApi(log)
        setLogs(prev => [...prev, newLog])
    } */

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