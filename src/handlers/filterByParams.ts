import { filter } from './filter'

interface ARG {
  field: string
  compareField: string | number | boolean
}

export function filterByParams (data: Array<Record<string, unknown>>, ...args: ARG[]): any[] {
  let result = data
  for (const arg of args) {
    result = filter(result, arg.field, arg.compareField)
  }
  return result
}
