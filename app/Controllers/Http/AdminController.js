'use strict'
const User = use('App/Models/User');
const Admin = use('App/Models/Admin');

class AdminController {
  async index({ response }) {
    try {
      const admin = await Admin.query().with('user').fetch();

      return admin;
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
      const admin = await Admin.query().where('id', params.id).with('user').first();

      if (!admin) {
        return response.status(404).json({ msg: 'Usuário não encontrado!' })
      }
      return admin;
    } catch (err) {
      console.log(err)
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
      const admin = await Admin.create({
        user_id: user.id,
        name: data.name,
        last_name: data.last_name,
        cellphone: data.cellphone,
        tellphone: data.tellphone,
        rg: data.rg,
        cpf: data.cpf,
      });

      return response.status(200).json({ msg: 'Usuário criado com sucesso!', data: { user, admin } })
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

  async update({ request, response, params }) {
    try {
      const data = request.all();
      const admin = await Admin.query().where('id', params.id).first();

      admin.merge(data);
      admin.save();

      return response.status(200).json({ msg: 'Usuário atualizado com sucesso', data: admin });
    } catch (err) {
      console.log(err);
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

  async destroy({ request, response, params }) {
    try {
      const admin = await Admin.query().where('id', params.id).first();

      admin.delete();

      return response.status(200).json({ msg: 'Usuário deletado com sucesso!' });
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

module.exports = AdminController
