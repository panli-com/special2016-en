function FloorList(data){
      var mlc = 9,fl1 = [],fl2 = [],fl3 = [],fl4 = [],fl0 = [];

          for(var i=0;i<mlc;i++){
              fl0.push(data[i]);
          }
          for(var i=mlc;i<mlc*2;i++){
              fl1.push(data[i]);
          }
          for(var i=mlc*2;i<mlc*3;i++){
              fl2.push(data[i]);
          }
          for(var i=mlc*3;i<mlc*4;i++){
              fl3.push(data[i]);
          }
          for(var i=mlc*4;i<mlc*5;i++){
              fl4.push(data[i]);
          }
         
        
          FloorAll(fl0,'onepiece',1);
          FloorAll(fl1,'bikini',2);
          FloorAll(fl2,'Tankini',3);
          FloorAll(fl3,'Skirtini',4);
          FloorAll(fl4,'Tuniccoverup',5);
        
        
}

function FloorAll(data,imgHead,id){

	var str = '';
            for(var i=1;i<data.length;i++){
                var name = data[i]['简短商品名'],
                    price = data[i].USA,                  
                    imgUrl = './build/images/products/'+imgHead+(i+0)+'.jpg',
                    proUrl = data[i].站内链接;

              
            str +=   '<li><a href="'+ proUrl +'" target="_blank"><img src="'+ imgUrl +'" width="230" height="230"></a>'+
              '<div class="pro_Price"><a href="'+ proUrl +'" target="_blank">'+ name +'</a><br />'+
               ' Price：$'+ price +'</div>'+
            '</li>';
            
             
         
 
     };
    

    
     $("#floor-"+id).find('.Swimsuits_more').attr("href",data[0].TB链接)
                   
    
       
     $("#floor-"+id).find('ul').html(str);
}