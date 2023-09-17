import axios from "axios";
let tokenStorage = `Bearer ${localStorage.getItem("token")}`;

/**
 * 
 * @param {string []} data 
 * @returns requete de sauvegarde
 */
export async function saveUser(data) {
  try {
    let res = await axios.post(
      "http://localhost:4000/api/v1/user/register",
      data,
      
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
}

/**
 * 
 * @param {string []} data 
 * @returns requete d'auth
 */
export async function authenticateUser(data) {
  try {
    let res = await axios.post(
      "http://localhost:4000/api/v1/user/login",
      data,
      {
        headers: {
          "x-access-token": tokenStorage,
        },
      }
    );
    return res.data;
  } catch (error) {
    return error;
  }
}

/**
 * 
 * 
 * @returns les details de l'user 
 */
export async function getUserData() {
  try {
    let res = await axios.get("http://localhost:4000/api/v1/user/data", {
      headers: {
        "x-access-token": tokenStorage,
      },
    });
    return res.data;
  } catch (error) {
    return error;
  }
}

/**
 * 
 * @param {string []} data 
 * @returns modifier les details de l'user
 */
export async function updateUserData(data) {
  try {

    let res = await axios.put("http://localhost:4000/api/v1/user/update", data ,{
      headers: {
        "x-access-token": tokenStorage,
      },
    })
    return res.data
  } catch (error) {
    return error;
  }
}

/**
 * 
 * @param {string} data 
 * @returns modifier le password
 */
export async function updadeUserPassword(new_password){
    try {
        let res  = await axios.put("http://localhost:4000/api/v1/user/update_password", new_password, {
            headers: {
                "x-access-token": tokenStorage,
            },
        })   

        return res.data
    } catch (error) {
      return error
    }
}



// export async function updateUserDetails(data, id) {}

/**
 * @returns check si l'user est ok ou pas pour une auth automatique si il quitte la page
 */

export function checkAuth() {
  let token = localStorage.getItem("token");
  return !!token;
}
