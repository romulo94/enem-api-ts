import { Request, Response } from 'express'

export class NotFoundController {
  async handle (httpRequest: Request,httpResponse: Response): Promise<Response> {
    return httpResponse.status(404).json({
      message: 'The route does not exist'
    })
  }
}
