<!DOCTYPE html>
<html lang="en">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0"/>
    <title>Rafi Strauss Portfolio</title>

    <!-- CSS  -->
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link href="materialize/sass/style.css" type="text/css" rel="stylesheet" media="screen,projection"/>

    <script src="https://use.fontawesome.com/64649684e7.js"></script>
</head>
<body>

<div class="section no-pad" id="index-banner">
    <div class="container">

        <h1 class="header center indigo-text">Rafi Strauss</h1>

        <div class="row center">
            <h5 class="header col s12 light">The new and improved portfolio, built with <a
                    href="http://materializecss.com/">Materialize</a></h5>

            <div class="center">
                <img class="authorImage blue lighten-1" src="images/portrait.png" >
            </div>

        </div>

    </div>
</div>

<div class="portfolio">
<?php include_once "projects.php" ?>
</div>


<footer class="page-footer indigo lighten-1">
    <div class="container section scrollspy">
        <div class="row">
            <div class="col l12 s12 center">
                <h5 class="white-text">Connect</h5>

                <a target="_blank" class="white-text tooltipped" data-position="top" data-delay="50"
                   data-tooltip="LinkedIn Profile"
                   href="https://www.linkedin.com/in/raphael-strauss-84043143">
                    <i class="fa fa-linkedin"></i>
                </a>

                <a target="_blank" class="white-text tooltipped" data-position="top" data-delay="50"
                   data-tooltip="Github Profile" href="https://github.com/rafistrauss">
                    <i class="fa fa-github-alt"></i>
                </a>

                <a target="_blank" class="white-text tooltipped" data-position="top" data-delay="50"
                   data-tooltip="StackOverflow Profile"
                   href="http://stackoverflow.com/users/1851509/general-twyckenham">
                    <i class="fa fa-stack-overflow"></i>
                </a>

                <a target="_blank" class="white-text tooltipped" data-position="top" data-delay="50"
                   data-tooltip="Resume"
                   href="https://drive.google.com/open?id=0B4w8lbl3hU5ZWEpkTzZNRi1YeFk">
                    <i class="fa fa-file-text-o"></i>
                </a>

                <a target="_blank" class="white-text tooltipped" data-position="top" data-delay="50"
                   data-tooltip="Email" href="mailto:rafi@rafistrauss.com">
                    <i class="fa fa-envelope-o"></i>
                </a>

            </div>
        </div>
    </div>
</footer>


<!--  Scripts-->
<script src="jquery-2.1.0.min.js"></script>
<script src="materialize/js/bin/materialize.min.js"></script>
<script src="materialize/js/init.js"></script>
</body>
</html>
