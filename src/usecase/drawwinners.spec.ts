import { Participant } from '../domain/participant'
import { CreateGiveaway } from './creategiveaway'
import { DrawWinnersFromGiveaway } from './drawwinners'
import { AddParticipantToGiveaway } from './addparticipanttogiveaway'
import { ParticipantRepository } from '../usecase/port/participantrepository'
import { InMemoryParticipantRepository } from '../adapter/repository/inmemoryparticipantrepository'

describe('Draw winners list use case', () => {
  test('should correctly draw winners list', () => {
    const ga = new CreateGiveaway().createGiveaway(8)
    const p1 = new Participant('otavio', 'otavio@mail.com', 10)
    const p2 = new Participant('john', 'john@mail.com', 9)
    const p3 = new Participant('junior', 'junior@mail.com', 8)
    var plist: Participant[] = []
    plist.push(p1)
    plist.push(p2)
    plist.push(p3)
    const pr: ParticipantRepository = new InMemoryParticipantRepository(plist)
    const aptg = new AddParticipantToGiveaway(ga, pr)
    aptg.addParticipantsToGiveaway()
    const dlowfr = new DrawWinnersFromGiveaway(ga)
    const lw = dlowfr.drawWinners(1)
    expect(['otavio', 'john', 'junior']).toContain(lw[0].name)
  })
})
