/**
 * Functions in here are fired AFTER Dataporten has been checked out.
 *
 * @author Simon Skrodal
 * @since October 2016
 */

var CONNECT_MODALS = (function () {
	/**
	 * Generic modal builder - will call relevant function based on data-type on link/button called.
	 */
	$('#modalAdmin').on('show.bs.modal', function (event) {
		var button = $(event.relatedTarget);
		var type = button.data('type') // Extract info from data-type attribute
		// Update the modal's content according to type
		switch (type) {
			case 'orgList':
				buildOrgsListingModal($(this));
				break;
			case 'userExportOrg':
				buildUserListingModal($(this));
				break;
			case 'statsExportOrg':
				buildStatsListingModal($(this), CONNECT_ORG.selectedOrgStatsData().daily, false);
				break;
			case 'statsExportGlobal':
				buildStatsListingModal($(this), CONNECT_GLOBAL.globalStatsData().daily, true);
				break;
		}
	});



	function buildStatsListingModal($modal, data, isGlobal) {

		$modal.find('#title').html(isGlobal ? "Global periodestatistikk" : "Periodestatistikk for " + CONNECT_ORG.selectedOrg());
		$modal.find('.modal-dialog').addClass('modal-lg').removeClass('modal-sm');
		$modal.find('#body').html("Henter....");
		var $table = $('#statsTable').clone();

		$($table.find('#statsDataTable')).DataTable({
			// Object key is date, which Datatables does not like, convert the obj to an indexed array
			data: UTILS.convertDataTablesData(data),
			language: CONFIG.DATATABLES_LANGUAGE(),
			columns: [
				{
					"data": "key",
					"defaultContent": " <span class='text-red'>- mangler -</span> "
				},
				{
					"data": "rooms",
					"defaultContent": " <span class='text-red'>- mangler -</span> "
				},
				{
					"data": "users",
					"defaultContent": " <span class='text-red'>- mangler -</span> "
				},
				{
					"data": "sessions",
					"defaultContent": " <span class='text-red'>- mangler -</span> "
				},
				{
					"data": "duration_sec",
					"defaultContent": " <span class='text-red'>- mangler -</span> "
				}
			],
			dom: 'Bfrtip',
			buttons: [
				{extend: 'copyHtml5', text: 'Kopier'},
				{extend: 'excelHtml5', text: 'Excel'},
				{extend: 'csvHtml5', text: 'CSV'}
			]
		});

		$modal.find('#body').html($table);
		$table.show();
	}

	/**
	 * Fired when show() on modal for user export is triggered
	 *
	 * Safe to use orgList here (otherwise button to show the modal would not exist)
	 * @param $modal
	 */
	function buildUserListingModal($modal) {
		$modal.find('#title').html("Brukere ved " + CONNECT_ORG.selectedOrg());
		$modal.find('.modal-dialog').addClass('modal-lg').removeClass('modal-sm');
		$modal.find('#body').html("<p>Henter...</p>");
		var $table = $('#usersTable').clone();

		$.when(CONNECT.orgUsersXHR(CONNECT_ORG.selectedOrg())).done(function (response) {
			// console.log(response.row);
			$($table.find('#usersDataTable')).DataTable({
				data: response.row,
				language : CONFIG.DATATABLES_LANGUAGE(),
				columns: [
					{
						"data": "name",
						"defaultContent": " <span class='text-red'>- mangler -</span> "
					},
					{
						"data": "email",
						"defaultContent": " <span class='text-red'>- mangler -</span> "
					},
					{
						"data": "login",
						"defaultContent": " <span class='text-red'>- mangler -</span> "
					},
				],
				dom: 'Bfrtip',
				buttons: [
					{ extend: 'copyHtml5', text: 'Kopier' },
					{ extend: 'excelHtml5', text: 'Excel' },
					{ extend: 'csvHtml5', text: 'CSV' }
				]
			});

			$modal.find('#body').html($table);
			$table.show();
		});
	}

	/**
	 * Fired when show() on modal for org listing is triggered.
	 *
	 * Safe to use orgList here (otherwise button to show the modal would not exist)
	 * @param $modal
	 */
	function buildOrgsListingModal($modal) {
		$modal.find('#title').html("Registrerte orgs på tjenesten");
		$modal.find('.modal-dialog').removeClass('modal-sm').removeClass('modal-lg');
		$modal.find('#body').html("<p>Henter...</p>");
		var $table = $('#orgsTable').clone();
		// Default time period to show for stats when an org link is clicked
		var from = UTILS.timestampMinusDays(CONNECT.defaultDaysInPeriod())
		var to = UTILS.timestampNow();
		// Convert DataTables data into an array of objects
		var data = [];
		$.each(CONNECT_UI.orgList(), function (orgName, userCount) {
			data.push( { "org" : "<button class='btn btn-link xhrTrigger' data-function='updateSelectedOrgSection' data-from='" + from + "' data-to='" + to + "' data-org='" + orgName + "'>" + orgName + "</button>", "count" : userCount} );
		});

		$($table.find('#orgsDataTable')).DataTable({
			data: data,
			language : CONFIG.DATATABLES_LANGUAGE(),
			columns: [
				{
					"data": "org",
					"defaultContent": " <span class='text-red'>- mangler -</span> "
				},
				{
					"data": "count",
					"defaultContent": " <span class='text-red'>- mangler -</span> "
				}
			],
			dom: 'Bfrtip',
			buttons: [
				{ extend: 'copyHtml5', text: 'Kopier' },
				{ extend: 'excelHtml5', text: 'Excel' },
				{ extend: 'csvHtml5', text: 'CSV' }
			]
		});

		$modal.find('#body').html($table);
		$table.show();
	}

	/**
	 * Catch clicks on any .xhrTrigger class in the SuperAdmin modal
	 */
	$('#modalAdmin').on('click', '.xhrTrigger', function (event) {
		var button = event.target;
		switch (button.dataset.function) {
			case 'updateSelectedOrgSection':
				CONNECT_ORG.updateSelectedOrgSection(button.dataset.from, button.dataset.to, button.dataset.org);
				$('#modalAdmin').modal('hide');
				// Scroll to chart
				$('html,body').animate({
					scrollTop: $('#sectionOrgInfo').offset().top - 100
				}, 1000);
				break;
		}
	});

	return {
		tester: function () {
			return null;
		}
	}
})
();
