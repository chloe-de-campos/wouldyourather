// getResponses.js
import { ref, get } from 'firebase/database';
import { db } from './firebase';

const getResponses = async () => {
  try {
    
    const responsesRef = ref(db, 'responses');
    const snapshot = await get(responsesRef);
    

    if (snapshot.exists()) {
      return Object.values(snapshot.val());
    } else {
      console.log('No data available');
      return [];
    }
  } catch (error) {
    console.error('Error fetching responses:', error);
    return [];
  }
};


// const getResponse = async (responseId) => {
//   try {
//     const responseRef = ref(db, `responses/${responseId}`);
//     const snapshot = await get(responseRef);

//     if (snapshot.exists()) {
//       return snapshot.val();
//     } else {
//       console.log('Response not found');
//       return null;
//     }
//   } catch (error) {
//     console.error('Error fetching response:', error);
//     return null;
//   }
// };


export default getResponses;
