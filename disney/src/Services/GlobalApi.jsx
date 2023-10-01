import axios from "axios";

const options = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/trending/movie/day',
    params: {language: 'en-US'},
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMTAzNzkwZThmOGVmNmI2OWEyMTNmOWZjODIzMmM1NyIsInN1YiI6IjY1MTZhOTRiOWI4NjE2MDEzYTI0MjZhOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2H0pZ6CrGYtymPXaHdPqASF4dW_7GwZ7zuV6AsSClq4'
    }
  };

const MovieBaseURL="https:://api.themoviedb.org/3";
const ApiKey = '2103790e8f8ef6b69a213f9fc8232c57';

const GetTrendingVideos=axios.request(options);

export default{
    GetTrendingVideos
}