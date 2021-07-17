var guest_names = [];
function addguest() {
    guest_names.push(document.getElementById("new_guest_name").value);
    document.getElementById("new_guest").innerHTML = guest_names;
    document.getElementById("new_guest_name").value = "";
}

function show() {
    document.getElementById("all_guests").innerHTML = " ";
    for (var i = 0; i < guest_names.length; i++) {
        document.getElementById("all_guests").innerHTML += "<h4>" + guest_names[i] + "</h4>";
    }
}

function sortguestlist() {
    var sorted_guest_names = [];
    for (var j = 0; j < guest_names.length; j++) {
        sorted_guest_names.push(guest_names[j]);
    }
    sorted_guest_names.sort();
    document.getElementById("all_guests_sorted").innerHTML = " ";
    for (var k = 0; k < sorted_guest_names.length; k++) {
        document.getElementById("all_guests_sorted").innerHTML += "<h4>" + sorted_guest_names[k] + "</h4>";
    }
}

function search() {
    var s = document.getElementById("search").value;
    var found = 0;
    for (var l = 0; l < guest_names.length; l++) {
        if (s == guest_names[l]) {
            found += 1;
        }
    }
    document.getElementById("people_found").innerHTML = "name found " + found + " time/s";
    document.getElementById("search").value = "";
    console.log("name found " + found + " time/s");
}