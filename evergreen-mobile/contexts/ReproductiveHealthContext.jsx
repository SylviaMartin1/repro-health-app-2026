/**
 * Import React so JSX and React functionality can be used
 * Import useState so the functional component can hold state
 * Import uuid library so unique ids can be generated
 */
import React, { useState } from "react";
import uuid from 'react-native-uuid';

/**
 * ReproductiveHealthContext context object
 * Declared to allow reproductive health data to be shared across the app using a provider
 */
export const ReproductiveHealthContext = React.createContext(null)

/**
 * ReproductiveHealthContextProvider functional component
 * Returns Provider component
 * Declares cycles array and addCycle() function
 */
const ReproductiveHealthContextProvider = (props) => {
    /**
     * Declares cycles array and setCycles function to manage it
     * Inserts dummy data into the cycles array for testing
     */
    const [ cycles, setCycles] = useState([
      {id:1, startDate: "2026-02-19", flowLevel:"5", painLevel:"4", symptoms:"cramps", emotions:"sad"},
      {id:2, startDate: "2026-02-19", flowLevel:"5", painLevel:"4", symptoms:"cramps", emotions:"sad"},
      {id:3, startDate: "2026-02-19", flowLevel:"5", painLevel:"4", symptoms:"cramps", emotions:"sad"}
    ])

    /**
     * addCycle() function
     * @param cycle object
     * creates newCycle object which is a copy of the cycle object
     * adds a unique id to the newCycle object
     * updates the cycles array by adding the newCycle object to the current cycles array
     */
    const addCycle = (cycle) => {
    const newCycle = {
      ...cycle,
      id: uuid.v4()
    };
    setCycles((currentCycles) => [...currentCycles, newCycle]);
}

    /**
     * deleteCycle() function
     * @param id attribute
     * filters through the list of current cycles to find a specific id and rem
     */
    const deleteCycle = (id) => {
    setCycles((currentCycles) =>
      currentCycles.filter((cycle) => cycle.id !== id)
    );
  }



/**
 * ReproductiveHealthContext Provider component
 * Shares the cycles array and addCycle() function with the rest of the app
 * Renders any child components passed into the provider
 */
return (
    <ReproductiveHealthContext.Provider
        value={{
            cycles,
            addCycle,
            deleteCycle
        }}
    >
        {props.children}
        </ReproductiveHealthContext.Provider>
)
}

/**
 * Export the ReproductiveHealthContextProvider functional component 
 * so it can be used in other files
 */
export default ReproductiveHealthContextProvider;