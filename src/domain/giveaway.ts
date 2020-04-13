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
    const n = Math.floor(Math.random() * this.participants.length)
    const p = this.participants[n]
    this.participants.splice(n)
    return p
  }
}
