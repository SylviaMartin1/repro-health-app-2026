import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export const LogsContext = React.createContext(null)

const LogsContextProvider = (props) => {
    const [logs, setLogs] = useState( [] )

    const addLog = (log) => {
    const newLog = {
      ...log,
      id: uuidv4()
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