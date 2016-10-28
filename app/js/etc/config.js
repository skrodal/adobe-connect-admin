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
		new Clipboard('.btn');


		/**
		 * Fix date sorting indatatables
		 */
		(function (factory) {
			if (typeof define === "function" && define.amd) {
				define(["jquery", "moment", "datatables"], factory);
			} else {
				factory(jQuery, moment);
			}
		}(function ($, moment) {
			$.fn.dataTable.moment = function (format, locale) {
				var types = $.fn.dataTable.ext.type;
				types.detect.unshift(function (d) {
					if (d && d.replace) {
						d = d.replace(/<.*?>/g, '');
					}
					// Null and empty values are acceptable
					if (d === '' || d === null) {
						return 'moment-' + format;
					}
					return moment(d, format, locale, true).isValid() ?
					'moment-' + format :
						null;
				});
				types.order['moment-' + format + '-pre'] = function (d) {
					if (d && d.replace) {
						d = d.replace(/<.*?>/g, '');
					}
					return d === '' || d === null ?
						-Infinity :
						parseInt(moment(d, format, locale, true).format('x'), 10);
				};
			};
		}));
		$.fn.dataTable.moment('DD.MM.YYYY');
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