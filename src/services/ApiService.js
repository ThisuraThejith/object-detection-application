import axios from 'axios';

const apiUrl = 'https://europe-west1-promiseq-production2.cloudfunctions.net';

// Class to call the API
class ApiService {
  upload(file) {
    let formData = new FormData();
    formData.append("file", file);
    // Was able to resolve CORS issue using this approach but the response was not coming properly
    // return fetch(apiUrl + "/detectObjectsFromImg", {
    //   method: 'POST',
    //   headers: {
    //     "Accept": "application/json",
    //   },
    //   mode: "no-cors",
    //   credentials: "omit",
    //   body: formData
    // });
    return axios.post(apiUrl + "/detectObjectsFromImg", formData, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
    });
  }
}
export default new ApiService();