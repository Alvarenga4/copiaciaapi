'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AccessLevelSchema extends Schema {
  up() {
    this.create('access_levels', (table) => {
      table.increments()
      table.string('function')
      table.boolean('active').defaultTo(true)
      table.timestamps()
    })
  }

  down() {
    this.drop('access_levels')
  }
}

module.exports = AccessLevelSchema
