//main1
var myChart1 = echarts.init(document.getElementById('main1'));
//指定图表的配置项和数据
option = {
		toolbox: {
		show : true,
		padding : 10,
		feature : {
			mark : {show: true},
			dataView : {show: true, readOnly: false},
			dataZoom : {show : true,title : {dataZoom : '区域缩放',dataZoomReset : '区域缩放后退'}},
			magicType : {show: true, type: ['line']},
			restore : {show: true},
			saveAsImage : {show: true}
		}
	},
		dataZoom : {
			show : true,
			realtime : true,
			//orient: 'vertical',   // 'horizontal'
			//x: 0,
			//y: 100,
			//width: 400,
			height: 20,
			//backgroundColor: 'rgba(221,160,221,0.5)',
			//dataBackgroundColor: 'rgba(138,43,226,0.5)',
			//fillerColor: 'rgba(38,143,26,0.6)',
			//handleColor: 'rgba(128,43,16,0.8)',
			//xAxisIndex:[],
			//yAxisIndex:[],
			start: 0,
			end: 50,
	},
	color: ['#0099ff'],
	tooltip : {
		trigger: 'axis',
		axisPointer : {            // 坐标轴指示器，坐标轴触发有效
			type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
		}
	},
	xAxis : [
		{
			name: '年份',
			type : 'category',
			data : ['2005','2006','2007','2008','2009','2010','2011','2012','2013','2014','2015','2016','2017'],
			axisTick: {
				alignWithLabel: true
			}
		}
	],
	yAxis : [
		{	
			name: '文献数量',
			// type : 'category',
			// data : ['10','20','30','40'],
			axisTick: {
				alignWithLabel: true
			}
		}
	],
	series : [
		{
			name:'面积统计',
			type:'bar',
			barWidth: '60%',
			data:[11,22,5,8,6,174,17,28,10,20,10,39,28]
		},
		
	],
	label: {
			normal: {
				show: true,
				position: 'top',
				formatter: '{c}'
			}
		},
	itemStyle: {
				normal: {
				 
					color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
						offset: 0,
						color: 'rgba(0, 153, 255, 1)'
					}, {
						offset: 1,
						color: 'rgba(0, 153, 255, 0.1)'
					}]),
					shadowColor: 'rgba(0, 0, 0, 0.1)',
					shadowBlur: 10
				}
			}
};
// Enable data zoom when user click bar.
// 使用刚指定的配置项和数据显示图表。
myChart1.setOption(option);
window.onresize = myChart1.resize;//图表自适应窗口大小
//main2
var myChart2 = echarts.init(document.getElementById('main2'));
// 指定图表的配置项和数据
option = {
	tooltip: {
		trigger: 'axis'
		},
	legend: {
		padding : 50,
		data:['作者一','作者二','作者三','作者四','作者五']
	},
	grid: {
		left: '5%',
		right: '8%',
		bottom: '12%',
		top: '28%',
		containLabel: true
	},
	dataZoom : {
				show : true,
				realtime : true,
				//orient: 'vertical',   // 'horizontal'
				//x: 0,
				//y: 100,
				//width: 400,
				height: 20,
				//backgroundColor: 'rgba(221,160,221,0.5)',
				//dataBackgroundColor: 'rgba(138,43,226,0.5)',
				//fillerColor: 'rgba(38,143,26,0.6)',
				//handleColor: 'rgba(128,43,16,0.8)',
				//xAxisIndex:[],
				//yAxisIndex:[],
				start: 0,
				end: 100,
		},
	xAxis: {
		name: '年份',
		type: 'category',
		boundaryGap: false,
		data: ['2011','2012','2013','2014','2015','2016','2017']
	},
	yAxis: {
		name: '文献数量',
		type: 'value'
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
	series: [
		{
			name:'作者一',
			type:'line',
			stack: '总量',
			data:[12, 13, 10, 13, 9, 23, 21]
		},
		{
			name:'作者二',
			type:'line',
			stack: '总量',
			data:[22, 18, 19, 23, 29, 33, 31]
		},
		{
			name:'作者三',
			type:'line',
			stack: '总量',
			data:[15, 23, 20, 15, 19, 33, 41]
		},
		{
			name:'作者四',
			type:'line',
			stack: '总量',
			data:[32, 33, 30, 33, 39, 33, 32]
		},
		{
			name:'作者五',
			type:'line',
			stack: '总量',
			data:[82, 93, 90, 93, 95, 100, 103]
		}
	]
};
// 使用刚指定的配置项和数据显示图表。
myChart2.setOption(option);
window.onresize = myChart2.resize;//图表自适应窗口大小
//main3
var myChart3 = echarts.init(document.getElementById('main3'));
// 指定图表的配置项和数据
option = {
	tooltip: {
		trigger: 'axis'
		},
	legend: {
		padding : 50,
		data:['机构单位一','机构单位二','机构单位三','机构单位四','机构单位五']
	},
	grid: {
		left: '5%',
		right: '8%',
		bottom: '12%',
		top: '28%',
		containLabel: true
	},
	dataZoom : {
				show : true,
				realtime : true,
				//orient: 'vertical',   // 'horizontal'
				//x: 0,
				//y: 100,
				//width: 400,
				height: 20,
				//backgroundColor: 'rgba(221,160,221,0.5)',
				//dataBackgroundColor: 'rgba(138,43,226,0.5)',
				//fillerColor: 'rgba(38,143,26,0.6)',
				//handleColor: 'rgba(128,43,16,0.8)',
				//xAxisIndex:[],
				//yAxisIndex:[],
				start: 0,
				end: 100,
		},

	xAxis: {
		name: '年份',
		type: 'category',
		boundaryGap: false,
		data: ['2011','2012','2013','2014','2015','2016','2017']
	},
	yAxis: {
		name: '文献数量',
		type: 'value'
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
	series: [
		{
			name:'机构单位一',
			type:'line',
			stack: '总量',
			data:[12, 13, 10, 13, 9, 23, 21]
		},
		{
			name:'机构单位二',
			type:'line',
			stack: '总量',
			data:[22, 18, 19, 23, 29, 33, 31]
		},
		{
			name:'机构单位三',
			type:'line',
			stack: '总量',
			data:[15, 23, 20, 15, 19, 33, 41]
		},
		{
			name:'机构单位四',
			type:'line',
			stack: '总量',
			data:[32, 33, 30, 33, 39, 33, 32]
		},
		{
			name:'机构单位五',
			type:'line',
			stack: '总量',
			data:[82, 93, 90, 93, 95, 100, 103]
		}
	]
};
// 使用刚指定的配置项和数据显示图表。
myChart3.setOption(option);
window.onresize = myChart3.resize;//图表自适应窗口大小
//main4
var myChart4 = echarts.init(document.getElementById('main4'));
// 指定图表的配置项和数据
option = {
	tooltip: {
		trigger: 'axis'
		},
	legend: {
		padding : 50,
		data:['期刊一','期刊二','期刊三','期刊四','期刊五']
	},
	grid: {
		left: '5%',
		right: '8%',
		bottom: '12%',
		top: '28%',
		containLabel: true
	},
	dataZoom : {
				show : true,
				realtime : true,
				//orient: 'vertical',   // 'horizontal'
				//x: 0,
				//y: 100,
				//width: 400,
				height: 20,
				//backgroundColor: 'rgba(221,160,221,0.5)',
				//dataBackgroundColor: 'rgba(138,43,226,0.5)',
				//fillerColor: 'rgba(38,143,26,0.6)',
				//handleColor: 'rgba(128,43,16,0.8)',
				//xAxisIndex:[],
				//yAxisIndex:[],
				start: 0,
				end: 100,
		},

	xAxis: {
		name: '年份',
		type: 'category',
		boundaryGap: false,
		data: ['2011','2012','2013','2014','2015','2016','2017']
	},
	yAxis: {
		name: '文献数量',
		type: 'value'
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
	series: [
		{
			name:'期刊一',
			type:'line',
			stack: '总量',
			data:[12, 13, 10, 13, 9, 23, 21]
		},
		{
			name:'期刊二',
			type:'line',
			stack: '总量',
			data:[22, 18, 19, 23, 29, 33, 31]
		},
		{
			name:'期刊三',
			type:'line',
			stack: '总量',
			data:[15, 23, 20, 15, 19, 33, 41]
		},
		{
			name:'期刊四',
			type:'line',
			stack: '总量',
			data:[32, 33, 30, 33, 39, 33, 32]
		},
		{
			name:'期刊五',
			type:'line',
			stack: '总量',
			data:[82, 93, 90, 93, 95, 100, 103]
		}
	]
};
// 使用刚指定的配置项和数据显示图表。
myChart4.setOption(option);
window.onresize = myChart4.resize;//图表自适应窗口大小