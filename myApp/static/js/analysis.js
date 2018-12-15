 var chart = {
        zoomType: 'xy',
        type:"column",
        backgroundColor:'#EEFFFF'
    };
    var subtitle = {
       text: '经费使用情況'
    };
    var title = {
        text: null
    };
    var yAxis= { // 第一条Y轴
        title: {
            text: '费用(元)',
             x:20
        },
        labels: {
            style: {
                color: '#666'
            }
        },
        min:0
    };

    var tooltip = {
        shared: true
    };
    var legend = {
        enabled:false,
        layout: 'vertical',
        align: 'left',
        x: 120,
        verticalAlign: 'top',
        y: 0,
        floating: true,
        backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
    };

    //初始化
    $(document).ready(function () {
        var series = [
            {
                name:null,
                data: []
            }
        ];
        var xAxis = {
            categories: [],
            crosshair: true,
            tickInterval: 1
        };
        var json = {};
        json.chart = chart;
        json.title = title;
        json.subtitle = subtitle;

        json.tooltip = tooltip;
        json.legend = legend;
        json.yAxis = yAxis;
        json.xAxis = xAxis;
        json.series = series;
        $('#container').highcharts(json);
    });

 function submit_chart() {
     var startTime;
     var endTime;
     var daterange = $("input[name='daterange']").val();
         if(daterange != ""){
             var dateArr = daterange.split("~");
             startTime = dateArr[0]+"00:00:00";
             endTime = (dateArr[1]+" 23:59:59").trim();
         }

         var selectType = $("#selectType").val();
         var sysoffice_id = $("#sysoffice_id").val();
         var personal_id = $("#personal_id").val();
         $.ajax({
            type: "post",
            async: "true",
             url:'/report/analysis/',
            data: {"sysoffice_id":sysoffice_id,"personal_id":personal_id,
                   "startTime":startTime, "endTime":endTime,"selectType":selectType
            },
            dataType:"json",
            success: function (result) {

                var chartJsonInfo = result;
                //console.log(chartJsonInfo);

                if ('' != chartJsonInfo) {
                    lineChart(chartJsonInfo);
                }else{
                    var json = {};
                     json.chart = chart;
                     json.title = title;
                     json.subtitle = subtitle;
                     var yAxis= { // 第一条Y轴

                        title: {
                            text: '费用(元)',
                            x:20
                        },
                        labels: {
                            style: {
                                color: '#666'
                            }
                        },
                        min:0
                    };
                    var series = [
                        {
                            name:null,
                            data: [0]
                        }
                    ];
                    json.series = series;
                    json.yAxis = yAxis;
                    json.legend = legend;
                    $('#container').highcharts(json);
                }
            },
            error:function(status){
                alert("查询异常")
            }
         });
 }

function lineChart(chartJsonInfo)
{
	var x_name=[];
	var y_data=[];
	for(var i=0; i<chartJsonInfo.length; i++){
         x_name.push(chartJsonInfo[i].x_name);
         y_data.push(chartJsonInfo[i].y_actual);
	}
	 var dataJson = {
				marker: {
					enabled: false
				},
				//data: [ -7.0, 6.9, -9.5, -14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, -9.6]
				data:y_data
			};

      var series = [];
	  series.push(dataJson);
     // console.log(series)

	var xAxis = {
		//categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun','Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
		categories: x_name,
		crosshair: true,
		tickInterval: 1
	};

	 var selectType = $("#selectType").val();
    var selectStr ="";
    if(selectType=="1"){
        selectStr = "费用使用情况"
    }else if(selectType=="2"){
        selectStr = "按类型统计情况"
    }else{
        selectStr = "按金额统计情况"
    }
     var subtitle = {
       text: selectStr
    };


    var y_title  = "元";
    var sysoffice_id = $("#sysoffice_id").val();
    var personal_id = $("#personal_id").val();
    if(sysoffice_id == "" && personal_id=="" && selectType=="1"){
        y_title = "%";
    }


    var tooltip ={
            shared: true,  // 提示框是否共享
            enabled : true, // 是否启用提示框， 默认启用
            useHTML: true,
            formatter : function (){ // 提示框格式化字符串
                 var s = this.x+ '</b>';
                  s += '<br/>' +  this.y.toFixed(2)
                 var sysoffice_id = $("#sysoffice_id").val();
                 var personal_id = $("#personal_id").val();
                 if(sysoffice_id == "" && personal_id==""){
                    s+= y_title;
                 }else{
                     s+= y_title;
                 }
                 return s;
             }
     }

    var yAxis= { // 第一条Y轴
        title: {
            text: '费用('+y_title+')',
            x:20
        },
        labels: {
            style: {
                color: '#666'
            }
        },
        min:0
    };

    var exporting = {
        enabled:true,
        allowHTML: Boolean,
        filename:'52wulian.org',//导出的文件名
        type:'image/png',//导出的文件类型
        width:800    //导出的文件宽度
    };

    var plotOptions =  {
		column: {
			// 关于柱状图数据标签的详细配置参考：https://api.hcharts.cn/highcharts#plotOptions.column.dataLabels
			dataLabels: {
				enabled: true
				// align: 'top'  // 竖直对齐方式，默认是 center
			}
		}
	};



	var json = {};
	json.chart = chart;
	json.title = title;
	json.subtitle = subtitle;

	json.legend = legend;
	json.tooltip = tooltip;
	json.plotOptions = plotOptions;

	json.yAxis = yAxis;
	json.xAxis = xAxis;
	json.series = series;

	$('#container').highcharts(json);
	//alert(1)
}