// RECEIVING DATA
async function loadData() {
  const response = await fetch("//www.boredapi.com/api/activity/");
  const data = await response.json();
  return data;
}
loadData()
  .then((data) => printData(data))
  .catch((err) => {
    const activityText = document.querySelector(".activity");
    activityText.textContent = err;
  });

// PRINTING DATA
function printData(obj) {
  const activityText = document.querySelector(".activity");
  activityText.textContent = obj.activity;
}
