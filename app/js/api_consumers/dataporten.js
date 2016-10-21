/**
 * API Consumer for Dataporten.
 *
 * @author Simon Skrodal
 * @since August 2015
 */

var DATAPORTEN = (function () {
	// userinfo/groups/role
	var USER = {};

	// Autorun
	var XHR_USER = _getUserInfoXHR(),
		XHR_GROUPS = _getUserGroupsXHR();
		XHR_USER_SERVICE_ACCESS = _getUserServiceAccessXHR();


	(function () {
		$.when(XHR_USER_SERVICE_ACCESS).done(function (accessObj) {
			$.extend(true, USER, accessObj);
		});
		$.when(XHR_USER).done(function (userObj) {
			// Merge returned object with USER
			$.extend(true, USER, userObj);
		});
		$.when(XHR_GROUPS).done(function (groupsObj) {
			// Merge returned object with USER
			$.extend(true, USER, groupsObj);
		});
	})();


	/**
	 * From Dataporten's userinfo API
	 * @returns {*}
	 * @private
	 */
	function _getUserInfoXHR() {
		return DP_AUTH.jso().ajax({
			url: DP_AUTH.config().dp_endpoints.userinfo,
			dataType: 'json'
		}).pipe(function (userData) {
			var user = userData.user;
			var userObj = {};
			userObj.org = {};

			if (user.userid_sec.length == 0 || user.userid_sec[0].indexOf('feide:') == -1) {
				UTILS.alertError("Brukerinfo", "Tjenesten krever pålogging med Feide. Fant ikke ditt Feide brukernavn.");
				return false;
			}

			var username = user.userid_sec[0].split('feide:')[1].toLowerCase();
			var org = username.split('@')[1];

			userObj.id = user.userid;
			userObj.username = username;
			userObj.name = {
				full: user.name,
				first: user.name.split(' ')[0]
			};
			userObj.email = user.email;
			userObj.photo = DP_AUTH.config().dp_endpoints.photo + user.profilephoto;
			userObj.org.id = org;
			userObj.org.shortname = org.split('.')[0];
			return userObj;
		}).fail(function (jqXHR, textStatus, error) {});
	}

	/**
	 * From Dataporten's Groups API
	 *
	 * Populate USER object with group info, mostly interested in EduPersonAffiliation...
	 *
	 * @returns {*}
	 * @private
	 */
	function _getUserGroupsXHR() {
		return DP_AUTH.jso().ajax({
			url: DP_AUTH.config().dp_endpoints.groups + 'me/groups',
			dataType: 'json'
		}).pipe(function (groupsData) {
			var groupsArr = groupsData;
			var groupsObj = {};
			groupsObj.affiliation = null;
			groupsObj.org = {};
			groupsObj.org.name = null;
			console.log(groupsData);
			if (groupsArr.length === 0) {
				UTILS.alertError("Mangler rettigheter", "Du har dessverre ikke tilgang til denne tjenesten (fikk ikke tak i din tilhørighet)");
				return false;
			} else {
				$.each(groupsArr, function (index, group) {
					if (group.orgType !== undefined && group.type !== undefined) {
						// Access only for users belonging to an organisation group (need not be Higher Ed for this service)
						if (group.type.toUpperCase() === "FC:ORG") {
							// Beware - according to docs, should return a string, not array - reported and may change
							groupsObj.affiliation = group.membership.primaryAffiliation; // https://www.feide.no/attribute/edupersonprimaryaffiliation
							if (groupsObj.affiliation instanceof Array) { groupsObj.affiliation = groupsObj.affiliation[0]; }
							groupsObj.affiliation = groupsObj.affiliation.toLowerCase();
							groupsObj.org.name = group.displayName;
							// Done - exit loop.
							return true;
						}
					}
				});
			}
			return groupsObj;
		}).fail(function (jqXHR, textStatus, error) {});
	}

	function _getUserServiceAccessXHR() {
		return DP_AUTH.jso().ajax({
			url: DP_AUTH.config().api_endpoints.adobeconnect + "service/access/",
			datatype: 'json'
		})
			.pipe(function (response) {
				return response.data;
			})
			.fail(function (jqXHR, textStatus, error) {});
	}

	/*** Expose public functions ***/
	return {
		readyUserXHR: function () {
			return XHR_USER;
		},
		readyGroupsXHR: function () {
			return XHR_GROUPS;
		},
		readyUserServiceAccessXHR: function () {
			return XHR_USER_SERVICE_ACCESS;
		},
		user: function () {
			return USER;
		},
		affiliation: function () {
			return USER.affiliation.toLowerCase();
		}
	}
})();
