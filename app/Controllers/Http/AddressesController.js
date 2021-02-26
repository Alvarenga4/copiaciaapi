'use strict'

const Addresses = use('App/Models/Addresses');
class AddressesController {
  async index({ response }) {
    try {
      const addresses = await Addresses.all();

      return addresses;
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

  async show({ params, response }) {
    try {
      const address = await Addresses.query().where('id', params.id).first();

      if (!address) {
        return response.status(404).json({ msg: 'Endereço não encontrado' })
      }

      return address;
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

  async store({ request, response }) {
    try {
      const data = request.all();

      const address = await Addresses.create(data);

      return address;
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

  async update({ request, params, response }) {
    try {
      const data = request.all();
      const address = await Addresses.query().where('id', params.id).update(data)

      return address;
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

  async destroy({ params, response }) {
    try {
      const address = await Addresses.query().where('id', params.id).update({
        active: false
      })

      return address;
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

module.exports = AddressesController
