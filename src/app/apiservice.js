import axios from 'axios'

const httpClient =axios.create({
    
    baseURL:'https://cors-anywhere.herokuapp.com/http://localhost:5000',
    proxy: false 
})

class ApiService{

  /*  constructor(apiurl){
        this.apiurl = apiurl;
    }*/
  /*  post(url, objeto){
        const requestUrl = `${this.apiurl}${url}`
        return httpClient.post(url, objeto)
    }*/
    put(url, objeto){
        const requestUrl = `${this.apiurl}${url}`
        return httpClient.put(url, objeto)
    }
    delete(url){
        const requestUrl = `${this.apiurl}${url}`
        return httpClient.delete(url)
    }
 /*   get(url){
        const requestUrl = `${url}`
        return httpClient.get(requestUrl)
    }*/
}
export default ApiService