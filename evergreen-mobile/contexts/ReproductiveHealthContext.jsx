//import React, { useState } from "react";
import React, { useState, useEffect, useContext } from "react";
import uuid from 'react-native-uuid';
import { getCycles, addCycle as addCycleApi, getMedicines, deleteCycle as deleteCycleApi, updateCycle as updateCycleApi, addMedicine as addMedicineApi, deleteMedicine as deleteMedicineApi, updateMedicine as updateMedicineApi, getHealthCheckups, addHealthCheckup as addHealthCheckupApi, deleteHealthCheckup as deleteHealthCheckupApi, updateHealthCheckup as updateHealthCheckupApi, getLifeStyleLogs, addLifeStyleLog as addLifeStyleLogApi, deleteLifeStyleLog as deleteLifeStyleLogApi, updateLifeStyleLog as updateLifeStyleLogApi, getMenopausalHealthLogs, addMenopausalHealthLog as addMenopausalHealthLogApi, deleteMenopausalHealthLog as deleteMenopausalHealthLogApi, updateMenopausalHealthLog as updateMenopausalHealthLogApi, getMaleHealthLogs, addMaleHealthLog as addMaleHealthLogApi, deleteMaleHealthLog as deleteMaleHealthLogApi, updateMaleHealthLog as updateMaleHealthLogApi } from "../api/api";
import { AuthContext } from './authContext';

export const ReproductiveHealthContext = React.createContext(null)

const ReproductiveHealthContextProvider = (props) => {
   /*  const [ cycles, setCycles] = useState([
      {id:1, startDate: "2026-02-19", flowLevel:"5", painLevel:"4", symptoms:"cramps", emotions:"sad"},
      {id:2, startDate: "2026-02-19", flowLevel:"5", painLevel:"4", symptoms:"cramps", emotions:"sad"},
      {id:3, startDate: "2026-02-19", flowLevel:"5", painLevel:"4", symptoms:"cramps", emotions:"sad"}
    ]) */

     const [cycles, setCycles] = useState([]);
     const [medicines, setMedicines] = useState([]);
     const [healthCheckups, setHealthCheckups] = useState([]);
     const [lifeStyleLogs, setLifeStyleLogs] = useState([]);
     const [menopausalHealthLogs, setMenopausalHealthLogs] = useState([]);
     const [maleHealthLogs, setMaleHealthLogs] = useState([]);

     const { authToken } = useContext(AuthContext);


  useEffect(() => {
    if (!authToken) return;
    const loadCycles = async () => {
      try {
        const data = await getCycles(authToken);
        if (Array.isArray(data)) {
          setCycles(data);
        } else {
          console.error("API did not return an array:", data);
        }
      } catch (error) {
        console.error("Error loading cycles:", error);
      }
    };
    loadCycles();
  }, [authToken]);

  useEffect(() => {
    if (!authToken) return;
    const loadMedicines = async () => {
      try {
        const data = await getMedicines(authToken);
        if (Array.isArray(data)) {
          setMedicines(data);
        } else {
          console.error("API did not return an array:", data);
        }
      } catch (error) {
        console.error("Error loading medicines:", error);
      }
    };
    loadMedicines();
  }, [authToken]);

   useEffect(() => {
    if (!authToken) return;
    const loadHealthCheckups = async () => {
      try {
        const data = await getHealthCheckups(authToken);
        if (Array.isArray(data)) {
          setHealthCheckups(data);
        } else {
          console.error("API did not return an array:", data);
        }
      } catch (error) {
        console.error("Error loading health checkups:", error);
      }
    };
    loadHealthCheckups();
  }, [authToken]);

   useEffect(() => {
    if (!authToken) return;
    const loadLifeStyleLogs = async () => {
      try {
        const data = await getLifeStyleLogs(authToken);
        if (Array.isArray(data)) {
          setLifeStyleLogs(data);
        } else {
          console.error("API did not return an array:", data);
        }
      } catch (error) {
        console.error("Error loading lifestyle logs:", error);
      }
    };
    loadLifeStyleLogs();
  }, [authToken]);

  useEffect(() => {
    if (!authToken) return;
    const loadMenopausalHealthLogs = async () => {
      try {
        const data = await getMenopausalHealthLogs(authToken);
        if (Array.isArray(data)) {
          setMenopausalHealthLogs(data);
        } else {
          console.error("API did not return an array:", data);
        }
      } catch (error) {
        console.error("Error loading health logs:", error);
      }
    };
    loadMenopausalHealthLogs();
  }, [authToken]);
  
   useEffect(() => {
    if (!authToken) return;
    const loadMaleHealthLogs = async () => {
      try {
        const data = await getMaleHealthLogs(authToken);
        if (Array.isArray(data)) {
          setMaleHealthLogs(data);
        } else {
          console.error("API did not return an array:", data);
        }
      } catch (error) {
        console.error("Error loading health logs:", error);
      }
    };
    loadMaleHealthLogs();
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

  const addMedicine = async (medicine) => {
  console.log("TOKEN BEING SENT:", authToken);
   if (!authToken) return;
  const newMedicine = await addMedicineApi(medicine, authToken);
  setMedicines(prev => [...prev, newMedicine]);
}  

 const updateMedicine = async (_id, updatedMedicine) => {
   if (!authToken) return;
    const updated = await updateMedicineApi({ _id, ...updatedMedicine }, authToken);
    setMedicines(prev => prev.map(medicine => String(medicine._id) === String(_id) ? updated : medicine));
  };

   const deleteMedicine = async (_id) => {
   if (!authToken) return;
    await deleteMedicineApi(_id, authToken);
    setMedicines(prev => prev.filter(medicine => String(medicine._id) !== String(_id)));
  };

  const addHealthCheckup = async (healthCheckup) => {
  console.log("TOKEN BEING SENT:", authToken);
   if (!authToken) return;
  const newHealthCheckup = await addHealthCheckupApi(healthCheckup, authToken);
  setHealthCheckups(prev => [...prev, newHealthCheckup]);
}  

 const updateHealthCheckup = async (_id, updatedHealthCheckup) => {
   if (!authToken) return;
    const updated = await updateHealthCheckupApi({ _id, ...updatedHealthCheckup }, authToken);
    setHealthCheckups(prev => prev.map(healthCheckup => String(healthCheckup._id) === String(_id) ? updated : healthCheckup));
  };

   const deleteHealthCheckup = async (_id) => {
   if (!authToken) return;
    await deleteHealthCheckupApi(_id, authToken);
    setHealthCheckups(prev => prev.filter(healthCheckup => String(healthCheckup._id) !== String(_id)));
  };

 const addLifeStyleLog = async (lifeStyleLog) => {
  console.log("TOKEN BEING SENT:", authToken);
   if (!authToken) return;
  const newLifeStyleLog = await addLifeStyleLogApi(lifeStyleLog, authToken);
  setLifeStyleLogs(prev => [...prev, newLifeStyleLog]);
}  

 const updateLifeStyleLog = async (_id, updatedLifeStyleLog) => {
   if (!authToken) return;
    const updated = await updateLifeStyleLogApi({ _id, ...updatedLifeStyleLog }, authToken);
    setLifeStyleLogs(prev => prev.map(lifeStyleLog => String(lifeStyleLog._id) === String(_id) ? updated : lifeStyleLog));
  };

   const deleteLifeStyleLog = async (_id) => {
   if (!authToken) return;
    await deleteLifeStyleLogApi(_id, authToken);
    setLifeStyleLogs(prev => prev.filter(lifeStyleLog => String(lifeStyleLog._id) !== String(_id)));
  };

  const addMenopausalHealthLog = async (menopausalHealthLog) => {
  console.log("TOKEN BEING SENT:", authToken);
   if (!authToken) return;
  const newMenopausalHealthLog = await addMenopausalHealthLogApi(menopausalHealthLog, authToken);
  setMenopausalHealthLogs(prev => [...prev, newMenopausalHealthLog]);
}  

 const updateMenopausalHealthLog = async (_id, updatedMenopausalHealthLog) => {
   if (!authToken) return;
    const updated = await updateMenopausalHealthLogApi({ _id, ...updatedMenopausalHealthLog }, authToken);
    setMenopausalHealthLogs(prev => prev.map(menopausalHealthLog => String(menopausalHealthLog._id) === String(_id) ? updated : menopausalHealthLog));
  };

   const deleteMenopausalHealthLog = async (_id) => {
   if (!authToken) return;
    await deleteMenopausalHealthLogApi(_id, authToken);
    setMenopausalHealthLogs(prev => prev.filter(menopausalHealthLog => String(menopausalHealthLog._id) !== String(_id)));
  };

    const addMaleHealthLog = async (maleHealthLog) => {
  console.log("TOKEN BEING SENT:", authToken);
   if (!authToken) return;
  const newMaleHealthLog = await addMaleHealthLogApi(maleHealthLog, authToken);
  setMaleHealthLogs(prev => [...prev, newMaleHealthLog]);
}  

 const updateMaleHealthLog = async (_id, updatedMaleHealthLog) => {
   if (!authToken) return;
    const updated = await updateMaleHealthLogApi({ _id, ...updatedMaleHealthLog }, authToken);
    setMaleHealthLogs(prev => prev.map(maleHealthLog => String(maleHealthLog._id) === String(_id) ? updated : maleHealthLog));
  };

   const deleteMaleHealthLog = async (_id) => {
   if (!authToken) return;
    await deleteMaleHealthLogApi(_id, authToken);
    setMaleHealthLogs(prev => prev.filter(maleHealthLog => String(maleHealthLog._id) !== String(_id)));
  };


return (
    <ReproductiveHealthContext.Provider
        value={{
            cycles,
            addCycle,
            deleteCycle,
            updateCycle,
            medicines,
            addMedicine,
            updateMedicine,
            deleteMedicine, 
            healthCheckups,
            addHealthCheckup,
            updateHealthCheckup,
            deleteHealthCheckup,
            lifeStyleLogs,
            addLifeStyleLog,
            updateLifeStyleLog,
            deleteLifeStyleLog,
            menopausalHealthLogs,
            addMenopausalHealthLog,
            updateMenopausalHealthLog,
            deleteMenopausalHealthLog,
            maleHealthLogs,
            addMaleHealthLog,
            updateMaleHealthLog,
            deleteMaleHealthLog,

        }}
    >
        {props.children}
        </ReproductiveHealthContext.Provider>
)
}

export default ReproductiveHealthContextProvider;