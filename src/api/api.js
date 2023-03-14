import axios from "axios";

export const getChatResponse = async(message) => {
    try{
        const resp = await axios.get(`https://demo.evmlabs.com/bot/api/chat?message=${message}`)
        if(resp.status === 200){
            return resp.data.data
        }
        return "failed to query data from server"
    }catch(err){
        return "failed to query data from server"
    }
}