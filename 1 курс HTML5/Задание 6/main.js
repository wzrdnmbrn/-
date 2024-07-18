window.onload = function(){
	var input = document.getElementById("input"),
		button = document.getElementById("but"),
		result = document.getElementById("res");
	button.addEventListener('click', function(){
		button.style.backgroundColor = "white";
		if (input.value == "Сычугова"){
		result.innerHTML = "Фамилия";
		}
		else if (input.value == "Екатерина"){
		result.innerHTML = "Имя";
		}
		else if (input.value == "Алексеевна"){
		result.innerHTML = "Отчество";
		}
		else {
			button.style.backgroundColor = "red";
		}
	});
	input.value = "";
	
}