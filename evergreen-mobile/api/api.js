// Change the word 'localhost' to the current IP address
// Open the port in middleware index.js to accept all ports
//const baseUrl = "http://localhost:8080";
const baseUrl = "http://172.20.10.2:8080";

export const getCycles = async (token) => {
  const res = await fetch(`${baseUrl}/api/cycles`, {
    headers: { Authorization: `Bearer ${token}` }
  });
  if (!res.ok) throw new Error(await res.text());
  return res.json();
};

export const addCycle = async (data, token) => {
  const res = await fetch(`${baseUrl}/api/cycles`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
    body: JSON.stringify(data)
  });
  if (!res.ok) throw new Error(await res.text());
  return res.json();
};

export const deleteCycle = async (id, token) => {
  const res = await fetch(`${baseUrl}/api/cycles/${id}`, {
    method: 'DELETE',
    headers: { Authorization: `Bearer ${token}` }
  });
  if (!res.ok) throw new Error(await res.text());
  return true; // just return success
};

export const updateCycle = async (data, token) => {
  const res = await fetch(`${baseUrl}/api/cycles/${data._id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
    body: JSON.stringify(data)
  });
  if (!res.ok) throw new Error(await res.text());
  return res.json();
};

export const login = async (email, password, lifeStage) => {
  try {
    console.log("👉 LOGIN START");

    const res = await fetch(`${baseUrl}/api/users`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password, lifeStage })
    });

    const data = await res.json().catch(() => null);

    console.log("👉 LOGIN RESPONSE:", res.status, data);

    return data;

  } catch (err) {
    console.log("👉 LOGIN FAILED:", err.message);
    return null;
  }
};

export const register = async (email, password, lifeStage) => {
    const response = await fetch(`${baseUrl}/api/users?action=register`, {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({ email: email, password: password, lifeStage: lifeStage })
    });
    return response.json();
};

export const getMedicines = async (token) => {
  const res = await fetch(`${baseUrl}/api/medicines`, {
    headers: { Authorization: `Bearer ${token}` }
  });
  if (!res.ok) throw new Error(await res.text());
  return res.json();
};

export const addMedicine = async (data, token) => {
  const res = await fetch(`${baseUrl}/api/medicines`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
    body: JSON.stringify(data)
  });
  if (!res.ok) throw new Error(await res.text());
  return res.json();
};

export const deleteMedicine = async (id, token) => {
  const res = await fetch(`${baseUrl}/api/medicines/${id}`, {
    method: 'DELETE',
    headers: { Authorization: `Bearer ${token}` }
  });
  if (!res.ok) throw new Error(await res.text());
  return true;
};

export const updateMedicine = async (data, token) => {
  const res = await fetch(`${baseUrl}/api/medicines/${data._id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
    body: JSON.stringify(data)
  });
  if (!res.ok) throw new Error(await res.text());
  return res.json();
};

export const getHealthCheckups = async (token) => {
  const res = await fetch(`${baseUrl}/api/health-checkups`, {
    headers: { Authorization: `Bearer ${token}` }
  });
  if (!res.ok) throw new Error(await res.text());
  return res.json();
};

export const addHealthCheckup = async (data, token) => {
  const res = await fetch(`${baseUrl}/api/health-checkups`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
    body: JSON.stringify(data)
  });
  if (!res.ok) throw new Error(await res.text());
  return res.json();
};

export const deleteHealthCheckup = async (id, token) => {
  const res = await fetch(`${baseUrl}/api/health-checkups/${id}`, {
    method: 'DELETE',
    headers: { Authorization: `Bearer ${token}` }
  });
  if (!res.ok) throw new Error(await res.text());
  return true;
};

export const updateHealthCheckup = async (data, token) => {
  const res = await fetch(`${baseUrl}/api/health-checkups/${data._id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
    body: JSON.stringify(data)
  });
  if (!res.ok) throw new Error(await res.text());
  return res.json();
};


export const getLifeStyleLogs = async (token) => {
  const res = await fetch(`${baseUrl}/api/lifeStyleLogs`, {
    headers: { Authorization: `Bearer ${token}` }
  });
  if (!res.ok) throw new Error(await res.text());
  return res.json();
};

export const addLifeStyleLog = async (data, token) => {
  const res = await fetch(`${baseUrl}/api/lifeStyleLogs`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
    body: JSON.stringify(data)
  });
  if (!res.ok) throw new Error(await res.text());
  return res.json();
};

export const deleteLifeStyleLog = async (id, token) => {
  const res = await fetch(`${baseUrl}/api/lifeStyleLogs/${id}`, {
    method: 'DELETE',
    headers: { Authorization: `Bearer ${token}` }
  });
  if (!res.ok) throw new Error(await res.text());
  return true;
};

export const updateLifeStyleLog = async (data, token) => {
  const res = await fetch(`${baseUrl}/api/lifeStyleLogs/${data._id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
    body: JSON.stringify(data)
  });
  if (!res.ok) throw new Error(await res.text());
  return res.json();
};

export const getProfile = async (token) => {
  const res = await fetch(`${baseUrl}/api/users/profile`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  if (!res.ok) throw new Error(await res.text());
  return res.json();
};

export const getMenopausalHealthLogs = async (token) => {
  const res = await fetch(`${baseUrl}/api/menopausalHealthLogs`, {
    headers: { Authorization: `Bearer ${token}` }
  });
  if (!res.ok) throw new Error(await res.text());
  return res.json();
};

export const addMenopausalHealthLog = async (data, token) => {
  const res = await fetch(`${baseUrl}/api/menopausalHealthLogs`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
    body: JSON.stringify(data)
  });
  if (!res.ok) throw new Error(await res.text());
  return res.json();
};

export const deleteMenopausalHealthLog = async (id, token) => {
  const res = await fetch(`${baseUrl}/api/menopausalHealthLogs/${id}`, {
    method: 'DELETE',
    headers: { Authorization: `Bearer ${token}` }
  });
  if (!res.ok) throw new Error(await res.text());
  return true;
};

export const updateMenopausalHealthLog = async (data, token) => {
  const res = await fetch(`${baseUrl}/api/menopausalHealthLogs/${data._id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
    body: JSON.stringify(data)
  });
  if (!res.ok) throw new Error(await res.text());
  return res.json();
};

export const getMaleHealthLogs = async (token) => {
const res = await fetch(`${baseUrl}/api/maleHealthLogs`, {
    headers: { Authorization: `Bearer ${token}` }
  });
  if (!res.ok) throw new Error(await res.text());
  return res.json();
};

export const addMaleHealthLog = async (data, token) => {
  const res = await fetch(`${baseUrl}/api/maleHealthLogs`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
    body: JSON.stringify(data)
  });
  if (!res.ok) throw new Error(await res.text());
  return res.json();
};

export const deleteMaleHealthLog = async (id, token) => {
  const res = await fetch(`${baseUrl}/api/maleHealthLogs/${id}`, {
    method: 'DELETE',
    headers: { Authorization: `Bearer ${token}` }
  });
  if (!res.ok) throw new Error(await res.text());
  return true;
};

export const updateMaleHealthLog = async (data, token) => {
  const res = await fetch(`${baseUrl}/api/maleHealthLogs/${data._id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
    body: JSON.stringify(data)
  });
  if (!res.ok) throw new Error(await res.text());
  return res.json();
};

export const setPartner = async (email, token) => {
  const res = await fetch(`${baseUrl}/api/users/partner`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({ email })  
  });

  if (!res.ok) throw new Error(await res.text());
  return res.json();
};

export const getPartnerCycles = async (token) => {
  const res = await fetch(`${baseUrl}/api/cycles/partner`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  if (!res.ok) throw new Error(await res.text());
  return res.json();
};

