
var CurrentClock = 0;
var CurrentRam = 0;

function setCurrentRam(val) {
	console.log('Current Ram ' + CurrentRam);
	CurrentRam=val;
}

function getCurrentRam() {
  return CurrentRam;
}