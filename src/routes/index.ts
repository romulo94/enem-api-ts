
import { Router } from 'express'
import { QuestionController,NotFoundController } from '@/controllers'
const routes = Router()
const questionController = new QuestionController()
const notFoundController = new NotFoundController()

routes.get('/questions',questionController.handle)
routes.get('*',notFoundController.handle)

export default routes
