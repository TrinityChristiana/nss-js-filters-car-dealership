
import carObj from "./fakeapi.js"

const API = {
    fetchData() {
        return fetch("http://localhost:8088/cars")
            .then(resp => resp.json())
            // if json server not availible use default object as data from ./fakeapi.js
            .catch(() => {
                return carObj;
              });
    }
}

export default API;