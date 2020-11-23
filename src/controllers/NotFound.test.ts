import app from '@/app'
import request from 'supertest'

describe('NotFound Routes', () => {
  describe('ANY METHOD *', () => {
    test('Should return 404 with the correct message', async () => {
      const response = await request(app)
        .get('/')

      console.log('response',response)
      expect(response.status).toBe(404)
      expect(response.body.message).toBe('The route does not exist')
    })
  })
})
