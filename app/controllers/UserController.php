<?php

class UserController extends \BaseController {

	/**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */
	public function index()
	{
        // $users 	= User::all();

		$sort 	= (!is_null(Input::get('sort')) ? Input::get('sort') : 'name');
		$order 	= (!is_null(Input::get('order')) ? Input::get('order') : 'desc');

		//'desc' is the default sort order.
		$users 	= User::orderBy($sort, $order)->get();
		
		// $users 	= $users->orderBy($sort, $order);
		// $users 	= $users->paginate(20);

		//include $order and $sort when retrieving your layout/view
		// $this->layout->nest('content', 'widgets.index',array('widgets' => $widgets, 'sort' => $sort, 'order' => $order));
        
        return View::make('user.index', array( 'users' => $users, 'sort' => $sort, 'order' => $order ) ); // ->with('users', $users);
	}

	/**
	 * Show the form for creating a new resource.
	 *
	 * @return Response
	 */
	public function create()
	{
		return 'user.create';
	}

	/**
	 * Store a newly created resource in storage.
	 *
	 * @return Response
	 */
	public function store()
	{
		//
	}

	/**
	 * Display the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function show($id)
	{
		//
	}

	/**
	 * Show the form for editing the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function edit($id)
	{
		// return 'edit:'.$id;

        $user = User::findOrFail($id);
        return View::make('user/edit', compact('user'));
	}

	/**
	 * Update the specified resource in storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function update($id)
	{
        $user = User::findOrFail($id);

        $user->fill(Input::all());
        $user->save();

        Redirect::to('login');
	}

	/**
	 * Remove the specified resource from storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy($id)
	{
		return 'destroy: ' . $id;
	}

}