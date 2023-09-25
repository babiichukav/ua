window.addEventListener("DOMContentLoaded", function() {
let get = "";
["gclid","utm_term"].forEach(function(v) {
	let m;
	if (Array.isArray(m = window.location.href.match(new RegExp(v+"=(.*?)(&|$)"))))
		get += "&"+v+"="+m[1];
});
window.history.pushState({action: "fake"}, null);
window.history.pushState({action: "fake"}, null);
window.addEventListener('popstate', 
						function(e) {
							if ((e.state) && (e.state.action=="fake")) {
								window.history.pushState({action: "google"}, null);
								window.location.assign("/google?f=new"+get);
							}
							});
});
