'use strict'

const User = use('App/Models/User');
const Employee = use('App/Models/Employee');
class EmployeeController {
  async index({ response }) {
    try {
      const employee = await Employee.all();

      return employee;
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
      const employee = await Employee.query().where('id', params.id).first();

      if (!employee) {
        return response.status(404).json({ msg: 'Funcionário não encontrado' })
      }

      return employee;
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

      const verifyEmail = await User.query().where('email', data.email).first();
      const verifyUsername = await User.query().where('username', data.username).first();

      if (verifyEmail) {
        return response.status(400).json({ msg: 'Email já cadastrado!' })
      }
      if (verifyUsername) {
        return response.status(400).json({ msg: 'Usuário já cadastrado!' })
      }

      const user = await User.create({
        email: data.email,
        password: data.password,
        username: data.username
      });
      const employee = await Employee.create({
        user_id: user.id,
        company_id: data.company_id,
        address_id: data.address_id,
        name: data.name,
        last_name: data.last_name,
        cellphone: data.cellphone,
        tellphone: data.tellphone,
        rg: data.rg,
        cpf: data.cpf,
      });

      return response.status(200).json({ msg: 'Usuário criado com sucesso!', data: { user, employee } })
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
      const employee = await Employee.query().where('id', params.id).update(data)

      return employee;
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
      const employee = await Employee.query().where('id', params.id).update({
        active: false
      })

      return employee;
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

module.exports = EmployeeController
