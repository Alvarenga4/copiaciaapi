'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MasterCompanySchema extends Schema {
  up() {
    this.create('master_companies', (table) => {
      table.increments()
      table.string('cnpj')
      table.string('company_fantasy_name')
      table.string('company_comercial_name')
      table.integer('company_number')
      table.string('company_zip_code')
      table.string('company_street')
      table.string('company_neighborhood')
      table.string('company_city')
      table.boolean('company_active').defaultTo(false)
      table.timestamps()
    })
  }

  down() {
    this.drop('master_companies')
  }
}

module.exports = MasterCompanySchema
