'use strict'

const Route = use('Route')

const AdminController = use('App/Controllers/Http/AdminController.js');
const MasterCompanyController = use('App/Controllers/Http/MasterCompanyController.js');
const AccessLevelController = use('App/Controllers/Http/AccessLevelController.js');
const AddressesController = use('App/Controllers/Http/AddressesController.js');

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
});

Route.resource('/admin', 'AdminController');

Route.get('/mastercompany', 'MasterCompanyController.show');

Route.get('/accesslevel', 'AccessLevelController.index');
Route.post('/accesslevel', 'AccessLevelController.create');

Route.resource('/addresses', 'AddressesController');
