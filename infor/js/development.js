//main
document.getElementById('main').style.height="385px";
var myChart = echarts.init(document.getElementById('main'));
// 指定图表的配置项和数据								
option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'line',
            lineStyle: {
                color: 'rgba(0,0,0,0.2)',
                width: 1,
                type: 'solid'
            }
        }
    },
    singleAxis: {
        axisTick: {},
        //axisLabel: {},
        type: 'time',
        position: 'top',
        splitLine: {
            show: true,
            lineStyle: {
                type: 'dashed',
                opacity: 0.2
            }
        }
    },
    series: [
        {
            type: 'themeRiver',
            itemStyle: {
                emphasis: {
                    shadowBlur: 20,
                    shadowColor: 'rgba(0, 0, 0, 0.8)'
                }
            },
            data: [['2015/11/08',10,'DQ'],['2015/11/09',15,'DQ'],['2015/11/10',35,'DQ'],
            // ['2015/11/11',38,'DQ'],['2015/11/12',22,'DQ'],['2015/11/13',16,'DQ'],
            ['2015/11/14',7,'DQ'],['2015/11/15',2,'DQ'],['2015/11/16',17,'DQ'],
            ['2015/11/17',33,'DQ'],['2015/11/18',40,'DQ'],['2015/11/19',32,'DQ'],
            ['2015/11/20',26,'DQ'],['2015/11/21',35,'DQ'],['2015/11/22',40,'DQ'],
            ['2015/11/23',32,'DQ'],['2015/11/24',26,'DQ'],['2015/11/25',22,'DQ'],
            // ['2015/11/26',16,'DQ'],['2015/11/27',22,'DQ'],['2015/11/28',10,'DQ'],
            ['2015/11/08',35,'TY'],['2015/11/09',36,'TY'],['2015/11/10',37,'TY'],
            ['2015/11/11',22,'TY'],['2015/11/12',24,'TY'],['2015/11/13',26,'TY'],
            ['2015/11/14',34,'TY'],['2015/11/15',21,'TY'],['2015/11/16',18,'TY'],
            ['2015/11/17',45,'TY'],['2015/11/18',32,'TY'],['2015/11/19',35,'TY'],
            ['2015/11/20',30,'TY'],['2015/11/21',28,'TY'],['2015/11/22',27,'TY'],
            ['2015/11/23',26,'TY'],['2015/11/24',15,'TY'],['2015/11/25',30,'TY'],
            ['2015/11/26',35,'TY'],['2015/11/27',42,'TY'],['2015/11/28',42,'TY'],
            ['2015/11/08',21,'SS'],['2015/11/09',25,'SS'],['2015/11/10',27,'SS'],
            ['2015/11/11',23,'SS'],['2015/11/12',24,'SS'],['2015/11/13',21,'SS'],
            ['2015/11/14',35,'SS'],['2015/11/15',39,'SS'],['2015/11/16',40,'SS'],
            ['2015/11/17',36,'SS'],['2015/11/18',33,'SS'],['2015/11/19',43,'SS'],
            ['2015/11/20',40,'SS'],['2015/11/21',34,'SS'],['2015/11/22',28,'SS'],
            // ['2015/11/23',26,'SS'],['2015/11/24',37,'SS'],['2015/11/25',41,'SS'],
            // ['2015/11/26',46,'SS'],['2015/11/27',47,'SS'],['2015/11/28',41,'SS'],
            // ['2015/11/08',10,'QG'],['2015/11/09',15,'QG'],['2015/11/10',35,'QG'],
            // ['2015/11/11',38,'QG'],['2015/11/12',22,'QG'],['2015/11/13',16,'QG'],
            ['2015/11/14',7,'QG'],['2015/11/15',2,'QG'],['2015/11/16',17,'QG'],
            ['2015/11/17',33,'QG'],['2015/11/18',40,'QG'],['2015/11/19',32,'QG'],
            ['2015/11/20',26,'QG'],['2015/11/21',35,'QG'],['2015/11/22',40,'QG'],
            ['2015/11/23',32,'QG'],['2015/11/24',26,'QG'],['2015/11/25',22,'QG'],
            ['2015/11/26',16,'QG'],['2015/11/27',22,'QG'],['2015/11/28',10,'QG'],
            ['2015/11/08',10,'SY'],['2015/11/09',15,'SY'],['2015/11/10',35,'SY'],
            ['2015/11/11',38,'SY'],['2015/11/12',22,'SY'],['2015/11/13',16,'SY'],
            ['2015/11/14',7,'SY'],['2015/11/15',2,'SY'],['2015/11/16',17,'SY'],
            ['2015/11/17',33,'SY'],['2015/11/18',40,'SY'],['2015/11/19',32,'SY'],
            ['2015/11/20',26,'SY'],['2015/11/21',35,'SY'],['2015/11/22',4,'SY'],
            ['2015/11/23',32,'SY'],['2015/11/24',26,'SY'],['2015/11/25',22,'SY'],
            ['2015/11/26',16,'SY'],['2015/11/27',22,'SY'],['2015/11/28',10,'SY'],
            ['2015/11/08',10,'DD'],['2015/11/09',15,'DD'],['2015/11/10',35,'DD'],
            ['2015/11/11',38,'DD'],['2015/11/12',22,'DD'],['2015/11/13',16,'DD'],
            ['2015/11/14',7,'DD'],['2015/11/15',2,'DD'],['2015/11/16',17,'DD'],
            ['2015/11/17',33,'DD'],['2015/11/18',4,'DD'],['2015/11/19',32,'DD'],
            ['2015/11/20',26,'DD'],['2015/11/21',35,'DD'],['2015/11/22',40,'DD'],
            ['2015/11/23',32,'DD'],['2015/11/24',26,'DD'],['2015/11/25',22,'DD'],
            ['2015/11/26',16,'DD'],['2015/11/27',22,'DD'],['2015/11/28',10,'DD']]
        }
    ]
};
// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);
window.onresize = myChart.resize;//图表自适应窗口大小
//main1
var myChart = echarts.init(document.getElementById('main1'));
// 指定图表的配置项和数据
option = {
toolbox: {
	show : true,
	padding : 10,
	feature : {
		mark : {show: true},
		dataView : {show: true, readOnly: false},
		saveAsImage : {show: true}
	}
},
tooltip: {},
series: [{
	type: 'wordCloud',
	gridSize: 20,
	sizeRange: [12, 50],
	rotationRange: [0, 0],
	shape: 'circle',
	textStyle: {
		normal: {
			color: function() {
				return 'rgb(' + [
					Math.round(Math.random() * 160),
					Math.round(Math.random() * 160),
					Math.round(Math.random() * 160)
				].join(',') + ')';
			}
		},
		emphasis: {
			shadowBlur: 10,
			shadowColor: '#333'
		}
	},
	data: [{
		name: '统计图表',
		value: 10000,
		textStyle: {
			normal: {
				color: 'black'
			},
			emphasis: {
				color: 'red'
			}
		}
	}, {
		name: '领域',
		value: 6181
	}, {
		name: '大量',
		value: 4386
	}, {
		name: '组织代码',
		value: 4055
	}, {
		name: '认证',
		value: 2467
	}, {
		name: '研究所',
		value: 2244
	}, {
		name: '教学设计',
		value: 1898
	}, {
		name: '文章',
		value: 1484
	}, {
		name: '错别字',
		value: 1112
	}, {
		name: '高效',
		value: 965
	}, {
		name: '学者',
		value: 847
	}, {
		name: '大学',
		value: 582
	}, {
		name: '统一格式',
		value: 555
	}, {
		name: '完成率',
		value: 550
	}, {
		name: '频率',
		value: 462
	}, {
		name: '科学',
		value: 366
	}, {
		name: '分析',
		value: 360
	}, {
		name: '挖掘',
		value: 282
	}, {
		name: '数据收集',
		value: 273
	}, {
		name: '图像显示',
		value: 265
	}]
}]
};
// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);
window.onresize = myChart.resize;//图表自适应窗口大小
//main2
var myChart = echarts.init(document.getElementById('main2'));
// 指定图表的配置项和数据
option = {
	toolbox: {
		show : true,
		padding : [2,10,2,2],
		feature : {
			mark : {show: true},
			dataView : {show: true, readOnly: false},
			saveAsImage : {show: true}
		}
	},
	tooltip: {},
	series: [{
		type: 'wordCloud',
		gridSize: 20,
		sizeRange: [12, 50],
		rotationRange: [0, 0],
		shape: 'circle',
		textStyle: {
			normal: {
				color: function() {
					return 'rgb(' + [
						Math.round(Math.random() * 160),
						Math.round(Math.random() * 160),
						Math.round(Math.random() * 160)
					].join(',') + ')';
				}
			},
			emphasis: {
				shadowBlur: 10,
				shadowColor: '#333'
			}
		},
		data: [{
			name: '文献视窗',
			value: 10000,
			textStyle: {
				normal: {
					color: 'black'
				},
				emphasis: {
					color: 'red'
				}
			}
		}, {
			name: '课程',
			value: 6181
		}, {
			name: '影响因子',
			value: 4386
		}, {
			name: '文献',
			value: 4055
		}, {
			name: '教授',
			value: 2467
		}, {
			name: '研究领域',
			value: 2244
		}, {
			name: '组织教学',
			value: 1898
		}, {
			name: '文献综述',
			value: 1484
		}, {
			name: '中心度',
			value: 1112
		}, {
			name: '完成',
			value: 965
		}, {
			name: '论文',
			value: 847
		}, {
			name: '写作',
			value: 582
		}, {
			name: '表格',
			value: 555
		}, {
			name: '图像',
			value: 550
		}, {
			name: '搞笑',
			value: 462
		}, {
			name: '科研',
			value: 366
		}, {
			name: '研究所',
			value: 360
		}, {
			name: '企业',
			value: 282
		}, {
			name: '统计',
			value: 273
		}, {
			name: '显示',
			value: 265
		}]
	}]
};
// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);
window.onresize = myChart.resize;//图表自适应窗口大小