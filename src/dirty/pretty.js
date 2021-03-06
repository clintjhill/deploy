let chalk = require('chalk')
let {chars} = require('@architect/utils')

module.exports = {
  url(v) {
    if (v)
      console.log(`\n    ${chalk.green.bold.underline(v)}\n`)
  },
  warn(update) {
    update.start('Dirty deploying...')
  },
  success(ts, update) {
    update.done('Deployed dirtily')
    let check = chalk.green(chars.done)
    let msg = chalk.grey('Success!')
    let time = chalk.green(`Deployed app in ${(Date.now() - ts)/1000} seconds`)
    console.log(check, msg, time)
  }
}
