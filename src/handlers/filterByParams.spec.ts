import { filterByParams } from './filterByParams'
const mockData = [
  {
    id: 0,
    materia: 'Inglês',
    ano: 2020
  },
  {
    id: 1,
    materia: 'Inglês',
    ano: 2020
  },
  {
    id: 2,
    materia: 'Português',
    ano: 2019
  },
  {
    id: 3,
    materia: 'Inglês',
    ano: 2018
  }
]

describe('FilterByParams', () => {
  test('Should filter and return correct values', async () => {
    const result = filterByParams(mockData, { field: 'ano',compareField: 2020 }, { field: 'materia',compareField: 'Inglês' }
    )
    expect(result).toEqual([{
      id: 0,
      materia: 'Inglês',
      ano: 2020
    },{
      id: 1,
      materia: 'Inglês',
      ano: 2020
    }])
  })
  test('Should return an array empty if a param does not exist', async () => {
    const result = filterByParams(mockData, { field: 'assunto',compareField: 'Inglês' })
    expect(result).toEqual([])
  })
  test('Should return an array empty if no match', async () => {
    const result = filterByParams(mockData, { field: 'materia',compareField: 'Matemática' })
    expect(result).toEqual([])
  })
})
