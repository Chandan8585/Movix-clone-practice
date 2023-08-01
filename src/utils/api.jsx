import axios from "axios";
const TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MjFhY2YxNzJlNmJlOTgxYWI1ZDg3ZjljNGI5N2RkZCIsInN1YiI6IjYzZjlhMGM0NTcxNzZmMDA4MWQ1ODg0NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.u9q4H3-_QgQxxdiVvy38h4P_GjrDjhTa38B6o_dEGMI" ;
const baseUrl = "https://api.themoviedb.org/3";

const headers = {
    Authorization: "bearer " + TOKEN,
}

export const fetchDataFromApi = async(url, params) => {
try{
    const {data} = await axios.get(baseUrl + url,{headers, params,
    });
    console.log(data);
    return data;
}
catch (err) {
    console.log(err);
    return err;
}
}