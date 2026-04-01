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

export const login = async (email, password) => {
    const response = await fetch('http://localhost:8080/api/users', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({ email: email, password: password })
    });
    return response.json();
};

export const register = async (email, password) => {
    const response = await fetch('http://localhost:8080/api/users?action=register', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({ email: email, password: password })
    });
    return response.json();
};

