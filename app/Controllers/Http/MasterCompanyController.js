'use strict'

const MasterCompany = use('App/Models/MasterCompany');

class MasterCompanyController {

  async show({ request, response }) {
    try {
      const { cnpj } = request.headers();
      const masterCompany = await MasterCompany.query().where('cnpj', cnpj).first();

      if (!masterCompany) {
        return response.status(404).json({ msg: 'Empresa não encontrada!' })
      }

      return masterCompany;
    } catch (err) {
      console.log(err);
      return response.status(500).json({ err: 'Falha interna, tente novamente.' })
    }
  }
}

module.exports = MasterCompanyController
