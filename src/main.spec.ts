import { Main } from './main'

describe('Main', () => {
  test('should correctly run main', () => {
    const m = new Main()
    m.main()
  })
  test('should correctly format to title case', () => {
    const s = 'otávio augusto lazzarini lemos'
    const m = new Main()
    expect(m.toTitleCase(s)).toEqual('Otávio Augusto Lazzarini Lemos')
  })
})
