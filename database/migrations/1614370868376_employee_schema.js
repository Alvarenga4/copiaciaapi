'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EmployeeSchema extends Schema {
  up () {
    this.table('employees', (table) => {
      // alter table
    })
  }

  down () {
    this.table('employees', (table) => {
      // reverse alternations
    })
  }
}

module.exports = EmployeeSchema
