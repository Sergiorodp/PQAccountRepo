import { Application } from "express";

export default function addMainRoutes(app : Application) {
    app.get('/', (_, res) => {
        res.status(200).send({
            'message': 'Hello'
        })
    })
}