import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL
});

export const getSelectedItem = async (user) => {
  try {
    const token = await user.getToken();
    const response = await api.get('/user/api/getSelectedItem', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching selected item:', error);
    throw error;
  }
};

// ... other API calls 