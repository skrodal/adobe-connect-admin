<h4 class="uppercase text-muted">Bruksmønster</h4>

<div class="row">
	<div class="col-lg-6">
		<div class="box box-default">
			<div class="box-header with-border">
				<h3 class="box-title icon ion-ios-eye"> Observasjoner</h3>
				<div class="box-tools pull-right">
				</div>
			</div><!-- /.box-header -->

			<div class="box-body">
				<p>Maks samtidige brukere</p>
				<p>— Noensinne: <span class="xhr usersMaxConcurrent"><!--></span></p>
				<p>— Siste <span class="usersMaxConcurrentNumberOfDays"><!--></span> dager: <span class="xhr usersMaxConcurrentSinceDays"><!--></span></p>

            </div><!-- /.box-body -->

			<div class="box-footer">
			</div>
			<!--
			<div class="overlay ajax">
				<i class="fa fa-spinner fa-pulse"></i>
			</div>
			-->
        </div><!-- /.box -->
	</div>
	<div class="col-lg-6">
		<div class="box box-default">
			<div class="box-header with-border">
				<h3 class="box-title icon ion-ios-eye"> Unike visninger siste <span class="hitsLastDaysChartDays"><!----></span> dager</h3>
				<div class="box-tools pull-right">
					<span data-toggle="tooltip" data-original-title="Unike visninger for periode totalt" class="badge bg-aqua-gradient hitsLastDaysTotal" ><!-- --></span>
					<button class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i></button>
				</div>
			</div><!-- /.box-header -->

			<div class="box-body">
				<div class="chart" id="hitsLastDaysChart" style="height: 200px;">
					<!-- AJAX -->
				</div>
            </div><!-- /.box-body -->

			<div class="box-footer">
				<span class="text-muted">Totalt <span class="hitsTotalGlobal"><!--></span> unike visninger siden <span class="hitsFirstRecord"><!--></span></span>
			</div>
			<div class="overlay ajax">
				<i class="fa fa-spinner fa-pulse"></i>
			</div>
        </div><!-- /.box -->
	</div>
</div>