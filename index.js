function displaySavedName() {
  let div = document.getElementById("savedName");
  let savedName = localStorage.getItem("userName");

  if (savedName) {
    div.textContent = "Nome salvato: " + savedName;
  } else {
    div.textContent = "Nessun nome salvato";
  }
}
function saveName() {
  let name = document.getElementById("nameInput").value;
  localStorage.setItem("userName", name);
  displaySavedName();
}

function deleteName() {
  localStorage.removeItem("userName");
  displaySavedName();
}

function startCounter() {
  let counterSeconds = 0;
  setInterval(() => {
    counterSeconds++;
    sessionStorage.setItem("counter", counterSeconds);
    document.getElementById("counter").textContent =
      "Tempo trascorso: " + counterSeconds + " secondi";
  }, 1000);
}

displaySavedName();
startCounter();
