/* eslint-disable react-hooks/rules-of-hooks */
import axios, { isCancel } from "axios"

export const useApi = async (method, url, data = {}) => {
  // console.log(url)   
  // console.log(data ,"data in use postit
  //   ")
  const controller = new AbortController();

  return (
    async () => {

      try {
        const response = await axios[method](url, data,{  signal: controller.signal, withCredentials: true, })
        // console.log(response)
        return response
      } catch (error) {
        if (isCancel(error)) {
          return error
        }

        return error
      }


    }
  )()
}




//  Apis calling

export const getRefreshToken = async () => {

  return await usePostApi("post", "http://localhost:8000/api/v1/user/refresh-token")
}