/**
 * 
 * @param {string} secret 
 * @param {string} token 
 * @returns ajoute au local notre item sous format classique
 */

export function setTolocalStorage(secret, token) {
    return window.localStorage.setItem(secret, token);
}


/**
 * 
 * @param {string} secret 
 * @param {string} token 
 * @returns ajoute au local notre item sous format JSON
 */
export function setTolocalStorageJSON(secret, token){
    return window.localStorage.setItem(secret, JSON.stringify(token));
}