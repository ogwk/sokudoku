$(function(){
  var Timer;  
  var count;
  $(".startbtn").click(function(){
    $(".screen").children().remove();
    count = 0;
    var result = $(".screen").find(".circle");
    if(result.length === 0){

      count = 0;
      Timer = setInterval(function () {

        addCircle(count);        
      　count++;
        // 経過時間 >= 待機時間の場合、待機終了。
        if (count >= 19) {
            // タイマー停止
            // clearInterval(Timer);
            //クリア
            $(".screen").children().remove();
            count = 0;
        };        

        }, 500);
    };
  });
  $(".endbtn").click(function(){
    //タイマー停止
    clearInterval(Timer);
  });
});

  function addCircle(count){
    var size = count*50 + 50;
    if(count%2 === 0){
      var nowid = "circle" + count;    
      $(".screen").append('<div id="' + nowid + '" class="circle">');
      // setSize(size,nowid,count);
      // var obj = $('#' + nowid);    
      // obj.width(size);
      // obj.height(size);
      // obj.css('z-index',18 - count);    
    }else{
      var nowid = "circle" + count + "-out";        
      $(".screen").append('<div id="' + nowid + '" class="circle-out">');
      // setSize(size,nowid,count+5);    
      // var obj = $('#' + nowid);   
      // obj.width(size);
      // obj.height(size);
      // obj.css('z-index',18 - (count+1));  
      // alert(obj.width());
    }
    setSize(size,nowid,count);        
  }

  function setSize(size,nowid,count){
    var obj = $('#' + nowid);   
    obj.width(size);
    obj.height(size);
    obj.css('z-index',500 - (count));  
  }