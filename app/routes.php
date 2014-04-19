<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the Closure to execute when that URI is requested.
|
*/

Route::get('/', array( 'as' => 'login', function()
{
	return View::make('login');
}));

Route::post('login/check', array( 'as' => 'loginCheck', 'uses' => 'LoginController@check'));

// Register--------------------------------------------------------------------

Route::get('register',  array( 'as' => 'register', function()
{
	return View::make('register');
}));

Route::post('register/check', 'RegisterController@check');

Route::get('register/confirmation/{confirmation}', array('as' => 'registerConfirmation',  'uses' => 'RegisterController@confirmation' ));

// Lang------------------------------------------------------------------------

Route::get('lang/{lang}', array('as' => 'lang', function($lang)
{
	Session::put('localeLang', $lang);
	return Redirect::to('/');
}));

// Resources ------------------------------------------------------------------

// Route::resource('user' , 'UserController' );
Route::get('user' , 				array( 'as' => 'user.index', 	'uses' => 'UserController@index' ) );
Route::get('user/create' , 			array( 'as' => 'user.create', 	'uses' => 'UserController@create' ) );
Route::put('user/{user}' , 			array( 'as' => 'user.update', 	'uses' => 'UserController@update' ) );
Route::get('user/{user}/edit' , 	array( 'as' => 'user.edit', 	'uses' => 'UserController@edit' ) );
Route::get('user/{user}/destroy' , 	array( 'as' => 'user.destroy', 	'uses' => 'UserController@destroy' ) );


