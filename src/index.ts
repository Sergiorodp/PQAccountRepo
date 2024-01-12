import { server } from "./server"

const PORT = '8001'

server.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`)
})

server.get('/', (req, res) => {
    res.json({
        'Hola': 'Hola'
    })
})

server.on('error', ( err ) => {
    console.error(err)
})