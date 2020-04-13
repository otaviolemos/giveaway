/* eslint-disable @typescript-eslint/no-var-requires */

import { ParticipantRepository } from '../../usecase/port/participantrepository'
import { Participant } from '../../domain/participant'

export class CsvParticipantRepository implements ParticipantRepository {
  lp: Participant[] = []

  constructor (filename: string) {
    var loader = require('csv-load-sync')
    var csv = loader(filename)
    csv.forEach(element => {
      this.lp.push(this.formatFromCsv(element.Nome, element.email, element.score))
    })
  }

  findAllParticipants (): Participant[] {
    return this.lp
  }

  formatFromCsv (name: string, email: string, scorestr: string): Participant {
    const score = parseInt(scorestr.substring(0, scorestr.indexOf('/')).trim(), 10)
    const p: Participant = new Participant(name, email, score)
    return p
  }
}
