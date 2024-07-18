window.onload = function(){
	var input = document.getElementById("input"),
		button = document.getElementById("but"),
		god = document.getElementById("123");
		happy = document.getElementById("happy"),
		saddy = document.getElementById("saddy"),
		twink = document.getElementById("twink"),
		notgd = document.getElementById("notgd"),
		nosee = document.getElementById("nosee"),
		AAAAA = document.getElementById("AAAAA"),
		kolya = document.getElementById("kolya"),
		ahahh = document.getElementById("ahahh"),
		valer = document.getElementById("valer"),
		slava = document.getElementById("slava"),
		oo_oo = document.getElementById("oo_oo"),
		meeee = document.getElementById("meeee"),
		eyebr = document.getElementById("eyebr"),
		anyaa = document.getElementById("anyaa"),
		santa = document.getElementById("santa"),
		facee = document.getElementById("facee"),
		kpop  = document.getElementById("k-pop"),
		bearr = document.getElementById("bearr"),
		hlepp = document.getElementById("hlepp"),
		rosee = document.getElementById("rosee"),
		trusa = document.getElementById("trusa");
	button.addEventListener('click', function(){
		button.style.backgroundColor = "white";
		switch (input.value.trim()){
			case ':-)'  : happy.style.backgroundColor = "yellow"; break;		
			case ':-('  : saddy.style.backgroundColor = "yellow"; break;
			case ';-)'  : twink.style.backgroundColor = "yellow"; break;
			case ':-I'  : notgd.style.backgroundColor = "yellow"; break;
			case ':-q'  : nosee.style.backgroundColor = "yellow"; break;
			case ':-@'  : AAAAA.style.backgroundColor = "yellow"; break;
			case ':-Q'  : kolya.style.backgroundColor = "yellow"; break;
			case ':-D'  : ahahh.style.backgroundColor = "yellow"; break;
			case ':-?'  : valer.style.backgroundColor = "yellow"; break;
			case '%-)'  : slava.style.backgroundColor = "yellow"; break;
			case '8-)'  : oo_oo.style.backgroundColor = "yellow"; break;
			case 'B-)'  : meeee.style.backgroundColor = "yellow"; break;
			case '}:-)' : eyebr.style.backgroundColor = "yellow"; break;
			case 'O:-)' : anyaa.style.backgroundColor = "yellow"; break;
			case '*<:-)': santa.style.backgroundColor = "yellow"; break;
			case '[:-)' : facee.style.backgroundColor = "yellow"; break;
			case '<|-)' : kpop.style.backgroundColor =  "yellow";  break;
			case ':o)' : bearr.style.backgroundColor = "yellow"; break;
			case '&:-)' : hlepp.style.backgroundColor = "yellow"; break;
			case '@>-`-,-`--': rosee.style.backgroundColor = "yellow"; break; 
			case '~:-('	:   trusa.style.backgroundColor = "yellow"; break;
			default : button.style.backgroundColor = "red";
					god.style.backgroundColor = "white";
					break;
		}
	});
	
	
}