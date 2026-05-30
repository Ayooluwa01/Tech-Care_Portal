





// "use client"
// import axios, { InternalAxiosRequestConfig } from "axios";



// const API_BASE_URL = "https://fedskillstest.coalitiontechnologies.workers.dev";
// const API_USER = "coalition";
// const API_PASS = "skills-test";

// export const api = axios.create({
//   baseURL: API_BASE_URL,
//   headers: {
//     "Content-Type": "application/json",
//     "Accept": "application/json",
//   },
// });

// api.interceptors.request.use((config: InternalAxiosRequestConfig) => {
//   const plainCredentials = `${API_USER}:${API_PASS}`;
//   const encryptedHash = btoa(plainCredentials);
//   config.headers.set("Authorization", `Basic ${encryptedHash}`);
  
//   return config;
// });

// src/services/api.server.ts
import axios from "axios";

const API_BASE_URL = "https://fedskillstest.coalitiontechnologies.workers.dev";
const API_USER = "coalition";
const API_PASS = "skills-test";

export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json",
  },
});

// Apply interceptors cleanly on the server environment
api.interceptors.request.use((config) => {
  // Use Buffer instead of btoa for explicit server-safe encoding
  const plainCredentials = `${API_USER}:${API_PASS}`;
  const encryptedHash = Buffer.from(plainCredentials).toString("base64");
  
  config.headers.set("Authorization", `Basic ${encryptedHash}`);
  return config;
});