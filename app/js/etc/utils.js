/**
 * Helpers.
 */

var UTILS = (function () {
	// Constants
	var GB_to_TB = 0.001; // Used in MiB_to_GB to GB_to_TB conversion
	var MiB_to_GB = 0.001048576; // From MiB to MiB_to_GB
	var MiB_to_MB = 1.048576; // From Mib to MiB_to_MB

	function alertError(title, message) {
		$('#modalErrorAlert').find('#title').html(title);
		$('#modalErrorAlert').find('#message').html(message);
		$('#modalErrorAlert').modal('show');
	}
	function alertInfo(title, message) {
		$('#modalInfoAlert').find('#title').html(title);
		$('#modalInfoAlert').find('#message').html(message);
		$('#modalInfoAlert').modal('show');
	}

	function timestampNow(){
		return moment().unix();
	}

	function timestampMinusDays(days){
		return moment().subtract(days, 'days').unix();
	}


	function secToTime(totalSec) {
		var hours = parseInt(totalSec / 3600);
		var minutes = parseInt(totalSec / 60) % 60;
		var seconds = (totalSec % 60).toFixed();
		return two(hours) + ":" + two(minutes) + ":" + two(seconds);

	}
	function two(x) {
		return ((x > 9) ? "" : "0") + x
	}

	function secToTimeAndDays(seconds) {
		var numdays = Math.floor(seconds / 86400);
		var numhours = Math.floor((seconds % 86400) / 3600);
		var numminutes = Math.floor(((seconds % 86400) % 3600) / 60);
		var numseconds = ((seconds % 86400) % 3600) % 60;

		if (numdays > 0) {
			numdays = numdays + (numdays > 1 ? " dager " : " dag ");
		} else {
			numdays = "";
		}

		return numdays + numhours + "t " + numminutes + "m " + numseconds + "s";
	}

	function isNumber(n) {
		return !isNaN(parseFloat(n)) && isFinite(n);
	}
	
	/**
	 * Make the users JSON object more palatable for DataTables
	 * @param dataObject
	 * @returns {Array}
	 */
	function convertDataTablesData(dataObject) {
		var dataArray = [];
		$.each(dataObject, function (idx, obj) {
			dataArray.push($.extend(obj, {name: idx}));
		});
		return dataArray;
	}

	/*** Expose public functions ***/
	return {
		alertError: function (title, message) {
			alertError(title, message);
		},
		alertInfo: function (title, message){
			alertInfo(title, message);
		},
		secToTime: function (totalSec) {
			return secToTime(totalSec);
		},
		secToTimeAndDays: function (totalSec) {
			return secToTimeAndDays(totalSec);
		},
		two: function (x) {
			return two(x);
		},
		isNumber: function(n){
			return isNumber(n);
		},
		convertDataTablesData : function(dataObject){
			return convertDataTablesData(dataObject);
		},
		timestamp2date : function (timestamp) {
			var date = new Date(timestamp * 1000);
			return  UTILS.two(date.getUTCDate()) + '. ' + UTILS.months_short(date.getUTCMonth()) + ' ' + date.getUTCFullYear();
		},

		timestampNow: function () {
			return timestampNow();
		},
		timestampMinusDays: function (days) {
			return timestampMinusDays(days);
		}
	}
})();

