import axios from 'axios';

// API URL for saving user data
const API_URL = 'http://localhost:5000/api/users/save';

// Function to save user data
export const saveUserData = async (email, answers) => {
  try {
    const response = await axios.post(API_URL, { email, answers });
    return response.data;  // Returns the response from the backend
  } catch (error) {
    console.error("There was an error saving the user:", error);
    return { error: error.message };
  }
};
