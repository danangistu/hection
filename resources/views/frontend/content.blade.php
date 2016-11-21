<!-- HIGHLIGHT -->
  <section id="highlight">
    <div class="container-fluid">
        <div class="row">

            <div id="left" class="left col-lg-9 col-md-8 text-right">
                <h2>Register Now</h2>
                  <p>time left before big days</p>
              </div>

              <div id="right" class="col-lg-3 col-md-4 text-left">
                <div id="countdown"></div>
              </div>

          </div>
      </div>
  </section>

  <!-- INFO -->
  <section id="info">
      <div class="container">
          <div class="row">

              <div class="col-lg-12 text-center">
                  <h1>{{ $about->title }}</h1>
                  <p class="lead"><?php echo $about->about ?></p>
              </div>

              <div class="col-lg-10 col-lg-offset-1 col-md-12 text-center">
                  <div class="row">

                      <div class="feature col-lg-6 col-md-6 col-sm-6">
                          <i class="pe-4x pe-7s-refresh-2"></i>
                          <h4>{{ $about->pur_1 }}</h4>
                          <p>{{ $about->pur_text_1 }}</p>
                      </div>

                      <div class="feature col-lg-6 col-md-6 col-sm-6">
                          <i class="pe-4x pe-7s-micro"></i>
                          <h4>{{ $about->pur_2 }}</h4>
                          <p>{{ $about->pur_text_2 }}</p>
                      </div>

                  </div>
                  <div class="row">

                      <div class="feature col-lg-6 col-md-6 col-sm-6">
                          <i class="pe-4x pe-7s-headphones"></i>
                          <h4>{{ $about->pur_3 }}</h4>
                          <p>{{ $about->pur_text_3 }}</p>
                      </div>

                      <div class="feature col-lg-6 col-md-6 col-sm-6">
                          <i class="pe-4x pe-7s-headphones"></i>
                          <h4>{{ $about->pur_4 }}</h4>
                          <p>{{ $about->pur_text_4 }}</p>
                      </div>

                  </div>
              </div>

          </div>
      </div>
  </section>

  <!-- SPEAKERS -->
  <section id="contest">
      <div class="container">
          <div class="row">

              <div class="col-lg-12">
                  <h2 class="uppercase">Contest</h2>
                  <p class="lead">Here list of the contest</p>
              </div>

              <ul id="list-speaker" class="list-unstyled">
                @foreach($contests as $contest)
                  <li class="col-lg-3 col-md-3 col-sm-4">
                      <div class="speaker">
                          <figure class="effect-ming">
                              <img class="img-responsive" src="{{ asset($contest->picture) }}" alt=""/>
                              <figcaption>
                                  <span><a class="html-popup" href="{{ url('contest/'.$contest->id) }}"><img class="img-responsive" src="{{ asset('frontend/img/plus.png') }}" alt=""></a></span>
                              </figcaption>
                          </figure>

                          <div class="caption text-center">
                              <h4>{{ $contest->title }}</h4>
                          </div>
                      </div>
                  </li>
                @endforeach
              </ul>

              <div class="col-lg-12 col-md-12 col-sm-12 text-center">
                <a id="loadmore" class="button button-small button-line-dark">load more</a>
              </div>

          </div>
      </div>
  </section>

  <!-- PROGRAM -->
  <section id="program">
      <div class="container">
          <div class="row">

              <div class="col-lg-12">

                  <h2 class="uppercase">PROGRAM</h2>
                  <p class="lead">Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid.</p>

                  <!-- SCHEDULE TAB -->
                  <ul id="myTab" class="nav nav-tabs" role="tablist">
                    <?php $i=1; ?>
                    @foreach ($days as $day)
                      <li role="presentation" class="@if($i==1){{'active'}}@endif"><a href="{{ url('#'.str_slug($day->day)) }}" id="{{str_slug($day->day).'-tab'}}" role="tab" data-toggle="tab" aria-controls="day1" aria-expanded="true">{{ $day->day }}</a></li>
                      <?php $i++; ?>
                    @endforeach
                  </ul>

                  <!-- CONTENT -->
                  <div id="myTabContent" class="tab-content">
                    @foreach ($days as $day)
                      <!-- DAY 1 -->
                      <div role="tabpanel" class="tab-pane fade active in" id="{{ str_slug($day->day) }}" aria-labelledby="{{str_slug($day->day).'-tab'}}">
                          <div class="panel-group" id="accordion1" role="tablist" aria-multiselectable="true">
                            <?php $programs = App\Program::where('day_id','=',$day->id)->orderBy('id')->get(); ?>
                            @foreach ($programs as $program)
                              <!-- PROGRAM 1-->
                              <div class="panel panel-default">

                                  <!-- Program Heading -->
                                  <div class="panel-heading" role="tab" id="heading1">

                                      <div class="row">
                                          <div class="col-lg-1 col-md-1 col-sm-1">
                                          <p class="date">{{ $program->time }}</p>
                                          </div>

                                          <div class="col-lg-11 col-md-11 col-sm-11">

                                              <h4 class="panel-title">
                                                  <a data-toggle="collapse" data-parent="#accordion" href="{{ url('#Program'.$program->id) }}" aria-expanded="true" aria-controls="Program1">
                                                    {{ $program->program }}
                                                  </a>
                                              </h4>
                                          </div>
                                      </div>

                                  </div>

                                  <div id="Program{{$program->id}}" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading1">
                                      <!-- Program Content -->
                                      <div class="panel-body">
                                          <div class="row">

                                              <div class="col-lg-7 col-md-7 col-sm-10">
                                                  <p>{{ $program->description }}</p>

                                                  <p><i class="fa fa-lg fa-clock-o"></i> <span class="small">{{ $program->duration }}</span></p>
                                                  <p><i class="fa fa-lg fa-map-marker"></i> <span class="small">{{ $program->place }}</span></p>
                                              </div>

                                          </div>
                                      </div>

                                  </div>

                              </div>
                            @endforeach
                          </div>
                      </div>
                    @endforeach
                  </div>
              </div>
          </div>
      </div>
  </section>

  <!-- DOWNLOAD -->
  <section id="download">
      <div class="container">
          <div class="row">

              <div class="col-lg-8 col-lg-offset-2">
                  <div class="row">

                      <div class="col-lg-4 col-md-4 col-sm-3">
                          <img class="img-responsive" src="frontend/img/download.png" alt="">
                      </div>

                      <div class="col-lg-8 col-md-8 col-sm-9">
                          <h3>Quisque mollis est justo<br>nec pretium elit vulputate sit amet.</h3>
                          <p>In at velit eu est vehicula posuere. Sed sagittis, urna nec pellentesque molestie, est nisi laoreet metus. Nam ac turpis ut orci eleifend suscipit eu in odio. Morbi volutpat mattis urna, et fringilla eros ultrices eu.</p>

                          <a class="button button-small button-line-dark" href="#">download pdf</a>
                      </div>

                  </div>
              </div>

          </div>
      </div>
  </section>

  <!-- VENUE -->
  <section id="venue">

      <div class="venue">
        <div class="venue-inner">
            <div class="container">
                <div class="row">

                    <div class="col-lg-8 col-md-8 col-sm-8">
                        <h2 class="uppercase">venue</h2>
                          <p class="lead">Donec finibus porta ultricies.<br>Interdum et malesuada fames ac ante ipsum primis in faucibus. </p>
                      <h4>Recrea Hotel on Broadway</h4>
                          <img class="img-responsive" src="img/hotel-logo.png" alt="hotel">
                      </div>

                      <div class="col-lg-4 col-md-4 col-sm-4">
                        <i class="pe-4x pe-7s-map-2"></i>
                          <h4 class="uppercase">address</h4>
                          <p>49 West 32nd Street, New York, NY 10001<br>
                            1 212 736-3800<br>
                            4.9 mi /  7.9 km from Downtown</p>

                          <a class="button button-xsmall button-line-light" href="">more information</a>
                      </div>

                  </div>
              </div>
          </div>
      </div>

      <div class="container">
          <div class="row">

              <div class="col-lg-3 col-md-3">
                <h3>Accomodation  Alternatives</h3>
                  <p>Quisque ut dui eget nibh ultrices pulvinar sit amet ut lectus.</p>
              </div>

              <div class="col-lg-9 col-md-9">

                  <!-- hotel carousel -->
                  <div id="hotel-carousel">
                      <div class="item">
                        <div class="hotel">
                            <img class="img-responsive" src="img/hotel-img1.png" alt="">

                              <div class="caption">
                                <h5 class="uppercase">Magna Resort</h5>
                                  <span class="rating">
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                  </span>

                                  <p class="small">Pellentesque habitant morbi tristique et<br>netus et malesuada fames ac turpis egestas.</p>
                                  <a class="button button-xsmall button-line-dark" href="#">details</a>
                              </div>

                          </div>
                      </div>

                      <div class="item">
                        <div class="hotel">
                            <img class="img-responsive" src="img/hotel-img2.png" alt="">

                              <div class="caption">
                                <h5 class="uppercase">Quisque Plaza</h5>
                                  <span class="rating">
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                  </span>

                                  <p class="small">Proin nibh augue eget massa vel<br>semper imperdiet integer vitae orci mauris.</p>
                                  <a class="button button-xsmall button-line-dark" href="#">details</a>
                              </div>

                          </div>
                      </div>

                      <div class="item">
                        <div class="hotel">
                            <img class="img-responsive" src="img/hotel-img3.png" alt="">

                              <div class="caption">
                                <h5 class="uppercase">convallis</h5>
                                  <span class="rating">
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                  </span>

                                  <p class="small">Pellentesque habitant tristique senectus<br>et netus et malesuada fames ac turpis egestas.</p>
                                  <a class="button button-xsmall button-line-dark" href="#">details</a>
                              </div>

                          </div>
                      </div>
                  </div>

              </div>

          </div>
      </div>

  </section>

  <!-- FUNFACTS -->
  <section id="funfacts">
      <div class="funfacts-inner">
          <div class="container">
              <div class="row">

                  <h2 class="hidden">funfacts</h2>

                  <div class="col-lg-10 col-lg-offset-1">
                      <div id="funfacts-carousel">

                          <div class="item">
                              <i class="pe pe-4x pe-7s-world"></i>
                              <div class="desc">
                                  <p class="number">72</p>
                                  <p class="description">countries</p>
                              </div>
                          </div>

                          <div class="item">
                              <i class="pe pe-4x pe-7s-micro"></i>
                              <div class="desc">
                                  <p class="number">38</p>
                                  <p class="description">speakers</p>
                              </div>
                          </div>

                          <div class="item">
                              <i class="pe pe-4x pe-7s-display2"></i>
                              <div class="desc">
                                  <p class="number">126</p>
                                  <p class="description">programs</p>
                              </div>
                          </div>

                          <div class="item">
                              <i class="pe pe-va pe-4x pe-7s-id"></i>
                              <div class="desc">
                                  <p class="number">495</p>
                                  <p class="description">attenders</p>
                              </div>
                          </div>

                      </div>
                  </div>

              </div>
          </div>
      </div>
  </section>

  <!-- REGISTER -->
  <section id="register">
      <div class="container">
          <div class="row">

            <div class="col-lg-12">
                <h2 class="uppercase text-center">register</h2>
                <p class="lead text-center">Nam pellentesque fringilla faucibus. Aliquam tortor ex, egestas porta eget, pretium at lorem.</p>
            </div>


            <div class="col-lg-12 text-center">
              <a class="button button-small button-line-dark html-popup" href="register.html">register now</a>
            </div>

          </div>
      </div>
  </section>

  <!-- GALLERY -->
  <section id="gallery">
      <div class="container">
          <div class="row">

              <div class="col-lg-12">
                  <h2 class="uppercase">gallery</h2>
                  <p class="lead">Nam pellentesque fringilla faucibus. Aliquam tortor ex, egestas porta eget, pretium at lorem.</p>

                  <div id="timeline" data-columns>
                    @foreach($galleries as $gallery)
                      <div class="item wrap">
                          <img class="img-responsive" src="{{ asset($gallery->picture) }}" alt="">
                          <div class="overlay"></div>
                          <div class="icon">
                              <a class="image-popup" href="{{ asset($gallery->picture) }}" title="<h4>{{ $gallery->title }}</h4>{{ $gallery->description }}"><i class="pe-3x pe-7s-plus"></i></a>
                          </div>
                      </div>
                    @endforeach
                  </div>
              </div>

          </div>
      </div>
  </section>

  <!-- TESTIMONIAL -->
  <section id="testimonial">
      <div class="container-fluid">
          <div class="row">

              <div class="col-lg-6 col-lg-offset-6 col-md-6 col-md-offset-6 no-padding">
                  <div class="testimonial-inner">
                      <h2 class="hidden">testimonial</h2>

                      <div id="testimonial-carousel">
                        @foreach($testimonials as $testimonial)
                          <div class="item">
                              <img class="img-circle" src="{{ asset($testimonial->picture) }}" alt="">
                              <p class="lead"><?php echo $testimonial->testimonial; ?></p>
                              <p class="name"><big>{{ $testimonial->name }}</big> - <small>{{ $testimonial->role }}</small></p>
                          </div>
                        @endforeach
                      </div>
                   </div>
              </div>

          </div>
      </div>
  </section>

  <!-- SPONSORS -->
  <section id="sponsors">
      <div class="container">
          <div class="row">
              <div class="col-lg-12">
                  <h2 class="uppercase">sponsors</h2>
                  <p class="lead">Duis ut quam sed ex consectetur euismod. Aliquam et condimentum eros.</p>

                  <div id="sponsors-carousel">
                    @foreach($sponsors as $sponsor)
                      <div class="sponsor">
                          <a href="http://{{ $sponsor->link }}"><img class="img-responsive" src="{{ asset($sponsor->picture) }}" alt="{{ $sponsor->name }}"></a>
                      </div>
                    @endforeach
                  </div>

              </div>
          </div>
      </div>
  </section>

  <!-- google map -->
<div id="gmap_canvas"></div>
