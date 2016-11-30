function FloorList(data) {
    var mlc = 25,
        fl1 = [],
        fl2 = [],
        fl3 = [],
        fl4 = [],
        fl0 = [];

    for (var i = 0; i < mlc; i++) {
        fl0.push(data[i]);
    }
    for (var i = mlc; i < mlc * 2; i++) {
        fl1.push(data[i]);
    }
    // for (var i = mlc * 2; i < mlc * 3; i++) {
    //     fl2.push(data[i]);
    // }
    // for (var i = mlc * 3; i < mlc * 4; i++) {
    //     fl3.push(data[i]);
    // }
    // for (var i = mlc * 4; i < mlc * 5; i++) {
    //     fl4.push(data[i]);
    // }


    FloorAll(fl0, 'B', 1);
    // FloorAll(fl1, 'G', 2);
    // FloorAll(fl2, 'stationary', 3);



}

function FloorAll(data, imgHead, id) {

    var str = '';
    for (var i = 1; i < data.length; i++) {
        var name = data[i]['简短商品名'],
            price = data[i].USA,
            imgUrl = './build/css/images/products/'  + (i + 0) + '.jpg',
            proUrl = data[i].站内链接;

        str += '<li><a href="'+ proUrl +'" target="_blank"><img src="'+ imgUrl +'" width="230" height="230"></a>' +
            '<div class="pro_Price"><a href="'+ proUrl +'" target="_blank">'+ name +'</a><br />' +
            '<span>Price：'+ price +'</span></div>' +
            '<div><a class="buynow" href="'+ proUrl +'" target="_blank"></a></div>' +
            '</li>';

    };



    // $("#content_inner .content__floor").eq(id - 1).find('.more').attr("href", data[0].TB链接);

    $("#content_inner ul").eq(0).html(str);

}