/* eslint-disable react-hooks/rules-of-hooks */
import axios,{isCancel} from "axios"

export const usePostFileApi = async (url,data={})=>{
    // console.log(url)
    // console.log(data)
    const controller = new AbortController();

    return (
        async()=>{
            try {
              const response = await axios.post(url,{ ...data, signal: controller.signal},{headers:{
                "Content-Type":"'multipart/form-data'"
              }} )
              // console.log(response)
              return response
            } catch (error) {
              if(isCancel(error)){
                return error
              }
             
              return error
            }
           
        
          }
    )()
}




//  Apis calling


