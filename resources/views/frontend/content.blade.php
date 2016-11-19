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
                      <li role="presentation" class="active"><a href="#day1" id="day1-tab" role="tab" data-toggle="tab" aria-controls="day1" aria-expanded="true">Day 1</a></li>
                      <li role="presentation" class=""><a href="#day2" role="tab" id="day2-tab" data-toggle="tab" aria-controls="day2" aria-expanded="false">Day 2</a></li>
                      <li role="presentation" class=""><a href="#day3" role="tab" id="day3-tab" data-toggle="tab" aria-controls="day3" aria-expanded="false">Day 3</a></li>
                  </ul>

                  <!-- CONTENT -->
                  <div id="myTabContent" class="tab-content">

                      <!-- DAY 1 -->
                      <div role="tabpanel" class="tab-pane fade active in" id="day1" aria-labelledby="day1-tab">
                          <div class="panel-group" id="accordion1" role="tablist" aria-multiselectable="true">

                              <!-- PROGRAM 1-->
                              <div class="panel panel-default">

                                  <!-- Program Heading -->
                                  <div class="panel-heading" role="tab" id="heading1">

                                      <div class="row">
                                          <div class="col-lg-1 col-md-1 col-sm-1">
                                          <p class="date">08.00</p>
                                          </div>

                                          <div class="col-lg-11 col-md-11 col-sm-11">

                                              <h4 class="panel-title">
                                                  <a data-toggle="collapse" data-parent="#accordion" href="#Program1" aria-expanded="true" aria-controls="Program1">
                                                 Mauris rhoncus scelerisque lacus
                                                  </a>
                                              </h4>
                                          </div>
                                      </div>

                                  </div>

                                  <div id="Program1" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading1">
                                      <!-- Program Content -->
                                      <div class="panel-body">
                                          <div class="row">

                                              <div class="col-lg-7 col-md-7 col-sm-10">
                                                  <p>Sed facilisis justo vitae risus viverra vulputate. Mauris vel ipsum dignissim diam viverra condimentum. Donec sodales, diam eget mattis condimentum, quam neque tempus purus, dictum viverra risus nisl quis metus.</p>

                                                  <p><i class="fa fa-lg fa-clock-o"></i> <span class="small">45mins</span></p>
                                                  <p><i class="fa fa-lg fa-map-marker"></i> <span class="small">Saloon A</span></p>
                                              </div>

                                          </div>
                                      </div>

                                  </div>

                              </div>

                              <!-- PROGRAM 2-->
                              <div class="panel panel-default">

                                  <!-- Program Heading -->
                                  <div class="panel-heading" role="tab" id="heading2">

                                      <div class="row">
                                          <div class="col-lg-1 col-md-1 col-sm-1">
                                          <p class="date">08.45</p>
                                          </div>

                                          <div class="col-lg-11 col-md-11 col-sm-11">

                                              <h4 class="panel-title">
                                                  <a data-toggle="collapse" data-parent="#accordion" href="#Program2" aria-expanded="true" aria-controls="Program2">
                                                 Sed porta ex purus ut commodo est facilisis sit amet
                                                  </a>
                                              </h4>
                                          </div>
                                      </div>

                                  </div>

                                  <div id="Program2" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading2">
                                      <!-- Program Content -->
                                      <div class="panel-body">
                                          <div class="row">
                                              <div class="col-lg-2 col-md-2 col-sm-2">
                                                  <img class="img-responsive img-circle" src="img/speaker2.png" alt="">
                                              </div>

                                              <div class="col-lg-7 col-md-7 col-sm-10">
                                                <p class="speaker-name uppercase">Jane Richards</p>
                                                  <h4>Sed porta ex purus, ut commodo est facilisis sit amet</h4>
                                                  <p>Sed facilisis justo vitae risus viverra vulputate. Mauris vel ipsum dignissim diam viverra condimentum. Donec sodales, diam eget mattis condimentum, quam neque tempus purus, dictum viverra risus nisl quis metus.</p>

                                                  <p><i class="fa fa-lg fa-clock-o"></i> <span class="small">45mins</span></p>
                                                  <p><i class="fa fa-lg fa-map-marker"></i> <span class="small">Saloon A</span></p>
                                                  <p><i class="fa fa-lg fa-signal"></i> <span class="small">Beginner</span></p>
                                              </div>

                                              <div class="col-lg-3 col-md-3 col-sm-10">
                                                <h5>About Jane Richards</h5>
                                                  <p class="small">Sed non congue nunc. Fusce pulvinar elementum rhoncus. Duis sit amet metus erat. Sed et ligula mattis, dictum nisl et, vestibulum urna.</p>
                                                  <span class="about-speaker"><i class="fa fa-lg fa-globe"></i> <a class="small" href="#">themecube.net</a></span>
                                              </div>

                                          </div>
                                      </div>

                                  </div>

                              </div>

                              <!-- PROGRAM 3-->
                              <div class="panel panel-default">

                                  <!-- Program Heading -->
                                  <div class="panel-heading" role="tab" id="heading3">

                                      <div class="row">
                                          <div class="col-lg-1 col-md-1 col-sm-1">
                                          <p class="date">09.30</p>
                                          </div>

                                          <div class="col-lg-11 col-md-11 col-sm-11">

                                              <h4 class="panel-title">
                                                  <a data-toggle="collapse" data-parent="#accordion" href="#Program3" aria-expanded="true" aria-controls="Program3">
                                                 Phasellus tellus libero placerat quis amet
                                                  </a>
                                              </h4>
                                          </div>
                                      </div>

                                  </div>

                                  <div id="Program3" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading3">
                                      <!-- Program Content -->
                                      <div class="panel-body">
                                          <div class="row">
                                              <div class="col-lg-2 col-md-2 col-sm-2">
                                                  <img class="img-responsive img-circle" src="img/speaker3.png" alt="">
                                              </div>

                                              <div class="col-lg-7 col-md-7 col-sm-10">
                                                <p class="speaker-name uppercase">Martin Pearson</p>
                                                  <h4>Phasellus tellus libero, placerat quis amet</h4>
                                                  <p>Sed facilisis justo vitae risus viverra vulputate. Mauris vel ipsum dignissim diam viverra condimentum. Donec sodales, diam eget mattis condimentum, quam neque tempus purus, dictum viverra risus nisl quis metus.</p>

                                                  <p><i class="fa fa-lg fa-clock-o"></i> <span class="small">45mins</span></p>
                                                  <p><i class="fa fa-lg fa-map-marker"></i> <span class="small">Saloon A</span></p>
                                                  <p><i class="fa fa-lg fa-signal"></i> <span class="small">Beginner</span></p>
                                              </div>

                                              <div class="col-lg-3 col-md-3 col-sm-10">
                                                <h5>About Martin Pearson</h5>
                                                  <p class="small">Sed non congue nunc. Fusce pulvinar elementum rhoncus. Duis sit amet metus erat. Sed et ligula mattis, dictum nisl et, vestibulum urna.</p>
                                                  <span class="about-speaker"><i class="fa fa-lg fa-globe"></i> <a class="small" href="#">themecube.net</a></span>
                                              </div>

                                          </div>
                                      </div>

                                  </div>

                              </div>

                              <!-- PROGRAM 4-->
                              <div class="panel panel-default">

                                  <!-- Program Heading -->
                                  <div class="panel-heading" role="tab" id="heading4">

                                      <div class="row">
                                          <div class="col-lg-1 col-md-1 col-sm-1">
                                          <p class="date">10.30</p>
                                          </div>

                                          <div class="col-lg-11 col-md-11 col-sm-11">

                                              <h4 class="panel-title">
                                                  <a data-toggle="collapse" data-parent="#accordion" href="#Program4" aria-expanded="true" aria-controls="Program4">
                                                 Proin et augue massa
                                                  </a>
                                              </h4>
                                          </div>
                                      </div>

                                  </div>

                                  <div id="Program4" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading4">
                                      <!-- Program Content -->
                                      <div class="panel-body">
                                          <div class="row">
                                              <div class="col-lg-2 col-md-2 col-sm-2">
                                                  <img class="img-responsive img-circle" src="img/speaker4.png" alt="">
                                              </div>

                                              <div class="col-lg-7 col-md-7 col-sm-10">
                                                <p class="speaker-name uppercase">Jessica Green</p>
                                                  <h4>Proin et augue massa</h4>
                                                  <p>Sed facilisis justo vitae risus viverra vulputate. Mauris vel ipsum dignissim diam viverra condimentum. Donec sodales, diam eget mattis condimentum, quam neque tempus purus, dictum viverra risus nisl quis metus.</p>

                                                  <p><i class="fa fa-lg fa-clock-o"></i> <span class="small">120mins</span></p>
                                                  <p><i class="fa fa-lg fa-map-marker"></i> <span class="small">Saloon A</span></p>
                                                  <p><i class="fa fa-lg fa-signal"></i> <span class="small">Intermediate</span></p>
                                              </div>

                                              <div class="col-lg-3 col-md-3 col-sm-10">
                                                <h5>About Jessica Green</h5>
                                                  <p class="small">Sed non congue nunc. Fusce pulvinar elementum rhoncus. Duis sit amet metus erat. Sed et ligula mattis, dictum nisl et, vestibulum urna.</p>
                                                  <span class="about-speaker"><i class="fa fa-lg fa-globe"></i> <a class="small" href="#">themecube.net</a></span>
                                              </div>

                                          </div>
                                      </div>

                                  </div>

                              </div>

                              <!-- PROGRAM 5-->
                              <div class="panel panel-default">

                                  <!-- Program Heading -->
                                  <div class="panel-heading" role="tab" id="heading5">

                                      <div class="row">
                                          <div class="col-lg-1 col-md-1 col-sm-1">
                                          <p class="date">12.30</p>
                                          </div>

                                          <div class="col-lg-11 col-md-11 col-sm-11">

                                              <h4 class="panel-title">
                                                  <a data-toggle="collapse" data-parent="#accordion" href="#Program5" aria-expanded="true" aria-controls="Program5">
                                                 Maecenas efficitur justo sed accumsan rhoncus
                                                  </a>
                                              </h4>
                                          </div>
                                      </div>

                                  </div>

                                  <div id="Program5" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading5">
                                      <!-- Program Content -->
                                      <div class="panel-body">
                                          <div class="row">
                                              <div class="col-lg-2 col-md-2 col-sm-2">
                                                  <img class="img-responsive img-circle" src="img/speaker5.png" alt="">
                                              </div>

                                              <div class="col-lg-7 col-md-7 col-sm-10">
                                                <p class="speaker-name uppercase">Herman Russell</p>
                                                  <h4>Maecenas efficitur justo sed accumsan rhoncus</h4>
                                                  <p>Sed facilisis justo vitae risus viverra vulputate. Mauris vel ipsum dignissim diam viverra condimentum. Donec sodales, diam eget mattis condimentum, quam neque tempus purus, dictum viverra risus nisl quis metus.</p>

                                                  <p><i class="fa fa-lg fa-clock-o"></i> <span class="small">60mins</span></p>
                                                  <p><i class="fa fa-lg fa-map-marker"></i> <span class="small">Saloon A</span></p>
                                                  <p><i class="fa fa-lg fa-signal"></i> <span class="small">Intermediate</span></p>
                                              </div>

                                              <div class="col-lg-3 col-md-3 col-sm-10">
                                                <h5>About Herman Russell</h5>
                                                  <p class="small">Sed non congue nunc. Fusce pulvinar elementum rhoncus. Duis sit amet metus erat. Sed et ligula mattis, dictum nisl et, vestibulum urna.</p>
                                                  <span class="about-speaker"><i class="fa fa-lg fa-globe"></i> <a class="small" href="#">themecube.net</a></span>
                                              </div>

                                          </div>
                                      </div>

                                  </div>

                              </div>

                          </div>
                      </div>

                      <!-- DAY 2 -->
                      <div role="tabpanel" class="tab-pane fade in" id="day2" aria-labelledby="day2-tab">
                          <div class="panel-group" id="accordion2" role="tablist" aria-multiselectable="true">

                              <!-- PROGRAM 6-->
                              <div class="panel panel-default">

                                  <!-- Program Heading -->
                                  <div class="panel-heading" role="tab" id="heading6">

                                      <div class="row">
                                          <div class="col-lg-1 col-md-1 col-sm-1">
                                          <p class="date">09.00</p>
                                          </div>

                                          <div class="col-lg-11 col-md-11 col-sm-11">

                                              <h4 class="panel-title">
                                                  <a data-toggle="collapse" data-parent="#accordion" href="#Program6" aria-expanded="true" aria-controls="Program6">
                                                 Cum sociis natoque penatibus
                                                  </a>
                                              </h4>
                                          </div>
                                      </div>

                                  </div>

                                  <div id="Program6" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading6">
                                      <!-- Program Content -->
                                      <div class="panel-body">
                                          <div class="row">
                                              <div class="col-lg-2 col-md-2 col-sm-2">
                                                  <img class="img-responsive img-circle" src="img/speaker6.png" alt="">
                                              </div>

                                              <div class="col-lg-7 col-md-7 col-sm-10">
                                                <p class="speaker-name uppercase">Joan Graves</p>
                                                  <h4>Cum sociis natoque penatibus</h4>
                                                  <p>Sed facilisis justo vitae risus viverra vulputate. Mauris vel ipsum dignissim diam viverra condimentum. Donec sodales, diam eget mattis condimentum, quam neque tempus purus, dictum viverra risus nisl quis metus.</p>

                                                  <p><i class="fa fa-lg fa-clock-o"></i> <span class="small">60mins</span></p>
                                                  <p><i class="fa fa-lg fa-map-marker"></i> <span class="small">Saloon A</span></p>
                                                  <p><i class="fa fa-lg fa-signal"></i> <span class="small">Expert</span></p>
                                              </div>

                                              <div class="col-lg-3 col-md-3 col-sm-10">
                                                <h5>About Joan Graves</h5>
                                                  <p class="small">Sed non congue nunc. Fusce pulvinar elementum rhoncus. Duis sit amet metus erat. Sed et ligula mattis, dictum nisl et, vestibulum urna.</p>
                                                  <span class="about-speaker"><i class="fa fa-lg fa-globe"></i> <a class="small" href="#">themecube.net</a></span>
                                              </div>

                                          </div>
                                      </div>

                                  </div>

                              </div>

                              <!-- PROGRAM 7-->
                              <div class="panel panel-default">

                                  <!-- Program Heading -->
                                  <div class="panel-heading" role="tab" id="heading7">

                                      <div class="row">
                                          <div class="col-lg-1 col-md-1 col-sm-1">
                                          <p class="date">10.00</p>
                                          </div>

                                          <div class="col-lg-11 col-md-11 col-sm-11">

                                              <h4 class="panel-title">
                                                  <a data-toggle="collapse" data-parent="#accordion" href="#Program7" aria-expanded="true" aria-controls="Program7">
                                                 Maecenas ut iaculis lorem eu suscipit
                                                  </a>
                                              </h4>
                                          </div>
                                      </div>

                                  </div>

                                  <div id="Program7" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading7">
                                      <!-- Program Content -->
                                      <div class="panel-body">
                                          <div class="row">
                                              <div class="col-lg-2 col-md-2 col-sm-2">
                                                  <img class="img-responsive img-circle" src="img/speaker7.png" alt="">
                                              </div>

                                              <div class="col-lg-7 col-md-7 col-sm-10">
                                                <p class="speaker-name uppercase">Peter Reid</p>
                                                  <h4>Maecenas ut iaculis lorem eu suscipit</h4>
                                                  <p>Sed facilisis justo vitae risus viverra vulputate. Mauris vel ipsum dignissim diam viverra condimentum. Donec sodales, diam eget mattis condimentum, quam neque tempus purus, dictum viverra risus nisl quis metus.</p>

                                                  <p><i class="fa fa-lg fa-clock-o"></i> <span class="small">45mins</span></p>
                                                  <p><i class="fa fa-lg fa-map-marker"></i> <span class="small">Saloon A</span></p>
                                                  <p><i class="fa fa-lg fa-signal"></i> <span class="small">Beginner</span></p>
                                              </div>

                                              <div class="col-lg-3 col-md-3 col-sm-10">
                                                <h5>About Peter Reid</h5>
                                                  <p class="small">Sed non congue nunc. Fusce pulvinar elementum rhoncus. Duis sit amet metus erat. Sed et ligula mattis, dictum nisl et, vestibulum urna.</p>
                                                  <span class="about-speaker"><i class="fa fa-lg fa-globe"></i> <a class="small" href="#">themecube.net</a></span>
                                              </div>

                                          </div>
                                      </div>

                                  </div>

                              </div>

                              <!-- PROGRAM 8-->
                              <div class="panel panel-default">

                                  <!-- Program Heading -->
                                  <div class="panel-heading" role="tab" id="heading8">

                                      <div class="row">
                                          <div class="col-lg-1 col-md-1 col-sm-1">
                                          <p class="date">10.45</p>
                                          </div>

                                          <div class="col-lg-11 col-md-11 col-sm-11">

                                              <h4 class="panel-title">
                                                  <a data-toggle="collapse" data-parent="#accordion" href="#Program8" aria-expanded="true" aria-controls="Program8">
                                                 Sed et molestie nulla bibendum
                                                  </a>
                                              </h4>
                                          </div>
                                      </div>

                                  </div>

                                  <div id="Program8" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading8">
                                      <!-- Program Content -->
                                      <div class="panel-body">
                                          <div class="row">
                                              <div class="col-lg-2 col-md-2 col-sm-2">
                                                  <img class="img-responsive img-circle" src="img/speaker8.png" alt="">
                                              </div>

                                              <div class="col-lg-7 col-md-7 col-sm-10">
                                                <p class="speaker-name uppercase">Tracey Curtis</p>
                                                  <h4>Sed et molestie nulla bibendum</h4>
                                                  <p>Sed facilisis justo vitae risus viverra vulputate. Mauris vel ipsum dignissim diam viverra condimentum. Donec sodales, diam eget mattis condimentum, quam neque tempus purus, dictum viverra risus nisl quis metus.</p>

                                                  <p><i class="fa fa-lg fa-clock-o"></i> <span class="small">60mins</span></p>
                                                  <p><i class="fa fa-lg fa-map-marker"></i> <span class="small">Saloon A</span></p>
                                                  <p><i class="fa fa-lg fa-signal"></i> <span class="small">Beginner</span></p>
                                              </div>

                                              <div class="col-lg-3 col-md-3 col-sm-10">
                                                <h5>About Tracey Curtis</h5>
                                                  <p class="small">Sed non congue nunc. Fusce pulvinar elementum rhoncus. Duis sit amet metus erat. Sed et ligula mattis, dictum nisl et, vestibulum urna.</p>
                                                  <span class="about-speaker"><i class="fa fa-lg fa-globe"></i> <a class="small" href="#">themecube.net</a></span>
                                              </div>

                                          </div>
                                      </div>

                                  </div>

                              </div>

                              <!-- PROGRAM 9-->
                              <div class="panel panel-default">

                                  <!-- Program Heading -->
                                  <div class="panel-heading" role="tab" id="heading9">

                                      <div class="row">
                                          <div class="col-lg-1 col-md-1 col-sm-1">
                                          <p class="date">11.45</p>
                                          </div>

                                          <div class="col-lg-11 col-md-11 col-sm-11">

                                              <h4 class="panel-title">
                                                  <a data-toggle="collapse" data-parent="#accordion" href="#Program9" aria-expanded="true" aria-controls="Program9">
                                                 Praesent dapibus semper nisi sit amet hendrerit
                                                  </a>
                                              </h4>
                                          </div>
                                      </div>

                                  </div>

                                  <div id="Program9" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading9">
                                      <!-- Program Content -->
                                      <div class="panel-body">
                                          <div class="row">
                                              <div class="col-lg-2 col-md-2 col-sm-2">
                                                  <img class="img-responsive img-circle" src="img/speaker1.png" alt="">
                                              </div>

                                              <div class="col-lg-7 col-md-7 col-sm-10">
                                                <p class="speaker-name uppercase">Stanley Willis</p>
                                                  <h4>Praesent dapibus semper nisi sit amet hendrerit</h4>
                                                  <p>Sed facilisis justo vitae risus viverra vulputate. Mauris vel ipsum dignissim diam viverra condimentum. Donec sodales, diam eget mattis condimentum, quam neque tempus purus, dictum viverra risus nisl quis metus.</p>

                                                  <p><i class="fa fa-lg fa-clock-o"></i> <span class="small">120mins</span></p>
                                                  <p><i class="fa fa-lg fa-map-marker"></i> <span class="small">Saloon A</span></p>
                                                  <p><i class="fa fa-lg fa-signal"></i> <span class="small">Intermediate</span></p>
                                              </div>

                                              <div class="col-lg-3 col-md-3 col-sm-10">
                                                <h5>About Stanley Willis</h5>
                                                  <p class="small">Sed non congue nunc. Fusce pulvinar elementum rhoncus. Duis sit amet metus erat. Sed et ligula mattis, dictum nisl et, vestibulum urna.</p>
                                                  <span class="about-speaker"><i class="fa fa-lg fa-globe"></i> <a class="small" href="#">themecube.net</a></span>
                                              </div>

                                          </div>
                                      </div>

                                  </div>

                              </div>

                              <!-- PROGRAM 10-->
                              <div class="panel panel-default">

                                  <!-- Program Heading -->
                                  <div class="panel-heading" role="tab" id="heading10">

                                      <div class="row">
                                          <div class="col-lg-1 col-md-1 col-sm-1">
                                          <p class="date">13.45</p>
                                          </div>

                                          <div class="col-lg-11 col-md-11 col-sm-11">

                                              <h4 class="panel-title">
                                                  <a data-toggle="collapse" data-parent="#accordion" href="#Program10" aria-expanded="true" aria-controls="Program10">
                                                 Ut posuere ipsum a laoreet
                                                  </a>
                                              </h4>
                                          </div>
                                      </div>

                                  </div>

                                  <div id="Program10" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading10">
                                      <!-- Program Content -->
                                      <div class="panel-body">
                                          <div class="row">
                                              <div class="col-lg-2 col-md-2 col-sm-2">
                                                  <img class="img-responsive img-circle" src="img/speaker2.png" alt="">
                                              </div>

                                              <div class="col-lg-7 col-md-7 col-sm-10">
                                                <p class="speaker-name uppercase">Jane Richards</p>
                                                  <h4>Ut posuere ipsum a laoreet</h4>
                                                  <p>Sed facilisis justo vitae risus viverra vulputate. Mauris vel ipsum dignissim diam viverra condimentum. Donec sodales, diam eget mattis condimentum, quam neque tempus purus, dictum viverra risus nisl quis metus.</p>

                                                  <p><i class="fa fa-lg fa-clock-o"></i> <span class="small">60mins</span></p>
                                                  <p><i class="fa fa-lg fa-map-marker"></i> <span class="small">Saloon A</span></p>
                                                  <p><i class="fa fa-lg fa-signal"></i> <span class="small">Beinner</span></p>
                                              </div>

                                              <div class="col-lg-3 col-md-3 col-sm-10">
                                                <h5>About Jane Richards</h5>
                                                  <p class="small">Sed non congue nunc. Fusce pulvinar elementum rhoncus. Duis sit amet metus erat. Sed et ligula mattis, dictum nisl et, vestibulum urna.</p>
                                                  <span class="about-speaker"><i class="fa fa-lg fa-globe"></i> <a class="small" href="#">themecube.net</a></span>
                                              </div>

                                          </div>
                                      </div>

                                  </div>

                              </div>

                          </div>
                      </div>

                      <!-- DAY 3 -->
                      <div role="tabpanel" class="tab-pane fade in" id="day3" aria-labelledby="day3-tab">
                          <div class="panel-group" id="accordion3" role="tablist" aria-multiselectable="true">

                              <!-- PROGRAM 11-->
                              <div class="panel panel-default">

                                  <!-- Program Heading -->
                                  <div class="panel-heading" role="tab" id="heading11">

                                      <div class="row">
                                          <div class="col-lg-1 col-md-1 col-sm-1">
                                          <p class="date">08.00</p>
                                          </div>

                                          <div class="col-lg-11 col-md-11 col-sm-11">

                                              <h4 class="panel-title">
                                                  <a data-toggle="collapse" data-parent="#accordion" href="#Program11" aria-expanded="true" aria-controls="Program11">
                                                 Mauris rhoncus scelerisque lacus
                                                  </a>
                                              </h4>
                                          </div>
                                      </div>

                                  </div>

                                  <div id="Program11" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading11">
                                      <!-- Program Content -->
                                      <div class="panel-body">
                                          <div class="row">
                                              <div class="col-lg-2 col-md-2 col-sm-2">
                                                  <img class="img-responsive img-circle" src="img/speaker1.png" alt="">
                                              </div>

                                              <div class="col-lg-7 col-md-7 col-sm-10">
                                                <p class="speaker-name uppercase">Stanley Willis</p>
                                                  <h4>Mauris rhoncus scelerisque lacus</h4>
                                                  <p>Sed facilisis justo vitae risus viverra vulputate. Mauris vel ipsum dignissim diam viverra condimentum. Donec sodales, diam eget mattis condimentum, quam neque tempus purus, dictum viverra risus nisl quis metus.</p>

                                                  <p><i class="fa fa-lg fa-clock-o"></i> <span class="small">45mins</span></p>
                                                  <p><i class="fa fa-lg fa-map-marker"></i> <span class="small">Saloon A</span></p>
                                                  <p><i class="fa fa-lg fa-signal"></i> <span class="small">Beginner</span></p>
                                              </div>

                                              <div class="col-lg-3 col-md-3 col-sm-10">
                                                <h5>About Stanley Willis</h5>
                                                  <p class="small">Sed non congue nunc. Fusce pulvinar elementum rhoncus. Duis sit amet metus erat. Sed et ligula mattis, dictum nisl et, vestibulum urna.</p>
                                                  <span class="about-speaker"><i class="fa fa-lg fa-globe"></i> <a class="small" href="#">themecube.net</a></span>
                                              </div>

                                          </div>
                                      </div>

                                  </div>

                              </div>

                              <!-- PROGRAM 12-->
                              <div class="panel panel-default">

                                  <!-- Program Heading -->
                                  <div class="panel-heading" role="tab" id="heading12">

                                      <div class="row">
                                          <div class="col-lg-1 col-md-1 col-sm-1">
                                          <p class="date">08.45</p>
                                          </div>

                                          <div class="col-lg-11 col-md-11 col-sm-11">

                                              <h4 class="panel-title">
                                                  <a data-toggle="collapse" data-parent="#accordion" href="#Program12" aria-expanded="true" aria-controls="Program12">
                                                 Sed porta ex purus ut commodo est facilisis sit amet
                                                  </a>
                                              </h4>
                                          </div>
                                      </div>

                                  </div>

                                  <div id="Program12" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading12">
                                      <!-- Program Content -->
                                      <div class="panel-body">
                                          <div class="row">
                                              <div class="col-lg-2 col-md-2 col-sm-2">
                                                  <img class="img-responsive img-circle" src="img/speaker2.png" alt="">
                                              </div>

                                              <div class="col-lg-7 col-md-7 col-sm-10">
                                                <p class="speaker-name uppercase">Jane Richards</p>
                                                  <h4>Sed porta ex purus, ut commodo est facilisis sit amet</h4>
                                                  <p>Sed facilisis justo vitae risus viverra vulputate. Mauris vel ipsum dignissim diam viverra condimentum. Donec sodales, diam eget mattis condimentum, quam neque tempus purus, dictum viverra risus nisl quis metus.</p>

                                                  <p><i class="fa fa-lg fa-clock-o"></i> <span class="small">45mins</span></p>
                                                  <p><i class="fa fa-lg fa-map-marker"></i> <span class="small">Saloon A</span></p>
                                                  <p><i class="fa fa-lg fa-signal"></i> <span class="small">Beginner</span></p>
                                              </div>

                                              <div class="col-lg-3 col-md-3 col-sm-10">
                                                <h5>About Jane Richards</h5>
                                                  <p class="small">Sed non congue nunc. Fusce pulvinar elementum rhoncus. Duis sit amet metus erat. Sed et ligula mattis, dictum nisl et, vestibulum urna.</p>
                                                  <span class="about-speaker"><i class="fa fa-lg fa-globe"></i> <a class="small" href="#">themecube.net</a></span>
                                              </div>

                                          </div>
                                      </div>

                                  </div>

                              </div>

                              <!-- PROGRAM 13-->
                              <div class="panel panel-default">

                                  <!-- Program Heading -->
                                  <div class="panel-heading" role="tab" id="heading13">

                                      <div class="row">
                                          <div class="col-lg-1 col-md-1 col-sm-1">
                                          <p class="date">09.30</p>
                                          </div>

                                          <div class="col-lg-11 col-md-11 col-sm-11">

                                              <h4 class="panel-title">
                                                  <a data-toggle="collapse" data-parent="#accordion" href="#Program13" aria-expanded="true" aria-controls="Program13">
                                                 Phasellus tellus libero placerat quis amet
                                                  </a>
                                              </h4>
                                          </div>
                                      </div>

                                  </div>

                                  <div id="Program13" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading13">
                                      <!-- Program Content -->
                                      <div class="panel-body">
                                          <div class="row">
                                              <div class="col-lg-2 col-md-2 col-sm-2">
                                                  <img class="img-responsive img-circle" src="img/speaker3.png" alt="">
                                              </div>

                                              <div class="col-lg-7 col-md-7 col-sm-10">
                                                <p class="speaker-name uppercase">Martin Pearson</p>
                                                  <h4>Phasellus tellus libero, placerat quis amet</h4>
                                                  <p>Sed facilisis justo vitae risus viverra vulputate. Mauris vel ipsum dignissim diam viverra condimentum. Donec sodales, diam eget mattis condimentum, quam neque tempus purus, dictum viverra risus nisl quis metus.</p>

                                                  <p><i class="fa fa-lg fa-clock-o"></i> <span class="small">45mins</span></p>
                                                  <p><i class="fa fa-lg fa-map-marker"></i> <span class="small">Saloon A</span></p>
                                                  <p><i class="fa fa-lg fa-signal"></i> <span class="small">Beginner</span></p>
                                              </div>

                                              <div class="col-lg-3 col-md-3 col-sm-10">
                                                <h5>About Martin Pearson</h5>
                                                  <p class="small">Sed non congue nunc. Fusce pulvinar elementum rhoncus. Duis sit amet metus erat. Sed et ligula mattis, dictum nisl et, vestibulum urna.</p>
                                                  <span class="about-speaker"><i class="fa fa-lg fa-globe"></i> <a class="small" href="#">themecube.net</a></span>
                                              </div>

                                          </div>
                                      </div>

                                  </div>

                              </div>

                              <!-- PROGRAM 14-->
                              <div class="panel panel-default">

                                  <!-- Program Heading -->
                                  <div class="panel-heading" role="tab" id="heading14">

                                      <div class="row">
                                          <div class="col-lg-1 col-md-1 col-sm-1">
                                          <p class="date">10.30</p>
                                          </div>

                                          <div class="col-lg-11 col-md-11 col-sm-11">

                                              <h4 class="panel-title">
                                                  <a data-toggle="collapse" data-parent="#accordion" href="#Program14" aria-expanded="true" aria-controls="Program14">
                                                 Proin et augue massa
                                                  </a>
                                              </h4>
                                          </div>
                                      </div>

                                  </div>

                                  <div id="Program14" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading14">
                                      <!-- Program Content -->
                                      <div class="panel-body">
                                          <div class="row">
                                              <div class="col-lg-2 col-md-2 col-sm-2">
                                                  <img class="img-responsive img-circle" src="img/speaker4.png" alt="">
                                              </div>

                                              <div class="col-lg-7 col-md-7 col-sm-10">
                                                <p class="speaker-name uppercase">Jessica Green</p>
                                                  <h4>Proin et augue massa</h4>
                                                  <p>Sed facilisis justo vitae risus viverra vulputate. Mauris vel ipsum dignissim diam viverra condimentum. Donec sodales, diam eget mattis condimentum, quam neque tempus purus, dictum viverra risus nisl quis metus.</p>

                                                  <p><i class="fa fa-lg fa-clock-o"></i> <span class="small">120mins</span></p>
                                                  <p><i class="fa fa-lg fa-map-marker"></i> <span class="small">Saloon A</span></p>
                                                  <p><i class="fa fa-lg fa-signal"></i> <span class="small">Intermediate</span></p>
                                              </div>

                                              <div class="col-lg-3 col-md-3 col-sm-10">
                                                <h5>About Jessica Green</h5>
                                                  <p class="small">Sed non congue nunc. Fusce pulvinar elementum rhoncus. Duis sit amet metus erat. Sed et ligula mattis, dictum nisl et, vestibulum urna.</p>
                                                  <span class="about-speaker"><i class="fa fa-lg fa-globe"></i> <a class="small" href="#">themecube.net</a></span>
                                              </div>

                                          </div>
                                      </div>

                                  </div>

                              </div>

                              <!-- PROGRAM 15-->
                              <div class="panel panel-default">

                                  <!-- Program Heading -->
                                  <div class="panel-heading" role="tab" id="heading15">

                                      <div class="row">
                                          <div class="col-lg-1 col-md-1 col-sm-1">
                                          <p class="date">12.30</p>
                                          </div>

                                          <div class="col-lg-11 col-md-11 col-sm-11">

                                              <h4 class="panel-title">
                                                  <a data-toggle="collapse" data-parent="#accordion" href="#Program15" aria-expanded="true" aria-controls="Program15">
                                                 Maecenas efficitur justo sed accumsan rhoncus
                                                  </a>
                                              </h4>
                                          </div>
                                      </div>

                                  </div>

                                  <div id="Program15" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading15">
                                      <!-- Program Content -->
                                      <div class="panel-body">
                                          <div class="row">
                                              <div class="col-lg-2 col-md-2 col-sm-2">
                                                  <img class="img-responsive img-circle" src="img/speaker5.png" alt="">
                                              </div>

                                              <div class="col-lg-7 col-md-7 col-sm-10">
                                                <p class="speaker-name uppercase">Herman Russell</p>
                                                  <h4>Maecenas efficitur justo sed accumsan rhoncus</h4>
                                                  <p>Sed facilisis justo vitae risus viverra vulputate. Mauris vel ipsum dignissim diam viverra condimentum. Donec sodales, diam eget mattis condimentum, quam neque tempus purus, dictum viverra risus nisl quis metus.</p>

                                                  <p><i class="fa fa-lg fa-clock-o"></i> <span class="small">60mins</span></p>
                                                  <p><i class="fa fa-lg fa-map-marker"></i> <span class="small">Saloon A</span></p>
                                                  <p><i class="fa fa-lg fa-signal"></i> <span class="small">Intermediate</span></p>
                                              </div>

                                              <div class="col-lg-3 col-md-3 col-sm-10">
                                                <h5>About Herman Russell</h5>
                                                  <p class="small">Sed non congue nunc. Fusce pulvinar elementum rhoncus. Duis sit amet metus erat. Sed et ligula mattis, dictum nisl et, vestibulum urna.</p>
                                                  <span class="about-speaker"><i class="fa fa-lg fa-globe"></i> <a class="small" href="#">themecube.net</a></span>
                                              </div>

                                          </div>
                                      </div>

                                  </div>

                              </div>

                          </div>
                      </div>

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
                      <div class="item wrap">
                          <img class="img-responsive" src="img/thumb1.png" alt="">
                          <div class="overlay"></div>
                          <div class="icon">
                              <a class="image-popup" href="img/gallery-img.jpg" title="<h4>Sed at rutrum felis</h4>Curabitur nec metus tempor, malesuada quam a, laoreet urna."><i class="pe-3x pe-7s-plus"></i></a>
                          </div>
                      </div>

                      <div class="item wrap">
                          <img class="img-responsive" src="img/thumb2.png" alt="">
                          <div class="overlay"></div>
                          <div class="icon">
                              <a class="image-popup" href="img/gallery-img.jpg" title="<h4>Sed at rutrum felis</h4>Curabitur nec metus tempor, malesuada quam a, laoreet urna."><i class="pe-3x pe-7s-plus"></i></a>
                          </div>
                      </div>

                      <div class="item wrap">
                          <img class="img-responsive" src="img/thumb3.png" alt="">
                          <div class="overlay"></div>
                          <div class="icon">
                              <a class="image-popup" href="img/gallery-img.jpg" title="<h4>Sed at rutrum felis</h4>Curabitur nec metus tempor, malesuada quam a, laoreet urna."><i class="pe-3x pe-7s-plus"></i></a>
                          </div>
                      </div>

                      <div class="item wrap">
                          <img class="img-responsive" src="img/thumb4.png" alt="">
                          <div class="overlay"></div>
                          <div class="icon">
                              <a class="image-popup" href="img/gallery-img.jpg" title="<h4>Sed at rutrum felis</h4>Curabitur nec metus tempor, malesuada quam a, laoreet urna."><i class="pe-3x pe-7s-plus"></i></a>
                          </div>
                      </div>

                      <div class="item wrap">
                          <img class="img-responsive" src="img/thumb5.png" alt="">
                          <div class="overlay"></div>
                          <div class="icon">
                              <a class="image-popup" href="img/gallery-img.jpg" title="<h4>Sed at rutrum felis</h4>Curabitur nec metus tempor, malesuada quam a, laoreet urna."><i class="pe-3x pe-7s-plus"></i></a>
                          </div>
                      </div>

                      <div class="item wrap">
                          <img class="img-responsive" src="img/thumb6.png" alt="">
                          <div class="overlay"></div>
                          <div class="icon">
                              <a class="image-popup" href="img/gallery-img.jpg" title="<h4>Sed at rutrum felis</h4>Curabitur nec metus tempor, malesuada quam a, laoreet urna."><i class="pe-3x pe-7s-plus"></i></a>
                          </div>
                      </div>

                      <div class="item wrap">
                          <img class="img-responsive" src="img/thumb7.png" alt="">
                          <div class="overlay"></div>
                          <div class="icon">
                              <a class="image-popup" href="img/gallery-img.jpg" title="<h4>Sed at rutrum felis</h4>Curabitur nec metus tempor, malesuada quam a, laoreet urna."><i class="pe-3x pe-7s-plus"></i></a>
                          </div>
                      </div>

                      <div class="item wrap">
                          <img class="img-responsive" src="img/thumb8.png" alt="">
                          <div class="overlay"></div>
                          <div class="icon">
                              <a class="image-popup" href="img/gallery-img.jpg" title="<h4>Sed at rutrum felis</h4>Curabitur nec metus tempor, malesuada quam a, laoreet urna."><i class="pe-3x pe-7s-plus"></i></a>
                          </div>
                      </div>

                      <div class="item wrap">
                          <img class="img-responsive" src="img/thumb9.png" alt="">
                          <div class="overlay"></div>
                          <div class="icon">
                              <a class="image-popup" href="img/gallery-img.jpg" title="<h4>Sed at rutrum felis</h4>Curabitur nec metus tempor, malesuada quam a, laoreet urna."><i class="pe-3x pe-7s-plus"></i></a>
                          </div>
                      </div>

                      <div class="item wrap">
                          <img class="img-responsive" src="img/thumb10.png" alt="">
                          <div class="overlay"></div>
                          <div class="icon">
                              <a class="image-popup" href="img/gallery-img.jpg" title="<h4>Sed at rutrum felis</h4>Curabitur nec metus tempor, malesuada quam a, laoreet urna."><i class="pe-3x pe-7s-plus"></i></a>
                          </div>
                      </div>

                      <div class="item wrap">
                          <img class="img-responsive" src="img/thumb11.png" alt="">
                          <div class="overlay"></div>
                          <div class="icon">
                              <a class="image-popup" href="img/gallery-img.jpg" title="<h4>Sed at rutrum felis</h4>Curabitur nec metus tempor, malesuada quam a, laoreet urna."><i class="pe-3x pe-7s-plus"></i></a>
                          </div>
                      </div>

                      <div class="item wrap">
                          <img class="img-responsive" src="img/thumb12.png" alt="">
                          <div class="overlay"></div>
                          <div class="icon">
                              <a class="image-popup" href="img/gallery-img.jpg" title="<h4>Sed at rutrum felis</h4>Curabitur nec metus tempor, malesuada quam a, laoreet urna."><i class="pe-3x pe-7s-plus"></i></a>
                          </div>
                      </div>

                      <div class="item wrap">
                          <img class="img-responsive" src="img/thumb13.png" alt="">
                          <div class="overlay"></div>
                          <div class="icon">
                              <a class="image-popup" href="img/gallery-img.jpg" title="<h4>Sed at rutrum felis</h4>Curabitur nec metus tempor, malesuada quam a, laoreet urna."><i class="pe-3x pe-7s-plus"></i></a>
                          </div>
                      </div>

                      <div class="item wrap">
                          <img class="img-responsive" src="img/thumb14.png" alt="">
                          <div class="overlay"></div>
                          <div class="icon">
                              <a class="image-popup" href="img/gallery-img.jpg" title="<h4>Sed at rutrum felis</h4>Curabitur nec metus tempor, malesuada quam a, laoreet urna."><i class="pe-3x pe-7s-plus"></i></a>
                          </div>
                      </div>


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
                          <div class="item">
                              <img class="img-circle" src="img/testimonial1.png" alt="">
                              <p class="lead">Nulla euismod sit amet ligula in vehicula. Vestibulum cursus ex non ante dignissim ultricies.Sed egestas hendrerit neque tincidunt mattis. Duis euismod porta tempus.</p>
                              <p class="name">Todd Stone</p>
                          </div>

                          <div class="item">
                              <img class="img-circle" src="img/testimonial2.png" alt="">
                              <p class="lead">Nulla euismod sit amet ligula in vehicula. Vestibulum cursus ex non ante dignissim ultricies. Sed egestas hendrerit neque tincidunt mattis. Duis euismod porta tempus.</p>
                              <p class="name">Minnie Pierce</p>
                          </div>

                          <div class="item">
                              <img class="img-circle" src="img/testimonial3.png" alt="">
                              <p class="lead">Nulla euismod sit amet ligula in vehicula. Vestibulum cursus ex non ante dignissim ultricies. Sed egestas hendrerit neque tincidunt mattis. Duis euismod porta tempus.</p>
                              <p class="name">Lena Kim</p>
                          </div>
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

                      <div class="sponsor">
                          <img class="img-responsive" src="img/sponsor1.png" alt="">
                      </div>

                      <div class="sponsor">
                          <img class="img-responsive" src="img/sponsor2.png" alt="">
                      </div>

                      <div class="sponsor">
                          <img class="img-responsive" src="img/sponsor3.png" alt="">
                      </div>

                      <div class="sponsor">
                          <img class="img-responsive" src="img/sponsor4.png" alt="">
                      </div>

                      <div class="sponsor">
                          <img class="img-responsive" src="img/sponsor5.png" alt="">
                      </div>

                  </div>

              </div>
          </div>
      </div>
  </section>

  <!-- google map -->
<div id="gmap_canvas"></div>
