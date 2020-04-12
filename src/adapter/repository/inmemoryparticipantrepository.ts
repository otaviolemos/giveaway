import { ParticipantRepository } from '../../usecase/port/participantrepository'
import { Participant } from '../../domain/participant'

export class InMemoryParticipantRepository implements ParticipantRepository {
  participants: Participant[] = []
  constructor (participants: Participant[]) {
    this.participants = participants
  }

  findAllParticipants (): Participant[] {
    return this.participants
  }
}
