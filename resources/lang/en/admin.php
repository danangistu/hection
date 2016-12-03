<?php
return [

    /*
    |--------------------------------------------------------------------------
    | English Admin Language Lines
    |--------------------------------------------------------------------------
    */

    "article" => [
        "create"                    => "Create article",
        "edit"                      => "Edit article",
        "index"                     => "Articles",
        "show"                      => "Show article"
    ],
    "category" => [
        "create"                    => "Create category",
        "edit"                      => "Edit category",
        "index"                     => "Categories",
        "show"                      => "Show category"
    ],
    "create" => [
        "fail"                      => "Create operation on resource has failed.",
        "success"                   => "Resource has been created succesfully."
    ],
    "csrf_error"                    => "Seems like you couldn't submit the form for a longtime. Please try again.",
    "datatables" => [               // DataTables, files can be found @ https://datatables.net/plug-ins/i18n/
        "sInfo"                     => "Showing _START_ to _END_ of _TOTAL_ entries",
        "sInfoEmpty"                => "Showing 0 to 0 of 0 entries",
        "sInfoFiltered"             => "(filtered from _MAX_ total entries)",
        "sInfoPostFix"              => "",
        "sLengthMenu"               => "Show _MENU_ entries",
        "sProcessing"               => "<div class='overlay'><i class='fa fa-refresh fa-spin'></i></div>",
        "sSearch"                   => "Search:",
        "sUrl"                      => "",
        "sZeroRecords"              => "No matching records found",
        "oPaginate" => [
            "sFirst"                => "First",
            "sLast"                 => "Last",
            "sNext"                 => "Next",
            "sPrevious"             => "Previous"
        ]
    ],
    "delete" => [
        "fail"                      => "Delete operation on resource has failed.",
        "self"                      => "You can't always get what you want.",
        "success"                   => "Resource has been deleted succesfully."
    ],
    "elfinder"                      => "File Manager",
    "empty"                         => "There are not any saved records yet. Why don't you create a new one first?",
    "fields" => [
        "article" => [
            "category_id"           => "Category",
            "content"               => "Content",
            "description"           => "Description",
            "title"                 => "Article Title"
        ],
        "category" => [
            "articles"              => "Article Count",
            "color"                 => "Color",
            "description"           => "Description",
            "language_id"           => "Language",
            "title"                 => "Category Title"
        ],
        "created_at"                => "Created at",
        "dashboard" => [
            'average_time'          => "Average time",
            'bounce_rate'           => "Bounce rate",
            'browsers'              => "Browser",
            'chart_country'         => "Country",
            'chart_region'          => "Region",
            'chart_visitors'        => "Visitor",
            'entrance_pages'        => "Entrance",
            'exit_pages'            => "Exit",
            'invalid_setup'         => "Please configure your Google Analytics setup defined in your .env file to see the dashboard (ANALYTICS_CONFIGURED).",
            'keywords'              => "Keywords",
            'os'                    => "OS",
            'page_visits'           => "Average page visits",
            'pages'                 => "Pages",
            'region_visitors'       => "Visitor distribution: Regions",
            'time_pages'            => "Time",
            'total_visits'          => "Total visits",
            'traffic_sources'       => "Source",
            'unique_visits'         => "Unique visits",
            'visitors'              => "Visitors",
            'visits'                => "Visits",
            'world_visitors'        => "Visitor distribution: World"
        ],
        "language" => [
            "code"                  => "Code",
            "flag"                  => "Flag",
            "site_description"      => "Site Description",
            "site_title"            => "Site Title",
            "title"                 => "Title"
        ],
        "no"                        => "No",
        "page" => [
            "content"               => "Content",
            "description"           => "Description",
            "language_id"           => "Language",
            "title"                 => "Title",
        ],

        //put your array fields here
        "slider" => [
            "picture"               => "Picture",
            "layer1"                => "Text 1",
            "layer2"                => "Text 2",
            "picform"               => "Picture (1920 x 1080)",
        ],
        "about" => [
            "title"                 => "Title",
            "about"                 => "About",
            "pur_1"                 => "Purpose 1",
            "pur_text_1"            => "Purpose Text 1",
            "pur_2"                 => "Purpose 2",
            "pur_text_2"            => "Purpose Text 2",
            "pur_3"                 => "Purpose 3",
            "pur_text_3"            => "Purpose Text 3",
            "pur_4"                 => "Purpose 4",
            "pur_text_4"            => "Purpose Text 4",
        ],
        "contest" => [
            "title"                 => "Title",
            "sub_title"             => "Sub Title",
            "content"               => "Content",
            "picture"               => "Picture",
            "picform"               => "Picture (350 x 350)",
        ],
        "day" => [
            "day"                   => "Day",
        ],
        "program" => [
            "day_id"                => "Day",
            "day"                   => "Day",
            "time"                  => "Time",
            "program"               => "Program",
            "description"           => "Description",
            "duration"              => "Duration",
            "location"              => "location",
            "place"                 => "Place"
        ],
        "sponsor" => [
            "picture"               => "Picture",
            "picform"               => "Picture (200 x 100)",
            "name"                  => "Sponsor Name",
            "link"                  => "URL (Link)",
        ],
        "testimonial" => [
            "picture"               => "Picture",
            "testimonial"           => "Testimonial",
            "name"                  => "Name",
            "role"                  => "Role",
            "picform"               => "Picture (100 x 100)",
        ],
        "gallery" => [
            "picture"               => "Picture",
            "title"                 => "Title",
            "description"           => "Description",
        ],
        "role" => [
            "role"                  => "Role",
        ],
        "winner" => [
            "picture"               => "Picture",
            "picform"               => "Picture (405 x 250)",
            "school"                => "School Name",
            "title"                 => "Title",
            "description"           => "Description",
        ],
        "prize" => [
            "picture"               => "Picture",
            "title"                 => "Title",
            "description"           => "Description",
        ],

        "published_at"              => "Published at",
        "read_count"                => "Read Count",
        "reset"                     => "Reset",
        "save"                      => "Save",
        "setting" => [
            "analytics_id"          => "Analytics ID ( Format: UA-XXXXXXXXX-YYYY )",
            "disqus_shortname"      => "Disqus Shortname",
            "email"                 => "Email",
            "facebook"              => "Facebook",
            "logo"                  => "Logo",
            "twitter"               => "Twitter",
            "instagram"             => "Instagram"
        ],
        "updated_at"                => "Updated at",
        "uploaded"                  => "Uploaded file",
        "user" => [
            "email"                 => "Email",
            "ip_address"            => "IP",
            "logged_in_at"          => "Login At",
            "logged_out_at"         => "Logout At",
            "name"                  => "Name",
            "password"              => "Password",
            "password_confirmation" => "Password Confirmation",
            "picture"               => "Avatar"
        ],
        "yes"                       => "Yes"
    ],
    "language" => [
        "create"                    => "Create language",
        "edit"                      => "Edit language",
        "index"                     => "Languages",
        "show"                      => "Show language"
    ],
    "last_login"                    => "Last Login",
    "menu" => [
        "article" => [
            "add"                   => "Add an Article",
            "all"                   => "All Articles",
            "root"                  => "Articles"
        ],
        "category" => [
            "add"                   => "Add a Category",
            "all"                   => "All Categories",
            "root"                  => "Categories"
        ],
        "dashboard"                 => "Dashboard",
        "language" => [
            "add"                   => "Add a Language",
            "all"                   => "All Languages",
            "root"                  => "Languages"
        ],
        "page" => [
            "add"                   => "Add a Page",
            "all"                   => "All Pages",
            "root"                  => "Pages"
        ],
        //put your menu array list here
        "cms" => [
            "root"                   => "CMS",
            "slider"                 => "Sliders",
            "about"                  => "About",
            "contest"                => "Contests",
            "day"                    => "Days",
            "program"                => "Programs",
            "sponsor"                => "Sponsors",
            "testimonial"            => "Testimonial",
            "gallery"                => "Gallery",
            "winner"                 => "Winner",
            "prize"                  => "Prize",
        ],

        "setting"                   => "Settings",
        "user" => [
            "add"                   => "Add a User",
            "all"                   => "All Users",
            "root"                  => "Users"
        ],
        "role" => [
            "add"                   => "Add a Role",
            "all"                   => "All Roles",
            "root"                  => "Roles"
        ]
    ],
    "ops" => [
        "confirmation"              => "Are you sure?",
        "create"                    => "Create",
        "delete"                    => "Delete",
        "edit"                      => "Edit",
        "modified"                  => "Modified on",
        "name"                      => "Action",
        "order"                     => "Order",
        "show"                      => "Show"
    ],
    "page" => [
        "create"                    => "Create page",
        "edit"                      => "Edit page",
        "show"                      => "Show page",
        "index"                     => "Pages"
    ],

    //put your breadcumb arraylist here
    "slider" => [
        "create"                    => "Create Slider",
        "edit"                      => "Edit Slider",
        "index"                     => "Sliders",
        "show"                     =>  "Show Sliders",
    ],
    "about" => [
        "index"                     => "About",
    ],
    "contest" => [
        "create"                    => "Create Contest",
        "edit"                      => "Edit Contest",
        "index"                     => "Contests",
        "show"                     =>  "Show Contests",
    ],
    "day" => [
        "create"                    => "Create Day",
        "edit"                      => "Edit Day",
        "index"                     => "Days",
        "show"                     =>  "Show Days",
    ],
    "program" => [
        "create"                    => "Create Program",
        "edit"                      => "Edit Program",
        "index"                     => "Programs",
        "show"                     =>  "Show Programs",
    ],
    "sponsor" => [
        "create"                    => "Create Sponsor",
        "edit"                      => "Edit Sponsor",
        "index"                     => "Sponsors",
        "show"                     =>  "Show Sponsors",
    ],
    "testimonial" => [
        "create"                    => "Create Testimonial",
        "edit"                      => "Edit Testimonial",
        "index"                     => "Testimonials",
        "show"                     =>  "Show Testimonials",
    ],
    "gallery" => [
        "create"                    => "Create Gallery",
        "edit"                      => "Edit Gallery",
        "index"                     => "Galleries",
        "show"                      =>  "Show Galleries",
    ],
    "role" => [
        "create"                    => "Create Role",
        "edit"                      => "Edit Role",
        "index"                     => "Roles",
        "show"                      =>  "Show Roles",
    ],
    "winner" => [
        "create"                    => "Create Winner",
        "edit"                      => "Edit Winner",
        "index"                     => "Winners",
        "show"                      =>  "Show Winners",
    ],
    "prize" => [
        "index"                     => "Prizes",
    ],

    "profile"                       => "Profile",
    "root"                          => "Dashboard",
    "setting" => [
        "index"                     => "Settings"
    ],
    "submit"                        => "Submit",
    "title"                         => "Control Panel",
    "update" => [
        "fail"                      => "Update operation on resource has failed.",
        "success"                   => "Resource has been updated succesfully."
    ],
    "user" => [
        "create"                    => "Create user",
        "edit"                      => "Edit user",
        "index"                     => "Users",
        "show"                      => "Show user"
    ]

];
