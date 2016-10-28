/**
 * Functions in here are fired AFTER Dataporten has been checked out.
 *
 * @author Simon Skrodal
 * @since October 2016
 */

var CONNECT_GLOBAL = (function () {

	var globalChart = null;
	var globalStatsData = null;



	/**
	 * Datepicker: Initialise (range)
	 */
	$('#sectionGlobalInfo .input-daterange ').datepicker({
		format: "dd.mm.yyyy",
		weekStart: 1,
		startDate: "01-01-2012",
		endDate: moment().format('DD-MM-YYYY'),
		maxViewMode: 2,
		language: "nb",
		autoclose: true
	});

	/**
	 * Datepicker: When FROM date changed
	 */
	$('.globalPeriodFrom').datepicker()
		.on('changeDate', function(e) {
			$('.globalStatsPeriodDays').html(Math.abs(moment($('.globalPeriodFrom').datepicker('getDate')).diff(moment($('.globalPeriodTo').datepicker('getDate')), 'days')) + 1);
			$('#btnUpdateGlobalPeriod').removeClass('disabled');
		});
	/**
	 * Datepicker: When TO date changed
	 */
	$('.globalPeriodTo').datepicker()
		.on('changeDate', function(e) {
			$('.globalStatsPeriodDays').html(Math.abs(moment($('.globalPeriodFrom').datepicker('getDate')).diff(moment($('.globalPeriodTo').datepicker('getDate')), 'days')) + 1);
			$('#btnUpdateGlobalPeriod').removeClass('disabled');
		});

	/**
	 * Datepicker: When update button clicked
	 */
	$('#btnUpdateGlobalPeriod').on('click', function (){
		$('#btnUpdateGlobalPeriod').addClass('disabled');
		var from = moment($('.globalPeriodFrom').datepicker('getDate')).unix();
		var to = moment($('.globalPeriodTo').datepicker('getDate')).unix();
		// Update chart and stats
		updateGlobalSection(from, to);
	});

	/**
	 *
	 * @param from
	 * @param to
	 */
	function updateGlobalSection(from, to) {
		$('#sectionGlobalInfo').find('.ajax').show();
		$('.globalStatsPeriodDays').html(Math.abs(moment.unix(from).diff(moment.unix(to), 'days')));
		$('.globalPeriodFrom').datepicker('setDate', moment.unix(from).format('DD.MM.YYYY'));
		$('.globalPeriodTo').datepicker('setDate', moment.unix(to).format('DD.MM.YYYY'));
		$('#btnUpdateGlobalPeriod').addClass('disabled');

		// Main source of data - get lots of info about GLOBAL usage within a certain time frame.
		$.when(CONNECT.meetingsStatsInPeriodXHR(from, to)).done(function (response) {
			globalStatsData = response;
			// console.log(response);
			$('.globalUserCountPeriod').html(response.summary.users);
			$('.globalRoomCountPeriod').html(response.summary.rooms);
			$('.globalSessionCountPeriod').html(response.summary.sessions);
			$('.globalMeetingMinutesPeriod').html(UTILS.secToTimeAndDays(response.summary.duration_sec));
			buildChartGlobalMeetingStatsPeriod(response);
			$('#sectionGlobalInfo').find('.ajax').fadeOut();
		});
	}

	function buildChartGlobalMeetingStatsPeriod(response) {
		// Destroy potentially existing chart
		if (globalChart) {
			globalChart.clear();
			globalChart.destroy();
		}
		// Chart canvas
		var globalOrgChartCanvas = $("#globalChart");
		// Datasets
		var roomsData = [], usersData = [], sessionsData = [], durationData = [], dateLabels = [];
		$.each(response.daily, function (date, dayObj) {
			roomsData.push(dayObj.rooms);
			usersData.push(dayObj.users);
			sessionsData.push(dayObj.sessions);
			durationData.push(dayObj.duration_sec);
			// Add date and duration as label
			dateLabels.push([date, UTILS.secToTimeAndDays(dayObj.duration_sec)]);
		});

		var globalChartData = {
			type: 'bar',
			data: {
				labels: dateLabels,
				datasets: [
					{
						type: 'line',
						data: usersData,
						label: "Brukere",

						backgroundColor: 'rgba(131, 191, 247, 0.2)',
						borderColor: 'rgba(95, 135, 173, 0.8)',
						borderWidth: 1
					},
					{
						type: 'line',
						data: roomsData,
						label: "Møterom",

						backgroundColor: 'rgba(112, 252, 65, 0.2)',
						borderColor: 'rgba(88, 188, 54, 0.8)',
						borderWidth: 1
					},
					{
						type: 'bar',
						data: sessionsData,
						label: "Sesjoner",

						backgroundColor: 'rgba(226, 226, 226, 0.3)',
						borderColor: 'rgba(188, 188, 188, 0.4)',
						borderWidth: 1
					}
				]
			}//,
			//options: CONFIG.lineChartOptions()
		};
		// This will get the first returned node in the jQuery collection.
		globalChart = new Chart(globalOrgChartCanvas, globalChartData);
	}

	return {
		updateGlobalSection: function (from, to) {
			updateGlobalSection(from, to);
		},
		globalStatsData: function () {
			return globalStatsData;
		}
	}
})();
