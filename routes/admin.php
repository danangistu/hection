<?php

Route::get('/', ['as' => 'root', 'uses' => 'DashboardController@getIndex']);
Route::get('setting', ['as' => 'setting.index', 'uses' => 'SettingController@getSettings']);
Route::post('language/change', ['as' => 'language.change' , 'uses' => 'LanguageController@postChange']);
Route::post('page/order', ['as' => 'page.order' , 'uses' => 'PageController@postOrder']);
Route::patch('setting/{setting}', ['as' => 'setting.update', 'uses' => 'SettingController@patchSettings']);
Route::resource('article', 'ArticleController');
Route::resource('category', 'CategoryController');
Route::resource('language', 'LanguageController');
Route::resource('page', 'PageController');
Route::resource('user', 'UserController');
Route::resource('role', 'RoleController');
Route::resource('slider', 'SliderController');
Route::get('about', ['as' => 'about.index', 'uses' => 'AboutController@getAbouts']);
Route::patch('about/{about}', ['as' => 'about.update', 'uses' => 'AboutController@patchAbouts']);
Route::resource('contest', 'ContestController');
Route::resource('day', 'DayController');
Route::resource('program', 'ProgramController');
Route::resource('sponsor', 'SponsorController');
Route::resource('testimonial', 'TestimonialController');
Route::resource('gallery', 'GalleryController');
