let	fortune = [
	"Пока у тебя нет цели, и шансов на победу нет",
	"Не позволяй никому стоять на твоем пути к счастью.",
	"Через 4 месяца и 5 дней событие изменит твою жизнь.",
	"Тебе предстоит рассмотреть неожиданное предложение",
	"В скором времени ждите карьерного взлета",
	"Скоро появится возможность, которой следует воспользоваться. Дерзай!"
];

var rand;

var EE_Counter = 0;

function generate(){
	rand = Math.floor(Math.random() * (5 - 0) + 0);
	document.getElementById("fortune").style["color"] = "white";
	document.getElementById("fortune").innerHTML = fortune[rand];
	document.getElementById("fortune").style["color"] = "black";
}

function easter_egg(){
	EE_Counter = EE_Counter + 1;
		if(EE_Counter >= 10)
	{
		document.getElementById("fortune").style["color"] = "white";
	document.getElementById("fortune").innerHTML = "Хватит тыкать )";
	document.getElementById("fortune").style["color"] = "black";
	EE_Counter = 0;
	}
}