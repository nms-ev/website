import { Member } from '$lib/models/member'
import cron from 'node-cron'

/**
 * Generic Cron runner
 */
abstract class Cron {
  running: boolean = false

  abstract name: string
  abstract schedule: string
  abstract fn(): void | Promise<void>

  async run() {
    try {
      if (this.running) {
        console.debug(`cron "${this.name}" already running`)
        return
      }
      this.running = true
      console.debug(`running cron "${this.name}"`, new Date().toISOString())
      await this.fn()
    } finally {
      this.running = false
    }
  }
}

class Memberships extends Cron {
  name = 'memberships'
  schedule = '0 9 * * 1' // Every monday ay 9:00

  async fn() {
    const members = await Member.getAll()
    for (const member of members) member.renewMembership()
  }
}

let initialized = false
export function init() {
  if (initialized) return
  initialized = true

  for (const job of [new Memberships()]) {
    console.debug(`Starting job ${job.name}`)
    cron.schedule(job.schedule, () => job.run())
  }
}
