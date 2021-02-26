'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AddressesSchema extends Schema {
  up() {
    this.create('addresses', (table) => {
      table.increments()
      table.integer('number')
      table.string('zip_code')
      table.string('street')
      table.string('neighborhood')
      table.string('city')
      table.boolean('active').defaultTo(true)
      table.timestamps()
    })
  }

  down() {
    this.drop('addresses')
  }
}

module.exports = AddressesSchema
