/* eslint-disable @typescript-eslint/no-var-requires */
import { CreateGiveaway } from './usecase/creategiveaway'
import { CsvParticipantRepository } from './adapter/repository/csvparticipantrepository'
import { AddParticipantToGiveaway } from './usecase/addparticipanttogiveaway'
import { DrawWinnersFromGiveaway } from './usecase/drawwinners'

interface Winner {
  name: string;
  email: string;
  score: number;
};

export class Main {
  main (): Winner[] {
    const giveaway = new CreateGiveaway().createGiveaway(8)
    const csvRepo = new CsvParticipantRepository('sorteio-13-4.csv')
    const addParticipants = new AddParticipantToGiveaway(giveaway, csvRepo)
    addParticipants.addParticipantsToGiveaway()
    const drawWinners = new DrawWinnersFromGiveaway(giveaway)
    const winners: Winner[] = drawWinners.drawWinners(10).filter(Boolean)
    var winnersNames = ''
    winners.forEach((element) => {
      if (element && element.name)
      winnersNames += element.name + '\n'
    })
    const fs = require('fs')
    var util = require('util')
    fs.writeFile('winners.txt', util.inspect(winners), (err: Error) => {
      if (err != null) throw err
    })
    fs.writeFile('names.txt', winnersNames, (err: Error) => {
      if (err != null) throw err
    })

    return winners;
  }
}
