$(function(){
  var Timer;  
  var count;
  var runnning = 0;
  $(".startbtn").click(function(){
    try {
      if(runnning === 0){
        runnning = 1;
        $(".screen").children().remove();
        count = 0;
        Timer = setInterval(function () {

          // addCircle(count);        
          addSquare(count);        
        　count++;

          if (count >= 19) {
              //クリア
              $(".screen").children().remove();
              count = 0;
          };        
        }, 50);
      };
    } catch (error) {
      alert(error);
      // expected output: ReferenceError: nonExistentFunction is not defined
      // Note - error messages will vary depending on browser
    }
  });

  $(".endbtn").click(function(){
    try {
      //タイマー停止
      if(runnning === 1){
        clearInterval(Timer);
        runnning = 0;
      }else{
        // break;
      };    
    } catch (error) {
      alert(error);
      // expected output: ReferenceError: nonExistentFunction is not defined
      // Note - error messages will vary depending on browser
    }    
    
  });
});

  function addCircle(count){
    var size = count*50 + 50;
    if(count%2 === 0){
      var nowid = "circle" + count;    
      $(".screen").append('<div id="' + nowid + '" class="circle">');
    }else{
      var nowid = "circle" + count + "-out";        
      $(".screen").append('<div id="' + nowid + '" class="circle-out">');
    }
    setSize(size,nsizeowid,count);        
    setSize(size,size,nowid,count);        
  }

  function addSquare(count){
    var widthsize = count*50 + 100;
    var heightsize = count*50 + 30;
    if(count%2 === 0){
      var nowid = "square" + count;    
      $(".screen").append('<div id="' + nowid + '" class="square">');
    }else{
      var nowid = "square" + count + "-out";        
      $(".screen").append('<div id="' + nowid + '" class="square-out">');
    }
    setSize(widthsize, heightsize,nowid,count);        
  }

  function setSize(widthsize,heightsize,nowid,count){
    var obj = $('#' + nowid);   
    obj.width(widthsize);
    obj.height(heightsize);
    obj.css('z-index',500 - (count));  
  }