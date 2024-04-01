import { authorization } from '@app/middlewares/auth/PQAuthenticationJWT'
import PQThirdPartyController from '@app/controllers/PQThirdPartyController'
import { Router } from 'express'

const thirdPartiesRouter = Router()

/**
 * @openapi
 * /api/create/v1:
 *      get:
 *          tags:
 *              - ThirdPartyPerson
 */
thirdPartiesRouter.post('/create/v1', authorization, PQThirdPartyController.createThirdPartyPersonControllerV1)
/**
 * @openapi
 * /api/third-party/getByNum/v1:
 *     get:
 *        tags:
 *          - ThirdPartyPerson
 */
thirdPartiesRouter.get('/getByNum/v1', authorization, PQThirdPartyController.getThirdPartyPersonControllerByIdNumV1)
thirdPartiesRouter.get('/getByUserId/v1', authorization, PQThirdPartyController.getThirdPartyPersonControllerByIdNumV1)

export default thirdPartiesRouter
