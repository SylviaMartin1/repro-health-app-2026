import React, { useState } from "react";
// import React, { useState, useEffect } from "react";
import uuid from 'react-native-uuid';
//import { getLogs, addLog as addLogApi} from "../api/api";

export const LogsContext = React.createContext(null)

const LogsContextProvider = (props) => {
      const [ logs, setLogs] = useState([
      {id:1, startDate: "2026-02-19", flowLevel:"5", painLevel:"4", symptoms:"cramps", emotions:"sad"},
      {id:2, startDate: "2026-02-19", flowLevel:"5", painLevel:"4", symptoms:"cramps", emotions:"sad"},
      {id:3, startDate: "2026-02-19", flowLevel:"5", painLevel:"4", symptoms:"cramps", emotions:"sad"}
  ])

  // const [logs, setLogs] = useState([]);

   /* useEffect(() => {
    const loadLogs = async () => {
      try {
        console.log("Fetching logs from DB...");
        const data = await getLogs();
        console.log("Fetched logs:", data);
        setLogs(data);
      } catch (error) {
        console.log("Error loading logs:", error);
      }
    };
 
    loadLogs();
  }, []);
  */

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
    }  */

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