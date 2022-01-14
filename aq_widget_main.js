// ------------------------------------------------------------
// ******* JS script for the AQI widget by Murmuration. *******
// ------------------------------------------------------------


// ----- BUTTONS ACTIVE SELECTOR -----
const btnsTip = document.querySelectorAll("button");
let activeBtn = null;
btnsTip.forEach((btnTip) => {
  btnTip.addEventListener("click", (e) => {
    btnsTip.forEach((btn) => {
      btn.classList.remove("active");
      btn.classList.add('button');
    });
    e.currentTarget.classList.add("active");
  });
});
// ------------------------------------------------------------


// ----- DATA RECOVERY -----
// Variables:
var dates = [];
var valenciaNO2 = [], madridNO2 = [], parisNO2 = [], romeNO2 = [], lisbonNO2 = [];
var valenciaSO2 = [], madridSO2 = [], parisSO2 = [], romeSO2 = [], lisbonSO2 = [];
var valenciaPM10 = [], madridPM10 = [], parisPM10 = [], romePM10 = [], lisbonPM10 = [];
var valenciaPM2_5 = [], madridPM2_5 = [], parisPM2_5 = [], romePM2_5 = [], lisbonPM2_5 = [];
var valenciaCO = [], madridCO = [], parisCO = [], romeCO = [], lisbonCO = [];
var valenciaO3 = [], madridO3 = [], parisO3 = [], romeO3 = [], lisbonO3 = [];
var valenciaMDAQI = [], madridMDAQI = [], parisMDAQI = [], romeMDAQI = [], lisbonMDAQI = [];

var warsawNO2 = [], belgradeNO2 = [], sevilleNO2 = [], barcelonaNO2 = [];
var malagaNO2 = [], bilbaoNO2 = [], sanSebastianNO2 = [];
var warsawSO2 = [], belgradeSO2 = [], sevilleSO2 = [], barcelonaSO2 = [];
var malagaSO2 = [], bilbaoSO2 = [], sanSebastianSO2 = [];
var warsawPM10 = [], belgradePM10 = [], sevillePM10 = [], barcelonaPM10 = [];
var malagaPM10 = [], bilbaoPM10 = [], sanSebastianPM10 = [];
var warsawPM2_5 = [], belgradePM2_5 = [], sevillePM2_5 = [], barcelonaPM2_5 = [];
var malagaPM2_5 = [], bilbaoPM2_5 = [], sanSebastianPM2_5 = [];
var warsawCO = [], belgradeCO = [], sevilleCO = [], barcelonaCO = [];
var malagaCO = [], bilbaoCO = [], sanSebastianCO = [];
var warsawO3 = [], belgradeO3 = [], sevilleO3 = [], barcelonaO3 = [];
var malagaO3 = [], bilbaoO3 = [], sanSebastianO3 = [];
var warsawMDAQI = [], belgradeMDAQI = [], sevilleMDAQI = [], barcelonaMDAQI = [];
var malagaMDAQI = [], bilbaoMDAQI = [], sanSebastianMDAQI = [];

var parse = false;
// Parsing
Papa.parse("https://raw.githubusercontent.com/Murmuration-sas/aqwidget/main/aqi_widget_3yrs_data_12_cities.csv", {
  download : true,
  header : true,
  skipEmptyLines : true,
  complete : function(results){
    for (i = 0; i < results.data.length; i++) {
      dates.push(results.data[i].date);
      valenciaNO2.push(results.data[i].Valencia_NO2);
      madridNO2.push(results.data[i].Madrid_NO2);
      parisNO2.push(results.data[i].Paris_NO2);
      romeNO2.push(results.data[i].Rome_NO2);
      lisbonNO2.push(results.data[i].Lisbon_NO2);
      warsawNO2.push(results.data[i].Warsaw_NO2);
      belgradeNO2.push(results.data[i].Belgrade_NO2);
      sevilleNO2.push(results.data[i].Seville_NO2);
      barcelonaNO2.push(results.data[i].Barcelona_NO2);
      malagaNO2.push(results.data[i].Malaga_NO2);
      bilbaoNO2.push(results.data[i].Bilbao_NO2);
      sanSebastianNO2.push(results.data[i].SanSebastian_NO2);

      valenciaSO2.push(results.data[i].Valencia_SO2);
      madridSO2.push(results.data[i].Madrid_SO2);
      parisSO2.push(results.data[i].Paris_SO2);
      romeSO2.push(results.data[i].Rome_SO2);
      lisbonSO2.push(results.data[i].Lisbon_SO2);
      warsawSO2.push(results.data[i].Warsaw_SO2);
      belgradeSO2.push(results.data[i].Belgrade_SO2);
      sevilleSO2.push(results.data[i].Seville_SO2);
      barcelonaSO2.push(results.data[i].Barcelona_SO2);
      malagaSO2.push(results.data[i].Malaga_SO2);
      bilbaoSO2.push(results.data[i].Bilbao_SO2);
      sanSebastianSO2.push(results.data[i].SanSebastian_SO2);

      valenciaPM10.push(results.data[i].Valencia_PM10);
      madridPM10.push(results.data[i].Madrid_PM10);
      parisPM10.push(results.data[i].Paris_PM10);
      romePM10.push(results.data[i].Rome_PM10);
      lisbonPM10.push(results.data[i].Lisbon_PM10);
      warsawPM10.push(results.data[i].Warsaw_PM10);
      belgradePM10.push(results.data[i].Belgrade_PM10);
      sevillePM10.push(results.data[i].Seville_PM10);
      barcelonaPM10.push(results.data[i].Barcelona_PM10);
      malagaPM10.push(results.data[i].Malaga_PM10);
      bilbaoPM10.push(results.data[i].Bilbao_PM10);
      sanSebastianPM10.push(results.data[i].SanSebastian_PM10);

      valenciaPM2_5.push(results.data[i].Valencia_PM2p5);
      madridPM2_5.push(results.data[i].Madrid_PM2p5);
      parisPM2_5.push(results.data[i].Paris_PM2p5);
      romePM2_5.push(results.data[i].Rome_PM2p5);
      lisbonPM2_5.push(results.data[i].Lisbon_PM2p5);
      warsawPM2_5.push(results.data[i].Warsaw_PM2p5);
      belgradePM2_5.push(results.data[i].Belgrade_PM2p5);
      sevillePM2_5.push(results.data[i].Seville_PM2p5);
      barcelonaPM2_5.push(results.data[i].Barcelona_PM2p5);
      malagaPM2_5.push(results.data[i].Malaga_PM2p5);
      bilbaoPM2_5.push(results.data[i].Bilbao_PM2p5);
      sanSebastianPM2_5.push(results.data[i].SanSebastian_PM2p5);

      valenciaCO.push(results.data[i].Valencia_CO);
      madridCO.push(results.data[i].Madrid_CO);
      parisCO.push(results.data[i].Paris_CO);
      romeCO.push(results.data[i].Rome_CO);
      lisbonCO.push(results.data[i].Lisbon_CO);
      warsawCO.push(results.data[i].Warsaw_CO);
      belgradeCO.push(results.data[i].Belgrade_CO);
      sevilleCO.push(results.data[i].Seville_CO);
      barcelonaCO.push(results.data[i].Barcelona_CO);
      malagaCO.push(results.data[i].Malaga_CO);
      bilbaoCO.push(results.data[i].Bilbao_CO);
      sanSebastianCO.push(results.data[i].SanSebastian_CO);

      valenciaO3.push(results.data[i].Valencia_O3);
      madridO3.push(results.data[i].Madrid_O3);
      parisO3.push(results.data[i].Paris_O3);
      romeO3.push(results.data[i].Rome_O3);
      lisbonO3.push(results.data[i].Lisbon_O3);
      warsawO3.push(results.data[i].Warsaw_O3);
      belgradeO3.push(results.data[i].Belgrade_O3);
      sevilleO3.push(results.data[i].Seville_O3);
      barcelonaO3.push(results.data[i].Barcelona_O3);
      malagaO3.push(results.data[i].Malaga_O3);
      bilbaoO3.push(results.data[i].Bilbao_O3);
      sanSebastianO3.push(results.data[i].SanSebastian_O3);

      valenciaMDAQI.push(results.data[i].Valencia_MDAQI);
      madridMDAQI.push(results.data[i].Madrid_MDAQI);
      parisMDAQI.push(results.data[i].Paris_MDAQI);
      romeMDAQI.push(results.data[i].Rome_MDAQI);
      lisbonMDAQI.push(results.data[i].Lisbon_MDAQI);
      warsawMDAQI.push(results.data[i].Warsaw_MDAQI);
      belgradeMDAQI.push(results.data[i].Belgrade_MDAQI);
      sevilleMDAQI.push(results.data[i].Seville_MDAQI);
      barcelonaMDAQI.push(results.data[i].Barcelona_MDAQI);
      malagaMDAQI.push(results.data[i].Malaga_MDAQI);
      bilbaoMDAQI.push(results.data[i].Bilbao_MDAQI);
      sanSebastianMDAQI.push(results.data[i].SanSebastian_MDAQI);
    }
    console.log("Done parsing.");
    parse = true;
  }
});
// ------------------------------------------------------------


// ----- CHART.JS CONFIGURATION -----

// Setup block
const data = {
  labels: dates,
  datasets: [{
      label: 'Valencia',
      data: [],
      borderColor: "#000080",
      backgroundColor: "#000080",
      borderWidth: 1.8,
      tension: 0.5,
      pointRadius: 2,
      showLine: true},
  {
      label: 'Madrid',
      data: [],
      borderColor: "#2f4f4f",
      backgroundColor: "#2f4f4f",
      borderWidth: 1,
      tension: 0.5,
      pointRadius: 1.2,
      showLine: true,},
  {
      label: 'Bilbao',
      data: [],
      borderColor: "#8b4513",
      backgroundColor: "#8b4513",
      borderWidth: 1,
      tension: 0.5,
      pointRadius: 1.2,
      showLine: true,},
  {
      label: 'Seville',
      data: [],
      borderColor: "#228b22",
      backgroundColor: "#228b22",
      borderWidth: 1,
      tension: 0.5,
      pointRadius: 1.2,
      showLine: true,},
  {
      label: 'San Sebastian',
      data: [],
      borderColor: "#c42121",
      backgroundColor: "#c42121",
      borderWidth: 1,
      tension: 0.5,
      pointRadius: 1.2,
      showLine: true,},
  {
      label: 'Malaga',
      data: [],
      borderColor: "#ffd700",
      backgroundColor: "#ffd700",
      borderWidth: 1,
      tension: 0.5,
      pointRadius: 1.2,
      showLine: true,},
  {
      label: 'Barcelona',
      data: [],
      borderColor: "#ff6625",
      backgroundColor: "#ff6625",
      borderWidth: 1,
      tension: 0.5,
      pointRadius: 1.2,
      showLine: true,},
  {
      label: 'Paris',
      data: [],
      borderColor: "#00ffff",
      backgroundColor: "#00ffff",
      borderWidth: 1,
      tension: 0.5,
      pointRadius: 1.2,
      hidden: true,},
  {
      label: 'Rome',
      data: [],
      borderColor: "#a924bb",
      backgroundColor: "#a924bb",
      borderWidth: 1,
      tension: 0.5,
      pointRadius: 1.2,
      hidden: true,},
  {
      label: 'Belgrade',
      data: [],
      borderColor: "#1e90ff",
      backgroundColor: "#1e90ff",
      borderWidth: 1,
      tension: 0.5,
      pointRadius: 1.2,
      hidden: true,},
  {
      label: 'Lisbon',
      data: [],
      borderColor: "#7fff00",
      backgroundColor: "#7fff00",
      borderWidth: 1,
      tension: 0.5,
      pointRadius: 1.2,
      hidden: true,},
  {
      label: 'Warsaw',
      data: [],
      borderColor: "#ff69d5",
      backgroundColor: "#ff69d5",
      borderWidth: 1,
      tension: 0.5,
      pointRadius: 1.2,
      hidden: true,},
  ]
};

// Config block
const config = {
  type: 'line',
  data,
  options: {
      plugins: {
        autocolors: false,
        annotation: {
          annotations: {
            lineAQG: {
              type: 'line',
              borderColor: "rgb(44,48,56, 0.5)",
              scaleID: 'y',
              value: -1,
              display: false,
              label: {
                  enabled: true,
                  content: 'AQG',
                  color: 'white',
                  font:{ style: 'normal' },
                  backgroundColor: 'rgb(20,204,81,0.6)',
                  xPadding: 4,
                  yPadding: 3,
              }
            },
            lineIT1: {
              type: 'line',
              borderColor: "rgb(44,48,56, 0.5)",
              scaleID: 'y',
              value: -1,
              display: false,
              label: {
                  enabled: true,
                  xAdjust: 35,
                  content: 'IT1',
                  color: 'white',
                  font:{ style: 'normal' },
                  backgroundColor: 'rgb(163,4,18,0.6)',
                  xPadding: 4,
                  yPadding: 3,
              }
            },
            lineIT2: {
              type: 'line',
              borderColor: "rgb(44,48,56, 0.5)",
              scaleID: 'y',
              value: -1,
              display: false,
              label: {
                  enabled: true,
                  xAdjust: -35,
                  content: 'IT2',
                  color: 'white',
                  font:{ style: 'normal' },
                  backgroundColor: 'rgb(210,103,29,0.6)',
                  xPadding: 4,
                  yPadding: 3,
              }
            },
            lineIT3: {
              type: 'line',
              borderColor: "rgb(44,48,56, 0.5)",
              scaleID: 'y',
              value: -1,
              display: false,
              label: {
                  enabled: true,
                  xAdjust: 35,
                  content: 'IT3',
                  color: 'white',
                  font:{ style: 'normal' },
                  backgroundColor: 'rgb(245,179,38,0.6)',
                  xPadding: 4,
                  yPadding: 3,
              }
            },
            lineIT4: {
              type: 'line',
              borderColor: "rgb(44,48,56, 0.5)",
              scaleID: 'y',
              value: -1,
              display: false,
              label: {
                  enabled: true,
                  xAdjust: -35,
                  content: 'IT4',
                  color: 'white',
                  font:{ style: 'normal' },
                  backgroundColor: 'rgb(179,202,30,0.6)',
                  xPadding: 4,
                  yPadding: 3,
              }
            },
          }
        }
      },
      scales: {
        y: {
          title: {
            display: true,
            text: "µg / m3",
          }
        },
    },
    transitions: {
      // Default
    },
  },
};

// Init block
const myChart = new Chart(document.getElementById('myChart'), config);
// ------------------------------------------------------------


// ----- INPUT FIRST VALUES (NO2) -----
myChart.data.datasets[0].data = valenciaNO2;
myChart.data.datasets[1].data = madridNO2;
myChart.data.datasets[2].data = bilbaoNO2;
myChart.data.datasets[3].data = sevilleNO2;
myChart.data.datasets[4].data = sanSebastianNO2;
myChart.data.datasets[5].data = malagaNO2;
myChart.data.datasets[6].data = barcelonaNO2;
myChart.data.datasets[7].data = parisNO2;
myChart.data.datasets[8].data = romeNO2;
myChart.data.datasets[9].data = belgradeNO2;
myChart.data.datasets[10].data = lisbonNO2;
myChart.data.datasets[11].data = warsawNO2;

myChart.config.options.plugins.annotation.annotations.lineAQG.value = 25;
myChart.config.options.plugins.annotation.annotations.lineAQG.display = true;
myChart.config.options.plugins.annotation.annotations.lineIT2.value = 50;
myChart.config.options.plugins.annotation.annotations.lineIT2.display = true;
myChart.config.options.plugins.annotation.annotations.lineIT1.value = 120;
myChart.config.options.plugins.annotation.annotations.lineIT1.display = false;
// Change unit
myChart.config.options.scales.y.title.text = "µg / m3";
// Change explanation text
document.getElementById("explanation").innerHTML = "Nitrogen Dioxide is a reddish-brown, pungent smelling gas with an irritating odour. NO2 is also involved in the formation of atmospheric ozone, which is yet another major pollutant and a major component of smog.";
// ------------------------------------------------------------


// ----- FUNCTION & CHART UPDATES -----
function updateChart(label){
  switch (label) {
    case 'NO2':
      // Change dataset
      myChart.data.datasets[0].data = valenciaNO2;
      myChart.data.datasets[1].data = madridNO2;
      myChart.data.datasets[2].data = bilbaoNO2;
      myChart.data.datasets[3].data = sevilleNO2;
      myChart.data.datasets[4].data = sanSebastianNO2;
      myChart.data.datasets[5].data = malagaNO2;
      myChart.data.datasets[6].data = barcelonaNO2;
      myChart.data.datasets[7].data = parisNO2;
      myChart.data.datasets[8].data = romeNO2;
      myChart.data.datasets[9].data = belgradeNO2;
      myChart.data.datasets[10].data = lisbonNO2;
      myChart.data.datasets[11].data = warsawNO2;
      // Change WHO lines
      myChart.config.options.plugins.annotation.annotations.lineAQG.value = 25;
      myChart.config.options.plugins.annotation.annotations.lineAQG.display = true;
      myChart.config.options.plugins.annotation.annotations.lineIT2.value = 50;
      myChart.config.options.plugins.annotation.annotations.lineIT2.display = true;

      myChart.config.options.plugins.annotation.annotations.lineIT1.value = 120;
      myChart.config.options.plugins.annotation.annotations.lineIT1.display = false;
      myChart.config.options.plugins.annotation.annotations.lineIT4.display = false;
      myChart.config.options.plugins.annotation.annotations.lineIT3.display = false;
      // Change unit
      myChart.config.options.scales.y.title.text = "µg / m3";
      // Change explanation text
      document.getElementById("explanation").innerHTML = "Nitrogen Dioxide is a reddish-brown, pungent smelling gas with an irritating odour. NO2 is also involved in the formation of atmospheric ozone, which is yet another major pollutant and a major component of smog.";
      break;
    case 'SO2':
      // Change dataset
      myChart.data.datasets[0].data = valenciaSO2;
      myChart.data.datasets[1].data = madridSO2;
      myChart.data.datasets[2].data = bilbaoSO2;
      myChart.data.datasets[3].data = sevilleSO2;
      myChart.data.datasets[4].data = sanSebastianSO2;
      myChart.data.datasets[5].data = malagaSO2;
      myChart.data.datasets[6].data = barcelonaSO2;
      myChart.data.datasets[7].data = parisSO2;
      myChart.data.datasets[8].data = romeSO2;
      myChart.data.datasets[9].data = belgradeSO2;
      myChart.data.datasets[10].data = lisbonSO2;
      myChart.data.datasets[11].data = warsawSO2;
      // Change WHO lines
      myChart.config.options.plugins.annotation.annotations.lineAQG.value = 40;
      myChart.config.options.plugins.annotation.annotations.lineAQG.display = true;

      myChart.config.options.plugins.annotation.annotations.lineIT2.value = 50;
      myChart.config.options.plugins.annotation.annotations.lineIT2.display = false;
      myChart.config.options.plugins.annotation.annotations.lineIT1.value = 125;
      myChart.config.options.plugins.annotation.annotations.lineIT1.display = false;
      myChart.config.options.plugins.annotation.annotations.lineIT4.display = false;
      myChart.config.options.plugins.annotation.annotations.lineIT3.display = false;
      // Change unit
      myChart.config.options.scales.y.title.text = "µg / m3";
      // Change explanation text
      document.getElementById("explanation").innerHTML = "SO3 is a colourless, bad-smelling and toxic gas. The main sources are power plants and other industrial facilities where fossil fuel combustion is used (coal, oil and diesel). Smaller sources are volcanoes and human transportation.";
      break;
    case 'PM10':
      // Change dataset
      myChart.data.datasets[0].data = valenciaPM10;
      myChart.data.datasets[1].data = madridPM10;
      myChart.data.datasets[2].data = bilbaoPM10;
      myChart.data.datasets[3].data = sevillePM10;
      myChart.data.datasets[4].data = sanSebastianPM10;
      myChart.data.datasets[5].data = malagaPM10;
      myChart.data.datasets[6].data = barcelonaPM10;
      myChart.data.datasets[7].data = parisPM10;
      myChart.data.datasets[8].data = romePM10;
      myChart.data.datasets[9].data = belgradePM10;
      myChart.data.datasets[10].data = lisbonPM10;
      myChart.data.datasets[11].data = warsawPM10;
      // Change WHO lines
      myChart.config.options.plugins.annotation.annotations.lineAQG.value = 45;
      myChart.config.options.plugins.annotation.annotations.lineAQG.display = true;

      myChart.config.options.plugins.annotation.annotations.lineIT2.value = 100;
      myChart.config.options.plugins.annotation.annotations.lineIT2.display = false;
      myChart.config.options.plugins.annotation.annotations.lineIT1.value = 150;
      myChart.config.options.plugins.annotation.annotations.lineIT1.display = false;

      myChart.config.options.plugins.annotation.annotations.lineIT3.value = 75;
      myChart.config.options.plugins.annotation.annotations.lineIT3.display = true;
      myChart.config.options.plugins.annotation.annotations.lineIT4.value = 50;
      myChart.config.options.plugins.annotation.annotations.lineIT4.display = true;
      // Change unit
      myChart.config.options.scales.y.title.text = "µg / m3";
      // Change explanation text
      document.getElementById("explanation").innerHTML = "Particulate Matter 10 (10 micrometers and smaller) are microscopic particles of solid or liquid matter suspended in the air. They come in many different sizes and shapes, and can be made up of hundreds of different chemicals.";
      break;
    case 'PM2.5':
      // Change dataset
      myChart.data.datasets[0].data = valenciaPM2_5;
      myChart.data.datasets[1].data = madridPM2_5;
      myChart.data.datasets[2].data = bilbaoPM2_5;
      myChart.data.datasets[3].data = sevillePM2_5;
      myChart.data.datasets[4].data = sanSebastianPM2_5;
      myChart.data.datasets[5].data = malagaPM2_5;
      myChart.data.datasets[6].data = barcelonaPM2_5;
      myChart.data.datasets[7].data = parisPM2_5;
      myChart.data.datasets[8].data = romePM2_5;
      myChart.data.datasets[9].data = belgradePM2_5;
      myChart.data.datasets[10].data = lisbonPM2_5;
      myChart.data.datasets[11].data = warsawPM2_5;
      // Change WHO lines
      // AQG - 15
      // IT4 - 25
      // IT3 - 37.5
      // IT2 - 50
      // IT1- 75
      myChart.config.options.plugins.annotation.annotations.lineAQG.value = 15;
      myChart.config.options.plugins.annotation.annotations.lineAQG.display = true;

      myChart.config.options.plugins.annotation.annotations.lineIT2.value = 50;
      myChart.config.options.plugins.annotation.annotations.lineIT2.display = false;
      myChart.config.options.plugins.annotation.annotations.lineIT1.value = 75;
      myChart.config.options.plugins.annotation.annotations.lineIT1.display = false;

      myChart.config.options.plugins.annotation.annotations.lineIT3.value = 37.5;
      myChart.config.options.plugins.annotation.annotations.lineIT3.display = true;
      myChart.config.options.plugins.annotation.annotations.lineIT4.value = 25;
      myChart.config.options.plugins.annotation.annotations.lineIT4.display = true;
      // Change unit
      myChart.config.options.scales.y.title.text = "µg / m3";
      // Change explanation text
      document.getElementById("explanation").innerHTML = "Particulate Matter 2.5 also known as fine particles (2.5 micrometers and smaller) are microscopic particles of solid or liquid matter suspended in the air. They come in many different sizes and shapes, and can be made up of hundreds of different chemicals.";
      break;
    case 'CO':
      // Change dataset
      myChart.data.datasets[0].data = valenciaCO;
      myChart.data.datasets[1].data = madridCO;
      myChart.data.datasets[2].data = bilbaoCO;
      myChart.data.datasets[3].data = sevilleCO;
      myChart.data.datasets[4].data = sanSebastianCO;
      myChart.data.datasets[5].data = malagaCO;
      myChart.data.datasets[6].data = barcelonaCO;
      myChart.data.datasets[7].data = parisCO;
      myChart.data.datasets[8].data = romeCO;
      myChart.data.datasets[9].data = belgradeCO;
      myChart.data.datasets[10].data = lisbonCO;
      myChart.data.datasets[11].data = warsawCO;
      // Change WHO lines
      myChart.config.options.plugins.annotation.annotations.lineAQG.value = 4000;
      myChart.config.options.plugins.annotation.annotations.lineAQG.display = false;

      myChart.config.options.plugins.annotation.annotations.lineIT1.value = 7000;
      myChart.config.options.plugins.annotation.annotations.lineIT1.display = false;
      myChart.config.options.plugins.annotation.annotations.lineIT2.display = false;
      myChart.config.options.plugins.annotation.annotations.lineIT4.display = false;
      myChart.config.options.plugins.annotation.annotations.lineIT3.display = false;
      // Change unit
      myChart.config.options.scales.y.title.text = "µg / m3";
      // Change explanation text
      document.getElementById("explanation").innerHTML = "Carbon monoxide is a colourless, odourless, tasteless and non-irritating gas, undetectable by humans, although it is particularly toxic. Since it has very low density, it mixes with air easily and is hard to detect. The main source of CO is the combustion engines from cars. The WHO AQG is far above these levels at 4000 µg/m3. ";
      
      break;
    case 'O3':
      // Change dataset
      myChart.data.datasets[0].data = valenciaO3;
      myChart.data.datasets[1].data = madridO3;
      myChart.data.datasets[2].data = bilbaoO3;
      myChart.data.datasets[3].data = sevilleO3;
      myChart.data.datasets[4].data = sanSebastianO3;
      myChart.data.datasets[5].data = malagaO3;
      myChart.data.datasets[6].data = barcelonaO3;
      myChart.data.datasets[7].data = parisO3;
      myChart.data.datasets[8].data = romeO3;
      myChart.data.datasets[9].data = belgradeO3;
      myChart.data.datasets[10].data = lisbonO3;
      myChart.data.datasets[11].data = warsawO3;
      // Change WHO lines
      myChart.config.options.plugins.annotation.annotations.lineAQG.value = 100;
      myChart.config.options.plugins.annotation.annotations.lineAQG.display = true;
      myChart.config.options.plugins.annotation.annotations.lineIT2.value = 120;
      myChart.config.options.plugins.annotation.annotations.lineIT2.display = true;

      myChart.config.options.plugins.annotation.annotations.lineIT1.value = 160;
      myChart.config.options.plugins.annotation.annotations.lineIT1.display = false;
      myChart.config.options.plugins.annotation.annotations.lineIT4.display = false;
      myChart.config.options.plugins.annotation.annotations.lineIT3.display = false;
      // Change unit
      myChart.config.options.scales.y.title.text = "µg / m3";
      // Change explanation text
      document.getElementById("explanation").innerHTML = "O3 exists both in the upper atmosphere (stratospheric ozone) and at ground-level (tropospheric ozone). O3 can be harmful or beneficial depending on where it occurs. Stratospheric ozone is naturally present and forms a protective layer ensuring protection against the sun's ultraviolet rays. Tropospheric ozone is an air pollutant with negative impacts on the environment and on people's health.";
      break;
    case 'MDAQI':
      // Change dataset
      myChart.data.datasets[0].data = valenciaMDAQI;
      myChart.data.datasets[1].data = madridMDAQI;
      myChart.data.datasets[2].data = bilbaoMDAQI;
      myChart.data.datasets[3].data = sevilleMDAQI;
      myChart.data.datasets[4].data = sanSebastianMDAQI;
      myChart.data.datasets[5].data = malagaMDAQI;
      myChart.data.datasets[6].data = barcelonaMDAQI;
      myChart.data.datasets[7].data = parisMDAQI;
      myChart.data.datasets[8].data = romeMDAQI;
      myChart.data.datasets[9].data = belgradeMDAQI;
      myChart.data.datasets[10].data = lisbonMDAQI;
      myChart.data.datasets[11].data = warsawMDAQI;
      // Change WHO lines
      myChart.config.options.plugins.annotation.annotations.lineIT4.display = false;
      myChart.config.options.plugins.annotation.annotations.lineIT3.display = false;
      myChart.config.options.plugins.annotation.annotations.lineIT2.display = false;
      myChart.config.options.plugins.annotation.annotations.lineIT1.display = false;
      myChart.config.options.plugins.annotation.annotations.lineAQG.display = false;
      // Change unit
      myChart.config.options.scales.y.title.text = "";
      // Change explanation text
      document.getElementById("explanation").innerHTML = "The MDAQI indicator defines the toxicity level of the air in that specific region on that day. It takes into account all the 6 major air pollutants and provides an aggregated value for that day. It represents the air quality level on a scale of 10 for each day in a given region.";
      break;
    default:
      alert("Value error in update switch.");
      console.log('Value error.');
  }
  // After every switch, the graph needs updating.
  myChart.update();
};
// ------------------------------------------------------------

// First update to init
setTimeout(function (){
  myChart.update();
}, 300);

