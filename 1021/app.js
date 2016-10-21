function FloorList(data) {
    var mlc = 16,
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
    FloorAll(fl1, 'G', 2);
    // FloorAll(fl2, 'stationary', 3);



}

function FloorAll(data, imgHead, id) {

    var str = '';
    for (var i = 1; i < data.length; i++) {
        var name = data[i]['简短商品名'],
            price = data[i].USA,
            imgUrl = './build/css/images/products/' + imgHead + (i + 0) + '.jpg',
            proUrl = data[i].站内链接;

        str += '<li>' +
         '   <div class="thumb">' +
          '    <a href="' + proUrl + '" target="_blank">' +
           '     <img src="' + imgUrl + '">'+
            '  </a>'+
            '</div>'+
            '<div class="pro_info">'+
            '  <a href="' + proUrl + '" target="_blank" class="title">' + name + '</a>'+
             ' <span class="pro_price">$' + price + '</span>'+
            '</div>'+
             '<a href="' + proUrl + '" target="_blank" class="buy-btn">&nbsp;</a>'+
          '</li>';
      

    };



    $("#content_inner .content__floor").eq(id-1).find('.more').attr("href", data[0].TB链接);

    $("#content_inner .content__floor").eq(id-1).find('ul').html(str);

}