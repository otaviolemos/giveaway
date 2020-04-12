import { CreateGiveaway } from './creategiveaway'
import { AddParticipantToGiveaway } from './addparticipanttogiveaway'
import { Participant } from '../domain/participant'
import { ParticipantRepository } from './port/participantrepository'
import { InMemoryParticipantRepository } from '../adapter/repository/inmemoryparticipantrepository'

describe('Add participant to giveaway', () => {
  test('should add a participant with adequate score', () => {
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
    expect(aptg.giveaway.participants).toContain(p1)
  })

  test('should not add a participant with inadequate score', () => {
    const ga = new CreateGiveaway().createGiveaway(8)
    const p3 = new Participant('junior', 'junior@mail.com', 7)
    var plist: Participant[] = []
    plist.push(p3)
    const pr: ParticipantRepository = new InMemoryParticipantRepository(plist)
    const aptg = new AddParticipantToGiveaway(ga, pr)
    aptg.addParticipantsToGiveaway()
    expect(aptg.giveaway.participants).not.toContain(p3)
  })
})
