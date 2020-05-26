var friends = ["Chuy", "Stephen", "Quinton", "Joe", "Ashton"];
var locations = [
  "Bridge",
  "Engineering",
  "Captain's Quarters",
  "Brig",
  "Holodeck",
  "Crew Quarters",
  "Transporter Room",
  "Sickbay",
  "Cargo Bay",
  "Bar",
];
var weapons = [
  "Baseball Bat",
  "Crowbar",
  "BFG",
  "Wrench",
  "Buster Sword",
  "Keyblade",
  "Gravity Gun",
  "Plasma Cutter",
  "Master Sword",
  "Golden Gun",
  "Mini-Nuke",
  "Magic Fireball",
  "Truck",
  "Fists",
  "Lightsaber",
  "Overhwleming Number of Magic Cards",
  "Bucket of Water",
  "Squirtle",
  "Giant Mech",
  "Blackjack",
];

for (var i = 0; i < 100; i++) {
    function displayAccusation() {
        var index = i;
      function createAccusation() {
          alert(
        "I accuse " +
          friends[index % friends.length] +
          " in the " +
          locations[index % locations.length] +
          " with the " +
          weapons[index % weapons.length] +
          "!"
          );
      };
      return createAccusation;
    }

    var accusationClicked = displayAccusation();
  var accusation = document.createElement("h3");
  var accusationTitle = document.createTextNode("Accusation " + (i + 1));
  accusation.appendChild(accusationTitle);
  document.body.appendChild(accusation);
  accusation.addEventListener("click", accusationClicked);
  accusation.style.cursor = "pointer";
}
