import { Participant } from './participant'

export class Giveaway {
  minscore: number = 0
  participants: Participant[] = []

  constructor (minscore: number) {
    this.minscore = minscore
  }

  addParticipant (p: Participant): void {
    if (p.score >= this.minscore) {
      this.participants.push(p)
    }
  }

  draw (): Participant {
    return this.participants[Math.floor(Math.random() * this.participants.length)]
  }
}
