import { commonAPI } from "./commonAPI";
import { SERVER_URL } from "./serverUrl";

// register API
export const registerAPI =async(user)=>{
    return await commonAPI("POST",`${SERVER_URL}/register`,user)
}

// login API
export const loginAPI =async(user)=>{
    return await commonAPI("POST",`${SERVER_URL}/login`,user)
}
// login API
export const addProjectAPI = async(reqBody,reqHeader)=>{
    return await commonAPI("POST",`${SERVER_URL}/add-project`,reqBody,reqHeader)
}
