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
	});

	var lineChartOptions = {
		//Boolean - If we should show the scale at all
		showScale: true,
		//Boolean - Whether grid lines are shown across the chart
		scaleShowGridLines: false,
		//String - Colour of the grid lines
		scaleGridLineColor: "rgba(0,0,0,.05)",
		//Number - Width of the grid lines
		scaleGridLineWidth: 1,
		//Boolean - Whether to show horizontal lines (except X axis)
		scaleShowHorizontalLines: true,
		//Boolean - Whether to show vertical lines (except Y axis)
		scaleShowVerticalLines: true,
		//Boolean - Whether the line is curved between points
		bezierCurve: true,
		//Number - Tension of the bezier curve between points
		bezierCurveTension: 0.3,
		//Boolean - Whether to show a dot for each point
		pointDot: false,
		//Number - Radius of each point dot in pixels
		pointDotRadius: 4,
		//Number - Pixel width of point dot stroke
		pointDotStrokeWidth: 1,
		//Number - amount extra to add to the radius to cater for hit detection outside the drawn point
		pointHitDetectionRadius: 20,
		//Boolean - Whether to show a stroke for datasets
		datasetStroke: true,
		//Number - Pixel width of dataset stroke
		datasetStrokeWidth: 2,
		//Boolean - Whether to fill the dataset with a color
		datasetFill: true,
		//String - A legend template
		legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].lineColor%>\"></span><%=datasets[i].label%></li><%}%></ul>",
		//Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
		maintainAspectRatio: true,
		//Boolean - whether to make the chart responsive to window resizing
		responsive: true
	};



	return {
		CONNECT_SERVICE_URL: function () {
			return CONNECT_SERVICE_URL;
		},
		CONNECT_SUPPORT_EMAIL: function () {
			return CONNECT_SUPPORT_EMAIL;
		},
		lineChartOptions: function () {
			return lineChartOptions;
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