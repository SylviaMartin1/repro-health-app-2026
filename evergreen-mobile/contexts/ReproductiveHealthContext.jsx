//import React, { useState } from "react";
import React, { useState, useEffect, useContext } from "react";
import uuid from 'react-native-uuid';
import { getCycles, addCycle as addCycleApi, deleteCycle as deleteCycleApi, updateCycle as updateCycleApi} from "../api/api";
import { AuthContext } from './authContext';

export const ReproductiveHealthContext = React.createContext(null)

const ReproductiveHealthContextProvider = (props) => {
   /*  const [ cycles, setCycles] = useState([
      {id:1, startDate: "2026-02-19", flowLevel:"5", painLevel:"4", symptoms:"cramps", emotions:"sad"},
      {id:2, startDate: "2026-02-19", flowLevel:"5", painLevel:"4", symptoms:"cramps", emotions:"sad"},
      {id:3, startDate: "2026-02-19", flowLevel:"5", painLevel:"4", symptoms:"cramps", emotions:"sad"}
    ]) */

     const [cycles, setCycles] = useState([]);

     const { authToken } = useContext(AuthContext);


  useEffect(() => {
    if (!authToken) return;
    const loadCycles = async () => {
      try {
        const data = await getCycles(authToken);
        if (Array.isArray(data)) {
          setCycles(data);
        } else {
          console.error("Cycles API did not return an array:", data);
        }
      } catch (error) {
        console.error("Error loading cycles:", error);
      }
    };

    loadCycles();
  }, [authToken]);
  
   
  /*   const addCycle = (cycle) => {
    const newCycle = {
      ...cycle,
      id: uuid.v4()
    };
    setCycles((currentCycles) => [...currentCycles, newCycle]);
} */

const addCycle = async (cycle) => {
  console.log("TOKEN BEING SENT:", authToken);
   if (!authToken) return;
  const newCycle = await addCycleApi(cycle, authToken);
  setCycles(prev => [...prev, newCycle]);
}  

   /*  const deleteCycle = (id) => {
    setCycles((currentCycles) =>
      currentCycles.filter((cycle) => cycle.id !== id)
    );
  } */

  
 const deleteCycle = async (_id) => {
   if (!authToken) return;
    await deleteCycleApi(_id, authToken);
    setCycles(prev => prev.filter(cycle => String(cycle._id) !== String(_id)));
  };
   

/*   const updateCycle = (id, updatedCycle) => {
  setCycles((currentCycles) =>
    currentCycles.map((cycle) =>
      cycle.id === id ? { ...cycle, ...updatedCycle } : cycle
    )
  );
}; */


 const updateCycle = async (_id, updatedCycle) => {
   if (!authToken) return;
    const updated = await updateCycleApi({ _id, ...updatedCycle }, authToken);
    setCycles(prev => prev.map(cycle => String(cycle._id) === String(_id) ? updated : cycle));
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