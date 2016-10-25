<hr>
<p class="page-header text-muted uppercase label bg-aqua-gradient">Organisasjon — <span class="selectedOrg"></span></p>

<div id="sectionOrgInfoAlert" class="alert alert-info collapse">
	<h4><i class="ion ion-android-warning"></i> Ingen info!</h4>
	Fant ingen informasjon for <span class="feideOrg"><!--></span> (<span class="feideOrgId"><!--></span>) i Adobe Connect.
</div>

<div id="sectionOrgInfo" class="row collapse">
	<div class="col-md-12">
		<div class="box box-info">
			<div class="box-header with-border">
				<h3 class="box-title">Bruksmønster siste <span class="label bg-aqua orgStatsPeriodDays"><!--></span> dager for <span class="selectedOrg"><!--></span></h3>
				<div class="box-tools pull-right">
					<div class="btn-group">
						<button type="button" class="btn btn-box-tool dropdown-toggle" data-toggle="dropdown">
						<i class="fa fa-wrench"></i></button>
						<ul class="dropdown-menu" role="menu">
							<li class="btnShowOrgListing collapse">
								&nbsp;&nbsp;&nbsp;<span class="ion ion-university text-light-blue"></span> <button class="btn btn-link" data-type="orgList" data-toggle="modal" data-target="#modalSuperAdmin">Endre org</button>
							</li>
							<li>
								&nbsp;&nbsp;&nbsp;<span class="ion ion-android-calendar text-light-blue"></span> <button class="btn btn-link btnChangePeriod">Endre periode</button>
							</li><!--
							<li><a href="#">Something else here</a></li>
							<li class="divider"></li>
							<li><a href="#">Separated link</a></li>
							-->
						</ul>
					</div>
				</div>
			</div>
			<!-- /.box-header -->
			<div class="box-body">
				<div class="row">
					<div class="col-lg-4 col-md-4 col-sm-4 col-xs-6">
						<div class="progress-group">
							<span class="progress-text text-muted">Antall brukerkontoer ved <span class="selectedOrg"><!--></span>:</span>
							<!-- <span class="progress-number"><span class="xhr selectedOrgUserCount"></span> av <span class="xhr usersCount"></span></span> -->
							<div class="progress text-center text-sm text-bold text-blue">
								<span class="xhr selectedOrgUserCount"><!--></span> (av <span class="xhr usersCount"><!--></span>)
								<div class="progress-bar progress-bar-aqua selectedOrgUserCountPercentage text-gray" style="width: 0%"></div>
							</div>
						</div><!-- /.progress-group -->
					</div>
				</div>
				<div class="row">
					<div class="col-lg-12">
						<div class="chart">
							<canvas id="selectedOrgChart"><!--></canvas>
						</div><!-- /.chart-responsive -->
					</div><!-- /.col -->
				</div><!-- /.row -->
			</div><!-- ./box-body -->

			<div class="box-footer">
				<p class="text-muted">Total aktivitet i denne perioden:</p>
				<div class="row">
					<div class="col-sm-3 col-xs-6">
						<div class="description-block border-right">
							<h5 class="description-header xhr selectedOrgUserCountPeriod"><!--></h5>
							<span class="description-text uppercase">Brukere</span>
						</div><!-- /.description-block -->
					</div><!-- /.col -->

					<div class="col-sm-3 col-xs-6">
						<div class="description-block border-right">
							<h5 class="description-header xhr selectedOrgRoomCountPeriod"><!--></h5>
							<span class="description-text uppercase">Møterom</span>
						</div><!-- /.description-block -->
					</div><!-- /.col -->

					<div class="col-sm-3 col-xs-6">
						<div class="description-block border-right">
							<h5 class="description-header xhr selectedOrgSessionCountPeriod"><!--></h5>
							<span class="description-text uppercase">Sesjoner</span>
						</div><!-- /.description-block -->
					</div><!-- /.col -->

					<div class="col-sm-3 col-xs-6">
						<div class="description-block">
							<h5 class="description-header xhr selectedOrgMeetingMinutesPeriod"><!--></h5>
							<span class="description-text uppercase">Tid</span>
						</div><!-- /.description-block -->
					</div>
				</div><!-- /.row -->
			</div><!-- /.box-footer -->

			<div class="overlay ajax">
				<i class="fa fa-spinner fa-pulse"></i>
			</div>
		</div><!-- /.box -->
	</div>




</div>