<hr>
<p class="page-header text-muted uppercase label uninett-color-red">Globalt</p>

<div id="sectionGlobalInfo" class="row">
	<div class="col-md-12">
		<div class="box box-danger">
			<div class="box-header with-border">
				<h3 class="box-title">Bruksmønster i periode <sup class="text-muted text-sm"><span class="globalStatsPeriodDays"><!--></span> dager</sup></h3>
				<div class="input-daterange input-group globalPeriodRangeInput" id="datepicker" style="width: 250px;">
					<span class="input-group-addon">fra </span>
				    <input type="text" class="input-sm form-control globalPeriodFrom" name="start"/>
				    <span class="input-group-addon"> til </span>
				    <input type="text" class="input-sm form-control globalPeriodTo" name="end"/>
					<span class="input-group-addon">
						<button id="btnUpdateGlobalPeriod" class="btn btn-sm no-padding btn-link ion ion-refresh uninett-fontColor-red disabled"></button>
					</span>
				</div>
				<div class="box-tools pull-right">
					<div class="btn-group">
						<button type="button" class="btn btn-box-tool dropdown-toggle" data-toggle="dropdown">
						<i class="fa fa-wrench"></i></button>
						<ul class="dropdown-menu" role="menu">
							<li class="btnExportStatsData">
								&nbsp;&nbsp;&nbsp;<span class="ion ion-stats-bars text-light-blue"></span> <button class="btn btn-link" data-type="statsExportGlobal" data-toggle="modal" data-target="#modalAdmin">Stats</button>
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
							<span class="small text-gray pull-right">Høyreklikk for å lagre grafen</span>
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