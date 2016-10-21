/**
 * Edit URLs/emails here.
 *
 */

var CONFIG = (function () {

	var CONNECT_SERVICE_URL = 'https://connect.uninett.no/';
	var CONNECT_SUPPORT_EMAIL = '<a href="mailto:kontakt@uninett.no">kontakt@uninett.no</a>';

	(function () {
		// Charts.js global config
		//Chart.defaults.global.responsive = true;
	})()

	$(document).ready(function () {

	});

	return {
		CONNECT_SERVICE_URL: function () {
			return CONNECT_SERVICE_URL;
		},
		CONNECT_SUPPORT_EMAIL: function () {
			return CONNECT_SUPPORT_EMAIL;
		},
		DATATABLES_LANGUAGE: function () {
			return {
				emptyTable: "Ingen informasjon tilgjengelig",
				info: "Viser _START_ til _END_ av _TOTAL_ innslag",
				infoEmpty: "Viser 0 til 0 av 0 innslag",
				infoFiltered: "(filtrert fra totalt _MAX_ innslag)",
				infoPostFix: "",
				thousands: ",",
				lengthMenu: "Vis _MENU_ innslag per side",
				loadingRecords: "Henter...",
				processing: "Vennligst vent...",
				search: "Søk: ",
				zeroRecords: "Fant ingen innslag",
				paginate: {
					first: 'F&oslash;rste',
					previous: '&larr;',
					next: '&rarr;',
					last: 'Siste'
				}
			}
		}
	}

})();