'use strict'

const Client = use('App/Models/Client');
class ClientController {
  async index({ response }) {
    try {
      const client = await Client
        .query()
        .with('user')
        .with('company')
        .with('address')
        .fetch();

      return client;
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
      const address = await Client
        .query()
        .with('user')
        .with('company')
        .with('address')
        .where('id', params.id)
        .first();

      if (!address) {
        return response.status(404).json({ msg: 'Cliente não encontrado' })
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

      const address = await Client.create(data);

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
      const address = await Client.query().where('id', params.id).update(data)

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
      const address = await Client.query().where('id', params.id).update({
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

module.exports = ClientController
