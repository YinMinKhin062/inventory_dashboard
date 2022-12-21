// console.log("hello world");
let sidebarOpen = false;
let siderbar = document.getElementById('sidebar').classList;

// function openSidebar() {
// 	if (!sidebarOpen) {
// 		siderbar.add('sidebarResponsive');
// 		sidebarOpen = true;
// 	}
// }

let openSidebar = () => {
	if (!sidebarOpen) {
		siderbar.add('sidebarResponsive');
		sidebarOpen = true;
	}
};

let closeSidebar = () => {
	if (sidebarOpen) {
		siderbar.remove('sidebarResponsive');
		sidebarOpen = false;
	}
};

// -------------------CHART----------
var barChartOptions = {
	series: [{ name: 'count ', data: [10, 8, 6, 4, 2] }],
	chart: {
		type: 'bar',
		height: 350,
		toolbar: {
			show: false,
		},
	},
	colors: ['#246dec', '#cc3c43', '#367952', '#f5b74f', '#4f35a1'],
	plotOptions: {
		bar: {
			distributed: true,
			borderRadius: 4,
			horizontal: false,
			columnWidth: '40%',
		},
	},
	dataLabels: {
		enabled: false,
	},
	legend: {
		show: false,
	},
	xaxis: {
		categories: ['Mouse', 'Motherboard', 'Monitor', 'Computer', 'Laptop'],
	},
	yaxis: {
		title: {
			text: 'Count',
		},
	},
};

var chart = new ApexCharts(document.querySelector('#bar-chart'), barChartOptions);
chart.render();

// ----------area chart------------
var areaChartOptions = {
	series: [
		{
			name: 'Purchase Orders',
			type: 'area',
			data: [31, 40, 28, 51, 42, 109, 100],
		},
		{
			name: 'Sale Orders',
			type: 'line',
			data: [11, 32, 45, 32, 34, 52, 41],
		},
	],
	chart: {
		height: 350,
		type: 'line',
		toolbar: {
			show: false,
		},
	},
	colors: ['#4f35a1', '#246dec'],
	dataLabels: {
		enabled: false,
	},
	stroke: {
		curve: 'smooth',
	},
	labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July'],
	markers: {
		size: 0,
	},
	yaxis: [
		{
			title: {
				text: 'Purchase Orders',
			},
		},
		{
			opposite: true,
			title: {
				text: 'Sale Orders',
			},
		},
	],
	tooltip: {
		shared: true,
		intersect: false,
		// y: {
		// 	formatter: function (y) {
		// 		if (typeof y !== 'undefined') {
		// 			return y.toFixed(0) + ' points';
		// 		}
		// 		return y;
		// 	},
		// },
	},
};

var areaChart = new ApexCharts(document.querySelector('#area-chart'), areaChartOptions);
areaChart.render();
