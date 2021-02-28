'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Client extends Model {
  user() {
    return this.belongsTo('App/Models/User')
  }

  company() {
    return this.belongsTo('App/Models/MasterCompany')
  }

  address() {
    return this.belongsTo('App/Models/Addresses')
  }
}

module.exports = Client
