// MIT License
// Copyright (c) 2020 Luis Espino

function reflex_agent(location, state) {
	if (state == "DIRTY") return "CLEAN";
	else if (location == "A") return "RIGHT";
	else if (location == "B") return "LEFT";
}

var visitados = []

function test(states) {
	if (visitados.includes(1) && visitados.includes(2) && visitados.includes(3) && visitados.includes(4) && visitados.includes(5) && visitados.includes(6) && visitados.includes(7) && visitados.includes(8)) {
		document.getElementById("log").innerHTML += "<br>Se visitaron todos los estados";
		return;
	}
	var actual = estado(states[0], states[1], states[2]);
	document.getElementById("log").innerHTML += "<br>Estado visitado: ".concat(actual);
	if (actual == 7 || actual == 8) {
		if (!(visitados.includes(1) && visitados.includes(2) && visitados.includes(3) && visitados.includes(4) && visitados.includes(5) && visitados.includes(6))) {
			if (!visitados.includes(2)) {
				states[0] = "B";
				states[1] = "DIRTY";
				states[2] = "DIRTY";
			}
			return test(states);
		}
	}
	visitados.push(actual)
	console.log(visitados)
	var location = states[0];
	var state = states[0] == "A" ? states[1] : states[2];
	var action_result = reflex_agent(location, state);
	document.getElementById("log").innerHTML += "<br>Location: ".concat(location).concat(" | Action: ").concat(action_result);
	if (action_result == "CLEAN") {
		if (location == "A") states[1] = "CLEAN";
		else if (location == "B") states[2] = "CLEAN";
	}
	else if (action_result == "RIGHT") states[0] = "B";
	else if (action_result == "LEFT") states[0] = "A";
	setTimeout(function () { test(states); }, 2000);
}

function estado(ubicacion, estado1, estado2) {
	if (ubicacion == "A") {
		if (estado1 == "DIRTY") {
			if (estado2 == "DIRTY") {
				return 1;
			} else {
				return 3;
			}
		} else {
			if (estado2 == "DIRTY") {
				return 5;
			} else {
				return 7;
			}
		}
	} else {
		if (estado1 == "DIRTY") {
			if (estado2 == "DIRTY") {
				return 2;
			} else {
				return 4;
			}
		} else {
			if (estado2 == "DIRTY") {
				return 6;
			} else {
				return 8;
			}
		}
	}
}

var states = ["A", "DIRTY", "DIRTY"];
test(states);
