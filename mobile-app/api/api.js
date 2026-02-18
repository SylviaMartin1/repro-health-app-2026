export const getLogs = async () => {
    const  res = await fetch(
        `http://localhost:8080/api/logs`
    )
        return res.json();
};

export const addLog = async(data) => {
    const res = await fetch(
        `http://localhost:8080/api/logs`,
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

export const deleteLog = async (id) => {
    const res =  fetch(
        `http://localhost:8080/api/logs/${id}`,
        {
            method: 'DELETE'
        }
    )
    return res;
};

export const updateLog = async (data) => {
    const res = await fetch(
        `http://localhost:8080/api/logs/${data._id}`,
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
