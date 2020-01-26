// Holds default data for if json server data not available.
import carObj from "./fakeapi.js";

const API = {
    fetchData() {
        return fetch("http://localhost:8080/cars")
            .then(resp => resp.json())
            // if json server not available use default object as data from ./fakeapi.js
            .catch(() => {
                return carObj;
              });
    }
}

export default API;