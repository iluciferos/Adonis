'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

// Menampilkan Data
Route.get('/posts', 'PostController.index').as('posts.index')
Route.on('/').render('welcome')

//  Edit
Route.get('/posts/create', 'PostController.create').as('posts.create')
Route.post('/posts/store', 'PostController.store').as('posts.store')

// Update data
Route.get('/posts/edit/:id', 'PostController.edit').as('posts.edit')
Route.post('/posts/update/:id', 'PostController.update').as('posts.update')

// Delete data
Route.get('/posts/delete/:id', 'PostController.delete').as('posts.delete')
