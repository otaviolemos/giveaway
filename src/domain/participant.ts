export class Participant {
  name: string
  email: string
  score: number

  constructor (name: string, email: string, score: number) {
    this.name = name
    this.email = email
    this.score = score
  }
}
