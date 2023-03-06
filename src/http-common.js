import axios from "axios";

export default axios.create({
    baseURL: "http://localhost:4100/api",
    headers: {
        "Content-Type": "application/json"
    }
});