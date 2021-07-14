import axios from "axios";
const API = axios.create({
    baseURL: "https://api.trakt.tv/",
    headers: {
        "Content-Type": "application/json",
        "trakt-api-version": "2",
        "trakt-api-key": "6849011413a1d64a578f43202d13b2263c98e5b6a6240a46c7b670a070807c52",
    },
});
export { API };
