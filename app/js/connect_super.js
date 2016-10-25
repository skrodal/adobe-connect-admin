/**
 * app.js will fire functions in here AFTER Dataporten has been checked out.
 *
 * @author Simon Skrodal
 * @since October 2016
 */

var CONNECT_SUPER = (function () {

	/**
	 * Generic modal builder - will call relevant function based on data-type on link/button called.
	 */
	$('#modalSuperAdmin').on('show.bs.modal', function (event) {
		var button = $(event.relatedTarget);
		var type = button.data('type') // Extract info from data-type attribute
		// Update the modal's content according to type
		switch (type) {
			case 'orgList':
				buildOrgListing($(this));
				break;
		}
	});

	/**
	 * Fired when show() on modal for org listing is triggered.
	 *
	 * Safe to use orgList here (otherwise button to show the modal would not exist)
	 * @param $modal
	 */
	function buildOrgListing($modal) {
		$modal.find('#title').html("Registrerte orgs på tjenesten");
		$modal.find('.modal-dialog').addClass('modal-sm');
		$table = $('#orgsTable').clone();
		$table.find('tbody').html("");

		$from = UTILS.timestampMinusDays(CONNECT.defaultDaysInPeriod())
		$to = UTILS.timestampNow();

		$.each(CONNECT_UI.orgList(), function (index, orgName) {
			$table.find('tbody').append("<tr><td><button class='btn btn-link xhrTrigger' data-function='updateSelectedOrgSection' data-from='" + $from + "' data-to='" + $to + "' data-org='" + orgName + "'>" + orgName + "</button></td></tr>");
		});
		$modal.find('#body').html($table);
		$table.show();
	}



	/**
	 * Catch clicks on any .xhrTrigger class in the SuperAdmin modal
	 */
	$('#modalSuperAdmin').on('click', '.xhrTrigger', function (event) {
		var button = event.target;
		switch (button.dataset.function) {
			case 'updateSelectedOrgSection':
				CONNECT_ORG.updateSelectedOrgSection(button.dataset.from, button.dataset.to, button.dataset.org);
				$('#modalSuperAdmin').modal('hide');
				// Scroll to chart
				$('html,body').animate({
					scrollTop: $('#sectionOrgInfo').offset().top - 100
				}, 1000);
				break;
		}
	});





	return {
		tester: function () {
			// return tester();
		}
	}
})();
