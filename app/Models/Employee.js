'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Employee extends Model {
  user() {
    return this.belongsTo('App/Models/User')
  }

  company() {
    return this.belongsTo('App/Models/MasterCompany')
  }

  address() {
    return this.belongsTo('App/Models/Addresses')
  }

  access_level() {
    return this.belongsTo('App/Models/AccessLevel')
  }
}

module.exports = Employee
