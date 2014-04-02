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

Route::get('/', function()
{
	return View::make('login');
});

Route::post('login/check', 'LoginController@check');

Route::get('lang/{lang}', function($lang)
{

	Session::put('localeLang', $lang);
	return Redirect::to('/');

});

// Route::get('en', function()
// {

// 	App::setlocale('en');
// 	return View::make('login');

// });



// Route::post('login/check',  function()
// // {
// // 	return 'login/check';
// // });
