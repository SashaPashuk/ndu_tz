class Servise {
    getResourse = async (url) => {
        const res = await fetch(url, {
            method: "GET",
            mode: "no-cors",
            headers: {
                "Content-Type": "application/json", 
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Credentials": true
            }
        });
        return await res.json();
    } 

    getTable(url){
        return this.getResourse(url);
    }
}

export default Servise;