import { server } from "./server"

const PORT = process.env.SERVER_PORT

server.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`)
})

server.on('error', ( err ) => {
    console.error(err)
})