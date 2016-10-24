<p class="page-header text-muted uppercase">Organisasjon — <span class="selectedOrg"></span></p>

<div id="sectionOrgInfoAlert" class="alert alert-warning collapse">
	<h4><i class="ion ion-android-warning"></i> Ingen info!</h4>
	Fant ingen informasjon for <span class="feideOrg"><!--></span> (<span class="feideOrgId"><!--></span>) i Adobe Connect.
</div>


<div id="sectionOrgInfo" class="row collapse">

	<div class="col-md-12">
		<div class="box">
			<div class="box-header with-border">
				<h3 class="box-title">Bruksmønster siste 7 dager for <code class="selectedOrg bg-gray"><!--></code></h3>
				<div class="box-tools pull-right">
					<div class="btn-group">
						<button type="button" class="btn btn-box-tool dropdown-toggle" data-toggle="dropdown">
						<i class="fa fa-wrench"></i></button>
						<ul class="dropdown-menu" role="menu">
							<li><a href="#">Action</a></li>
							<li><a href="#">Another action</a></li>
							<li><a href="#">Something else here</a></li>
							<li class="divider"></li>
							<li><a href="#">Separated link</a></li>
						</ul>
					</div>
				</div>
			</div>
			<!-- /.box-header -->
			<div class="box-body">
				<div class="row">
					<div class="col-md-8">
						<div class="chart">
							<canvas id="salesChart" class="xhr" style="height: 180px; width: 999px;" height="180" width="999"></canvas>
						</div><!-- /.chart-responsive -->
					</div><!-- /.col -->

					<div class="col-md-4">
						<p class="text-center"><strong>Stats</strong></p>

						<div class="progress-group">
							<span class="progress-text">Brukere ved org</span>
							<span class="progress-number"><span class="xhr selectedOrgUserCount"></span> / <span class="xhr usersCount"></span></span>

							<div class="progress sm">
								<div class="progress-bar progress-bar-aqua selectedOrgUserCountPercentage" style="width: 0%"></div>
							</div>
						</div><!-- /.progress-group -->

						<div class="progress-group">
							<span class="progress-text">Complete Purchase</span>
							<span class="progress-number"><b>310</b>/400</span>

							<div class="progress sm">
								<div class="progress-bar progress-bar-red" style="width: 80%"></div>
							</div>
						</div><!-- /.progress-group -->

						<div class="progress-group">
							<span class="progress-text">Visit Premium Page</span>
							<span class="progress-number"><b>480</b>/800</span>

							<div class="progress sm">
								<div class="progress-bar progress-bar-green" style="width: 80%"></div>
							</div>
						</div><!-- /.progress-group -->

						<div class="progress-group">
							<span class="progress-text">Send Inquiries</span>
							<span class="progress-number"><b>250</b>/500</span>

							<div class="progress sm">
								<div class="progress-bar progress-bar-yellow" style="width: 80%"></div>
							</div>
						</div><!-- /.progress-group -->
					</div><!-- /.col -->
				</div><!-- /.row -->
			</div><!-- ./box-body -->

			<div class="box-footer">
				<p class="text-muted">Totalt i denne perioden:</p>
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
							<span class="description-text uppercase">Rom</span>
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