import { Giveaway } from '../domain/giveaway'

export class CreateGiveaway {
  createGiveaway (minScore: number): Giveaway {
    return new Giveaway(minScore)
  }
}
