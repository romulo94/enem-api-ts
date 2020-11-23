export function filter (data: Array<Record<string, unknown>>, param: any, compareParam: any): any[] {
  const result = data.filter(el => {
    if (el[param] === compareParam) return el
  })

  return result
}
