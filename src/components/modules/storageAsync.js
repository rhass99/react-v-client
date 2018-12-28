import axios from 'axios';
import { firestorage } from './firebaseConfig';

const API_DOMAIN = process.env.REACT_APP_API_DOMAIN;

export const axiosGetFiles = async (uid, projectName) => {
  try {
    return await axios({
      method: 'POST',
      url: `${API_DOMAIN}api/companies/getfiles`,
      headers: {
        'Content-Type': 'application/json'
      },
      data: JSON.stringify({
        uid : uid,
        adboard : projectName
      })
    })
  }
  catch (err) {
    return err;
  }
}

export const uploadFileToFirebase = async (file, filename, uid, projectName) => {
  // create storage reference
  const storageRef = firestorage.ref();
  const companyRef = storageRef.child(uid);
  const adboardRef = companyRef.child(projectName);
  const fileRef = adboardRef.child(filename);
  
  // Upload File
  try {
    return await fileRef.put(file)
  } catch (err) {
    return err;
  }
}

export const deleteFileFromFirebase = async (filename, uid, projectName) => {
  // create storage reference
  const storageRef = firestorage.ref();
  const companyRef = storageRef.child(uid);
  const adboardRef = companyRef.child(projectName);
  const fileRef = adboardRef.child(filename);

  // Delete file
  try {
    return await fileRef.delete()
  } catch(err) {
    return(err)
  }
}