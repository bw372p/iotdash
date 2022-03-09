
function getHumidityOptions(){
	var opts = {
		// color configs
		colorStart: "#6fadcf",
		colorStop: void 0,
		gradientType: 0,
		strokeColor: "#e0e0e0",
		generateGradient: true,
		percentColors: [[0.0, "#a9d70b" ], [0.50, "#f9c802"], [1.0, "#ff0000"]],
		// customize pointer
		pointer: {
		  length: 0.8,
		  strokeWidth: 0.035,
		  iconScale: 1.0
		},
		// static labels
		staticLabels: {
		  font: "10px sans-serif",
		  labels: [0, 20, 40, 60,80,100],
		  fractionDigits: 0
		},
		// static zones
		staticZones: [
		  {strokeStyle: "#F03E3E", min: 0, max: 15},
		  {strokeStyle: "#FFDD00", min: 15, max: 23},
		  {strokeStyle: "#30B32D", min: 23, max: 55},
		  {strokeStyle: "#FFDD00", min: 55, max: 65},
		  {strokeStyle: "#F03E3E", min: 65, max: 100}
		],
		// render ticks
		renderTicks: {
		  divisions: 5,
		  divWidth: 1.1,
		  divLength: 0.7,
		  divColor: "#333333",
		  subDivisions: 3,
		  subLength: 0.5,
		  subWidth: 0.6,
		  subColor: "#666666"
		},
		// the span of the gauge arc
		angle: 0,
		lineWidth: 0.44,
		// radius scale
		radiusScale: 1.0,
		// font size
		fontSize: 40,
		// if false, max value increases automatically if value > maxValue
		limitMax: false,
		// if true, the min value of the gauge will be fixed
		limitMin: false,
		// High resolution support
		highDpiSupport: true
	};
	return opts;
}

function getTempOptions(){
	var opts = {
		// color configs
		colorStart: "#6fadcf",
		colorStop: void 0,
		gradientType: 0,
		strokeColor: "#e0e0e0",
		generateGradient: true,
		percentColors: [[0.0, "#a9d70b" ], [0.50, "#f9c802"], [1.0, "#ff0000"]],
		// customize pointer
		pointer: {
		  length: 0.8,
		  strokeWidth: 0.035,
		  iconScale: 1.0
		},
		// static labels
		staticLabels: {
		  font: "10px sans-serif",
		  labels: [0, 25, 50, 75,100],
		  fractionDigits: 0
		},
		// static zones
		staticZones: [
		  {strokeStyle: "#30B32D", min: 0, max: 80},
		  {strokeStyle: "#FFDD00", min: 80, max: 90},
		  {strokeStyle: "#F03E3E", min: 90, max: 130}
		],
		// render ticks
		renderTicks: {
		  divisions: 5,
		  divWidth: 1.1,
		  divLength: 0.7,
		  divColor: "#333333",
		  subDivisions: 3,
		  subLength: 0.5,
		  subWidth: 0.6,
		  subColor: "#666666"
		},
		// the span of the gauge arc
		angle: 0,
		lineWidth: 0.44,
		// radius scale
		radiusScale: 1.0,
		// font size
		fontSize: 40,
		// if false, max value increases automatically if value > maxValue
		limitMax: false,
		// if true, the min value of the gauge will be fixed
		limitMin: false,
		// High resolution support
		highDpiSupport: true
	};
	return opts;
}