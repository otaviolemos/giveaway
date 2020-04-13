import { CreateGiveaway } from './usecase/creategiveaway'
import { CsvParticipantRepository } from './adapter/repository/csvparticipantrepository'
import { AddParticipantToGiveaway } from './usecase/addparticipanttogiveaway'
import { DrawWinnersFromGiveaway } from './usecase/drawwinners'

export class Main {
  main (): void {
    const giveaway = new CreateGiveaway().createGiveaway(8)
    const csvRepo = new CsvParticipantRepository('sorteio-13-4.csv')
    const addParticipants = new AddParticipantToGiveaway(giveaway, csvRepo)
    addParticipants.addParticipantsToGiveaway()
    const drawWinners = new DrawWinnersFromGiveaway(giveaway)
    const winners = drawWinners.drawWinners(10)
    console.log(winners)
  }
}
