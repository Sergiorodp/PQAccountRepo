import { Application } from "express";

import pucServices from "@app/controllers/PQPUCController";
import userServices from "@app/controllers/PQUserController";
import thirdPartyPersonServices from '@app/controllers/PQThirdPartiesController'

export default function addRoutes(app : Application) {
    app.use('/api/v1/puc/v1', pucServices)
    app.use('/api/v1/users/', userServices)
    app.use('/api/v1/third-party/', thirdPartyPersonServices)
    /*
    app.use('/api/client/v1', () => {})
    app.use('/api/providers/v1', () => {})
    app.use('/api/workers/v1', () => {})
    app.use('(/api/myPyme/v1', () => {})
    */
}