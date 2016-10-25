<hr>
<p class="page-header text-muted uppercase label uninett-color-red">Globalt</p>

<div id="sectionGlobalInfo" class="row">
	<div class="col-md-12">
		<div class="box box-danger">
			<div class="box-header with-border">
				<h3 class="box-title">Bruksmønster siste <span class="label bg-aqua orgStatsPeriodDays"><!--></span> dager</h3>
				<div class="box-tools pull-right">
					<div class="btn-group">
						<button type="button" class="btn btn-box-tool dropdown-toggle" data-toggle="dropdown">
						<i class="fa fa-wrench"></i></button>
						<ul class="dropdown-menu" role="menu">
							<li>
								&nbsp;&nbsp;&nbsp;<span class="ion ion-android-calendar text-light-blue"></span> <button class="btn btn-link btnChangePeriod">Endre periode</button>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<!-- /.box-header -->
			<div class="box-body">
				<div class="row">
					<div class="col-lg-12">
						<div class="chart">
							<canvas id="globalChart"><!--></canvas>
						</div><!-- /.chart-responsive -->
					</div><!-- /.col -->
				</div><!-- /.row -->
			</div><!-- ./box-body -->

			<div class="box-footer">
				<p class="text-muted">Total aktivitet i denne perioden:</p>
				<div class="row">
					<div class="col-sm-3 col-xs-6">
						<div class="description-block border-right">
							<h5 class="description-header xhr globalUserCountPeriod"><!--></h5>
							<span class="description-text uppercase">Brukere</span>
						</div><!-- /.description-block -->
					</div><!-- /.col -->

					<div class="col-sm-3 col-xs-6">
						<div class="description-block border-right">
							<h5 class="description-header xhr globalRoomCountPeriod"><!--></h5>
							<span class="description-text uppercase">Møterom</span>
						</div><!-- /.description-block -->
					</div><!-- /.col -->

					<div class="col-sm-3 col-xs-6">
						<div class="description-block border-right">
							<h5 class="description-header xhr globalSessionCountPeriod"><!--></h5>
							<span class="description-text uppercase">Sesjoner</span>
						</div><!-- /.description-block -->
					</div><!-- /.col -->

					<div class="col-sm-3 col-xs-6">
						<div class="description-block">
							<h5 class="description-header xhr globalMeetingMinutesPeriod"><!--></h5>
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