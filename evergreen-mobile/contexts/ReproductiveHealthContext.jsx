import React, { useState } from "react";
import uuid from 'react-native-uuid';

export const ReproductiveHealthContext = React.createContext(null)

const ReproductiveHealthContextProvider = (props) => {
    const [ cycles, setCycles] = useState([
      {id:1, startDate: "2026-02-19", flowLevel:"5", painLevel:"4", symptoms:"cramps", emotions:"sad"},
      {id:2, startDate: "2026-02-19", flowLevel:"5", painLevel:"4", symptoms:"cramps", emotions:"sad"},
      {id:3, startDate: "2026-02-19", flowLevel:"5", painLevel:"4", symptoms:"cramps", emotions:"sad"}
    ])
   
    const addCycle = (cycle) => {
    const newCycle = {
      ...cycle,
      id: uuid.v4()
    };
    setCycles((currentCycles) => [...currentCycles, newCycle]);
}

    const deleteCycle = (id) => {
    setCycles((currentCycles) =>
      currentCycles.filter((cycle) => cycle.id !== id)
    );
  }

  const updateCycle = (id, updatedCycle) => {
  setCycles((currentCycles) =>
    currentCycles.map((cycle) =>
      cycle.id === id ? { ...cycle, ...updatedCycle } : cycle
    )
  );
};

return (
    <ReproductiveHealthContext.Provider
        value={{
            cycles,
            addCycle,
            deleteCycle,
            updateCycle
        }}
    >
        {props.children}
        </ReproductiveHealthContext.Provider>
)
}

export default ReproductiveHealthContextProvider;