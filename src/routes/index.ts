import { type Application } from 'express'

import userController from '@app/controllers/PQUserController'
import thirdPartyPersonRoutes from './PQThirdPartyPersonRoutes'
import authController from '@app/controllers/PQAuthController'

export default function addRoutes (app: Application): void {
  app.use('/api/v1/users/', userController)
  app.use('/api/v1/third-party/', thirdPartyPersonRoutes)
  app.use('/api/v1/auth/', authController)
  /*
    app.use('/api/client/v1', () => {})
    app.use('/api/providers/v1', () => {})
    app.use('/api/workers/v1', () => {})
    app.use('(/api/myPyme/v1', () => {})
    */
}
