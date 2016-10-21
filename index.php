<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta name="description" content="">
	<meta name="author" content="">
	<link rel="shortcut icon" href="vendor/uninett-bootstrap-theme/ico/favicon.ico">
	<title>UNINETT - ConnectAdmin</title>
	<!-- Bootstrap -->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
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
			<?php include_once 'app/elements/quickstats.php'; ?>
			<?php include_once 'app/elements/globalinfo.php'; ?>
			<p style="clear: both;"></p>


			<div class="row">
				<div class="col-lg-12">
					<div class="uninett-color-white uninett-padded gutter">
						<h2>Fullspan</h2>
						<p>text.</p>
					</div>
				</div>
			</div>

			<div class="row">
				<div class="col-lg-4 col-md-4">
					<div class="uninett-color-white uninett-padded gutter">
						<h2>1/3</h2>
						<p>...</p>
						<p><a class="btn btn-default" href="#" role="button">View details &raquo;</a></p>
					</div>
				</div>
				<div class="col-lg-4 col-md-4">
					<div class="uninett-color-lightGreen uninett-padded gutter">
						<h2>2/3</h2>
						<p>...</p>
						<p><a class="btn btn-default" href="#" role="button">View details &raquo;</a></p>
					</div>
				</div>
				<div class="col-lg-4 col-md-4">
					<div class="uninett-color-white uninett-padded gutter">
						<h2>3/3</h2>
						<p>...</p>
						<p><a class="btn btn-default" href="#" role="button">View details &raquo;</a></p>
					</div>
				</div>
			</div>

			<hr class="uninett-hr-divider">
			<div class="row">
				<div class="col-lg-12">
					<div class="footer-uninett">
						<div class="footer-content-uninett">
								<div class="footer-logo"> <img src="vendor/uninett-bootstrap-theme/images/Uninett_pil_rod.svg" alt="Uninett logo" type="image/svg+xml"></div>
								<div class="footer-uninett-department">UNINETT AS 2016 —</div>
						</div>
						<div class="clearfix"></div>
					</div>
				</div>
			</div>
		</div> <!-- // content -->

	</div> <!-- // container -->

	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
	<!-- JSO -->
	<script src="app/js/auth/jso.min.js"></script>
	<script src="app/js/auth/dataporten_auth.js"></script>
	<script src="app/js/etc/config.js"></script>
	<script src="app/js/etc/utils.js"></script>
	<script src="app/js/api_consumers/dataporten.js"></script>
	<script src="app/js/api_consumers/connect.js"></script>
	<script src="app/js/app.js"></script>

</body>
</html>
