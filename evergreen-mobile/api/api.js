// Change the word 'localhost' to the current IP address
// Open the port in middleware index.js to accept all ports
export const getCycles = async () => {
    const  res = await fetch(
        `http://localhost:8080/api/cycles`
    )
        return res.json();
};

export const addCycle = async(data) => {
    const res = await fetch(
        `http://localhost:8080/api/cycles`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        }
    )
        return res.json();
};

export const deleteCycle = async (id) => {
    const res =  fetch(
        `http://localhost:8080/api/cycles/${id}`,
        {
            method: 'DELETE'
        }
    )
    return res;
};

export const updateCycle = async (data) => {
    const res = await fetch(
        `http://localhost:8080/api/cycles/${data._id}`,
        {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        }
    )
        return res.json();
};
