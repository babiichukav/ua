// базы данных, заполняется вручную по примеру
var appAlertBuy_baza_1 = {
	// мужские имена
	men_name: ["Олександр","Андрій","Антон","Арсен","Артем","Богдан","Борис","Вадим","Валентин","Валерій","Василь","Віктор","Віталій","Володимир","Владислав","Вячеслав","Геннадій","Гліб","Григорій","Давид","Данило","Денис","Дмитро","Євген","Єгор","Іван","Ігор","Ілля","Кирило","Костянтин","Леоніди","Макар","Максим","Марк","Матвій","Михайло","Микита","Микола","Олег","Павло","Петро","Роман","Ростислав","Руслан","Сергій","Тимофій","Федір","Юрій","Ярослав",],
	// женские имена
	women_name: ["Олександра","Аліна","Аліса","Алла","Анастасія","Ангеліна","Анфіса","Богдан","Валерія","Віра","Вероніка","Вікторія","Віолета","Віта","Віталіна","Владислава","Галина","Дарина","Олена","Єлизавета","Злата","Ірина","Кіра","Христина","Лариса","Лілія","Любов","Людмила","Марина","Марія","Мілана","Надія","Наталія","Оксана","Олеся","Ольга","Поліна","Світлана","Софія","Тамара","Тетяна","Уляна","Юлія","Ярослава",],
	// города
	city_name: ["Києва","Харківа","Одеси","Дніпра","Запоріжжя","Львіва","Кривого Ріго","Миколаїва","Маріуполя","Вінниці","Херсона","Полтави","Чернігіва","Черкас","Сум","Житомира","Хмельницького","Чернівців","Кременчуга","Ужгорода","Кропивницького","Краматорська","Мелітополя",],
	// ссылки на партнеров
	url: {"CreditPlus":"https://nolimit.g2afse.com/click?offer_id=9&pid=2&sub2=UA-91398425-2&sub4=vs","Credit7":"https://nolimit.g2afse.com/click?offer_id=42&pid=2&sub2=UA-91398425-2&sub4=vs","ШвидкоГроші":"https://nolimit.g2afse.com/click?offer_id=48&pid=2&sub2=UA-91398425-2&sub4=vs","MyCredit":"https://nolimit.g2afse.com/click?pid=2&offer_id=21&sub2=UA-91398425-2&sub4=vs","Є-Гроші":"https://nolimit.g2afse.com/click?pid=2&offer_id=55&sub2=UA-91398425-2&sub4=vs","Ваша Готівочка":"https://nolimit.g2afse.com/click?pid=2&offer_id=7&sub2=UA-91398425-2&sub4=vs","Cashberry":"https://nolimit.g2afse.com/click?pid=2&offer_id=6&sub2=UA-91398425-2&sub4=vs","ForzaCredit":"https://nolimit.g2afse.com/click?pid=2&offer_id=28&sub2=UA-91398425-2&sub4=vs","KF.UA":"https://nolimit.g2afse.com/click?pid=2&offer_id=27&sub2=UA-91398425-2&sub4=vs","Ccloan":"https://nolimit.g2afse.com/click?pid=2&offer_id=3&sub2=UA-91398425-2&sub4=vs",}
}

// скрипт показа сообщений
var appAlertBuy =  {

		// настройки
		settings: {
			// слева (проценты '%' или пиксели 'px')
			left: "5%",
			// снизу (проценты '%' или пиксели 'px')
			bottom: "5%",
			// генерация случайной суммы (от, до, шаг)
			summarange: [1000, 10000, 100],
			// data картинки
			image: "data:image/png;base64,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",

		},

		// скрипт инициализации
		// заданы значения по умолчанию в мс (старт, продолжительность, интервал, повторный показ, база)
		init: function(start=5000, duration = 8000, interval = 12000, restart=30000, baza=appAlertBuy_baza_1)	{
			 this.settings.start = start;
			 this.settings.duration = duration;
			 this.settings.interval = interval;
			 this.settings.restart = restart;
			 this.settings.baza = baza;
			 let elem = document.createElement("div");
			 elem.obj = this;
			 elem.className = "alertbuywindow";
			 elem.style.position = "fixed";
			 elem.style.display = "flex";
			 elem.style.alignItems = "center"
			 elem.style.left = this.settings.left;
			 elem.style.bottom = this.settings.bottom;
			 elem.style.zIndex = 999;
			 elem.style.fontSize = "16px";
			 elem.style.borderRadius = "5px";
			 elem.style.padding = "10px 15px";
			 elem.style.boxShadow = " 3px 2px 10px 1px rgba(45,45,45,.2)";
			 elem.style.backgroundColor = "rgb(245, 248, 251)";
			 elem.style.cursor = "pointer";
			 elem.style.visibility = "hidden";
			 elem.style.opacity = 0;
			 elem.style.transition = "opacity 0.3s";
			 this.settings.elem = elem;
			 document.body.appendChild(elem);
			 setTimeout(()=>this.show(), start);
		},

		generate: function() {
			let baza = this.settings.baza;
			let temp, AA, ZZ, XX, YY, QQ;
			if (Math.random()>0.5) {temp = baza.men_name; AA = "в"} else {temp = baza.women_name; AA = "ла"}
			XX = temp[Math.floor(Math.random() / (1 / temp.length))];
			YY = baza.city_name[Math.floor(Math.random() / (1 / baza.city_name.length))];
			QQ = Object.keys(baza.url)[Math.floor(Math.random() / (1 / Object.keys(baza.url).length))];
			ZZ = this.settings.summarange[0] + this.settings.summarange[2] * Math.floor(Math.random() / (1 / ((this.settings.summarange[1] - this.settings.summarange[0]) / this.settings.summarange[2] + 1)));
			this.settings.elem.innerHTML = "<b onclick='this.parentNode.obj.hide(this.parentNode.obj); event.stopPropagation()' style='position: absolute; top: 5px; right: 5px; font-size: 10px; color: gray; padding: 3px'>🞩</b><img style='display: inline-block; height: 50px; margin-right: 15px;' src='"+this.settings.image+"'><div><b class='alerttitle'>Видано новий кредит<br></b><span style='font-size: 90%'>"+XX+" із "+YY+" щойно<br> отрима"+AA+" <span class='alertcredit'>кредит</span> "+ZZ+" грн від <b>"+QQ+"</b></span></div>";
			this.settings.elem.onclick = function() {window.open(baza.url[QQ]); clearTimeout(this.timer); this.obj.hide("restart")}
		},

		hide: function(restart) {
			this.settings.elem.style.opacity = 0;
			setTimeout(()=>this.settings.elem.style.visibility = "hidden", 300);
			if (restart) setTimeout(()=>this.show(), this.settings.restart);
			else setTimeout(()=>this.show(), this.settings.interval);
		},

		show: function() {
			if ("destroy" in this.settings) return;
			this.generate();
			this.settings.elem.style.opacity = 1;
			this.settings.elem.style.visibility = "visible";
			this.settings.elem.timer = setTimeout(()=>this.hide(), this.settings.duration);
		},

		stop: function() {
			clearTimeout(this.settings.elem.timer);
			this.settings.destroy = 1;
			document.body.removeChild(this.settings.elem);
		}
}