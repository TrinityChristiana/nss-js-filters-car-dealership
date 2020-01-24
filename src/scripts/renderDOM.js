const renderDOM = {
    render(id, obj, year){
        const container = document.getElementById(`${id}`);
        const html = this.makeObjHTML(obj, year);
        container.innerHTML = html;
    },
    makeObjHTML(obj, year){
        let objHTML = "";
        for(const prop in obj){
            objHTML += `
            <p>${prop}: ${obj[prop]}</p>
            `
        }
        return objHTML;
    }
};

export default renderDOM;