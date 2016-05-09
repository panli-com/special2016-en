function FloorList(data){
      var mlc = 10,fl1 = [],fl2 = [],fl3 = [],fl4 = [],fl0 = [];

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
         
        
          FloorAll(fl0,'Snap',1);
          FloorAll(fl1,'cover',2);
          FloorAll(fl2,'Bumper',3);
          FloorAll(fl3,'Bracket',4);
          FloorAll(fl4,'Halter',5);
        
        
}

function FloorAll(data,imgHead,id){

	var str = '';
            for(var i=0;i<data.length;i++){
                var name = data[i].简短商品名,
                    price = data[i].USA,                  
                    imgUrl = './build/images/products/'+imgHead+(i+1)+'.jpg',
                    proUrl = data[i].站内链接;
                    
                    
             str += '<li><a href="'+ proUrl +'" target="_blank"><img src="'+ imgUrl +'" width="180" height="200"></a>'+
              '<div class="pro_Price"><a href="#" target="_blank">'+ name +'</a><br />'+
              'Price：$'+ price +'</div>'+
            '</li>';
              
             
             
 
            };
   
         
                
       
     $("#floor-"+id).find("ul").html(str);
}