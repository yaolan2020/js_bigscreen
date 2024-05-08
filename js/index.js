import Echars from './echarts_config.js'
let echars = new Echars();
//进入页面需加载(页面自适应)
(function start() {
    //设置自适应布局
    (function(){
        var body=$('body');
        var winwidth=$(window).width();
        body[0].style.fontSize=winwidth/100-4.2+'px';
        if((winwidth/100-3)<14){
            body[0].style.overflowY='auto';
        }
    })();
})();
//企业信息--投产情况
let echar_company_production=[
    {name:'在建',data:100,color:'#FDB628'},
    {name:'筹建',data:50,color:'#67E0E3'},
    {name:'未投产',data:23,color:'#EB6F49'},
    {name:'已投产',data:230,color:'#745AF2'},
]
echars.equipmentPie('echar_company_production','投产\n情况',['60%', '80%'],echar_company_production);
//企业信息--企业分类
let echar_company_data=[
    {name:'涂料',data:1,color:'#CCB1FF'},
    {name:'树脂(水性)',data:2,color:'#C258FF'},
    {name:'涂料 油墨',data:3,color:'#6881E2'},
    {name:'树脂',data:4,color:'#1129DE'},
    {name:'除草剂',data:5,color:'#11A2DE'},
    {name:'未知',data:5,color:'#00F2FB'},
    {name:'饲料制造',data:1,color:'#05C35F'},
    {name:'涂料 树脂',data:2,color:'#EBA000'},
    {name:'五金制品',data:3,color:'#FDE800'},
    {name:'合成材料',data:4,color:'#EE1189'},
    {name:'塑料制品',data:5,color:'#FF7A22'},
    {name:'非化工类企业',data:5,color:'#EB0000'},
    {name:'其他专用化学产品',data:1,color:'#FE8E9F'},
    {name:'饲料添加剂',data:2,color:'#E64604'},
    {name:'其他化学品',data:3,color:'#8F0276'},
    {name:'有机化学原料造制',data:4,color:'#8607D7'},
    {name:'服装制造',data:5,color:'#12640B'},
]
echars.pie('echar_company','企业\n分类',['60%', '85%'],echar_company_data);

// 人员信息--分类
let echar_user_one=[
    {name:'求访人员',data:200,color:'#6b3de2'},
    {name:'管理人员',data:50,color:'#7fcaff'},
    {name:'企业职工',data:50,color:'#d84949'},
]
echars.pie('echar_user_one','分类',['60%', '90%'],echar_user_one);

// 人员信息--工种
let echar_user_two=[
    {name:'职员',data:200,color:'#6b3de2'},
    {name:'组长',data:50,color:'#4169eb'},
    {name:'主管',data:50,color:'#89eec6'},
    {name:'经理',data:50,color:'#f3df46'},
    {name:'厂长',data:50,color:'#e2994e'},
    {name:'总经理',data:50,color:'#d84949'},
    {name:'董事长',data:50,color:'#d8499b'},
]
echars.pie('echar_user_two','工种',['60%', '90%'],echar_user_two);


// 车辆信息--车型统计
let echar_cars_one=[
    {name:'内部车辆',data:200,color:'#1e88e5'},
    {name:'来访车辆',data:50,color:'#00ffff'},
    {name:'陌生车辆',data:50,color:'#745af2'},
]
echars.pie('echar_cars_one','车型\n统计',['75%', '90%'],echar_cars_one);

// 车辆信息--园区留存车辆
let echar_cars_two=[
    {name:'内部车辆',data:200,color:'#1e88e5'},
    {name:'来访车辆',data:50,color:'#00ffff'},
    {name:'陌生车辆',data:50,color:'#745af2'},
]
echars.pie('echar_cars_two','园区留\n存车辆',['75%', '90%'],echar_cars_two);

// 车辆信息--折线图
let config_cars_line={
    top:'10%',
    left:'8%',
    bottom:'23%',
    text:'来访车辆统计',
    color:'#1e88e5',
    x_data:['00:00','02:00','04:00','06:00','08:00','10:00','12:00','14:00','16:00','18:00','20:00','22:00','24:00'],
}
let result_data_car=[{
    data: [8,10,13,12,10,6,15,13,12,10,5,20,18],
    type: 'line',
    smooth: true,
}]
echars.line('echar_cars_line',result_data_car,config_cars_line);

// 人员信息--来访人员折线图
let config_user1_line={
    top:'5%',
    left:'15%',
    bottom:'33%',
    text:'来访人员：本周对比上周',
    color:['#1e88e5','#00ffff'],
    x_data:['MON','TUE','WED','THU','FRI','SAT','SUN'],
}
let result_data_user1=[{
    data: [8,10,13,12,10,6,15,13,12,10,5,20,18],
    type: 'line',
},{
    data: [18,20,13,12,10,6,15,13,12,10,5,20,18],
    type: 'line',
}]
echars.line('echar_user_line1',result_data_user1,config_user1_line);

// 人员信息--陌生人员折线图
let result_data_user2=[
    {
        data: [8,10,13,12,10,6,15,13,12,10,5,20,18],
        type: 'line',
    },
    {
        data: [18,9,13,12,10,6,15,13,12,10,5,20,18],
        type: 'line',
    }
]
let config_user2_line={
    top:'5%',
    left:'15%',
    bottom:'33%',
    text:'陌生人员：本周对比上周',
    color:['#1e88e5','#00ffff'],
    x_data:['MON','TUE','WED','THU','FRI','SAT','SUN'],
}
echars.line('echar_user_line2',result_data_user2,config_user2_line);





// 边界站点--分类统计
let echar_addr_one=[
    {name:'湿度',data:200,color:'#1e88e5'},
    {name:'温度',data:50,color:'#00ffff'},
    {name:'空气质量',data:50,color:'#745af2'},
]
//echars.pie('echar_addr_one','分类\n统计',['60%', '90%'],echar_addr_one);


// 边界站点--事件统计
let echar_addr_two=[
    {name:'PM2.5超标',data:200,color:'#fdb628'},
    {name:'一氧化碳超标',data:50,color:'#eb6f49'},
    {name:'二氧化碳超标',data:50,color:'#745af2'},
    {name:'粉尘超标',data:50,color:'#26c6da'},
]
//echars.pie('echar_addr_two','事件\n统计',['60%', '90%'],echar_addr_two);

//tab切换
tabChange();
function tabChange(){             
    let tabButton=$('.tab_button_li');
    let tabContent=$('.tab_content_li'); 
    for(let i=0;i<tabButton.length;i++){               
        tabButton[i].dataset.id=i;
        tabContent[i].dataset.id=i;                
        tabButton[i].onclick = function(){
            for(let j=0;j<tabButton.length;j++){
                tabButton[j].className='tab_button_li';      
            }
            for(let k=0;k<tabContent.length;k++){
                tabContent[k].style.visibility='hidden'
            }
            tabButton[this.dataset.id].classList.add('active');
            tabContent[this.dataset.id].style.visibility='visible';
        }
    }
}
//边界站点--公用配置
let echar_tab_config={
    top:'10%',
    left:'10%',
    right:'5%',
    bottom:'25%',
    color:['#EB6F49','#1E88E5','#FDB628','#BAD518'],
    x_data:['7月4日','7月5日','7月6日','7月7日','7月8日','7月9日','7月10日'],
}
//南区
let echar_tab1_south_data=[
    {
        data: [10,10,13,12,10,6,5,13,12,10,5,20,18],
        type: 'line',
    },
    {
        data: [11,9,13,12,10,6,15,13,1,10,5,20,8],
        type: 'line',
    },
    {
        data: [8,10,15,12,10,6,5,13,12,10,5,2,18],
        type: 'line',
    },
    {
        data: [1,9,13,2,10,6,15,3,12,10,5,20,18],
        type: 'line',
    },
]
let echar_tab1_south_config=Object.assign({text:'南区边界站检测数据图（单位：mg/m3）'},echar_tab_config)
echars.line('echar_tab1_south',echar_tab1_south_data,echar_tab1_south_config);
//北区
let echar_tab1_north_data=[
    {
        data: [10,10,13,12,10,6,5,13,12,10,5,20,18],
        type: 'line',
    },
    {
        data: [11,9,13,12,10,6,15,13,1,10,5,20,8],
        type: 'line',
    },
    {
        data: [8,10,15,12,10,6,5,13,12,10,5,2,18],
        type: 'line',
    },
    {
        data: [1,9,13,2,10,6,15,3,12,10,5,20,18],
        type: 'line',
    },
]
let echar_tab1_north_config=Object.assign({text:'北区边界站检测数据图（单位：mg/m3）'},echar_tab_config)
echars.line('echar_tab1_north',echar_tab1_north_data,echar_tab1_north_config);

//西区
let echar_tab1_west_data=[
    {
        data: [10,10,13,12,10,6,5,13,12,10,5,20,18],
        type: 'line',
    },
    {
        data: [11,9,13,12,10,6,15,13,1,10,5,20,8],
        type: 'line',
    },
    {
        data: [8,10,15,12,10,6,5,13,12,10,5,2,18],
        type: 'line',
    },
    {
        data: [1,9,13,2,10,6,15,3,12,10,5,20,18],
        type: 'line',
    },
]
let echar_tab1_west_config=Object.assign({text:'西区边界站检测数据图（单位：mg/m3）'},echar_tab_config)
echars.line('echar_tab1_west',echar_tab1_west_data,echar_tab1_west_config);

//tab2--污水处理
let echar_tab2_data=[
    {
        data: [10,100,130,102,100,200,300],
        type: 'bar',
        barWidth : 30,
        xAxisIndex: 1,
        yAxisIndex: 1,
    },
    {
        data: [11,9,13,20,10,6,15],
        type: 'line',
    },
    {
        data: [8,10,15,12,10,6,5],
        type: 'line',
    },
    {
        data: [1,9,30,2,10,6,15,3],
        type: 'line',
    },
    {
        data: [1,9,13,2,10,26,15],
        type: 'line',
    },
]
let echar_tab2_config={
    top:'10%',
    left:'10%',
    right:'10%',
    bottom:'10%',
    text:'污水处理厂数据图',
    color:['#7D64CE','#EB6F49','#1E88E5','#FDB628','#68E0E3'],
    x_data:['7月4日','7月5日','7月6日','7月7日','7月8日','7月9日','7月10日'],
}
echars.line_bar('echar_tab2',echar_tab2_data,echar_tab2_config);

//tab---企业工况--图一
let echar_tab3_config={
    top:'10%',
    left:'10%',
    right:'10%',
    bottom:'20%',
    radius: '75%',
}
let echar_tab3_data_one=[
    {
        name: '70%',
        value: 70
    }, 
    {
        name: '30%',
        value: 30
    }
]
let echar_tab3_config_one = Object.assign({text:''},echar_tab3_config);
echar_tab3_config_one.color=['rgba(250,111,92,1)','rgba(250,111,92,0.42)'],
echars.pie_all('echar_tab3_one',echar_tab3_data_one,echar_tab3_config_one);
//tab---企业工况--图2
let echar_tab3_data_two=[
    {
        name: '70%',
        value: 70
    }, 
    {
        name: '30%',
        value: 30
    }
]
let echar_tab3_config_two = Object.assign({text:''},echar_tab3_config);
echar_tab3_config_two.color=['rgba(0,216,235,1)','rgba(0,216,235,0.42)'],
echars.pie_all('echar_tab3_two',echar_tab3_data_two,echar_tab3_config_two);
//tab---企业工况--图3
let echar_tab3_three_data=[
    {
        data: [10,10,13,12,10,6,5,13,12,10,5,20,18],
        type: 'line',
    },
    {
        data: [11,9,13,12,10,6,15,13,1,10,5,20,8],
        type: 'line',
    }
]
let echar_tab3_config_three=Object.assign({text:'生产和未治理累计时长图'},echar_tab_config)
echar_tab3_config_three.color=['#FDB628','#1E88E5']
echars.line('echar_tab3_three',echar_tab3_three_data,echar_tab3_config_three);

//tab---设备信息--图1
let echar_equipment_data=[
    {name:'VOC设备',data:10,color:'#fdb628'},
    {name:'监控设备',data:100,color:'#67e0e3'},
    {name:'安全设备',data:23,color:'#eb6f49'},
]
echars.equipmentPie('echar_tab4_one','分类\n统计',['50%', '65%'],echar_equipment_data);
//tab---设备信息--图2
let echar_tab4_two_data=[
    {
        data: [10,10,13,12,10,6,5,13,12,10,5,20,18],
        type: 'line',
    }
]
let echar_tab4_two_config=Object.assign({text:'设备在线情况'},echar_tab_config)
echar_tab4_two_config.color=['#1E88E5'];
echars.line('echar_tab4_two',echar_tab4_two_data,echar_tab4_two_config);

////tab---事件工况--图1
//设备信息--分类统计
let echar_event_data=[
    {name:'安全事件',data:200,color:'#1e88e5'},
    {name:'入驻事件',data:50,color:'#00ffff'},
    {name:'来访事件',data:50,color:'#745af2'},
]
echars.pie('echar_tab5_one','分类\n统计',['50%', '70%'],echar_event_data);
echar_tab5_one
//实时获取时间
fillDate();
function fillDate(){
    //日期 
    let now = new Date(); 
    let yy=now.getFullYear();;  
    let mo = now.getMonth()+1; 
    let dd = now.getDate();  
    let cal = yy+"年"+ mo +"月"+dd+"日";
     //取时间 
    let hh = now.getHours();  
    let mm = now.getMinutes();  
    let ss = now.getTime() % 60000; 
    ss = (ss - (ss % 1000)) / 1000; 
    let clock = hh+':'; 
    if (mm < 10) clock += '0'; 
    clock += mm+':';  
    if (ss < 10) clock += '0';  
    clock += ss; 
    //向页面的相应位置进行赋值
    $("#year").html(cal);
    $("#hour").html(clock);
    let timeID=setTimeout(fillDate,1000);
}
//添加视频html
//videoHtml();
function videoHtml(){
    let vedio_one_data=[
        {id:'1',name:'东南角视频',date:'2019-09-09 13:00',path:'rtmp://223.71.17.22:1940/live/tychmp4'},
        {id:'2',name:'东北角视频',date:'2019-09-10 13:00',path:'rtmp://223.71.17.22:1940/live/tychmp4'},
    ];
    let vedio_two_data=[
        {id:'3',date:'2019-09-09 13:00',path:'rtmp://223.71.17.22:1940/live/tychmp4'},
        {id:'4',date:'2019-09-10 13:00',path:'rtmp://223.71.17.22:1940/live/tychmp4'},
        {id:'5',date:'2019-09-10 13:00',path:'rtmp://223.71.17.22:1940/live/tychmp4'},
        {id:'6',date:'2019-09-10 13:00',path:'rtmp://223.71.17.22:1940/live/tychmp4'},
    ];
    let vedio_one_html='';
    for(let i=0;i<vedio_one_data.length;i++){
        vedio_one_html += `<div>
                                <video id="${"vedio_"+vedio_two_data[i].id}" class="vedio_img video-js vjs-default-skin vjs-big-play-centered" preload="auto" poster="/image/sxtmy.gif" data-setup='{}'>
                                        <source src="${vedio_two_data[i].path}" type='rtmp/flv'/>
                                </video>
                                <div class='vedio_bottom'>
                                    <div class='vedio_name'>视频上墙</div>
                                    <div class='vedio_des'>
                                        <span class='name'>${vedio_one_data[i].name}</span><br/>
                                        <span class='date'>${vedio_one_data[i].date}</span>
                                    </div>
                                </div>
                            </div>`
    }
    $('#vedio_one').html(vedio_one_html);
    let vedio_two_html='';
    for(let i=0;i<vedio_two_data.length;i++){
        vedio_two_html += `<div>
                                <video id="${"vedio_"+vedio_two_data[i].id}" class="vedio_img video-js vjs-default-skin vjs-big-play-centered" preload="auto" poster="/image/sxtmy.gif" data-setup='{}'>
                                        <source src="${vedio_two_data[i].path}" type='rtmp/flv'/>
                                </video>
                                <div class='vedio_bottom'>
                                    <div class='vedio_name'>抓拍上墙</div>
                                    <div class='vedio_des'>
                                        <span class='date'>${vedio_two_data[i].date}</span>
                                    </div>
                                </div>
                            </div>`
    }
    $('#vedio_two').html(vedio_two_html);
}
//视频流播放
setTimeout( addVideo(),3000)
function addVideo(){
     //添加视频流
    var options={
        muted: false,
        height:301,
        width:401,
        controls:false,
        bigPlayButton : false,
        controlBar: false,
        flash:{
            hls:{
                withCredentials:false
            },
            swf:'/js/video-js.swf'
        }
    };
    let point=1;
    u3play();
    function  u3play(){
        if(point==7){
            return false;
        }else{
            setTimeout(function(){
                videojs('vedio_'+point, options, function onPlayerReady() {
                    this.play();
                });
                point++;
                u3play();
            },5000);
        }
    }
}




