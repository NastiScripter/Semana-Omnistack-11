const connection = require("../database/connection")

module.exports = {
    async create(request, response) {
        console.log("getting ong")

        const {id} = request.body
        const ong = await connection("ongs").where("id", id).select("name").first()

        if (!ong){
            return response.status(400).json({error: "Not found"})
        }
        return response.json(ong)
    }
}