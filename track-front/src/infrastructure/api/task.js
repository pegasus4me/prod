import axios from "axios";
let tokenStorage = `Bearer ${localStorage.getItem("token")}`;


/**
 * 
 * @param {string[]} data 
 * @returns creer une nouvelle task
 */

export async function addNewTask(data){
    try {
        const res  = await axios.post("http://localhost:4000/api/v2/track_time/add", data, {
            headers: {
                "x-access-token": tokenStorage,
            },
        });
        return res.data
    } catch (error) {
        return error
    }
}

/**
 * 
 * @returns retourne toutes les task de l'user
 */
export async function getAllTask(){
        try {
            const res =  await axios.get('http://localhost:4000/api/v1/track_time/all_data', {
                headers: {
                        "x-access-token": tokenStorage,
                },
            })    
            return res.data     
        } catch (error) {
            return error
        }
}

/**
 * 
 * @param {string} track_id 
 * @returns task selon l'id entrée sur l'input
 */

export async function getTaskById(track_id){
    try {
        const res  = await axios.get(`http://localhost:4000/api/v1/track_time/data/${track_id}`, {
            headers: {
                "x-access-token": tokenStorage,
            },
        });
        return res.data        
    } catch (error) {
        return error
    }
}

/**
 * 
 * @param {string} track_id 
 * @param {string[]} data 
 * @returns mettre a jour une task
 */
export async function updateTaskById(track_id, data) {
    try {
        const res = await axios.put(`http://localhost:4000/api/v1/track_time/update/${track_id}`, data,  {
            headers: {
                "x-access-token": tokenStorage,
            },
        })
        return res.data
    } catch (error) {
        return error
    }
}


/**
 * 
 * @param {string} track_id 
 * @returns supprimer une tache  
 */

export async function deleteTaskById(track_id) {
    try {
        
        const res = await axios.delete(`http://localhost:4000/api/v1/track_time/delete/${track_id}`, {
            headers: {
                "x-access-token": tokenStorage,
            },
        })
        return res.data
    } catch (error) {
        return error
    }
}