'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up() {
    this.table('users', (table) => {
      // alter table
      table.integer('access_id').unsigned().references('id').inTable('access_levels')
    })
  }

  down() {
    this.table('users', (table) => {
      // reverse alternations
      table.integer('access_id')
    })
  }
}

module.exports = UserSchema
