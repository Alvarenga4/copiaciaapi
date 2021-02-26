'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MasterCompanySchema extends Schema {
  up() {
    this.table('master_companies', (table) => {
      // alter table
      table.string('company_uf')
    })
  }

  down() {
    this.table('master_companies', (table) => {
      // reverse alternations
      table.string('company_uf')
    })
  }
}

module.exports = MasterCompanySchema
