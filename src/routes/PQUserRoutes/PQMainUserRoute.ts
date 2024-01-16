import { Application } from "express";

const PREFIX = 'users'

export default function addUserRoutes(app : Application) {
    app.get(`/${PREFIX}/`, (_, res) => {
        res.status(200).send({
            'message': 'Hello'
        })
    })
}