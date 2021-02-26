'use strict'

const Route = use('Route')

const AdminController = use('App/Controllers/Http/AdminController.js');
const MasterCompanyController = use('App/Controllers/Http/MasterCompanyController.js');
const AccessLevelController = use('App/Controllers/Http/AccessLevelController.js');
const AddressesController = use('App/Controllers/Http/AddressesController.js');
const EmployeeController = use('App/Controllers/Http/EmployeeController.js');

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
});

Route.resource('/admin', 'AdminController');

Route.get('/mastercompany', 'MasterCompanyController.show');
Route.post('/mastercompany', 'MasterCompanyController.store');

Route.get('/accesslevel', 'AccessLevelController.index');
Route.post('/accesslevel', 'AccessLevelController.create');

Route.resource('/addresses', 'AddressesController');

Route.resource('/employee', 'EmployeeController');
