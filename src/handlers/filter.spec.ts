import { filter } from './filter'
const mockData = [
  {
    materia: 'Inglês',
    ano: 2020
  },
  {
    materia: 'Português',
    ano: 2019
  },
  {
    materia: 'Inglês',
    ano: 2018
  }
]

describe('Filter', () => {
  test('Should filter and return correct values', async () => {
    const result = filter(mockData, 'ano', 2020)
    expect(result).toEqual([{
      materia: 'Inglês',
      ano: 2020
    }])
  })
  test('Should return an array empty if a param does not exist', async () => {
    const result = filter(mockData, 'XXX', 2020)
    expect(result).toEqual([])
  })
  test('Should return an array empty if no match', async () => {
    const result = filter(mockData, 'ano', 2021)
    expect(result).toEqual([])
  })
})
