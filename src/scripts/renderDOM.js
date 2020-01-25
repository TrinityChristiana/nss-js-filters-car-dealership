const renderDOM = {
    // Adds HTML to container
    render(id, obj){
        const container = document.getElementById(`${id}`);
        const html = this.makeObjHTML(obj);
        container.innerHTML = html;
    },
    // Created HTML to show info on dom from object
    makeObjHTML(obj){
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