/* eslint-disable @typescript-eslint/no-var-requires */
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
    winners.forEach((element) => {
      console.log(this.toTitleCase(element.name))
    })
    const fs = require('fs')
    var util = require('util')
    fs.writeFile('winners.txt', util.inspect(winners), (err: Error) => {
      if (err != null) throw err
    })
  }

  toTitleCase (str: string): string {
    return str.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
    })
  }
}
