import axios from 'axios';

const API_URL = "http://localhost:3004/questions";

export const getQuestiondetails = async (data) => {
    try{
       return await axios.get(`${API_URL}/${data}`);
    }
    catch (error) {
        console.log('Error while calling Questiondetails api', error.message);
    }
}

export const getUpdateQuestionApi = async (data , id) => {
    try{
      return await axios.put(`${API_URL}/${id}`, data); 
    }
    catch (error) {
      console.log('Error while calling updateQuestion api', error.message);
    }
  }