import api from "./api";

export const getIncidents = async () => {
  const response = await api.get("/incidents");
  return response.data;
};

export const createIncident = async (incidentData) => {
  const response = await api.post("/incidents", incidentData);
  return response.data;
};

export const getIncident = async (id) => {
  const response = await api.get(`/incidents/${id}`);
  return response.data;
};

export const updateIncidentStatus = async (id, status) => {
  const response = await api.put(`/incidents/${id}/status`, {
    status,
  });
  return response.data;
};

export const getAIReport = async (incidentId) => {
  const response = await api.get(`/ai-reports/${incidentId}`);
  return response.data;
};