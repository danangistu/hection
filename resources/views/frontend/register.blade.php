<div class="container">
	<div class="row">
        <div id="register-form" class="col-lg-6 col-lg-offset-3">
            <div class="row">
            	<button title="Close (Esc)" type="button" class="mfp-close">X</button>

                <div class="col-lg-12">
                	<h2 class="uppercase">register</h2>
                    <p>Fill the following form to register</p>
                </div>
                <!-- REGISTER FORM -->
                <div class="register-form col-lg-12">
                    <div class="control-group">
                        <div class="controls">
                            <label for="name">NAME</label><br>
                            <input type="text" name="name" id="name" required data-validation-required-message="Please enter your name" />
                        </div>
                    </div>

                    <div class="control-group">
                        <div class="controls ">
                            <label for="email">EMAIL</label><br>
                            <input type="email" name="email" id="email"  required data-validation-required-message="Please enter your email" />
                        </div>
                    </div>

										<div class="control-group">
                        <div class="controls ">
                            <label for="password">PASSWORD</label><br>
                            <input type="password" name="password" id="password" required data-validation-required-message="Please enter your password" />
                        </div>
                    </div>

										<div class="control-group">
                        <div class="controls ">
                            <label for="password">RE-PASSWORD</label><br>
                            <input type="password" name="password2" id="password2" required data-validation-required-message="Please enter your re-password" />
                        </div>
                    </div>

                     <!-- <div class="control-group">
                        <div class="controls ">
                            <label for="type">CONTEST</label><br>
                            <select name="type" id="type">
                                    <option value="" disabled selected="selected">Select type</option>
                                    <option value="Early Bird">Early Bird</option>
                                    <option value="Standart">Standart</option>
                                    <option value="Full Price">Full Price</option>
                                </select>
                        </div>
                    </div> -->

                    <div class="col-lg-12 text-right">
                        <button class="button button-big button-dark" onclick="contact_send();">SEND</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
