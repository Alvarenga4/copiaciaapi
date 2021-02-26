'use strict'

const MasterCompany = use('App/Models/MasterCompany');

class MasterCompanyController {

  async store({ request, response }) {
    try {
      const data = request.all();
      const masterCompany = await MasterCompany.create(data);

      return masterCompany;
    } catch (err) {
      const errors = [];

      if (err) {
        errors.push(err);
        return response.status(500).json(errors);
      } else {
        return response.status(500).json({
          err: 'Internal Server Error'
        })
      }
    }
  }

  async show({ request, response }) {
    try {
      const { cnpj } = request.headers();
      const masterCompany = await MasterCompany.query().where('cnpj', cnpj).first();

      if (!masterCompany) {
        return response.status(404).json({ msg: 'Empresa não encontrada!' })
      }

      return masterCompany;
    } catch (err) {
      const errors = [];

      if (err) {
        errors.push(err);
        return response.status(500).json(errors);
      } else {
        return response.status(500).json({
          err: 'Internal Server Error'
        })
      }
    }
  }
}

module.exports = MasterCompanyController
