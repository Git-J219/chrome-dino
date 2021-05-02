/* global windowControl:false mos:false init:false */
'use strict';
mos.mos();
const contentWndIframe = document.querySelector("iframe").contentWindow;
let nightDisabled = false;
// code here
document.querySelector("#deleteHighscore").addEventListener("click", () => {
  localStorage.removeItem('highScore');
  contentWndIframe.Runner.instance_.highestScore = 0;
  contentWndIframe.Runner.instance_.distanceMeter.setHighScore(this.highestScore);
});
document.querySelector("#reset").addEventListener("click", () => {
  contentWndIframe.location.reload();
});
document.querySelector("#disableNight").addEventListener("click", () => {
  nightDisabled = !nightDisabled;
  if(nightDisabled){
    contentWndIframe.Runner.instance_.invert(true);
  }
  contentWndIframe.Runner.instance_.doNight = !nightDisabled;
  document.querySelector("#disableNightCheck").style.display = nightDisabled ? "inline" : "";
  localStorage.setItem("nightOff", nightDisabled ? "true" : "false");
});
  document.querySelector("iframe").focus();
window.addEventListener("click", () => {
  document.querySelector("iframe").focus();
});
function dataInitialized(){
  if(nightDisabled){
    contentWndIframe.Runner.instance_.invert(true);
  }
  contentWndIframe.Runner.instance_.doNight = !nightDisabled;
  document.querySelector("#disableNightCheck").style.display = nightDisabled ? "inline" : "";
}
if(localStorage.getItem("nightOff") === "true") {
  nightDisabled = true;
}
document.querySelector('#app_max').addEventListener('click', windowControl.maximize);
document.querySelector('#app_min').addEventListener('click', windowControl.minimize);
document.querySelector('#app_close').addEventListener('click', windowControl.close);

window.setTimeout(init.completed, 1000);
