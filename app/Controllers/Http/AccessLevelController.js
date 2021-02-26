'use strict'

const AccessLevel = use('App/Models/AccessLevel');

class AccessLevelController {
  async index({ request, response }) {
    try {
      const accessLevels = await AccessLevel.all();

      return accessLevels;
    } catch (err) {
      const errors = [];

      if (err) {
        console.log(err)
        errors.push(err);
        return response.status(500).json(errors);
      } else {
        return response.status(500).json({
          err: 'Internal Server Error'
        })
      }
    }
  }

  async create({ request, response }) {
    try {
      const data = request.all()
      const accessLevel = await AccessLevel.create(data);
      return accessLevel;
    } catch (err) {
      const errors = [];

      if (err) {
        console.log(err)
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

module.exports = AccessLevelController
