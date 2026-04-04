// Change the word 'localhost' to the current IP address
// Open the port in middleware index.js to accept all ports
export const getCycles = async (token) => {
  const res = await fetch("http://localhost:8080/api/cycles", {
    headers: { Authorization: `Bearer ${token}` }
  });
  if (!res.ok) throw new Error(await res.text());
  return res.json();
};

export const addCycle = async (data, token) => {
  const res = await fetch("http://localhost:8080/api/cycles", {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
    body: JSON.stringify(data)
  });
  if (!res.ok) throw new Error(await res.text());
  return res.json();
};

export const deleteCycle = async (id, token) => {
  const res = await fetch(`http://localhost:8080/api/cycles/${id}`, {
    method: 'DELETE',
    headers: { Authorization: `Bearer ${token}` }
  });
  if (!res.ok) throw new Error(await res.text());
  return true; // just return success
};

export const updateCycle = async (data, token) => {
  const res = await fetch(`http://localhost:8080/api/cycles/${data._id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
    body: JSON.stringify(data)
  });
  if (!res.ok) throw new Error(await res.text());
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

