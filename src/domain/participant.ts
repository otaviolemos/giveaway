export class Participant {
  public name: string
  public email: string
  public score: number

  constructor (name: string, email: string, score: number) {
    this.name = name
    this.email = email
    this.score = score
  }
}
