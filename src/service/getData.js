export default class GetFromJSON{

    async getResource(){
        const res = await fetch('./db.json');

        if (!res.ok){
            throw new Error ('cannot fetch db.json');
        }

        return await res.json();
    }

    getJson(){
        return this.getResource();
    }


}