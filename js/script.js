$(function(){
  var Timer;  
  var count;
  var runnning = 0;
  $(".strech-startbtn").click(function(){
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
        }, 5000);
      };
    } catch (error) {
      alert(error);
      // expected output: ReferenceError: nonExistentFunction is not defined
      // Note - error messages will vary depending on browser
    }
  });

  $(".strech-endbtn").click(function(){
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
    }    
    
  });

  // 文字ランダム瞬間表示
  let runnning2 = 0;  
  let Timer2;
  let strdata_before;
  let strdata;         
  let strarr= ['りんご','ごりら','ラッパ','パンツ','つくし','猫','犬','猿'];  

  $(".random-startbtn").click(function(){
    try{    
      if(runnning2 === 0){
        runnning2 = 1;    

        Timer2 = setInterval(function () {
          strdata_before = strdata;
          strdata = strarr[Math.floor(Math.random() * strarr.length)];   
          while(strdata === strdata_before){
            strdata = strarr[Math.floor(Math.random() * strarr.length)];   
          }       
          showdata(strdata);
        },1000);
      }
    }catch (error) {
      alert(error);
    }    
  });
// 終了ボタン押下
  $(".random-endbtn").click(function(){
    try {
      //タイマー停止
      if(runnning2 === 1){
        clearInterval(Timer2);
        runnning2 = 0;
      }else{
        // break;
      };    
    } catch (error) {
      alert(error);
    }    
  });

});

/*関数定義*/
function addCircle(count){
/* 丸追加　*/
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
/* 四角追加　*/
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
/* サイズセット　*/
  var obj = $('#' + nowid);   
  obj.width(widthsize);
  obj.height(heightsize);
  obj.css('z-index',500 - (count));  
}
function showdata(showdata){
  /* 文字ランダム表示*/
  //クリア
  try{
    $(".screen").children().remove();  
      
    // 高さ取得
    let height_min = $(".screen").offset().top;
    let height_max = height_min + $(".screen").outerHeight() - 100;
    let random_top = Math.floor( Math.random() * ((height_max + 1) - height_min) + height_min);
    // 横位置取得
    let width_min = $(".screen").offset().left;
    let width_max =  width_min + $(".screen").outerWidth() - 100;
    let random_left = Math.floor( Math.random() * ((width_max + 1) - width_min) + width_min);

    // 位置セット
    $(".screen").append('<div class="str1">' + showdata + '</div>');
    $(".str1").offset({
      top: random_top,
      left: random_left
    });    
  }catch(error){
    alert(error);
    clearInterval(Timer2);
    runnning2 = 0;    
  }
}