
let maxWidth = 8;
let maxHeight = 8;

const rectangleObject = document.getElementsByClassName('rectangle');

for (let i = 0; i < rectangleObject.length; i++) {
  rectangleObject[i].addEventListener('click', () => {
    //rectangleObject[i].classList.add('black-stone');
    putBlackStone(rectangleObject[i]);
    reverseStone(rectangleObject[i]);
  }, false);
}
function putBlackStone(obj) {
  if (obj.classList.contains('white-stone') == true) {
    alert('そこにはすでに白石があります');
  }else if (obj.classList.contains('black-stone') == true) {
    alert('そこにすでに黒石があります');
  }else {
    obj.classList.add('black-stone');
  }
}

function reverseStone(obj) {
  for (let xi = 1; xi <= maxWidth; xi++) {
    if(obj.classList.contains('x'+xi) == true) {
      var xcoord = 'x'+xi;
      console.log(xcoord);
      //xiのiの数字部分を取り出して数値に変換
      var num = xcoord.match(/[0-9]+/);
      var xnum = parseInt(num, 10);
      var xplus1 = xnum + 1;
      var xplus1Coord = 'x' + xplus1;
      var xplus2 = xnum + 2;
      //console.log('x'+xplus1);
      //console.log(num);
      //console.log(xnum);
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
            }else if (nearYClassItem.includes('x'+ xplus2)) {
              console.log('successx+2');
              var reverseObject;
              reverseObject = document.getElementsByClassName('white-stone '+xplus1Coord);
              reverseObject = Array.from(reverseObject);
              console.log(reverseObject);
              reverseObject.forEach((obj) => {
                console.log(obj.classList);
                obj.classList.remove('white-stone');
                obj.classList.add('black-stone');
              });
            }
          });
        }
      });

    }
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