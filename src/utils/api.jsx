import React from "react";
import axios from "axios";
const TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN ;
const baseUrl = "https://api.themoviedb.org/3";

const headers = {
    Authorization: "bearer " + TOKEN,
}

export const fetchDataFromApi = async (url, params)
try{
    const {data} = await axios.get(baseUrl + url,{headers, params});
    console.log(data);
    return data;
}
catch(err){
    console.log(err);
    return err;
}