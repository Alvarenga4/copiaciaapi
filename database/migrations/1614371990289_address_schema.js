'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AddressSchema extends Schema {
  up() {
    this.table('addresses', (table) => {
      // alter table
      table.string('uf')
    })
  }

  down() {
    this.table('addresses', (table) => {
      // reverse alternations
      table.string('uf')
    })
  }
}

module.exports = AddressSchema
