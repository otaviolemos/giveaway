import { Participant } from './participant'

export class GiveAway {
  minscore: number
  participants: Participant[] = []

  constructor (minscore: number) {
    this.minscore = minscore
  }

  addParticipant (p: Participant): void {
    if (p.score >= this.minscore) {
      this.participants.push(p)
    }
  }
}
