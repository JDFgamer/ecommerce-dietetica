import axios from "axios"

export default async function createUser(payload) {
    await axios.post("http://localhost:3001/clients", payload)
        .then((response) => { console.log(response) })
        .catch((err) => console.error(err))

};