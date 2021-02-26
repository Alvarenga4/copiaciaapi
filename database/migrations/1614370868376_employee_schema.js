'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EmployeeSchema extends Schema {
  up() {
    this.table('employees', (table) => {
      // alter table
      table.integer('access_id').unsigned().references('id').inTable('access_levels')
    })
  }

  down() {
    this.table('employees', (table) => {
      // reverse alternations
      table.integer('access_id')
    })
  }
}

module.exports = EmployeeSchema
