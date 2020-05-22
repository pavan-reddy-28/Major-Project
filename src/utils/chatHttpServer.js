import * as axios from 'axios';

class ChatHttpServer {

    login(userCredential) {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await axios.post('http://localhost:4000/login', userCredential, { withCredentials: true });
                console.log(response.data)
                resolve(response.data);
            } catch (error) {
                reject(error);
            }
        });
    }
  
    getUserInfo() {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await axios.get('http://localhost:4000/isAuthenticated', { withCredentials: true });
                resolve(response.data);
            } catch (error) {
                reject(error);
            }
        });
    }

    userSessionCheck() {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await axios.get('http://localhost:4000/isAuthenticated', { withCredentials: true });
                resolve(response.data);
            } catch (error) {
                reject(error);
            }
        });
    }

    getAllGovtDetails(){
        return new Promise(async (resolve, reject) => {
            try {
                const response = await axios.post('http://localhost:4000/getGovtDetails',{}, { withCredentials: true });
                resolve(response.data);
            } catch (error) {
                reject(error);
            }
        });
    }
    getStatesFromNotification(){
        return new Promise(async (resolve, reject) => {
            try {
                const response = await axios.post('http://localhost:4000/getStatesFromNotification',{}, { withCredentials: true });
                resolve(response.data);
            } catch (error) {
                reject(error);
            }
        });
    }
    getTerritoriesFromNotification(){
        return new Promise(async (resolve, reject) => {
            try {
                const response = await axios.post('http://localhost:4000/getTerritoriesFromNotification',{}, { withCredentials: true });
                resolve(response.data);
            } catch (error) {
                reject(error);
            }
        });
    }

    getMessages(data){
        return new Promise(async (resolve, reject) => {
            try {
                const response = await axios.post('http://localhost:4000/getMessages',data, { withCredentials: true });
                resolve(response.data);
            } catch (error) {
                reject(error);
            }
        });
    }
    messagesInsert(data){
        return new Promise(async (resolve, reject) => {
            try {
                const response = await axios.post('http://localhost:4000/getMessages/insertData',data, { withCredentials: true });
                resolve(response.data);
            } catch (error) {
                reject(error);
            }
        });
    }


    addScheme(data) {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await axios.post('http://localhost:4000/addScheme', data, { withCredentials: true });
                resolve(response.data);
            } catch (error) {
                reject(error);
            }
        });
    }
   
    getSchemeById(data) {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await axios.post('http://localhost:4000/getSchemeById', data, { withCredentials: true });
                resolve(response.data);
            } catch (error) {
                reject(error);
            }
        });
    }

    // getSchemeById(data) {
    //     return new Promise(async (resolve, reject) => {
    //         try {
    //             const response = await axios.get('http://localhost:4000/getSchemeById',{params: {
    //                 ID: data.id
    //               }
    //             }, { withCredentials: true });
    //             resolve(response.data);
    //         } catch (error) {
    //             reject(error);
    //         }
    //     });
    // }


    updateScheme(data) {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await axios.post('http://localhost:4000/modifyScheme', data, { withCredentials: true });
                resolve(response.data);
            } catch (error) {
                console.log(error)
                reject(error);
            }
        });
    }





   
    
    logOut() {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await axios.get('http://localhost:4000/logout', { withCredentials: true });
                console.log(response.data)
                resolve(response.data);
            } catch (error) {
                reject(error);
            }
        });
    }

}

export default new ChatHttpServer();