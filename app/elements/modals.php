<div id="modalAdmin" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="title">
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



<div id="orgsTable" class="table-responsive display collapse">
	<p>Alle unike "organisasjoner" funnet i tjenesten — alt etter <code>@</code> i brukernavn...</p>
	<p>Klikk på en org for mer info...</p>
	<table id="orgsDataTable" class="table table-striped table-hover table-condensed" style="width: 100%">
		<thead>
			<tr>
				<th>Org</th>
				<th>Brukere</th>
			</tr>
		</thead>
		<tfoot>
            <tr>
				<th>Org</th>
				<th>Brukere</th>
            </tr>
        </tfoot>
	</table>
</div>

<div id="usersTable" class="table-responsive display collapse">
	<table id="usersDataTable" class="table table-striped table-hover table-condensed" style="width: 100%">
        <thead>
            <tr>
                <th>Navn</th>
                <th>Epost</th>
                <th>Brukernavn</th>
            </tr>
        </thead>
        <tfoot>
            <tr>
                <th>Navn</th>
                <th>Epost</th>
                <th>Brukernavn</th>
            </tr>
        </tfoot>
	</table>
</div>

<div id="statsTable" class="table-responsive display collapse full-width-chart">
	<table id="statsDataTable" class="table table-striped table-hover table-condensed" style="width: 100%">
        <thead>
            <tr>
                <th>Dato</th>
                <th>Rom</th>
                <th>Brukere</th>
                <th>Sesjoner</th>
                <th>Varighet (sekunder)</th>
            </tr>
        </thead>
        <tfoot>
            <tr>
                <th>Dato</th>
                <th>Rom</th>
                <th>Brukere</th>
                <th>Sesjoner</th>
	            <th>Varighet (sekunder)</th>
            </tr>
        </tfoot>
	</table>
</div>