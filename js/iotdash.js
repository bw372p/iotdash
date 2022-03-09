var updateInterval;
var waterField;
var humidityField;
var humGauge;
var humGaugeElement;
var tempField;
var tempGauge;
var tempGaugeElement
function pageloaded(){
	loadSensors();
	updateSensors();
	updateInterval=setInterval(function(){updateSensors();}, 30000);
}
function updateSensors(){

	var datePieces = Date().toLocaleString().split(' ');
	var dateText=datePieces[1]+' '+datePieces[2]+' '+datePieces[3]+' '+datePieces[4]+' '
	document.getElementById('lastUpdated').innerHTML=dateText;
	sendMetricRequest(877690,tempField,tempGauge);
	sendMetricRequest(880450,humidityField,humGauge);
	sendMetricRequest(881410,waterField);
}
function loadSensors(){
	loadTemperature();
	loadHumidity();
	loadWater();
}
function loadTemperature(){
	tempGaugeElement = document.getElementById('tempGauge'); 
	tempGauge = new Gauge(tempGaugeElement).setOptions(getTempOptions());
	tempField = document.getElementById('temperature');
	tempGauge.maxValue=130;
	tempGauge.minValue=0;
}
function loadHumidity(){
	humGaugeElement = document.getElementById('humGauge'); 
	humGauge = new Gauge(humGaugeElement).setOptions(getHumidityOptions());
	humGauge.maxValue=100;
	humGauge.minValue=0;
	humidityField = document.getElementById('humidity');
}
function loadWater(){
	waterField = document.getElementById('water');
}
function sendMetricRequest(sensorid,field,gauge){
	var jsonPost = new XMLHttpRequest();
    jsonPost.onreadystatechange = function () {
        if (jsonPost.readyState == XMLHttpRequest.DONE) {
			field.innerHTML=jsonPost.responseText;
			if(typeof gauge !== 'undefined'){
				gauge.set(grabNumber(jsonPost.responseText));
			}
			else if(field.id='water'){
				updateWater(jsonPost.responseText);
			}
        }
    };
    jsonPost.open('GET', '/getMetric?sensorid='+sensorid, true);
    jsonPost.send();
}
function updateWater(response){
	if(response.startsWith('No')){
		document.getElementById('color3').checked=true;
	}
	else{
		document.getElementById('color1').checked=true;
	}
}
function grabNumber(inputVal){
	var numVal='';
	for( var i=0;i<inputVal.length;i++){
		if(!isNaN(inputVal[i])||inputVal[i]=='.'){
			numVal+=inputVal[i];
		}
		else{
			i=inputVal.length;
		}
	}
	return numVal;
}