//main1
var myChart = echarts.init(document.getElementById('main1'));
//指定图表的配置项和数据	
var hours = ['2001', '2002', '2003', '2004', '2005', '2006', '2007',
		'2008', '2009', '2010','2011','2012',
		'2013', '2014', '2015', '2016','2017'];
var days = ['作者一', '作者二', '作者三',
		'作者四', '作者五', '作者六', '作者七'];
var data = [
[0,0,1],[0,1,0],[0,2,0],[0,3,0],[0,4,1],[0,5,1],[0,6,1],[0,7,0],[0,8,2],[0,9,3],[0,10,2],[0,11,3],[0,12,5],[0,13,10],[0,14,6],[0,15,11],[0,16,0],
[1,0,0],[1,1,1],[1,2,0],[1,3,0],[1,4,1],[1,5,0],[1,6,0],[1,7,0],[1,8,3],[1,9,1],[1,10,1],[1,11,4],[1,12,2],[1,13,5],[1,14,6],[1,15,6],[1,16,0],
[2,0,0],[2,1,1],[2,2,0],[2,3,2],[2,4,0],[2,5,1],[2,6,1],[2,7,4],[2,8,1],[2,9,3],[2,10,10],[2,11,6],[2,12,1],[2,13,3],[2,14,5],[2,15,1],[2,16,0],
[3,0,0],[3,1,0],[3,2,0],[3,3,3],[3,4,3],[3,5,4],[3,6,3],[3,7,3],[3,8,3],[3,9,0],[3,10,1],[3,11,0],[3,12,2],[3,13,1],[3,14,0],[3,15,0],[3,16,0],
[4,0,0],[4,1,0],[4,2,0],[4,3,4],[4,4,3],[4,5,6],[4,6,2],[4,7,2],[4,8,5],[4,9,0],[4,10,0],[4,11,1],[4,12,1],[4,13,0],[4,14,0],[4,15,0],[4,16,0],
[5,0,0],[5,1,0],[5,2,0],[5,3,2],[5,4,0],[5,5,1],[5,6,2],[5,7,3],[5,8,3],[5,9,1],[5,10,2],[5,11,0],[5,12,0],[5,13,1],[5,14,1],[5,15,0],[5,16,0],
[6,0,0],[6,1,0],[6,2,0],[6,3,0],[6,4,0],[6,5,0],[6,6,0],[6,7,7],[6,8,4],[6,9,4],[6,10,5],[6,11,1],[6,12,1],[6,13,2],[6,14,2],[6,15,3],[6,16,0],
];
data = data.map(function (item) {
	return [item[1], item[0], item[2]];
});
option = {
	legend: {
		data: ['基金数量'],
		left: 'center',
		padding: [28,0,0,0], 
	},
	tooltip: {
		position: 'top',
		formatter: function (params) {
			return params.value[2] + '项基金';
		}
	},
	grid: {
		left: 2,
		bottom: 39,
		right: 38,
		containLabel: true
	},
	dataZoom : {
		show : true,
		realtime : true,
		height: 20,
		start: 0,
		end: 50,
	},
	toolbox: {
		show : true,
		padding : [2,10,2,2],
		feature : {
			mark : {show: true},
			dataView : {show: true, readOnly: false},
			dataZoom : {show : true,title : {dataZoom : '区域缩放',dataZoomReset : '区域缩放后退'}},
			restore : {show: true},
			saveAsImage : {show: true}
		}
	},
	xAxis: {
		name: '年份',
		type: 'category',
		data: hours,
		boundaryGap: false,
		splitLine: {
			show: true,
			lineStyle: {
				color: '#999',
				type: 'dashed'
			}
		},
		axisLine: {
			show: false
		}
	},
	yAxis: {
		name: '作者',
		type: 'category',
		data: days,
		axisLine: {
			show: false
		}
	},
	series: [{
		name: '基金数量',
		type: 'scatter',
		symbolSize: function (val) {
			return val[2] * 4.2;
		},
		data: data,
		animationDelay: function (idx) {
			return idx * 5;
		}
	}]
};
// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);
window.onresize = myChart.resize;//图表自适应窗口大小
//main2
var myChart = echarts.init(document.getElementById('main2'));
// 指定图表的配置项和数据
var hours = ['2001', '2002', '2003', '2004', '2005', '2006', '2007',
				'2008', '2009', '2010','2011','2012',
				'2013', '2014', '2015', '2016','2017'];
var days = ['机构一', '机构二', '机构三',
				'机构四', '机构五', '机构六', '机构七'];
var data = [
		[0,0,1],[0,1,0],[0,2,0],[0,3,0],[0,4,1],[0,5,1],[0,6,1],[0,7,0],[0,8,2],[0,9,3],[0,10,2],[0,11,3],[0,12,5],[0,13,10],[0,14,6],[0,15,11],[0,16,0],
		[1,0,0],[1,1,1],[1,2,0],[1,3,0],[1,4,1],[1,5,0],[1,6,0],[1,7,0],[1,8,3],[1,9,1],[1,10,1],[1,11,4],[1,12,2],[1,13,5],[1,14,6],[1,15,6],[1,16,0],
		[2,0,0],[2,1,1],[2,2,0],[2,3,2],[2,4,0],[2,5,1],[2,6,1],[2,7,4],[2,8,1],[2,9,3],[2,10,10],[2,11,6],[2,12,1],[2,13,3],[2,14,5],[2,15,1],[2,16,0],
		[3,0,0],[3,1,0],[3,2,0],[3,3,3],[3,4,3],[3,5,4],[3,6,3],[3,7,3],[3,8,3],[3,9,0],[3,10,1],[3,11,0],[3,12,2],[3,13,1],[3,14,0],[3,15,0],[3,16,0],
		[4,0,0],[4,1,0],[4,2,0],[4,3,4],[4,4,3],[4,5,6],[4,6,2],[4,7,2],[4,8,5],[4,9,0],[4,10,0],[4,11,1],[4,12,1],[4,13,0],[4,14,0],[4,15,0],[4,16,0],
		[5,0,0],[5,1,0],[5,2,0],[5,3,2],[5,4,0],[5,5,1],[5,6,2],[5,7,3],[5,8,3],[5,9,1],[5,10,2],[5,11,0],[5,12,0],[5,13,1],[5,14,1],[5,15,0],[5,16,0],
		[6,0,0],[6,1,0],[6,2,0],[6,3,0],[6,4,0],[6,5,0],[6,6,0],[6,7,7],[6,8,4],[6,9,4],[6,10,5],[6,11,1],[6,12,1],[6,13,2],[6,14,2],[6,15,3],[6,16,0],
		];
data = data.map(function (item) {
	return [item[1], item[0], item[2]];
});
option = {
	legend: {
		data: ['基金数量'],
		left: 'center',
		padding: [28,0,0,0], 
	},
	tooltip: {
		position: 'top',
		formatter: function (params) {
			return params.value[2] + '项基金';
		}
	},
	grid: {
		left: 2,
		bottom: 39,
		right: 38,
		containLabel: true
	},
	dataZoom : {
		show : true,
		realtime : true,
		height: 20,
		start: 0,
		end: 50,
	},
	toolbox: {
		show : true,
		padding : [2,10,2,2],
		feature : {
			mark : {show: true},
			dataView : {show: true, readOnly: false},
			dataZoom : {show : true,title : {dataZoom : '区域缩放',dataZoomReset : '区域缩放后退'}},
			restore : {show: true},
			saveAsImage : {show: true}
		}
	},
	xAxis: {
		name: '年份',
		type: 'category',
		data: hours,
		boundaryGap: false,
		splitLine: {
			show: true,
			lineStyle: {
				color: '#999',
				type: 'dashed'
			}
		},
		axisLine: {
			show: false
		}
	},
	yAxis: {
		name: '机构单位',
		type: 'category',
		data: days,
		axisLine: {
			show: false
		}
	},
	series: [{
		name: '基金数量',
		type: 'scatter',
		symbolSize: function (val) {
			return val[2] * 4.2;
		},
		data: data,
		animationDelay: function (idx) {
			return idx * 5;
		}
	}]
};
// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);
window.onresize = myChart.resize;//图表自适应窗口大小
//main3
var myChart = echarts.init(document.getElementById('main3'));
// 指定图表的配置项和数据
var geoCoordMap = {
	"北京": [116.46, 39.92],
	"南京": [118.78, 32.04],
	"吉林": [126.57, 43.87],
	"上海": [121.48, 31.22],
	"成都": [104.06, 30.67],
	"哈尔滨": [126.63, 45.75],
	"沈阳": [123.38, 41.8],
	// "合肥":[117.27,31.86],
	"武汉": [114.31, 30.52],
	"石家庄": [114.48, 38.03],
	"天津": [117.2, 39.13],
	"太原": [112.53, 37.87],
	"西安": [108.95, 34.27],
	"南宁": [108.33, 22.84],
	"南昌": [115.89, 28.68],
	"济南": [117, 36.65],
};
var data = [{
	name: "南京",
	value: 38
}, {
	name: "北京",
	value: 147
}, {
	name: "吉林",
	value: 74
}, {
	name: "上海",
	value: 33
}, {
	name: "成都",
	value: 192
}, {
	name: "哈尔滨",
	value: 35
}, {
	name: "沈阳",
	value: 0
}, {
	name: "武汉",
	value: 36
}, {
	name: "石家庄",
	value: 32
}, {
	name: "天津",
	value: 7
}, {
	name: "太原",
	value: 1
}, {
	name: "西安",
	value: 63
}, {
	name: "南宁",
	value: 29
}, {
	name: "南昌",
	value: 48
}, {
	name: "济南",
	value: 61
}];
var convertData = function(data) {
	var res = [];
	for (var i = 0; i < data.length; i++) {
		var geoCoord = geoCoordMap[data[i].name];
		if (geoCoord) {
			res.push({
				name: data[i].name,
				value: geoCoord.concat(data[i].value)
			});
		}
	}
	return res;
};
var convertedData = [
	convertData(data),
	convertData(data.sort(function(a, b) {
		return b.value - a.value;
	}).slice(0, 6))
];
data.sort(function(a,b){
 return    a.value-b.value;
})
var selectedItems = [];
	var categoryData = [];
	var barData = [];
 //   var maxBar = 30;
	var sum = 0;
	var count = data.length;
	for(var i=0;i<data.length;i++){
	categoryData.push(data[i].name);
	barData.push(data[i].value);
	sum+=data[i].value;
	}
console.log(categoryData);
console.log(sum+"   "+count)
option = {
	backgroundColor: '#404a59',
	animation: true,
	animationDuration: 1000,
	animationEasing: 'cubicInOut',
	animationDurationUpdate: 1000,
	animationEasingUpdate: 'cubicInOut',
	title: [ {
		id: 'statistic',
		text: count ? '平均: ' +parseInt((sum / count).toFixed(4)) : '',
		right: 200,
		top: 60,
		width: 100,
		textStyle: {
			color: '#fff',
			fontSize: 16
		}
	}],
	toolbox: {
		padding : 25,
		iconStyle: {
			normal: {
				borderColor: '#fff'
			},
			emphasis: {
				borderColor: '#b1e4ff'
			}
		},
		feature: {
			dataView : {show: true, readOnly: false},
			dataZoom: {},
			brush: {
				type: ['rect', 'polygon', 'clear']
			},
			saveAsImage : {show: true}
		}

	},
	brush: {
		outOfBrush: {
			color: '#abc'
		},
		brushStyle: {
			borderWidth: 2,
			color: 'rgba(0,0,0,0.2)',
			borderColor: 'rgba(0,0,0,0.5)',
		},
		seriesIndex: [0, 1],
		throttleType: 'debounce',
		throttleDelay: 300,
		geoIndex: 0
	},
	geo: {
		map: 'china',

		center: [130.98561551896913, 35.205000490896193],
		zoom: 0,
		label: {
			emphasis: {
				show: false
			}
		},
		roam: true,
		itemStyle: {
			normal: {
				areaColor: '#323c48',
				borderColor: '#111'
			},
			emphasis: {
				areaColor: '#2a333d'
			}
		}
	},
	tooltip: {
		trigger: 'item'
	},
	grid: {
		right: 100,
		top: 100,
		bottom: 40,
		width: '25%'
	},
	xAxis: {
		type: 'value',
		scale: true,
		position: 'top',
		boundaryGap: false,
		splitLine: {
			show: false
		},
		axisLine: {
			show: false
		},
		axisTick: {
			show: false
		},
		axisLabel: {
			margin: 2,
			textStyle: {
				color: '#aaa'
			}
		},
	},
	yAxis: {
		type: 'category',
		//  name: 'TOP 20',
		nameGap: 16,
		axisLine: {
			show: true,
			lineStyle: {
				color: '#ddd'
			}
		},
		axisTick: {
			show: false,
			lineStyle: {
				color: '#ddd'
			}
		},
		axisLabel: {
			interval: 0,
			textStyle: {
				color: '#ddd'
			}
		},
		data: categoryData
	},
	series: [{
		// name: 'pm2.5',
		type: 'scatter',
		coordinateSystem: 'geo',
		data: convertedData[0],
		symbolSize: function(val) {
			return Math.max(val[2] / 10, 8);
		},
		label: {
			normal: {
				formatter: '{b}',
				position: 'right',
				show: false
			},
			emphasis: {
				show: true
			}
		},
		itemStyle: {
			normal: {
				color: '#ddb926',
				position: 'right',
				show: true
			}
		}
	}, {
		//  name: 'Top 5',
		type: 'effectScatter',
		coordinateSystem: 'geo',
		data: convertedData[0],
		symbolSize: function(val) {
			return Math.max(val[2] / 10, 8);
		},
		showEffectOn: 'emphasis',
		rippleEffect: {
			brushType: 'stroke'
		},
		hoverAnimation: true,
		label: {
			normal: {
				formatter: '{b}',
				position: 'right',
				show: true
			}
		},
		itemStyle: {
			normal: {
				color: '#f4e925',
				shadowBlur: 10,
				shadowColor: '#333'
			}
		},
		zlevel: 1
	}, {
		id: 'bar',
		zlevel: 2,
		type: 'bar',
		symbol: 'none',
		itemStyle: {
			normal: {
				color: '#ddb926'
			}
		},

		data: data
	}]
};
function renderBrushed(params) {
	var mainSeries = params.batch[0].selected[0];
	var selectedItems = [];
	var categoryData = [];
	var barData = [];
	var maxBar = 30;
	var sum = 0;
	var count = 0;
	for (var i = 0; i < mainSeries.dataIndex.length; i++) {
		var rawIndex = mainSeries.dataIndex[i];
		var dataItem = convertedData[0][rawIndex];
		var pmValue = dataItem.value[2];

		sum += pmValue;
		count++;

		selectedItems.push(dataItem);
	}
	   selectedItems.sort(function (a, b) {
		//   return b.value[2] - a.value[2];
		return a.value-b.value;
	   });
	for (var i = 0; i < Math.min(selectedItems.length, maxBar); i++) {
		categoryData.push(selectedItems[i].name);
		barData.push(selectedItems[i].value[2]);
	}
	this.setOption({
		yAxis: {
			data: categoryData
		},
		xAxis: {
			axisLabel: {
				show: !!count
			}
		},
		title: {
			id: 'statistic',
			text: count ? '平均: ' + (sum / count).toFixed(4) : ''
		},
		series: {
			id: 'bar',
			//        sort:'descending',
			data: barData
		}
	});
}
// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);
window.onresize = myChart.resize;//图表自适应窗口大小