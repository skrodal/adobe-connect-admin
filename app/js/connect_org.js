/**
 * Functions in here are fired AFTER Dataporten has been checked out.
 *
 * @author Simon Skrodal
 * @since October 2016
 */

var CONNECT_ORG = (function () {
	var selectedOrgChart = null;
	var selectedOrgStatsData = null;

	/**
	 * Datepicker: Initialise (range)
	 */
	$('#sectionOrgInfo .input-daterange ').datepicker({
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
	$('.orgPeriodFrom').datepicker()
		.on('changeDate', function (e) {
			$('.orgStatsPeriodDays').html(Math.abs(moment($('.orgPeriodFrom').datepicker('getDate')).diff(moment($('.orgPeriodTo').datepicker('getDate')), 'days')) + 1);
			$('#btnUpdateOrgPeriod').removeClass('disabled');
		});
	/**
	 * Datepicker: When TO date changed
	 */
	$('.orgPeriodTo').datepicker()
		.on('changeDate', function (e) {
			$('.orgStatsPeriodDays').html(Math.abs(moment($('.orgPeriodFrom').datepicker('getDate')).diff(moment($('.orgPeriodTo').datepicker('getDate')), 'days')) + 1);
			$('#btnUpdateOrgPeriod').removeClass('disabled');
		});

	/**
	 * Datepicker: When update button clicked
	 */
	$('#btnUpdateOrgPeriod').on('click', function () {
		if (!$('#btnUpdateOrgPeriod').hasClass('disabled')) {
			$('#btnUpdateOrgPeriod').addClass('disabled');
			var from = moment($('.orgPeriodFrom').datepicker('getDate')).unix();
			var to = moment($('.orgPeriodTo').datepicker('getDate')).unix();
			// Update chart and stats
			updateSelectedOrgSection(from, to, selectedOrgStatsData.requested_org);
		} else {
			$('.orgPeriodRangeInput').addClass('pulsate');
			setTimeout(function(){ $('.orgPeriodRangeInput').removeClass('pulsate'); }, 1000);
		}
	});


	/**
	 * If SuperAdmin, org can be anything. If logged on user is not SuperAdmin, API will ignore `org` and
	 * return data for user's home org.
	 *
	 * @param from
	 * @param to
	 * @param org
	 */
	function updateSelectedOrgSection(from, to, org) {
		$('#sectionOrgInfo').find('.ajax').show();
		$('.selectedOrg').html(org);
		$('.orgStatsPeriodDays').html(Math.abs(moment.unix(from).diff(moment.unix(to), 'days')));
		$('.orgPeriodFrom').datepicker('setDate', moment.unix(from).format('DD.MM.YYYY'));
		$('.orgPeriodTo').datepicker('setDate', moment.unix(to).format('DD.MM.YYYY'));
		$('#btnUpdateOrgPeriod').addClass('disabled');
		// Main source of data - get lots of info about ORG usage within a certain time frame.
		$.when(CONNECT.meetingsStatsInPeriodForOrgXHR(from, to, org)).done(function (response) {
			// console.log(response);
			// Store data for currently selected org
			selectedOrgStatsData = response;
			$('.selectedOrgUserCountPeriod').html(response.summary.users);
			$('.selectedOrgRoomCountPeriod').html(response.summary.rooms);
			$('.selectedOrgSessionCountPeriod').html(response.summary.sessions);
			$('.selectedOrgMeetingMinutesPeriod').html(UTILS.secToTimeAndDays(response.summary.duration_sec));
			buildChartMeetingStatsPeriod(response);
			// Calculate this org's percentage of users
			$.when(CONNECT.usersOrgCountXHR(org)).done(function (response) {
				$('.selectedOrgUserCount').html(response);
				var percentage = parseInt(response) * 100 / parseInt($('.usersCount').html());
				$('.selectedOrgUserCountPercentage').css('width', percentage + '%');
			});

			$('#sectionOrgInfo').find('.ajax').fadeOut();
		});
	}

	function buildChartMeetingStatsPeriod(response) {
		// Destroy potentially existing chart
		if (selectedOrgChart) {
			selectedOrgChart.clear();
			selectedOrgChart.destroy();
		}
		// Chart canvas
		var selectedOrgChartCanvas = $("#selectedOrgChart");
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

		var selectedOrgChartData = {
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
		selectedOrgChart = new Chart(selectedOrgChartCanvas, selectedOrgChartData);
	}

	return {
		updateSelectedOrgSection: function (from, to, org) {
			updateSelectedOrgSection(from, to, org);
		},
		selectedOrg: function () {
			return selectedOrgStatsData.requested_org;
		},
		selectedOrgStatsData: function () {
			return selectedOrgStatsData;
		}
	}
})();
