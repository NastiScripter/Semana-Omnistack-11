const express = require('express')
const cors = require('cors')
const routes = require("./routes")
const app = express()

app.use(cors())
app.use(express.json())
/**
 * Rota / Recurso
 */

/**
 * GET: Pegar 
 * POST: Criar 
 * PUT: Alterar
 * DELETE: Deletar
*/

/**
 * Parâmetros?
 * Query Params: 
 * "?name="Násti&age=17"
 * possuem nomes
 * sempre depois da rota?
 * iniciados por ? e separados por &
 * 
 * Route Params:
 * parâmetros de rota?
 * usados pra identificar recursos
 * "/users"
 * ^ recurso de usuários
 * utilizado para apenas um único recurso
 * 
 * Body: 
 * corpo do request
 * informações que o client envia
 * 
 * Header:
 * informação importante?
 * 
*/
app.use(routes)

app.listen(3333)