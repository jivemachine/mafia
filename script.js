// populating script with 100 lines of this h3
for(var i = 1; i < 101; i++) {
    var h3 = "<h3 id='" + i + "' >Accusation " + i + "</h3>";
    $('body').append(h3);
    $('#' + i).on('click', accuse(i));
}

// variables
var FRIEND_NAME = ['Eder', 'Kerryington', 'Matt', 'Dylan', 'Cody'];
var LOCATION_NAME = ['sun room', 'library', 'bathroom', 'garage', 'kitchen', 'bedroom', 'backyard', 'front yard', 'attic', 'walk-in freezer'];
var WEAPON_NAME = ['sword', 'knife', 'toilet paper', 'fingernails', 'cocnuts', 'ice cream scoop', 'pizza plate', 'cue tips', 'bar of soap', 'sickle', 'squeegee', 'locomotive', 'hair dryer', 'plunger', 'haur spray', 'comb', 'blanket', 'pineapple', 'golf balls', 'iphone 11'];

function accuse(x) {
    var accNum = x;
    return function () {
        return alert("Accusation " + accNum + ": I accuse  " + FRIEND_NAME[accNum % 5] + ", with the " + WEAPON_NAME[accNum % 20] +  " in the " + LOCATION_NAME[accNum % 10] + "!");
    }
}
