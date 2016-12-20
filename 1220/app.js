function FloorList(data) {
    var mlc = 8,
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
    for (var i = mlc * 2; i < mlc * 3; i++) {
        fl2.push(data[i]);
    }
    for (var i = mlc * 3; i < mlc * 4; i++) {
        fl3.push(data[i]);
    }
    for (var i = mlc * 4; i < mlc * 5; i++) {
        fl4.push(data[i]);
    }


    FloorAll(fl0, 'Apparel', 1);
    FloorAll(fl1, 'Shoes', 2);
    FloorAll(fl2, 'Bag', 3);
    FloorAll(fl3, 'Accessories', 4);
    FloorAll(fl4, 'Others', 5);



}

function FloorAll(data, imgHead, id) {

    var str = '';
    for (var i = 2; i < data.length; i++) {
        var name = data[i]['简短商品名'],
            price = data[i].USA,
            imgUrl = './build/css/images/products/' + (imgHead + (i - 0)) + '.jpg',
            proUrl = data[i].站内链接;

        // str += '<li><a href="' + proUrl + '" target="_blank"><img src="' + imgUrl + '" width="230" height="230"></a>' +
        //     '<div class="pro_Price"><a href="' + proUrl + '" target="_blank">' + name + '</a><br />' +
        //     '<span>Price：' + price + '</span></div>' +
        //     '<div><a class="buynow" href="' + proUrl + '" target="_blank"></a></div>' +
        //     '</li>';

        str += '<li class="product">' +
            '<div class="tupian">' +
            '<a class="box_tu" href="' + proUrl + '" target="_blank"><img title="' + name + '" src="' + imgUrl + '" alt="' + name + '" /></a>' +
            '</div>' +
            '<a class="product_name" href="' + proUrl + '" target="_blank">' + name + '</a><strong class="price">$ ' + price + ' </strong>' +
            '<a class="buynow" href="' + proUrl + '" target="_blank"></a>' +
            '</li>';

    };

    var big_name = data[1]['简短商品名'];
    var big_price = data[1].USA;
    var big_img = './build/css/images/products/' + (imgHead + (1 - 0)) + '.jpg';
    var big_url = data[1].站内链接;

    var big = '<a class="big1" href="' + big_url + '" target="_blank">' +
        '<img title="' + big_name + '" src="' + big_img + '" alt="' + big_name + '" /></a>' +
        '<a class="product_name" href="' + big_url + '" target="_blank">Bridal Gown</a><strong class="price">$ ' + big_price + '</strong>' +
        '<a class="buynow" href="' + big_url + '" target="_blank"></a>';
    var floor = $("#floor_" + id);
    // $("#content_inner .content__floor").eq(id - 1).find('.more').attr("href", data[0].TB链接);

    floor.find('.more').attr("href", data[0].TB链接);
    floor.find('.big_thumb').html(big);
    floor.find('ul').html(str);

}