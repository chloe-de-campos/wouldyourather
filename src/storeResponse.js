// storeResponse.js
import { ref, push, set, remove } from 'firebase/database';
import { db } from './firebase';



// Function to store a new response
const storeResponse = async (responseData) => {
  try {
    const responsesRef = ref(db, 'responses');

    const newResponseRef = push(responsesRef);
    await set(newResponseRef, responseData);
    console.log('Response stored with ID:', newResponseRef.key);
    return (newResponseRef.key)
  } catch (e) {
    console.error('Error storing response:', e);
  }
};



// Function to remove an existing response by its ID
const removeResponse = async (responseId) => {
  console.log('repsonse id', responseId)
  
  try {
    const responseRef = ref(db, `responses/${responseId}`);
    await remove(responseRef);
    console.log('Response removed with ID:', responseId);
  } catch (e) {
    console.error('Error removing response:', e);
  }
};

export { storeResponse, removeResponse };
