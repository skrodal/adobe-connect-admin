/**
 * app.js will fire functions in here AFTER Dataporten has been checked out.
 *
 * @author Simon Skrodal
 * @since October 2016
 */

var CONNECT_GLOBAL = (function () {

	var globalChart = null;

	$('#sectionGlobalInfo .btnChangePeriod').datepicker({
		format: "dd.mm.yyyy",
		weekStart: 1,
		startDate: "01-01-2012",
		maxViewMode: 2,
		language: "nb",
		autoclose: true
	});


	/**
	 *
	 * @param from
	 * @param to
	 */
	function updateGlobalSection(from, to) {
		$('#sectionGlobalInfo').find('.ajax').show();
		// TODO: Consider making `to` == from + 7 days.
		// Main source of data - get lots of info about GLOBAL usage within a certain time frame.
		$.when(CONNECT.meetingsStatsInPeriodXHR(from, to)).done(function (response) {
			$('.globalUserCountPeriod').html(response.summary.users);
			$('.globalRoomCountPeriod').html(response.summary.rooms);
			$('.globalSessionCountPeriod').html(response.summary.sessions);
			$('.globalMeetingMinutesPeriod').html(UTILS.secToTimeAndDays(response.summary.duration_sec));
			console.log(response);
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
		tester: function () {
			// return tester();
		}
	}
})();
