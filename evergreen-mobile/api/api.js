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

export const login = async (email, password, lifeStage) => {
    const response = await fetch('http://localhost:8080/api/users', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({ email: email, password: password, lifeStage: lifeStage })
    });
    return response.json();
};

export const register = async (email, password, lifeStage) => {
    const response = await fetch('http://localhost:8080/api/users?action=register', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({ email: email, password: password, lifeStage: lifeStage })
    });
    return response.json();
};

export const getMedicines = async (token) => {
  const res = await fetch("http://localhost:8080/api/medicines", {
    headers: { Authorization: `Bearer ${token}` }
  });
  if (!res.ok) throw new Error(await res.text());
  return res.json();
};

export const addMedicine = async (data, token) => {
  const res = await fetch("http://localhost:8080/api/medicines", {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
    body: JSON.stringify(data)
  });
  if (!res.ok) throw new Error(await res.text());
  return res.json();
};

export const deleteMedicine = async (id, token) => {
  const res = await fetch(`http://localhost:8080/api/medicines/${id}`, {
    method: 'DELETE',
    headers: { Authorization: `Bearer ${token}` }
  });
  if (!res.ok) throw new Error(await res.text());
  return true;
};

export const updateMedicine = async (data, token) => {
  const res = await fetch(`http://localhost:8080/api/medicines/${data._id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
    body: JSON.stringify(data)
  });
  if (!res.ok) throw new Error(await res.text());
  return res.json();
};

export const getHealthCheckups = async (token) => {
  const res = await fetch("http://localhost:8080/api/health-checkups", {
    headers: { Authorization: `Bearer ${token}` }
  });
  if (!res.ok) throw new Error(await res.text());
  return res.json();
};

export const addHealthCheckup = async (data, token) => {
  const res = await fetch("http://localhost:8080/api/health-checkups", {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
    body: JSON.stringify(data)
  });
  if (!res.ok) throw new Error(await res.text());
  return res.json();
};

export const deleteHealthCheckup = async (id, token) => {
  const res = await fetch(`http://localhost:8080/api/health-checkups/${id}`, {
    method: 'DELETE',
    headers: { Authorization: `Bearer ${token}` }
  });
  if (!res.ok) throw new Error(await res.text());
  return true;
};

export const updateHealthCheckup = async (data, token) => {
  const res = await fetch(`http://localhost:8080/api/health-checkups/${data._id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
    body: JSON.stringify(data)
  });
  if (!res.ok) throw new Error(await res.text());
  return res.json();
};


export const getLifeStyleLogs = async (token) => {
  const res = await fetch("http://localhost:8080/api/lifeStyleLogs", {
    headers: { Authorization: `Bearer ${token}` }
  });
  if (!res.ok) throw new Error(await res.text());
  return res.json();
};

export const addLifeStyleLog = async (data, token) => {
  const res = await fetch("http://localhost:8080/api/lifeStyleLogs", {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
    body: JSON.stringify(data)
  });
  if (!res.ok) throw new Error(await res.text());
  return res.json();
};

export const deleteLifeStyleLog = async (id, token) => {
  const res = await fetch(`http://localhost:8080/api/lifeStyleLogs/${id}`, {
    method: 'DELETE',
    headers: { Authorization: `Bearer ${token}` }
  });
  if (!res.ok) throw new Error(await res.text());
  return true;
};

export const updateLifeStyleLog = async (data, token) => {
  const res = await fetch(`http://localhost:8080/api/lifeStyleLogs/${data._id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
    body: JSON.stringify(data)
  });
  if (!res.ok) throw new Error(await res.text());
  return res.json();
};

export const getProfile = async (token) => {
  const res = await fetch("http://localhost:8080/api/users/profile", {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  if (!res.ok) throw new Error(await res.text());
  return res.json();
};

export const getMenopausalHealthLogs = async (token) => {
  const res = await fetch("http://localhost:8080/api/menopausalHealthLogs", {
    headers: { Authorization: `Bearer ${token}` }
  });
  if (!res.ok) throw new Error(await res.text());
  return res.json();
};

export const addMenopausalHealthLog = async (data, token) => {
  const res = await fetch("http://localhost:8080/api/menopausalHealthLogs", {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
    body: JSON.stringify(data)
  });
  if (!res.ok) throw new Error(await res.text());
  return res.json();
};

export const deleteMenopausalHealthLog = async (id, token) => {
  const res = await fetch(`http://localhost:8080/api/menopausalHealthLogs/${id}`, {
    method: 'DELETE',
    headers: { Authorization: `Bearer ${token}` }
  });
  if (!res.ok) throw new Error(await res.text());
  return true;
};

export const updateMenopausalHealthLog = async (data, token) => {
  const res = await fetch(`http://localhost:8080/api/menopausalHealthLogs/${data._id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
    body: JSON.stringify(data)
  });
  if (!res.ok) throw new Error(await res.text());
  return res.json();
};

export const getMaleHealthLogs = async (token) => {
const res = await fetch("http://localhost:8080/api/maleHealthLogs", {
    headers: { Authorization: `Bearer ${token}` }
  });
  if (!res.ok) throw new Error(await res.text());
  return res.json();
};

export const addMaleHealthLog = async (data, token) => {
  const res = await fetch("http://localhost:8080/api/maleHealthLogs", {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
    body: JSON.stringify(data)
  });
  if (!res.ok) throw new Error(await res.text());
  return res.json();
};

export const deleteMaleHealthLog = async (id, token) => {
  const res = await fetch(`http://localhost:8080/api/maleHealthLogs/${id}`, {
    method: 'DELETE',
    headers: { Authorization: `Bearer ${token}` }
  });
  if (!res.ok) throw new Error(await res.text());
  return true;
};

export const updateMaleHealthLog = async (data, token) => {
  const res = await fetch(`http://localhost:8080/api/maleHealthLogs/${data._id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
    body: JSON.stringify(data)
  });
  if (!res.ok) throw new Error(await res.text());
  return res.json();
};

export const setPartner = async (partnerEmail, token) => {
  const res = await fetch("http://localhost:8080/api/users/set-partner", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({ partnerEmail })
  });

  if (!res.ok) throw new Error(await res.text());
  return res.json();
};

export const getPartnerCycles = async (token) => {
  const res = await fetch("http://localhost:8080/api/cycles/partner", {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  if (!res.ok) throw new Error(await res.text());
  return res.json();
};