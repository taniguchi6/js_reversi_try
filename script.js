
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
        //console.log(eval("xplus" + plus_i + "Coord"));
      }
      for (minus_i = 1; minus_i <= 7; minus_i++) {
        let sum = xnum - minus_i;
        //console.log(sum);
        eval("xminus" + minus_i + "=" + sum + ";");
        eval("xminus" + minus_i + "Coord = 'x' + xminus" + minus_i + ";");
        //console.log(eval("xminus" + minus_i + "Coord"));
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
              console.log(ycoord);
              let right1 = document.getElementsByClassName(ycoord + ' ' + xplus1Coord);
              console.log(right1);
              let right1ClassList;
              right1 = Array.from(right1);
              right1.forEach((right) => {
                right1ClassList = right.classList;
              });
              let right1Result = right1ClassList.contains('white-stone');
              if (right1Result == true) {
                forRightReverse(2);
              }
              
            }else if (nearYClassItem.includes(xplus3Coord)) {
              console.log('successx+3');
              let right1 = document.getElementsByClassName(ycoord + ' ' + xplus1Coord);
              let right2 = document.getElementsByClassName(ycoord + ' ' + xplus2Coord);
              let right1ClassList;
              let right2ClassList;
              right1 = Array.from(right1);
              right1.forEach((right) => {
                right1ClassList = right.classList;
              });
              right2 = Array.from(right2);
              right2.forEach((right) => {
                right2ClassList = right.classList;
              });
              let right1Result = right1ClassList.contains('white-stone');
              let right2Result = right2ClassList.contains('white-stone');
              console.log(right1Result);
              console.log(right2Result);
              if (right1Result == true && right2Result == true) {
                forRightReverse(3);
              }
              
            }else if (nearYClassItem.includes('x'+ xplus4)) {
              console.log('successx+4');
              let right1 = document.getElementsByClassName(ycoord + ' ' + xplus1Coord);
              let right2 = document.getElementsByClassName(ycoord + ' ' + xplus2Coord);
              let right3 = document.getElementsByClassName(ycoord + ' ' + xplus3Coord);
              let right1ClassList;
              let right2ClassList;
              let right3ClassList;
              right1 = Array.from(right1);
              right1.forEach((right) => {
                right1ClassList = right.classList;
              });
              right2 = Array.from(right2);
              right2.forEach((right) => {
                right2ClassList = right.classList;
              });
              right3 = Array.from(right3);
              right3.forEach((right) => {
                right3ClassList = right.classList;
              });
              let right1Result = right1ClassList.contains('white-stone');
              let right2Result = right2ClassList.contains('white-stone');
              let right3Result = right3ClassList.contains('white-stone');
              console.log(right1Result);
              console.log(right2Result);
              console.log(right3Result);
              if (right1Result == true && right2Result == true && right3Result == true) {
                forRightReverse(4);
              }
            }else if (nearYClassItem.includes('x'+ xplus5)) {
              console.log('successx+5');
              let right1 = document.getElementsByClassName(ycoord + ' ' + xplus1Coord);
              let right2 = document.getElementsByClassName(ycoord + ' ' + xplus2Coord);
              let right3 = document.getElementsByClassName(ycoord + ' ' + xplus3Coord);
              let right4 = document.getElementsByClassName(ycoord + ' ' + xplus4Coord);
              let right1ClassList;
              let right2ClassList;
              let right3ClassList;
              let right4ClassList;
              right1 = Array.from(right1);
              right1.forEach((right) => {
                right1ClassList = right.classList;
              });
              right2 = Array.from(right2);
              right2.forEach((right) => {
                right2ClassList = right.classList;
              });
              right3 = Array.from(right3);
              right3.forEach((right) => {
                right3ClassList = right.classList;
              });
              right4 = Array.from(right4);
              right4.forEach((right) => {
                right4ClassList = right.classList;
              });
              let right1Result = right1ClassList.contains('white-stone');
              let right2Result = right2ClassList.contains('white-stone');
              let right3Result = right3ClassList.contains('white-stone');
              let right4Result = right4ClassList.contains('white-stone');
              console.log(right1Result);
              console.log(right2Result);
              console.log(right3Result);
              console.log(right4Result);
              if (right1Result == true && right2Result == true && right3Result == true && right4Result == true) {
                forRightReverse(5);
              }
            }else if (nearYClassItem.includes('x'+ xplus6)) {
              console.log('successx+6');
              let right1 = document.getElementsByClassName(ycoord + ' ' + xplus1Coord);
              let right2 = document.getElementsByClassName(ycoord + ' ' + xplus2Coord);
              let right3 = document.getElementsByClassName(ycoord + ' ' + xplus3Coord);
              let right4 = document.getElementsByClassName(ycoord + ' ' + xplus4Coord);
              let right5 = document.getElementsByClassName(ycoord + ' ' + xplus5Coord);
              let right1ClassList;
              let right2ClassList;
              let right3ClassList;
              let right4ClassList;
              let right5ClassList;
              right1 = Array.from(right1);
              right1.forEach((right) => {
                right1ClassList = right.classList;
              });
              right2 = Array.from(right2);
              right2.forEach((right) => {
                right2ClassList = right.classList;
              });
              right3 = Array.from(right3);
              right3.forEach((right) => {
                right3ClassList = right.classList;
              });
              right4 = Array.from(right4);
              right4.forEach((right) => {
                right4ClassList = right.classList;
              });
              right5 = Array.from(right5);
              right5.forEach((right) => {
                right5ClassList = right.classList;
              });
              let right1Result = right1ClassList.contains('white-stone');
              let right2Result = right2ClassList.contains('white-stone');
              let right3Result = right3ClassList.contains('white-stone');
              let right4Result = right4ClassList.contains('white-stone');
              let right5Result = right5ClassList.contains('white-stone');
              console.log(right1Result);
              console.log(right2Result);
              console.log(right3Result);
              console.log(right4Result);
              console.log(right5Result);
              if (right1Result == true && right2Result == true && right3Result == true && right4Result == true && right5Result == true) {
                forRightReverse(6);
              }
            }else if (nearYClassItem.includes('x'+ xplus7)) {
              console.log('successx+7');
              let right1 = document.getElementsByClassName(ycoord + ' ' + xplus1Coord);
              let right2 = document.getElementsByClassName(ycoord + ' ' + xplus2Coord);
              let right3 = document.getElementsByClassName(ycoord + ' ' + xplus3Coord);
              let right4 = document.getElementsByClassName(ycoord + ' ' + xplus4Coord);
              let right5 = document.getElementsByClassName(ycoord + ' ' + xplus5Coord);
              let right6 = document.getElementsByClassName(ycoord + ' ' + xplus6Coord);
              let right1ClassList;
              let right2ClassList;
              let right3ClassList;
              let right4ClassList;
              let right5ClassList;
              let right6ClassList;
              right1 = Array.from(right1);
              right1.forEach((right) => {
                right1ClassList = right.classList;
              });
              right2 = Array.from(right2);
              right2.forEach((right) => {
                right2ClassList = right.classList;
              });
              right3 = Array.from(right3);
              right3.forEach((right) => {
                right3ClassList = right.classList;
              });
              right4 = Array.from(right4);
              right4.forEach((right) => {
                right4ClassList = right.classList;
              });
              right5 = Array.from(right5);
              right5.forEach((right) => {
                right5ClassList = right.classList;
              });
              right6 = Array.from(right6);
              right6.forEach((right) => {
                right6ClassList = right.classList;
              });
              let right1Result = right1ClassList.contains('white-stone');
              let right2Result = right2ClassList.contains('white-stone');
              let right3Result = right3ClassList.contains('white-stone');
              let right4Result = right4ClassList.contains('white-stone');
              let right5Result = right5ClassList.contains('white-stone');
              let right6Result = right6ClassList.contains('white-stone');
              console.log(right1Result);
              console.log(right2Result);
              console.log(right3Result);
              console.log(right4Result);
              console.log(right5Result);
              console.log(right6Result);
              if (right1Result == true && right2Result == true && right3Result == true && right4Result == true && right5Result == true && right6Result == true) {
                forRightReverse(7);
              }
            }

            //ここからマイナス
            if (nearYClassItem.includes('x'+ xminus1)) {
              console.log('successx-1');
            }else if (nearYClassItem.includes(xminus2Coord)) {
              console.log('successx+2');
              let left1 = document.getElementsByClassName(ycoord + ' ' + xminus1Coord);
              let left1ClassList;
              left1 = Array.from(left1);
              left1.forEach((left) => {
                left1ClassList = left.classList;
              });
              let left1Result = left1ClassList.contains('white-stone');
              console.log(left1Result);
              if (left1Result == true) {
                forLeftReverse(2);
              }
            }else if (nearYClassItem.includes(xminus3Coord)) {
              console.log('successx+3');
              let left1 = document.getElementsByClassName(ycoord + ' ' + xminus1Coord);
              let left2 = document.getElementsByClassName(ycoord + ' ' + xminus2Coord);
              let left1ClassList;
              let left2ClassList;
              left1 = Array.from(left1);
              left1.forEach((left) => {
                left1ClassList = left.classList;
              });
              left2 = Array.from(left2);
              left2.forEach((left) => {
                left2ClassList = left.classList;
              });
              let left1Result = left1ClassList.contains('white-stone');
              let left2Result = left2ClassList.contains('white-stone');
              console.log(left1Result);
              console.log(left2Result);
              if (left1Result == true && left2Result == true) {
                forLeftReverse(3);
              }
            }else if (nearYClassItem.includes(xminus4Coord)) {
              console.log('successx+4');
              let left1 = document.getElementsByClassName(ycoord + ' ' + xminus1Coord);
              let left2 = document.getElementsByClassName(ycoord + ' ' + xminus2Coord);
              let left3 = document.getElementsByClassName(ycoord + ' ' + xminus3Coord);
              let left1ClassList;
              let left2ClassList;
              let left3ClassList;
              left1 = Array.from(left1);
              left1.forEach((left) => {
                left1ClassList = left.classList;
              });
              left2 = Array.from(left2);
              left2.forEach((left) => {
                left2ClassList = left.classList;
              });
              left3 = Array.from(left3);
              left3.forEach((left) => {
                left3ClassList = left.classList;
              });
              let left1Result = left1ClassList.contains('white-stone');
              let left2Result = left2ClassList.contains('white-stone');
              let left3Result = left3ClassList.contains('white-stone');
              console.log(left1Result);
              console.log(left2Result);
              console.log(left3Result);
              if (left1Result == true && left2Result == true && left3Result == true) {
                forLeftReverse(4);
              }
            }else if (nearYClassItem.includes(xminus5Coord)) {
              console.log('successx+5');
              let left1 = document.getElementsByClassName(ycoord + ' ' + xminus1Coord);
              let left2 = document.getElementsByClassName(ycoord + ' ' + xminus2Coord);
              let left3 = document.getElementsByClassName(ycoord + ' ' + xminus3Coord);
              let left4 = document.getElementsByClassName(ycoord + ' ' + xminus4Coord);
              let left1ClassList;
              let left2ClassList;
              let left3ClassList;
              let left4ClassList;
              left1 = Array.from(left1);
              left1.forEach((left) => {
                left1ClassList = left.classList;
              });
              left2 = Array.from(left2);
              left2.forEach((left) => {
                left2ClassList = left.classList;
              });
              left3 = Array.from(left3);
              left3.forEach((left) => {
                left3ClassList = left.classList;
              });
              left4 = Array.from(left4);
              left4.forEach((left) => {
                left4ClassList = left.classList;
              });
              let left1Result = left1ClassList.contains('white-stone');
              let left2Result = left2ClassList.contains('white-stone');
              let left3Result = left3ClassList.contains('white-stone');
              let left4Result = left4ClassList.contains('white-stone');
              console.log(left1Result);
              console.log(left2Result);
              console.log(left3Result);
              console.log(left4Result);
              if (left1Result == true && left2Result == true && left3Result == true && left4Result == true) {
                forLeftReverse(5);
              }
            }else if (nearYClassItem.includes(xminus6Coord)) {
              console.log('successx+6');
              let left1 = document.getElementsByClassName(ycoord + ' ' + xminus1Coord);
              let left2 = document.getElementsByClassName(ycoord + ' ' + xminus2Coord);
              let left3 = document.getElementsByClassName(ycoord + ' ' + xminus3Coord);
              let left4 = document.getElementsByClassName(ycoord + ' ' + xminus4Coord);
              let left5 = document.getElementsByClassName(ycoord + ' ' + xminus5Coord);
              let left1ClassList;
              let left2ClassList;
              let left3ClassList;
              let left4ClassList;
              let left5ClassList;
              left1 = Array.from(left1);
              left1.forEach((left) => {
                left1ClassList = left.classList;
              });
              left2 = Array.from(left2);
              left2.forEach((left) => {
                left2ClassList = left.classList;
              });
              left3 = Array.from(left3);
              left3.forEach((left) => {
                left3ClassList = left.classList;
              });
              left4 = Array.from(left4);
              left4.forEach((left) => {
                left4ClassList = left.classList;
              });
              left5 = Array.from(left5);
              left5.forEach((left) => {
                left5ClassList = left.classList;
              });
              let left1Result = left1ClassList.contains('white-stone');
              let left2Result = left2ClassList.contains('white-stone');
              let left3Result = left3ClassList.contains('white-stone');
              let left4Result = left4ClassList.contains('white-stone');
              let left5Result = left5ClassList.contains('white-stone');
              console.log(left1Result);
              console.log(left2Result);
              console.log(left3Result);
              console.log(left4Result);
              console.log(left5Result);
              if (left1Result == true && left2Result == true && left3Result == true && left4Result == true && left5Result == true) {
                forLeftReverse(6);
              }
            }else if (nearYClassItem.includes(xminus7Coord)) {
              console.log('successx+7');
              let left1 = document.getElementsByClassName(ycoord + ' ' + xminus1Coord);
              let left2 = document.getElementsByClassName(ycoord + ' ' + xminus2Coord);
              let left3 = document.getElementsByClassName(ycoord + ' ' + xminus3Coord);
              let left4 = document.getElementsByClassName(ycoord + ' ' + xminus4Coord);
              let left5 = document.getElementsByClassName(ycoord + ' ' + xminus5Coord);
              let left6 = document.getElementsByClassName(ycoord + ' ' + xminus6Coord);
              let left1ClassList;
              let left2ClassList;
              let left3ClassList;
              let left4ClassList;
              let left5ClassList;
              let left6ClassList;
              left1 = Array.from(left1);
              left1.forEach((left) => {
                left1ClassList = left.classList;
              });
              left2 = Array.from(left2);
              left2.forEach((left) => {
                left2ClassList = left.classList;
              });
              left3 = Array.from(left3);
              left3.forEach((left) => {
                left3ClassList = left.classList;
              });
              left4 = Array.from(left4);
              left4.forEach((left) => {
                left4ClassList = left.classList;
              });
              left5 = Array.from(left5);
              left5.forEach((left) => {
                left5ClassList = left.classList;
              });
              left6 = Array.from(left6);
              left6.forEach((left) => {
                left6ClassList = left.classList;
              });
              let left1Result = left1ClassList.contains('white-stone');
              let left2Result = left2ClassList.contains('white-stone');
              let left3Result = left3ClassList.contains('white-stone');
              let left4Result = left4ClassList.contains('white-stone');
              let left5Result = left5ClassList.contains('white-stone');
              let left6Result = left6ClassList.contains('white-stone');
              console.log(left1Result);
              console.log(left2Result);
              console.log(left3Result);
              console.log(left4Result);
              console.log(left5Result);
              console.log(left6Result);
              if (left1Result == true && left2Result == true && left3Result == true && left4Result == true && left5Result == true && left6Result == true) {
                forLeftReverse(7);
              }
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