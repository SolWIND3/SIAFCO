var searchInput = document.getElementById("search-input");
var profileCards = document.querySelectorAll(".profile-card");

function search() {
  var searchTerm = searchInput.value.toLowerCase();
  for (var i = 0; i < profileCards.length; i++) {
    var profileCard = profileCards[i];
    var profileCardText = profileCard.textContent.toLowerCase();
    if (profileCardText.indexOf(searchTerm) > -1) {
      profileCard.style.display = "block";
    } else {
      profileCard.style.display = "none";
    }
  }
}

searchInput.addEventListener("keyup", search);
