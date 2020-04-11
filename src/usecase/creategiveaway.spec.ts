import { CreateGiveaway } from './creategiveaway'

describe('Create giveaway', () => {
  test('should create a giveaway', () => {
    const ga = new CreateGiveaway().createGiveaway(8)
    expect(ga.minscore).toBe(8)
  })
})
