<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta name="author" content="Simon Skrødal">
	<link rel="shortcut icon" href="vendor/uninett-bootstrap-theme/ico/favicon.ico">
	<title>UNINETT - ConnectAdmin</title>
	<!-- Bootstrap -->
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.min.css" />
	<!-- Custom styles for this template -->
	<link rel="stylesheet" href="vendor/uninett-bootstrap-theme/css/uninett.css">
	<!-- Fonts/AdminLTE -->
	<link href="vendor/AdminLTE/fonts/ionicons/ionicons.min.css" rel="stylesheet" type="text/css"/>
	<link href="vendor/AdminLTE/fonts/fontawesome/font-awesome.min.css" rel="stylesheet" type="text/css"/>
	<link rel="stylesheet" href="vendor/AdminLTE/css/AdminLTE.min.css">
	<link rel="stylesheet" href="app/css/app.css">
	<!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
	<!--[if lt IE 9]>
	<script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
		<script src="https://oss.maxcdn.com/libs/respond.js/1.3.0/respond.min.js"></script>
	<![endif]-->
</head>
<body>
	<!-- Fixed navbar -->
	<?php include_once 'app/elements/navbar.php'; ?>
	<!-- Alerts -->
	<?php include_once 'app/elements/alerts.php'; ?>
	<!-- Main content -->
	<div class="container">
		<?php include_once 'app/elements/jumbotron.php'; ?>
		<hr>
		<div id="content" style="display: none;">
			<?php include_once 'app/elements/userwidget.php'; ?>
			<?php include_once 'app/elements/orginfo.php'; ?>
			<?php include_once 'app/elements/quickstats.php'; ?>
			<?php include_once 'app/elements/globalinfo.php'; ?>
			<?php include_once 'app/elements/superinfo.php'; ?>




			<?php include_once 'app/elements/footer.php'; ?>
		</div> <!-- // content -->

	</div> <!-- // container -->

	<!-- 3rd party -->
	<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/js/bootstrap.min.js"></script>
	<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.15.1/moment.min.js"></script>
	<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.3.0/Chart.min.js"></script>
	<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/1.5.13/clipboard.min.js"></script>


	<!-- Local -->
	<script src="app/js/auth/jso.min.js"></script>
	<script src="app/js/auth/dataporten_auth.js"></script>
	<script src="app/js/etc/config.js"></script>
	<script src="app/js/etc/utils.js"></script>
	<script src="app/js/api_consumers/dataporten.js"></script>
	<script src="app/js/api_consumers/connect.js"></script>
	<script src="app/js/app.js"></script>
	<script src="app/js/connect_ui.js"></script>


</body>
</html>
