import app from '@/app'
import request from 'supertest'

describe('Question Routes', () => {
  describe('GET /questions', () => {
    test('Should return 200 on questions', async () => {
      await request(app)
        .get('/questions')
        .expect(200)
    })
    test('Should return no more than size', async () => {
      const response = await request(app)
        .get('/questions?size=2')
      expect(response.status).toBe(200)
      expect(response.body.data.length <= 2).toBeTruthy()
    })
    test('Should return correct values filtered', async () => {
      const response = await request(app)
        .get('/questions?year=2019&subject=Português')
      const validateReponse = response.body.data.some(el => {
        if (el.ano !== 2019 || el.materia !== 'Português') return el
      })
      expect(response.status).toBe(200)
      expect(validateReponse).toBeFalsy()
    })
  })
})
