document.addEventListener("DOMContentLoaded", function() {		
	
	$('A[href*="offer_id"]').on("click", VisitorJS.offer_goal);
	VisitorJS.href_mod_param("jschk=1");
	VisitorJS.check_visitor();
	VisitorJS.wss();
});

window.addEventListener('beforeunload', function () {
	$.post(
	"https://"+VisitorJS.server_name+'/visitors/ajax.php',
	{
	 command: "last",
	 visitor_id: VisitorJS.visitor_id,
 	 domain: VisitorJS.domain,
	 base: VisitorJS.base,
	});
});

var VisitorJS = {
	
	server_name: "banka.credit",
	source: "",
	visit: "",
	partner: 0,
	socket: 0,
	
	check_visitor: function() {
		
		$.post(
				"https://"+VisitorJS.server_name+'/visitors/ajax.php',
				{
				 command: "check",
				 visitor_id: VisitorJS.visitor_id,
				 page: VisitorJS.page,
				 domain: VisitorJS.domain,
				 base: VisitorJS.base,
				 source: VisitorJS.source,
				 visit: VisitorJS.visit,
				 utm_source: ((("utm_source" in VisitorJS)&&(VisitorJS.cookie_domain)) ? VisitorJS.utm_source: ""),
				 partner: (("reg_user" in VisitorJS._get) ? VisitorJS.partner: ""),				
				 sub1: ((("sub1" in VisitorJS._get)&&("sub7" in VisitorJS._get)) ? VisitorJS._get["sub1"]: ""),
				 alfa: (("alfa" in VisitorJS._get) ? VisitorJS._get["alfa"]: ""),				 
				 },
				(result) => {
					if (result && typeof (result = JSON.parse(result)) === 'object' &&
						!Array.isArray(result) && result !== null && ("check" in result)) {							
						console.log(result);
							
						if (!result["check"]) {
							let date = new Date(Date.now()-3600);
							document.cookie = "visitor_id=; path=/; expires=" + date.toUTCString();
							document.cookie = "full_id=; path=/; expires=" + date.toUTCString();
							return;
						}
						
						if (!("full_id" in result)) {
							let date = new Date(Date.now()-3600);
							document.cookie = "full_id=; path=/; expires=" + date.toUTCString();
						}
						
						if (VisitorJS.visitor_id != result.id) {
							VisitorJS.visitor_id = result.id;
							let date = new Date(Date.now() + 86400*1000*((("full_id" in result) || (VisitorJS.cookie_domain))?30:7));
							document.cookie = "visitor_id="+VisitorJS.visitor_id+"; path=/; expires=" + date.toUTCString();
							if ("full_id" in result)
								document.cookie = "full_id=1; path=/; expires=" + date.toUTCString();
							VisitorJS.href_mod_param("sub7="+VisitorJS.visitor_id);
						}
						
						if ("utm_source" in result) {					
							//let date = new Date(Date.now() + 86400*1000*30);
							//document.cookie = "utm_source="+result["utm_source"]+"; path=/; expires=" + date.toUTCString();
							VisitorJS.href_mod_param("sub8="+result["utm_source"]);
						}
					}				

				});
	},

	
	offer_goal: function(e, href) {
		var a = this;
		if (href)
			window.open(href);
		else
			href = this.href;
		
		if (a.href.indexOf("&adblock=1") == -1)
			setTimeout(function() {a.href += "&adblock=1"}, 500);
		e.stopPropagation();
		
		if ((0) && ($(this).data("used")!==1)) {
			$(this).data("used", 1);
			let offer_id = href.match(new RegExp("offer_id=(.+?)(&|$)"));
			if (!Array.isArray(offer_id)) return;
			
			let params = {};					
			["sub1","sub2","sub3","sub4","aff_sub4","promo","sub5","sub6","sub7","sub8"].forEach(function(i) {
				 if ((["aff_sub4","promo"].indexOf(i)!=-1) && ("sub4" in params)) return;
				 
				 let matches = href.match(new RegExp(i+"=(.*?)(&|$)"));
				 if (Array.isArray(matches))
					params[i] = matches[1];
					
			});
			
			$.post(
				"https://"+VisitorJS.server_name+'/visitors/ajax.php',
				{
				 command: "offer",
				 visitor_id: VisitorJS.visitor_id,
				 offer_id: offer_id[1],
				 domain: VisitorJS.domain,
				 base: VisitorJS.base,
				 visit: VisitorJS.visit,
				 time: VisitorJS.time,
				 params: JSON.stringify(params)
				}				
			);
		}		
	},
	
	href_mod_param: function(param) {
		
		param.split("&").forEach(function(m) {
			let data = m.split("=");
			if ((data.length==2) && (data[0]) && (data[1])) {
				[].forEach.call(
					document.querySelectorAll('A[href*="offer_id"]'), function(e, i) {
						
						if (e.href.indexOf(data[0]) != -1)
							e.href = e.href.replace(new RegExp(data[0]+".*?(&|$)"), data.join("=")+"$1");
						else
							e.href += "&"+data.join("=");
				});				
			}
		});	
	},
	
	wss: function() {
		VisitorJS.socket = new WebSocket("wss://money.co.ua:2799");

		VisitorJS.socket.onopen = function(e) {
			VisitorJS.socket.send(JSON.stringify({action: "domain", domain: VisitorJS.domain, hash: VisitorJS.domain_hash}));
		};
	},
}