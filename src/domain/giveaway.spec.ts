import { Participant } from './participant'
import { GiveAway } from './giveaway'

describe('Giveaway', () => {
  test('should add participant with min score to giveaway', () => {
    const p = new Participant('otavio', 'otavio@mail.com', 10)
    const ga = new GiveAway(8)
    ga.addParticipant(p)
    expect(ga.participants).toContain(p)
  })

  test('should not add participant with score less than the min score to giveaway', () => {
    const p = new Participant('john', 'john@mail.com', 7)
    const ga = new GiveAway(8)
    ga.addParticipant(p)
    expect(ga.participants).not.toContain(p)
  })
})
