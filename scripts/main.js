async function formOnSubmit(event) {
  // get city name from form input value
  console.log(event);
  // get form data
  const formData = new FormData(event.target);
  console.log(formData);
  // convert to object
  const formProps = Object.fromEntries(formData);
  console.log(formProps);

  // access cityName from object
  // const queryDate = formProps.queryDate;
  // console.log(queryDate);

  const queryDate = document.querySelector("#queryDate").value;
  console.log(queryDate);
  const apiKey =
    "zo8PEy0GntMaMlKdsCm8yXkWsw47axquHRdVAaLr0b8t3KI8j6IEUeQpAyHmtAHbaT8%2FsuZ5Yo%2FNKycge5d5LQ%3D%3D";
  const url =
    "https://api.odcloud.kr/api/15077756/v1/vaccine-stat" +
    "?cond%5BbaseDate%3A%3AGT%5D=" +
    queryDate +
    "&serviceKey=" +
    apiKey;

  const infoRequest = await axios.get(url);

  const vaccinationInfo = infoRequest.data;
  console.log(vaccinationInfo);

  const queryDayTotal = (
    vaccinationInfo.data[0].firstCnt + vaccinationInfo.data[0].secondCnt
  ).toLocaleString();
  document.querySelector(".todayTotal").textContent = queryDayTotal;
  console.log(queryDayTotal);

  document.querySelector(".newlyVaccinated").textContent = "Performance at";

  const queryDayFirst = vaccinationInfo.data[0].firstCnt.toLocaleString();
  document.querySelector(".todayFirst").textContent = queryDayFirst;
  console.log(queryDayFirst);

  const queryDaySecond = vaccinationInfo.data[0].secondCnt.toLocaleString();
  document.querySelector(".todaySecond").textContent = queryDaySecond;
  console.log(queryDaySecond);

  const queryDateAccumulatedSecond =
    vaccinationInfo.data[0].totalSecondCnt.toLocaleString();
  document.querySelector(".accumulatedSecondShot").textContent =
    queryDateAccumulatedSecond;
  console.log(queryDateAccumulatedSecond);

  const queryDateAccumulatedFirst =
    vaccinationInfo.data[0].totalFirstCnt.toLocaleString();
  document.querySelector(".accumulatedFirstShot").textContent =
    queryDateAccumulatedFirst;
  console.log(queryDateAccumulatedFirst);

  document.querySelector(".accumulateDate").textContent = queryDate;
  document.querySelector(".currentDate").textContent = queryDate;

  document.querySelector(".resultShow").classList.remove("collapse");
  const population = 51710000;
  const immunizedRatio = Math.floor(
    (vaccinationInfo.data[0].totalSecondCnt / population) * 100
  );
  document.querySelector(".atThisPoint").textContent =
    "By the selected date, total";
  document.querySelector(".immunizedNumber").textContent =
    immunizedRatio + " %";
  document.querySelector(".ofPopulation").textContent =
    "of population has been fully immunized.";

  progressPercent = immunizedRatio + "%";
  document.querySelector(".percentageBar").style.width = progressPercent;

  let herdImmunityNumber = Math.floor(immunizedRatio/70*100);
  document.querySelector(".herdImmunityNumber").textContent=herdImmunityNumber+" %";
  
  let progressHerdImmunity = herdImmunityNumber + "%";
  document.querySelector(".herdImmunityPercentageBar").style.width = progressHerdImmunity;

  document.querySelector(".atThisPoint2").textContent =
  "By the selected date, we were";


}

function getDate() {
  const today = new Date();
  const options = { weekday: "long", day: "numeric", month: "long" };
  return today.toLocaleDateString("en-US", options);
}

let date = new Date();
let day = date.getDate();
let yesterday = date.getDate() - 1;
let month = date.getMonth() + 1;
let year = date.getFullYear();

if (yesterday < 10) {
  yesterday = "0" + day;
}

if (day < 10) {
  day = "0" + day;
}

if (month < 10) {
  month = "0" + month;
}

let fullDate = `${year}-${month}-${day}`;
console.log(fullDate);

let fullYesterday1 = `${month}-${yesterday}-${year}`;
console.log(fullYesterday1);

let fullYesterday = `${year}-${month}-${yesterday}`;

document.querySelector(".headerDate").textContent = getDate();
document.querySelector("#queryDate").setAttribute("value", fullDate);
// apiKey1 zo8PEy0GntMaMlKdsCm8yXkWsw47axquHRdVAaLr0b8t3KI8j6IEUeQpAyHmtAHbaT8%2FsuZ5Yo%2FNKycge5d5LQ%3D%3D
// apiKey2 zo8PEy0GntMaMlKdsCm8yXkWsw47axquHRdVAaLr0b8t3KI8j6IEUeQpAyHmtAHbaT8/suZ5Yo/NKycge5d5LQ==

async function start() {
  const defaultApiKey =
    "zo8PEy0GntMaMlKdsCm8yXkWsw47axquHRdVAaLr0b8t3KI8j6IEUeQpAyHmtAHbaT8%2FsuZ5Yo%2FNKycge5d5LQ%3D%3D";
  const defaultUrl =
    "https://api.odcloud.kr/api/15077756/v1/vaccine-stat" +
    "?cond%5BbaseDate%3A%3AGT%5D=" +
    fullYesterday +
    "&serviceKey=" +
    defaultApiKey;

  const defaultInfoRequest = await axios.get(defaultUrl);

  const defaultVaccinationInfo = defaultInfoRequest.data;
  console.log(defaultVaccinationInfo);

  const defaultTodayTotal = (
    defaultVaccinationInfo.data[0].firstCnt +
    defaultVaccinationInfo.data[0].secondCnt
  ).toLocaleString();
  document.querySelector(".todayTotal").textContent = defaultTodayTotal;
  console.log(defaultTodayTotal);

  const defaultTodayFirst =
    defaultVaccinationInfo.data[0].firstCnt.toLocaleString();
  document.querySelector(".todayFirst").textContent = defaultTodayFirst;

  const defaultTodaySecond =
    defaultVaccinationInfo.data[0].secondCnt.toLocaleString();
  document.querySelector(".todaySecond").textContent = defaultTodaySecond;

  document.querySelector(".newlyVaccinated").textContent =
    "Current Performance";
  document.querySelector(".currentDate").textContent = fullYesterday1;

  const defaultAccumulatedSecond =
    defaultVaccinationInfo.data[0].totalSecondCnt.toLocaleString();
  document.querySelector(".accumulatedSecondShot").textContent =
    defaultAccumulatedSecond;
  console.log(defaultAccumulatedSecond);

  const defaultAccumulatedFirst =
    defaultVaccinationInfo.data[0].totalFirstCnt.toLocaleString();
  document.querySelector(".accumulatedFirstShot").textContent =
    defaultAccumulatedFirst;
  console.log(defaultAccumulatedFirst);

  document.querySelector(".accumulateDate").textContent = fullYesterday1;

  const population = 51710000;
  const immunizedRatio = Math.floor(
    (defaultVaccinationInfo.data[0].totalSecondCnt / population) * 100
  );
  document.querySelector(".immunizedNumber").textContent =
    +immunizedRatio + " % ";

  progressPercent = immunizedRatio + "%";
  document.querySelector(".percentageBar").style.width = progressPercent;

  let herdImmunityNumber = Math.floor(immunizedRatio/70*100);
  document.querySelector(".herdImmunityNumber").textContent=herdImmunityNumber+" %";
  
  let progressHerdImmunity = herdImmunityNumber + "%";
  document.querySelector(".herdImmunityPercentageBar").style.width = progressHerdImmunity;
}
start();
