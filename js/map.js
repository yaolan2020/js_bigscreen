   
    let map = new AMap.Map('containerMap', {
        center:[113.595301,24.787288],
        pitch:50, // 地图俯仰角度，有效范围 0 度- 83 度
        viewMode:'3D', // 地图模式
        zoom:11,
        mapStyle: 'amap://styles/2a075cff3403b4b12362ed749fb426e2', //设置地图的显示样式
    });
    addMap();
    mapDotList();

     //添加背景地图
    function addMap(){
        console.log('234243');
        map.setZoom(11);//最后再设置缩放级别
        /*添加个性化地图  start*/
        //map.setMapStyle('amap://styles/2a075cff3403b4b12362ed749fb426e2');
        map.setMapStyle('amap://styles/darkblue');
    }

    /*添加图片标记  start*/
    function mapDotList(){
        let markers=[
            {'lng':113.595301,'lat':24.787288,'icon':'/image/map_icon/people_m.png'},
            {'lng':113.695301,'lat':24.887288,'icon':'/image/map_icon/car_m.png'},
            {'lng':113.495310,'lat':24.887288,'icon':'/image/map_icon/camera_m.png'},
            {'lng':113.495301,'lat':24.687288,'icon':'/image/map_icon/fire_m.png'},
            {'lng':113.695301,'lat':24.687288,'icon':'/image/map_icon/camera_m.png'},
        ];
        markers.forEach(function(marker) {
            new AMap.Marker({
                map: map,
                icon: marker.icon,
                position: [marker.lng, marker.lat],
                offset: new AMap.Pixel(-13, -30),
            });
        });
    };