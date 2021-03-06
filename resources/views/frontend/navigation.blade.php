<!-- NAVIGATION -->
<nav id="nav-primary" class="navbar navbar-custom" role="navigation">
  <div class="container">

    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#nav">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a href="{{ url('/') }}"><img src="{{ Config::get('settings')->logo }}" alt="logo"></a>
    </div>

    <div class="collapse navbar-collapse" id="nav">
      <ul class="nav navbar-nav navbar-right uppercase">
        <li><a data-toggle="elementscroll" href="#info">About</a></li>
        <li><a data-toggle="elementscroll" href="#contest">Contests</a></li>
        <li><a data-toggle="elementscroll" href="#program">Program</a></li>
        <li><a data-toggle="elementscroll" href="#venue">Venue</a></li>
        <li><a data-toggle="elementscroll" href="#register">Register</a></li>
        <li><a data-toggle="elementscroll" href="#gallery">Gallery</a></li>
        <li><a data-toggle="elementscroll" href="#sponsors">Sponsors</a></li>
        <li><a data-toggle="elementscroll" href="#footer">Contact</a></li>
      </ul>
    </div>

  </div>
</nav>
