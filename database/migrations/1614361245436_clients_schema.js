'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ClientsSchema extends Schema {
  up() {
    this.create('clients', (table) => {
      table.increments()
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.integer('company_id').unsigned().references('id').inTable('master_companies')
      table.integer('address_id').unsigned().references('id').inTable('addresses_clients')
      table.string('name')
      table.string('last_name')
      table.string('cellphone')
      table.string('tellphone')
      table.string('rg')
      table.string('cpf')
      table.timestamps()
    })
  }

  down() {
    this.drop('clients')
  }
}

module.exports = ClientsSchema
