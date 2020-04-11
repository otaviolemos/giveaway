import { Participant } from './participant'

describe('Participant', () => {
  test('should create participant', () => {
    const p = new Participant('otavio', 'otavio@mail.com', 10)
    expect(p.name).toBe('otavio')
    expect(p.email).toBe('otavio@mail.com')
    expect(p.score).toBe(10)
  })
})
