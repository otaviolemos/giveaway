import { Participant } from '../../domain/participant'

export interface ParticipantRepository {
  findAllParticipants (): Participant[]
}
