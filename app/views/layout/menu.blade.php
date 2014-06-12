@include('layout.style')
@include('layout.script')

<html>

	<div id="wrapper">

		<!-- Sidebar --> 
		<nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
			<!-- Brand and toggle get grouped for better mobile display -->
			<div class="navbar-header">
				<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
					<span class="sr-only">Toggle navigation</span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
				</button>
			  	<a class="navbar-brand" href="{{ URL::route('dashboard') }}">h-ERP</a>
			</div>
		

			<!-- Collect the nav links, forms, and other content for toggling -->
		    <div class="collapse navbar-collapse navbar-ex1-collapse">
				<ul class="nav navbar-nav side-nav">
					<li><a href=" {{ URL::route('dashboard') }} "><i class="fa fa-dashboard"></i> Dashboard</a></li>
					<li><a href=" {{ URL::route('contact.index') }} "><i class="fa fa-user"></i> {{ Lang::get('contacts.contacts') }}</a></li>
					<li class="dropdown">
				  		<a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="fa fa-caret-square-o-down"></i> Dropdown <b class="caret"></b></a>
						<ul class="dropdown-menu">
							<li><a href="#">Dropdown Item</a></li>
							<li><a href="#">Another Item</a></li>
							<li><a href="#">Third Item</a></li>
							<li><a href="#">Last Item</a></li>
						</ul>
					</li>
		      	</ul>

				<ul class="nav navbar-nav navbar-right navbar-user">
					<li class="dropdown user-dropdown">
						<a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="fa fa-user"></i> {{ Auth::user()->name }} <b class="caret"></b></a>
						<ul class="dropdown-menu">
							<li><a href="#"><i class="fa fa-user"></i> Profile</a></li>
							<li><a href="#"><i class="fa fa-gear"></i> Settings</a></li>
							<li class="divider"></li>
							<li><a href="{{ URL::route('logout') }}"><i class="fa fa-power-off"></i> {{ Lang::get('messages.logout') }} </a></li>
						</ul>
					</li>
				</ul>
	        </div><!-- /.navbar-collapse -->
      	</nav>

        <div id="page-wrapper">
            <div class="col-lg-12">
                <h1> @yield('title')
                    <small> @yield('subtitle') </small>
                </h1>
                <ol class="breadcrumb">
                    <li class="active">
                    	@yield('ico')
                        @yield('title')
                    </li>
                </ol>
            </div>

            @yield('content')

        </div>

	</div>

</html>

