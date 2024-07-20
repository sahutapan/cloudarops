import axios from "axios";
import React from "react";

const API_URL = "https://mail-system-two.vercel.app/api/send";

export const Api = async (formData) => {
  try {
    const response = await axios.post(API_URL, formData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
