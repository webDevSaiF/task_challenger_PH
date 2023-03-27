// RECEIVING DATA
async function loadData() {
  const response = await fetch("http://www.boredapi.com/api/activity/");
  const data = await response.json();
  return data;
}
loadData()
  .then((data) => printData(data))
  .catch((err) => console.log("Could Not Fetch the data from API"));

// PRINTING DATA
function printData(obj) {
  const activityText = document.querySelector(".activity");
  activityText.textContent = obj.activity;
}
