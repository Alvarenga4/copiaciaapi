'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ClientSchema extends Schema {
  up() {
    this.table('clients', (table) => {
      // alter table
      table.boolean('active').defaultTo(true)
    })
  }

  down() {
    this.table('clients', (table) => {
      // reverse alternations
      table.boolean('active')
    })
  }
}

module.exports = ClientSchema
