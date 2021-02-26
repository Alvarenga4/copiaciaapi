'use strict'

const User = use('App/Models/User');

class AuthController {
  async store({ request, response, auth }) {
    try {
      const { email, password, username } = request.all();

      if (username) {
        const user = await User.query().where('username', username).first();
        if (!user) {
          return response.status(404).json({ msg: 'User not found!' })
        }

        let email = user.email;
        const token = await auth.attempt(email, password);
        return {
          token, user
        }
      } else {
        const user = await User.query().where('email', email).first();

        if (!user) {
          return response.status(404).json({ msg: 'User not found!' })
        }
        const token = await auth.attempt(email, password);
        return { token, user }
      }

    } catch (err) {
      const errors = [];
      if (err) {
        errors.push(err);
        return response.status(500).json(errors);
      } else {
        return response.status(500).json({ msg: 'Internal Server Error' });
      }
    }
  }
}

module.exports = AuthController
