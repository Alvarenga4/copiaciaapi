'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class MasterCompany extends Model {
  employee() {
    return this.hasMany('App/Models/Employee')
  }

  clients() {
    return this.hasMany('App/Models/Client')
  }
}

module.exports = MasterCompany
