import { Participant } from './participant'
import { Giveaway } from './giveaway'

describe('Giveaway', () => {
  test('should add participant with min score to giveaway', () => {
    const p = new Participant('otavio', 'otavio@mail.com', 10)
    const ga = new Giveaway(8)
    ga.addParticipant(p)
    expect(ga.participants).toContain(p)
  })

  test('should not add participant with score less than the min score to giveaway', () => {
    const p = new Participant('john', 'john@mail.com', 7)
    const ga = new Giveaway(8)
    ga.addParticipant(p)
    expect(ga.participants).not.toContain(p)
  })

  test('should draw random participant', () => {
    const p1 = new Participant('otavio', 'otavio@mail.com', 10)
    const p2 = new Participant('john', 'john@mail.com', 9)
    const p3 = new Participant('junior', 'junior@mail.com', 8)
    const ga = new Giveaway(8)
    ga.addParticipant(p1)
    ga.addParticipant(p2)
    ga.addParticipant(p3)
    const drawn = ga.draw()
    expect(drawn === p1 || drawn === p2 || drawn === p3).toBeTruthy()
    console.log(drawn)
  })
})
