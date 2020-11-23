import { Request, Response } from 'express'
import { filterByParams } from '@/handlers'
import { data } from '@/data'

export class QuestionController {
  async handle (httpRequest: Request,httpResponse: Response): Promise<Response> {
    const { year, subject, size } = httpRequest.query
    const cloneData = Array.from(data)
    const arrayOfSearch = []
    if (year) arrayOfSearch.push({ field: 'ano',compareField: Number(year) })
    if (subject) arrayOfSearch.push({ field: 'materia',compareField: subject })
    const resultData = filterByParams(cloneData, ...arrayOfSearch)
    if (resultData.length > Number(size)) resultData.length = Number(size)
    console.log('TTTs')

    return httpResponse.status(200).json({
      message: 'ok',
      data: resultData
    })
  }
}
