const connection = require("../database/connection")
const crypto = require('crypto')

module.exports = {
    async create(request, response){
        const {name, email, whatsapp, city, uf} = request.body
        const id = crypto.randomBytes(4).toString("HEX")
    
        await connection("ongs").insert({
            id,
            name,
            email,
            city,
            whatsapp,
            uf
        })
    
        return response.json({
            id: id
        })
    },
    async list(request, response){
        const ongs = await connection("ongs").select("*")
        console.log(ongs)
        return response.json(ongs)
    }
}