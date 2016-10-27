<hr>


<div id="sectionOrgInfoAlert" class="alert alert-info collapse">
	<h4><i class="ion ion-android-warning"></i> Ingen info!</h4>
	Fant ingen informasjon for <span class="feideOrg"><!--></span> (<span class="feideOrgId"><!--></span>) i Adobe Connect.
</div>

<div id="sectionOrgInfo" class="collapse">
	<p class="page-header text-muted uppercase label bg-aqua-gradient">Organisasjon — <span class="selectedOrg"></span></p>
	<div class="row">
		<div class="col-md-12">
			<div class="box box-info">
				<div class="box-header with-border">
					<!-- <h3 class="box-title">Bruksmønster i periode for <span class="selectedOrg"></span></h3> -->
					<h3 class="box-title">Bruksmønster i periode <sup class="text-muted text-sm"><span class="orgStatsPeriodDays"><!--></span> dager</sup></h3>
					<div class="input-daterange input-group" id="datepicker" style="width: 250px;">
						<span class="input-group-addon">fra </span>
					    <input type="text" class="input-sm form-control orgPeriodFrom" name="start"/>
					    <span class="input-group-addon"> til </span>
					    <input type="text" class="input-sm form-control orgPeriodTo" name="end"/>
						<span class="input-group-addon">
							<button id="btnUpdateOrgPeriod" class="btn btn-xs btn-link ion ion-ios-refresh disabled"></button>
						</span>
					</div>

					<!-- OrgAdmins only -->
					<div id="orgStatsConfigMenu" class="box-tools pull-right collapse">
						<div class="btn-group">
							<button type="button" class="btn btn-box-tool dropdown-toggle" data-toggle="dropdown">
							<i class="fa fa-wrench"></i></button>
							<ul class="dropdown-menu" role="menu">
								<!-- SuperAdmins only -->
								<li class="btnShowOrgListing collapse">
									&nbsp;&nbsp;&nbsp;<span class="ion ion-university text-light-blue"></span> <button class="btn btn-link" data-type="orgList" data-toggle="modal" data-target="#modalAdmin">Endre org</button>
								</li>
								<!-- OrgAdmins only -->
								<li class="btnExportUserData collapse">
									&nbsp;&nbsp;&nbsp;<span class="ion ion-ios-people text-light-blue"></span> <button class="btn btn-link" data-type="userExport" data-toggle="modal" data-target="#modalAdmin">Brukerliste</button>
								</li>
							</ul>
						</div>
					</div>
				</div><!-- /.box-header -->

				<div class="box-body">
					<div class="row">
						<div class="col-lg-4 col-md-4 col-sm-4 col-xs-6">
							<div class="progress-group">
								<span class="text-muted">Antall brukerkontoer ved <span class="selectedOrg"><!--></span>:</span>
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
</div>


<div id="modalOrgAdmin" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="title">
	<div class="modal-dialog" role="document"> <!-- modal-lg / modal-sm -->
		<div class="modal-content">
			<div class="modal-header bg-dark-gray">
				<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">x</span></button>
				<h4 id="title" class="modal-title uninett-fontColor-white"></h4>
			</div>

			<div class="modal-body">
				<div id="body">

				</div>
			</div>

			<div class="modal-footer bg-dark-gray">
				<button type="button" class="btn btn-default" data-dismiss="modal">Lukk</button>
			</div>
		</div><!-- /.modal-content -->
	</div><!-- /.modal-dialog -->
</div><!-- /.modal -->