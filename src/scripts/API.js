const API = {
    fetchData() {
        return fetch("http://localhost:8088/cars")
            .then(resp => resp.json());
    }
}

export default API;