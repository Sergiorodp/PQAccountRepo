import swaggerUi from 'swagger-ui-express'
import swaggerJsonDoc from 'swagger-jsdoc'
import { authorization } from '@app/middlewares/auth/PQAuthenticationJWT'

const options = {
  definition: {
    apiVersion: '1.0.0',
    info: {
      title: 'PQ API Documentation',
      version: '0.1.0',
      description:
          'This is a simple CRUD API application made with Express and documented with Swagger',
      license: {
        name: 'MIT',
        url: 'https://spdx.org/licenses/MIT.html'
      }
    },
    servers: [{ url: 'http://localhost:3000' }],
    tags: [
      { name: 'ThirdPartyPerson', description: 'Methods for ThirdPartyPerson' },
      { name: 'User', description: 'Everything about users' }
    ]
  },
  apis: ['src/routes/*.ts']
}

export function swaggerApiDocs (app: any): void {
  const specs = swaggerJsonDoc(options)
  app.use('/api/v1/docs', swaggerUi.serve, swaggerUi.setup(specs))
  app.get('/api/v1/docs.json', authorization, (_: any, res: any) => {
    res.setHeader('Content-Type', 'application/json')
    res.send(specs)
  })
}
