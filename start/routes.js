'use strict'

const Route = use('Route')

const AdminController = use('App/Controllers/Http/AdminController.js');

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
});

Route.resource('/admin', 'AdminController');
