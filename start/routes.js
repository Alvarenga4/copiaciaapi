'use strict'

const Route = use('Route')

const AdminController = use('App/Controllers/Http/AdminController.js');
const MasterCompanyController = use('App/Controllers/Http/MasterCompanyController.js');

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
});

Route.resource('/admin', 'AdminController');

Route.get('/mastercompany/', 'MasterCompanyController.show');
