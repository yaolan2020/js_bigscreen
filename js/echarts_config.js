function Echars(){}

// 饼图--圆环
Echars.prototype.pie = function(id,name,radius,result){
    let myChart = echarts.init(document.getElementById(id));
    let color_data=[];
    let series_data=[];
    for(let i=0;i<result.length;i++){
        color_data.push(result[i].color);
        series_data.push({value:result[i].data,name:result[i].name})
    }
    // 绘制图表
    myChart.setOption({
        color:color_data,
        graphic:{       //图形中间文字
            type:"text",
            left:"center",
            top:"center",
            style:{
                text:name,
                textAlign:"center",
                fill:"#fff",
                fontSize:15,
                fontWeight:600,
            }
        },
        series: [{
                name: '',
                type: 'pie',
                radius: radius,
                animation: false,
                label: {
                    show: false,
                    position: '',
                    alignTo: 'labelLine',
                    fontSize: '14',
                    fontWeight: 'bold'
                },
                labelLine: {
                    show: false
                },
                data: series_data
            }]
    });
}

//设备管理-饼图
Echars.prototype.equipmentPie = function(id,name,radius,result){
        let myChart = echarts.init(document.getElementById(id));
        let color_data=[];
        let series_data=[];
        for(let i=0;i<result.length;i++){
            color_data.push(result[i].color);
            series_data.push({value:result[i].data,name:result[i].name})
        }
        // 绘制图表
        myChart.setOption({
            color:color_data,
            graphic:{       //图形中间文字
                type:"text",
                left:"center",
                top:"center",
                style:{
                    text:name,
                    textAlign:"center",
                    fill:"#fff",
                    fontSize:15,
                    fontWeight:600,
                }
            },
            series: [{
                    name: '',
                    type: 'pie',
                    radius: radius,
                    animation: false,
                    label: {
                        show: true,
                        position: '',
                        alignTo: 'labelLine',
                        fontSize: '14',
                        fontWeight: 'bold'
                    },
                    labelLine: {
                        show: true
                    },
                    data: series_data
                }]
        });
}

//折线图
Echars.prototype.line = function(id,result,config){
    let myChart = echarts.init(document.getElementById(id));
    // 绘制图表
    myChart.setOption({
        color: config.color,
        grid: {
           top:config.top?config.top:0,
           right:config.right?config.right:0,
           bottom:config.bottom?config.bottom:0,
           left:config.left?config.left:0,
        },
        title: {
            x: 'center',
            y:'bottom',
            text: config.text,
            textStyle:{
                color:'#fff',
                fontSize:12
            }
        },
        xAxis: {
            type: 'category',
            data: config.x_data,
            axisTick: {
                alignWithLabel: true
            },
            axisLine: {
                onZero: false,
                lineStyle: {
                    color: '#fff'
                }
            },
            splitLine:{      //网格线
                show: false,  // 是否显示
            },
            axisTick: {
                show: false    //取消刻度
            },
        },
        yAxis: {
            type: 'value',
            color: '#ffffff',
            axisLabel: {
                textStyle:{
                    padding:[0,10,0,0],
                },
                color:'#ffffff',
            },
            splitLine:{      //网格线
                show: true,  // 是否显示
                lineStyle: {
                    color: '#5f5e5f',
                    width: 0.5,
                    type: 'dashed',
                }
            },
            axisTick: {
                show: false    //取消刻度
            },
            axisLine: {       // 坐标轴 轴线
                show: false,  // 是否显示
            },
        },
        series: result
    });
}

//折线图+柱形图
Echars.prototype.line_bar = function(id,result,config){
    let myChart_line_bar = echarts.init(document.getElementById(id));
    // 绘制图表
    myChart_line_bar.setOption({
        color: config.color,
        grid: {
           top:config.top?config.top:0,
           right:config.right?config.right:0,
           bottom:config.bottom?config.bottom:0,
           left:config.left?config.left:0,
        },
        title: {
            x: 'center',
            y:'bottom',
            text: config.text,
            textStyle:{
                color:'#fff',
                fontSize:12
            }
        },
        xAxis:[
            {
                type: 'category',
                data: config.x_data,
                axisTick: {
                    alignWithLabel: true
                },
                axisLine: {
                    onZero: false,
                    lineStyle: {
                        color: '#fff'
                    }
                },
                splitLine:{      //网格线
                    show: false,  // 是否显示
                },
            },
            {
                type: 'category',
                data: config.x_data,
                axisLine: {
                    show: false
                },
                axisLabel: {
                    show: false
                }
            },
        ],
        yAxis: [
            {
                type: 'value',
                color: '#ffffff',
                axisLabel: {
                    textStyle:{
                        padding:[0,10,0,0],
                    },
                    color:'#ffffff',
                },
                splitLine:{      //网格线
                    show: true,  // 是否显示
                    lineStyle: {
                        color: '#5f5e5f',
                        width: 0.5,
                        type: 'dashed',
                    }
                },
                axisTick: {
                    show: false    //取消刻度
                },
                axisLine: {       // 坐标轴 轴线
                    show: false,  // 是否显示
                },
                max: 30,
                min: 0,
            },
            {
                type: 'value',
                color: '#ffffff',
                axisLabel: {
                    show:true,
                    textStyle:{
                        padding:[0,10,0,0],
                    },
                    color:'#ffffff',
                },
                splitLine:{      //网格线
                    show: true,  // 是否显示
                    lineStyle: {
                        color: '#5f5e5f',
                        width: 0.5,
                        type: 'dashed',
                    }
                },
                axisTick: {
                    show: false    //取消刻度
                },
                axisLine: {       // 坐标轴 轴线
                    show: false,  // 是否显示
                },
                max: 300,
                min: 0,
            }
        ],
        series: result
    });
    myChart_line_bar.resize();
}

// 饼图--实心
Echars.prototype.pie_all = function(id,result,config){
        let myChart = echarts.init(document.getElementById(id));
        // 绘制图表
        console.log($('#'+id).parent('.tab_content_echars').width()) 
        myChart.setOption({
            color:config.color,
            graphic:{       //图形中间文字
                type:"text",
                left:"center",
                top:"bottom",
                style:{
                    text:config.text?config.text:'',
                    textAlign:"center",
                    fill:"#fff",
                    fontSize:15,
                    fontWeight:600,
                }
            },
            series: [{
                    type: 'pie',
                    radius: config.radius,
                    center: ['50%', '50%'],
                    animation: false,
                    label: {
                        position: 'inside',
                        alignTo: 'none',
                        bleedMargin: 5
                    },
                    top:config.top?config.top:0,
                    right:config.right?config.right:0,
                    bottom:config.bottom?config.bottom:0,
                    left:config.left?config.left:0,
                    data: result
                }]
        });

        $(window).resize(function() { myChart.resize(); });
    }


export default Echars;