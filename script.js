
let maxWidth = 8;
let maxHeight = 8;

const rectangleObject = document.getElementsByClassName('rectangle');

for (let i = 0; i < rectangleObject.length; i++) {
  rectangleObject[i].addEventListener('click', () => {
    //rectangleObject[i].classList.add('black-stone');
    putBlackStone(rectangleObject[i]);
    
  }, false);
}
function putBlackStone(obj) {
  if (obj.classList.contains('white-stone') == true) {
    alert('そこにはすでに白石があります');
  }else if (obj.classList.contains('black-stone') == true) {
    alert('そこにすでに黒石があります');
  }else {
    obj.classList.add('black-stone');
    reverseStone(obj);
  }
}
var xplus1Coord;
var xplus2Coord;
var xplus3Coord;
var xplus4Coord;
var xplus5Coord;
var xplus6Coord;
var xplus7Coord;

var xminus1Coord;
var xminus2Coord;
var xminus3Coord;
var xminus4Coord;
var xminus5Coord;
var xminus6Coord;
var xminus7Coord;
function reverseStone(obj) {
  for (let xi = 1; xi <= maxWidth; xi++) {
    if(obj.classList.contains('x'+xi) == true) {
      var xcoord = 'x'+xi;
      console.log(xcoord);
      //xiのiの数字部分を取り出して数値に変換
      var num = xcoord.match(/[0-9]+/);
      var xnum = parseInt(num, 10);
      console.log(xnum);
      for (plus_i = 1; plus_i <= 7; plus_i++) {
        let sum = xnum + plus_i;
        //console.log(sum);
        eval("xplus" + plus_i + "=" + sum + ";");
        eval("xplus" + plus_i + "Coord = 'x' + xplus" + plus_i + ";");
        console.log(eval("xplus" + plus_i + "Coord"));
      }
      for (minus_i = 1; minus_i <= 7; minus_i++) {
        let sum = xnum - minus_i;
        //console.log(sum);
        eval("xminus" + minus_i + "=" + sum + ";");
        eval("xminus" + minus_i + "Coord = 'x' + xminus" + minus_i + ";");
        console.log(eval("xminus" + minus_i + "Coord"));
      }
      
      //var xplus2 = xnum + 2;
      //console.log('x'+xplus1);
      //console.log(num);
      //console.log(xnum);
      console.log(xplus3Coord);
    }
  }
  for (let yi = 1; yi <= maxHeight; yi++) {
    var ycoord = 'y'+yi;
    if(obj.classList.contains(ycoord) == true) {
      //console.log(ycoord);
      //yiのiの数字部分を取り出して数値に変換
      var num = ycoord.match(/[0-9]+/);
      var ynum = parseInt(num, 10);
      //console.log(num);
      //console.log(ynum);
      //yiをもちblack-stoneもつ要素を配列で取得
      let result = document.getElementsByClassName('black-stone '+ycoord);
      //console.log(result);
      result = Array.from(result);
      console.log(result);
      result.forEach((yresult) => {
        console.log(yresult);
        console.log(xcoord);
        if(yresult.classList.contains(xcoord) == true) {
          console.log(yresult.classList);
          console.log('self');
        }else {
          yresult.classList.forEach((nearYClassItem) => {
            console.log(nearYClassItem);
            if (nearYClassItem.includes('x'+ xplus1)) {
              console.log('successx+1');
            }else if (nearYClassItem.includes(xplus2Coord)) {
              console.log('successx+2');
              // var reverseObject;
              // reverseObject = document.getElementsByClassName('white-stone '+xplus1Coord);
              // reverseObject = Array.from(reverseObject);
              // console.log(reverseObject);
              // reverseObject.forEach((obj) => {
              //   console.log(obj.classList);
              //   obj.classList.remove('white-stone');
              //   obj.classList.add('black-stone');
              // });
              forRightReverse(2);
            }else if (nearYClassItem.includes('x'+ xplus3)) {
              console.log('successx+3');
              forRightReverse(3);
            }else if (nearYClassItem.includes('x'+ xplus4)) {
              console.log('successx+4');
              forRightReverse(4);
            }else if (nearYClassItem.includes('x'+ xplus5)) {
              console.log('successx+5');
              forRightReverse(5);
            }else if (nearYClassItem.includes('x'+ xplus6)) {
              console.log('successx+6');
              forRightReverse(6);
            }else if (nearYClassItem.includes('x'+ xplus7)) {
              console.log('successx+7');
              forRightReverse(7);
            }

            //ここからマイナス
            if (nearYClassItem.includes('x'+ xminus1)) {
              console.log('successx-1');
            }else if (nearYClassItem.includes(xminus2Coord)) {
              console.log('successx+2');
              // var reverseObject;
              // reverseObject = document.getElementsByClassName('white-stone '+xminus1Coord);
              // reverseObject = Array.from(reverseObject);
              // console.log(reverseObject);
              // reverseObject.forEach((obj) => {
              //   console.log(obj.classList);
              //   obj.classList.remove('white-stone');
              //   obj.classList.add('black-stone');
              // });
              forLeftReverse(2);
            }else if (nearYClassItem.includes(xminus3Coord)) {
              console.log('successx+3');
              forLeftReverse(3);
            }else if (nearYClassItem.includes(xminus4Coord)) {
              console.log('successx+4');
              forLeftReverse(4);
            }else if (nearYClassItem.includes(xminus5Coord)) {
              console.log('successx+5');
              forLeftReverse(5);
            }else if (nearYClassItem.includes(xminus6Coord)) {
              console.log('successx+6');
              forLeftReverse(6);
            }else if (nearYClassItem.includes(xminus7Coord)) {
              console.log('successx+7');
              forLeftReverse(7);
            }
          });
        }
      });

    }
  }
}

function forRightReverse(count) {
  for(let reverse_i = 1; reverse_i < count; reverse_i++) {
    var reverseObject;
    // console.log(xplus2Coord);
    // console.log(eval("'white-stone '+xplus" + reverse_i + "Coord"));
    eval("reverseObject = document.getElementsByClassName('white-stone '+xplus" + reverse_i + "Coord);");
    reverseObject = Array.from(reverseObject);
    console.log(reverseObject);
    reverseObject.forEach((obj) => {
      console.log(obj.classList);
      obj.classList.remove('white-stone');
      obj.classList.add('black-stone');
    });
  }
}
function forLeftReverse(count){
    console.log('ここからマイナス');
    for(let reverse_i = 1; reverse_i < count; reverse_i++) {
      var reverseObject;
    console.log(eval("'white-stone '+xminus" + reverse_i + "Coord"));
    eval("reverseObject = document.getElementsByClassName('white-stone '+xminus" + reverse_i + "Coord);");
    reverseObject = Array.from(reverseObject);
    console.log(reverseObject);
    reverseObject.forEach((obj) => {
      console.log(obj.classList);
      obj.classList.remove('white-stone');
      obj.classList.add('black-stone');
    });
  }
}

function forLeftReverse(count) {
  for(let reverse_i = 1; reverse_i < count; reverse_i++) {
    var reverseObject;
    // console.log(xplus2Coord);
    // console.log(eval("'white-stone '+xplus" + reverse_i + "Coord"));
    eval("reverseObject = document.getElementsByClassName('white-stone '+xminus" + reverse_i + "Coord);");
    reverseObject = Array.from(reverseObject);
    console.log(reverseObject);
    reverseObject.forEach((obj) => {
      console.log(obj.classList);
      obj.classList.remove('white-stone');
      obj.classList.add('black-stone');
    });
  }
}



window.onload = function() {
  //alert('11');
    // 
    // for (let width_i = 0; width_i < maxHeight; width_i++) {
      
    //     //$("#gametable").append("<tr>");
    //     document.write('<tr>');
    //       for (let height_i = 0; height_i < maxWidth; height_i++) {
    //         $("#gametable").append('<td><canvas class="rectangle" width="150" height="150"></canvas></td>');
    //       }
    //     $("#gametable").append("</tr>");
    // }

    // for (let width_i = 0; width_i < maxHeight; width_i++) {
      
    //   $("#gametable").append("<div>");
    //     for (let height_i = 0; height_i < maxWidth; height_i++) {
    //       $("#gametable").append('<td>aa<canvas class="rectangle" width="150" height="150"></canvas></td>');
    //     }
    //   $("#gametable").append("</div>");
    // }

  //alert('aa');
  draw();
  function draw() {
      var canvas = document.getElementById('canvas');
      //var canvas = document.getElementsByClassName('rectangle');
      console.log(canvas);
      if (canvas.getContext) {
      var ctx = canvas.getContext('2d');
      console.log(canvas);
      ctx.fillRect(25, 25, 100, 100);
      ctx.clearRect(45, 45, 60, 60);
      ctx.strokeRect(50, 50, 50, 50);
    }
  }
}