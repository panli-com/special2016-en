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


    FloorAll(fl0, 'strawberry', 1);
    FloorAll(fl1, 'watermelon', 2);
    FloorAll(fl2, 'banana', 3);
    FloorAll(fl3, 'cherry', 4);
    FloorAll(fl4, 'others', 5);


}

function FloorAll(data, imgHead, id) {

    var str = '';
    for (var i = 2; i < data.length; i++) {
        var name = data[i]['简短商品名'],
            price = data[i].USA,
            imgUrl = './build/css/images/products/' + imgHead + (i + 0) + '.jpg',
            proUrl = data[i].站内链接;

        str += ' <li class="product">' +
            '<div class="tupian">' +
            '<a class="box_tu" href="' + proUrl + '" target="_blank">' +
            '<img title="product" src="' + imgUrl + '" alt="' + name + '" /></a>' +
            '</div>' +
            '<a class="product_name" href="' + proUrl + '" target="_blank">' + name + '</a><strong class="price">$ ' + price + ' </strong>' +
            '<a class="buynow" href="' + proUrl + '" target="_blank"></a>' +
            '</li>'


    };

    var name = data[1]['简短商品名'],
        price = data[1].USA,
        imgUrl = './build/css/images/products/' + imgHead + (1 + 0) + '.jpg',
        proUrl = data[1].站内链接;

    var big = '<a class="big1" href="' + proUrl + '" target="_blank">' +
        '<img title="product" src="' + imgUrl + '" alt="1" /></a>' +
        '<a class="product_name" href="' + proUrl + '" target="_blank">' + name + '</a>' +
        '<strong class="price">$ ' + price + '</strong>' +
        '<a class="buynow" href="' + proUrl + '" target="_blank"></a>';


    $("#floor-" + id).find('.title_more').attr("href", data[0].TB链接)

    $("#floor-" + id).find('.bigbox').html(big);


    $("#floor-" + id).find('ul').html(str);
    
}