
let maxWidth = 8;
let maxHeight = 8;
var enemyStone = 'black-stone';
var myStone = 'white-stone';

changeButton.addEventListener('click', () => {
  let currentMy = myStone;
  let currentEnemy = enemyStone;
  myStone = currentEnemy;
  enemyStone = currentMy;
});

const rectangleObject = document.getElementsByClassName('rectangle');

for (let i = 0; i < rectangleObject.length; i++) {
  rectangleObject[i].addEventListener('click', () => {
    putBlackStone(rectangleObject[i]);
    
  }, false);
}
function putBlackStone(obj) {
  if (obj.classList.contains(enemyStone) == true) {
    alert('そこにはすでに白石があります');
  }else if (obj.classList.contains(myStone) == true) {
    alert('そこにすでに黒石があります');
  }else {
    obj.classList.add(myStone);
    reverseStone(obj);
  }
}

var ycoord;

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

var yplus1Coord;
var yplus2Coord;
var yplus3Coord;
var yplus4Coord;
var yplus5Coord;
var yplus6Coord;
var yplus7Coord;

var yminus1Coord;
var yminus2Coord;
var yminus3Coord;
var yminus4Coord;
var yminus5Coord;
var yminus6Coord;
var yminus7Coord;

var isNoGapResultArray = [];

function reverseStone(obj) {
  for (let xi = 1; xi <= maxWidth; xi++) {
    if(obj.classList.contains('x'+xi) == true) {
      var xcoord = 'x'+xi;
      var currentXcoord = xcoord;
      console.log(xcoord);
      //xiのiの数字部分を取り出して数値に変換
      var num = xcoord.match(/[0-9]+/);
      var xnum = parseInt(num, 10);
      console.log(xnum);


      for (let plus_i = 1; plus_i <= 7; plus_i++) {
        let sum = xnum + plus_i;
        eval("xplus" + plus_i + "=" + sum + ";");
        eval("xplus" + plus_i + "Coord = 'x' + " + sum + ";");
      }
      for (let minus_i = 1; minus_i <= 7; minus_i++) {
        //石を置いたX座標-(1~7)した数値が入る
        let sum = xnum - minus_i;
        eval("xminus" + minus_i + "=" + sum + ";");
        //xminus3Coordには"x2","x1"とかの置いたX座標-3のX座標クラスが入っている
        // eval("xminus" + minus_i + "Coord = 'x' + xminus" + minus_i + ";");
        eval("xminus" + minus_i + "Coord = 'x' + " + sum + ";");
      }
    }
  }
  for (let yi = 1; yi <= maxHeight; yi++) {
    ycoord = 'y'+yi;
    if(obj.classList.contains(ycoord) == true) {
      var currentYcoord = ycoord;
      //yiのiの数字部分を取り出して数値に変換
      var num = ycoord.match(/[0-9]+/);
      var ynum = parseInt(num, 10);

      for (let plus_i = 1; plus_i <= 7; plus_i++) {
        let sum = ynum + plus_i;
        eval("yplus" + plus_i + "=" + sum + ";");
        eval("yplus" + plus_i + "Coord = 'y' + " + sum + ";");
      }
      for (let minus_i = 1; minus_i <= 7; minus_i++) {
        //石を置いたY座標-(1~7)した数値が入る
        let sum = ynum - minus_i;
        eval("yminus" + minus_i + "=" + sum + ";");
        //yminus3Coordには"x2","x1"とかの置いたY座標-3のY座標クラスが入っている
        eval("yminus" + minus_i + "Coord = 'y' + " + sum + ";");
      }
      console.log(yplus3Coord);
      console.log(yminus3Coord);


      
        

    }
  }
  //yiをもちblack-stoneもつ要素を配列で取得
  console.log(currentYcoord);
  let result = document.getElementsByClassName(myStone + ' ' +currentYcoord);
  console.log(result);
  result = Array.from(result);
  console.log(result);
  result.forEach((yresult) => {
    console.log(yresult);
    console.log(xcoord);
    isNoGapHorizon(yresult,xcoord, currentYcoord);
  });

  //xiをもちblack-stoneもつ要素を配列で取得
  result = '';
  result = document.getElementsByClassName(myStone + ' '+currentXcoord);
  result = Array.from(result);
  console.log(result);
  result.forEach((xresult) => {
    console.log(xresult);
    console.log(currentXcoord);
    isNoGapVertical(xresult,ycoord,currentXcoord)
  });

  //ここから斜めの処理
  var diagonal1ClassList;
  var diagonal2ClassList;
  var diagonal3ClassList;
  var diagonal4ClassList;
  var diagonal5ClassList;
  var diagonal6ClassList;
  var diagonal7ClassList;
  // 置いた石の右上の石を挟む時
  for(let reverse_i = 1; reverse_i <= 7; reverse_i++) {
    result = '';
    console.log(eval("myStone + ' ' + xplus" + reverse_i + "Coord + ' ' + yplus" + reverse_i + "Coord"));
    eval("result = document.getElementsByClassName(myStone + ' ' + xplus" + reverse_i + "Coord + ' ' + yplus" + reverse_i + "Coord);");
    let diagonal1 = document.getElementsByClassName(xplus1Coord + ' ' + yplus1Coord);
    console.log(xplus1Coord + ' ' + yplus1Coord);
    diagonal1 = Array.from(diagonal1);
    var diagonal1ClassList;
    diagonal1.forEach((diagonal) => {
      diagonal1ClassList = diagonal.classList;
    });
    console.log(diagonal1ClassList);

    eval("diagonal" + reverse_i + " = document.getElementsByClassName(xplus" + reverse_i + "Coord + ' ' + yplus" + reverse_i + "Coord);");
      eval("console.log(diagonal" + reverse_i + ");");
      eval("let diagonal" + reverse_i + "ClassList;");
      eval("diagonal" + reverse_i + " = Array.from(diagonal" + reverse_i + ");");
      eval("console.log(diagonal" + reverse_i + ");");
      eval("diagonal" + reverse_i + ".forEach((diagonal) => {" +
        "diagonal" + reverse_i + "ClassList = diagonal.classList;" +
      "});");
      eval("console.log(diagonal" + reverse_i + "ClassList);");
    
    console.log(result);
    result = Array.from(result);
    console.log(result);
    if (result != '') {
      console.log("success(x+2,y+2)");
      console.log(diagonal3ClassList)
      console.log(diagonal2ClassList)

      isNoGapResultArray.length = 0;
      console.log(isNoGapResultArray);
      for (let i = 1; i < reverse_i; i++) {
        console.log(i);
        eval("console.log(diagonal" + i + "ClassList.contains(enemyStone))");
        eval("isNoGapResultArray.push(diagonal" + i + "ClassList.contains(enemyStone));");
      }
      console.log(isNoGapResultArray);
      console.log(isNoGapResultArray.every(item => item == true));
      if (isNoGapResultArray.every(item => item == true)){
        forTopRightReverse(reverse_i);
        return;
      }
    }else{
    console.log("none");
    }
  }

  // 置いた石の右下の石を挟む時 x+,y-
  for(let reverse_i = 1; reverse_i <= 7; reverse_i++) {
    result = '';
    console.log(eval("myStone + ' ' + xplus" + reverse_i + "Coord + ' ' + yminus" + reverse_i + "Coord"));
    eval("result = document.getElementsByClassName(myStone + ' '+xplus" + reverse_i + "Coord + ' ' + yminus" + reverse_i + "Coord);");
    let diagonal1 = document.getElementsByClassName(xplus1Coord + ' ' + yminus1Coord);
    console.log(xplus1Coord + ' ' + yminus1Coord);
    diagonal1 = Array.from(diagonal1);
    var diagonal1ClassList;
    diagonal1.forEach((diagonal) => {
      diagonal1ClassList = diagonal.classList;
    });
    console.log(diagonal1ClassList);

    eval("diagonal" + reverse_i + " = document.getElementsByClassName(xplus" + reverse_i + "Coord + ' ' + yminus" + reverse_i + "Coord);");
      eval("console.log(diagonal" + reverse_i + ");");
      eval("let diagonal" + reverse_i + "ClassList;");
      eval("diagonal" + reverse_i + " = Array.from(diagonal" + reverse_i + ");");
      eval("console.log(diagonal" + reverse_i + ");");
      eval("diagonal" + reverse_i + ".forEach((diagonal) => {" +
        "diagonal" + reverse_i + "ClassList = diagonal.classList;" +
      "});");
      eval("console.log(diagonal" + reverse_i + "ClassList);");
    
    console.log(result);
    result = Array.from(result);
    console.log(result);
    if (result != '') {
      console.log("success(x+2,y+2)");
      console.log(diagonal3ClassList)
      console.log(diagonal2ClassList)

      isNoGapResultArray.length = 0;
      console.log(isNoGapResultArray);
      for (let i = 1; i < reverse_i; i++) {
        console.log(i);
        eval("console.log(diagonal" + i + "ClassList.contains(enemyStone))");
        eval("isNoGapResultArray.push(diagonal" + i + "ClassList.contains(enemyStone));");
      }
      console.log(isNoGapResultArray);
      console.log(isNoGapResultArray.every(item => item == true));
      if (isNoGapResultArray.every(item => item == true)){
        forBottomRightReverse(reverse_i);
        return;
      }
    }else{
    console.log("none");
    }
  }

  // 置いた石の左上の石を挟む時 x- y+
  for(let reverse_i = 1; reverse_i <= 7; reverse_i++) {
    result = '';
    console.log(eval("myStone + ' ' + xminus" + reverse_i + "Coord + ' ' + yplus" + reverse_i + "Coord"));
    eval("result = document.getElementsByClassName(myStone + ' '+xminus" + reverse_i + "Coord + ' ' + yplus" + reverse_i + "Coord);");
    let diagonal1 = document.getElementsByClassName(xminus1Coord + ' ' + yplus1Coord);
    console.log(xminus1Coord + ' ' + yplus1Coord);
    diagonal1 = Array.from(diagonal1);
    var diagonal1ClassList;
    diagonal1.forEach((diagonal) => {
      diagonal1ClassList = diagonal.classList;
    });
    console.log(diagonal1ClassList);

    eval("diagonal" + reverse_i + " = document.getElementsByClassName(xminus" + reverse_i + "Coord + ' ' + yplus" + reverse_i + "Coord);");
      eval("console.log(diagonal" + reverse_i + ");");
      eval("let diagonal" + reverse_i + "ClassList;");
      eval("diagonal" + reverse_i + " = Array.from(diagonal" + reverse_i + ");");
      eval("console.log(diagonal" + reverse_i + ");");
      eval("diagonal" + reverse_i + ".forEach((diagonal) => {" +
        "diagonal" + reverse_i + "ClassList = diagonal.classList;" +
      "});");
      eval("console.log(diagonal" + reverse_i + "ClassList);");
    
    console.log(result);
    result = Array.from(result);
    console.log(result);
    if (result != '') {
      console.log("success(x+2,y+2)");
      console.log(diagonal3ClassList)
      console.log(diagonal2ClassList)

      isNoGapResultArray.length = 0;
      console.log(isNoGapResultArray);
      for (let i = 1; i < reverse_i; i++) {
        console.log(i);
        eval("console.log(diagonal" + i + "ClassList.contains(enemyStone))");
        eval("isNoGapResultArray.push(diagonal" + i + "ClassList.contains(enemyStone));");
      }
      console.log(isNoGapResultArray);
      console.log(isNoGapResultArray.every(item => item == true));
      if (isNoGapResultArray.every(item => item == true)){
        forTopLeftReverse(reverse_i);
        return;
      }
    }else{
    console.log("none");
    }
  }

  // 置いた石の左下の石を挟む時 x-,y-
  for(let reverse_i = 1; reverse_i <= 7; reverse_i++) {
    result = '';
    console.log(eval("myStone + ' '+xminus" + reverse_i + "Coord + ' ' + yminus" + reverse_i + "Coord"));
    eval("result = document.getElementsByClassName(myStone + ' '+xminus" + reverse_i + "Coord + ' ' + yminus" + reverse_i + "Coord);");
    let diagonal1 = document.getElementsByClassName(xminus1Coord + ' ' + yminus1Coord);
    console.log(xminus1Coord + ' ' + yminus1Coord);
    diagonal1 = Array.from(diagonal1);
    var diagonal1ClassList;
    diagonal1.forEach((diagonal) => {
      diagonal1ClassList = diagonal.classList;
    });
    console.log(diagonal1ClassList);

    eval("diagonal" + reverse_i + " = document.getElementsByClassName(xminus" + reverse_i + "Coord + ' ' + yminus" + reverse_i + "Coord);");
      eval("console.log(diagonal" + reverse_i + ");");
      eval("let diagonal" + reverse_i + "ClassList;");
      eval("diagonal" + reverse_i + " = Array.from(diagonal" + reverse_i + ");");
      eval("console.log(diagonal" + reverse_i + ");");
      eval("diagonal" + reverse_i + ".forEach((diagonal) => {" +
        "diagonal" + reverse_i + "ClassList = diagonal.classList;" +
      "});");
      eval("console.log(diagonal" + reverse_i + "ClassList);");
    
    console.log(result);
    result = Array.from(result);
    console.log(result);
    if (result != '') {
      console.log("success(x+2,y+2)");
      console.log(diagonal3ClassList)
      console.log(diagonal2ClassList)

      isNoGapResultArray.length = 0;
      console.log(isNoGapResultArray);
      for (let i = 1; i < reverse_i; i++) {
        console.log(i);
        eval("console.log(diagonal" + i + "ClassList.contains(enemyStone))");
        eval("isNoGapResultArray.push(diagonal" + i + "ClassList.contains(enemyStone));");
      }
      console.log(isNoGapResultArray);
      console.log(isNoGapResultArray.every(item => item == true));
      if (isNoGapResultArray.every(item => item == true)){
        forBottomLeftReverse(reverse_i);
        return;
      }
    }else{
    console.log("none");
    }
  }
}

function forRightReverse(count) {
  for(let reverse_i = 1; reverse_i < count; reverse_i++) {
    var reverseObject;
    eval("reverseObject = document.getElementsByClassName(enemyStone + ' '+xplus" + reverse_i + "Coord);");
    reverseObject = Array.from(reverseObject);
    console.log(reverseObject);
    reverseObject.forEach((obj) => {
      console.log(obj.classList);
      obj.classList.remove(enemyStone);
      obj.classList.add(myStone);
    });
  }
}
function forLeftReverse(count){
    console.log('ここからマイナス');
    for(let reverse_i = 1; reverse_i < count; reverse_i++) {
      var reverseObject;
    console.log(eval("enemyStone + ' '+xminus" + reverse_i + "Coord"));
    eval("reverseObject = document.getElementsByClassName(enemyStone + ' '+xminus" + reverse_i + "Coord);");
    reverseObject = Array.from(reverseObject);
    console.log(reverseObject);
    reverseObject.forEach((obj) => {
      console.log(obj.classList);
      obj.classList.remove(enemyStone);
      obj.classList.add(myStone);
    });
  }
}

function forTopRightReverse(count){
  console.log('右斜め上x+y+');
  for(let reverse_i = 1; reverse_i < count; reverse_i++) {
    var reverseObject;
    console.log(eval("enemyStone + ' '+xplus" + reverse_i + "Coord + ' ' + yplus" + reverse_i + "Coord"));
    eval("reverseObject = document.getElementsByClassName(enemyStone + ' '+xplus" + reverse_i + "Coord + ' ' + yplus" + reverse_i + "Coord);");
    reverseObject = Array.from(reverseObject);
    console.log(reverseObject);
    reverseObject.forEach((obj) => {
      console.log(obj.classList);
      obj.classList.remove(enemyStone);
      obj.classList.add(myStone);
    });
  }
}
function forBottomRightReverse(count){
  console.log('右斜め下x+,y-');
  for(let reverse_i = 1; reverse_i < count; reverse_i++) {
    var reverseObject;
    console.log(eval("enemyStone + ' '+xplus" + reverse_i + "Coord + ' ' + yminus" + reverse_i + "Coord"));
    eval("reverseObject = document.getElementsByClassName(enemyStone + ' '+xplus" + reverse_i + "Coord + ' ' + yminus" + reverse_i + "Coord);");
    reverseObject = Array.from(reverseObject);
    console.log(reverseObject);
    reverseObject.forEach((obj) => {
      console.log(obj.classList);
      obj.classList.remove(enemyStone);
      obj.classList.add(myStone);
    });
  }
}

function forTopLeftReverse(count){
  console.log('左斜め上x-.y+');
  for(let reverse_i = 1; reverse_i < count; reverse_i++) {
    var reverseObject;
    console.log(eval("enemyStone + ' '+xminus" + reverse_i + "Coord + ' ' + yplus" + reverse_i + "Coord"));
    eval("reverseObject = document.getElementsByClassName(enemyStone + ' '+xminus" + reverse_i + "Coord + ' ' + yplus" + reverse_i + "Coord);");
    reverseObject = Array.from(reverseObject);
    console.log(reverseObject);
    reverseObject.forEach((obj) => {
      console.log(obj.classList);
      obj.classList.remove(enemyStone);
      obj.classList.add(myStone);
    });
  }
}

function forBottomLeftReverse(count){
  console.log('左斜め下x-.y-');
  for(let reverse_i = 1; reverse_i < count; reverse_i++) {
    var reverseObject;
    console.log(eval("enemyStone + ' '+xminus" + reverse_i + "Coord + ' ' + yminus" + reverse_i + "Coord"));
    eval("reverseObject = document.getElementsByClassName(enemyStone + ' '+xminus" + reverse_i + "Coord + ' ' + yminus" + reverse_i + "Coord);");
    reverseObject = Array.from(reverseObject);
    console.log(reverseObject);
    reverseObject.forEach((obj) => {
      console.log(obj.classList);
      obj.classList.remove(enemyStone);
      obj.classList.add(myStone);
    });
  }
}


function forTopReverse(count) {
  for(let reverse_i = 1; reverse_i < count; reverse_i++) {
    var reverseObject;
    eval("reverseObject = document.getElementsByClassName(enemyStone + ' '+yplus" + reverse_i + "Coord);");
    reverseObject = Array.from(reverseObject);
    console.log(reverseObject);
    reverseObject.forEach((obj) => {
      console.log(obj.classList);
      obj.classList.remove(enemyStone);
      obj.classList.add(myStone);
    });
  }
}
function forBottomReverse(count){
    console.log('下');
    for(let reverse_i = 1; reverse_i < count; reverse_i++) {
      var reverseObject;
    console.log(eval("enemyStone + ' '+yminus" + reverse_i + "Coord"));
    eval("reverseObject = document.getElementsByClassName(enemyStone + ' '+yminus" + reverse_i + "Coord);");
    reverseObject = Array.from(reverseObject);
    console.log(reverseObject);
    reverseObject.forEach((obj) => {
      console.log(obj.classList);
      obj.classList.remove(enemyStone);
      obj.classList.add(myStone);
    });
  }
}







function isNoGapHorizon(yresult,xcoord,ycoord) {
  if(yresult.classList.contains(xcoord) == true) {
    console.log(yresult.classList);
    console.log('self');
  }else {
    yresult.classList.forEach((nearYClassItem) => {
      console.log(nearYClassItem);
      if (nearYClassItem.includes(xplus1Coord)) {
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

        isNoGapResultArray.length = 0;
        isNoGapResultArray.push(right1ClassList.contains(enemyStone));
        console.log(isNoGapResultArray);
        console.log(isNoGapResultArray.every(item => item == true));
        if (isNoGapResultArray.every(item => item == true)){
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
        isNoGapResultArray.length = 0;
        isNoGapResultArray.push(right1ClassList.contains(enemyStone));
        isNoGapResultArray.push(right2ClassList.contains(enemyStone));
        console.log(isNoGapResultArray);
        console.log(isNoGapResultArray.every(item => item == true));
        if (isNoGapResultArray.every(item => item == true)){
          forRightReverse(3);
        }        
      }else if (nearYClassItem.includes(xplus4Coord)) {
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

        isNoGapResultArray.length = 0;
        isNoGapResultArray.push(right1ClassList.contains(enemyStone));
        isNoGapResultArray.push(right2ClassList.contains(enemyStone));
        isNoGapResultArray.push(right3ClassList.contains(enemyStone));
        if (isNoGapResultArray.every(item => item == true)){
          forRightReverse(4);
        }
      }else if (nearYClassItem.includes(xplus5Coord)) {
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

        isNoGapResultArray.length = 0;
        isNoGapResultArray.push(right1ClassList.contains(enemyStone));
        isNoGapResultArray.push(right2ClassList.contains(enemyStone));
        isNoGapResultArray.push(right3ClassList.contains(enemyStone));
        isNoGapResultArray.push(right4ClassList.contains(enemyStone));
        if (isNoGapResultArray.every(item => item == true)){
          forRightReverse(5);
        }

      }else if (nearYClassItem.includes(xplus6Coord)) {
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

        isNoGapResultArray.length = 0;
        isNoGapResultArray.push(right1ClassList.contains(enemyStone));
        isNoGapResultArray.push(right2ClassList.contains(enemyStone));
        isNoGapResultArray.push(right3ClassList.contains(enemyStone));
        isNoGapResultArray.push(right4ClassList.contains(enemyStone));
        isNoGapResultArray.push(right5ClassList.contains(enemyStone));
        if (isNoGapResultArray.every(item => item == true)){
          forRightReverse(6);
        }
      }else if (nearYClassItem.includes(xplus7Coord)) {
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
        isNoGapResultArray.length = 0;
        isNoGapResultArray.push(right1ClassList.contains(enemyStone));
        isNoGapResultArray.push(right2ClassList.contains(enemyStone));
        isNoGapResultArray.push(right3ClassList.contains(enemyStone));
        isNoGapResultArray.push(right4ClassList.contains(enemyStone));
        isNoGapResultArray.push(right5ClassList.contains(enemyStone));
        isNoGapResultArray.push(right6ClassList.contains(enemyStone));
        if (isNoGapResultArray.every(item => item == true)){
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
        isNoGapResultArray.length = 0;
        isNoGapResultArray.push(left1ClassList.contains(enemyStone));
        if (isNoGapResultArray.every(item => item == true)){
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
        isNoGapResultArray.length = 0;
        isNoGapResultArray.push(left1ClassList.contains(enemyStone));
        isNoGapResultArray.push(left2ClassList.contains(enemyStone));
        if (isNoGapResultArray.every(item => item == true)){
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
        isNoGapResultArray.length = 0;
        isNoGapResultArray.push(left1ClassList.contains(enemyStone));
        isNoGapResultArray.push(left2ClassList.contains(enemyStone));
        isNoGapResultArray.push(left3ClassList.contains(enemyStone));
        if (isNoGapResultArray.every(item => item == true)){
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
        isNoGapResultArray.length = 0;
        isNoGapResultArray.push(left1ClassList.contains(enemyStone));
        isNoGapResultArray.push(left2ClassList.contains(enemyStone));
        isNoGapResultArray.push(left3ClassList.contains(enemyStone));
        isNoGapResultArray.push(left4ClassList.contains(enemyStone));
        if (isNoGapResultArray.every(item => item == true)){
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
        isNoGapResultArray.length = 0;
        isNoGapResultArray.push(left1ClassList.contains(enemyStone));
        isNoGapResultArray.push(left2ClassList.contains(enemyStone));
        isNoGapResultArray.push(left3ClassList.contains(enemyStone));
        isNoGapResultArray.push(left4ClassList.contains(enemyStone));
        isNoGapResultArray.push(left5ClassList.contains(enemyStone));
        if (isNoGapResultArray.every(item => item == true)){
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
        isNoGapResultArray.length = 0;
        isNoGapResultArray.push(left1ClassList.contains(enemyStone));
        isNoGapResultArray.push(left2ClassList.contains(enemyStone));
        isNoGapResultArray.push(left3ClassList.contains(enemyStone));
        isNoGapResultArray.push(left4ClassList.contains(enemyStone));
        isNoGapResultArray.push(left5ClassList.contains(enemyStone));
        isNoGapResultArray.push(left6ClassList.contains(enemyStone));
        if (isNoGapResultArray.every(item => item == true)){
          forLeftReverse(7);
        }
      }
    });
  }
}







function isNoGapVertical(xresult,ycoord,xcoord) {
  if(xresult.classList.contains(ycoord) == true) {
    console.log(xresult.classList);
    console.log('self');
  }else {
    xresult.classList.forEach((nearXClassItem) => {
      console.log(nearXClassItem);
      if (nearXClassItem.includes(yplus1Coord)) {
        console.log('successy+1');
      }else if (nearXClassItem.includes(yplus2Coord)) {
        console.log('successy+2');
        console.log(xcoord);
        let right1 = document.getElementsByClassName(xcoord + ' ' + yplus1Coord);
        console.log(right1);
        let right1ClassList;
        right1 = Array.from(right1);
        right1.forEach((right) => {
          right1ClassList = right.classList;
        });

        isNoGapResultArray.length = 0;
        isNoGapResultArray.push(right1ClassList.contains(enemyStone));
        console.log(isNoGapResultArray);
        console.log(isNoGapResultArray.every(item => item == true));
        if (isNoGapResultArray.every(item => item == true)){
          forTopReverse(2);
        }
      }else if (nearXClassItem.includes(yplus3Coord)) {
        console.log('successy+3');
        let right1 = document.getElementsByClassName(xcoord + ' ' + yplus1Coord);
        let right2 = document.getElementsByClassName(xcoord + ' ' + yplus2Coord);
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
        isNoGapResultArray.length = 0;
        isNoGapResultArray.push(right1ClassList.contains(enemyStone));
        isNoGapResultArray.push(right2ClassList.contains(enemyStone));
        console.log(isNoGapResultArray);
        console.log(isNoGapResultArray.every(item => item == true));
        if (isNoGapResultArray.every(item => item == true)){
          forTopReverse(3);
        }        
      }else if (nearXClassItem.includes(yplus4Coord)) {
        console.log('successy+4');
        let right1 = document.getElementsByClassName(xcoord + ' ' + yplus1Coord);
        let right2 = document.getElementsByClassName(xcoord + ' ' + yplus2Coord);
        let right3 = document.getElementsByClassName(xcoord + ' ' + yplus3Coord);
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

        isNoGapResultArray.length = 0;
        isNoGapResultArray.push(right1ClassList.contains(enemyStone));
        isNoGapResultArray.push(right2ClassList.contains(enemyStone));
        isNoGapResultArray.push(right3ClassList.contains(enemyStone));
        if (isNoGapResultArray.every(item => item == true)){
          forTopReverse(4);
        }
      }else if (nearXClassItem.includes(yplus5Coord)) {
        console.log('successy+5');
        let right1 = document.getElementsByClassName(xcoord + ' ' + yplus1Coord);
        let right2 = document.getElementsByClassName(xcoord + ' ' + yplus2Coord);
        let right3 = document.getElementsByClassName(xcoord + ' ' + yplus3Coord);
        let right4 = document.getElementsByClassName(xcoord + ' ' + yplus4Coord);
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

        isNoGapResultArray.length = 0;
        isNoGapResultArray.push(right1ClassList.contains(enemyStone));
        isNoGapResultArray.push(right2ClassList.contains(enemyStone));
        isNoGapResultArray.push(right3ClassList.contains(enemyStone));
        isNoGapResultArray.push(right4ClassList.contains(enemyStone));
        if (isNoGapResultArray.every(item => item == true)){
          forTopReverse(5);
        }

      }else if (nearXClassItem.includes(yplus6Coord)) {
        console.log('successy+6');
        let right1 = document.getElementsByClassName(xcoord + ' ' + yplus1Coord);
        let right2 = document.getElementsByClassName(xcoord + ' ' + yplus2Coord);
        let right3 = document.getElementsByClassName(xcoord + ' ' + yplus3Coord);
        let right4 = document.getElementsByClassName(xcoord + ' ' + yplus4Coord);
        let right5 = document.getElementsByClassName(xcoord + ' ' + yplus5Coord);
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

        isNoGapResultArray.length = 0;
        isNoGapResultArray.push(right1ClassList.contains(enemyStone));
        isNoGapResultArray.push(right2ClassList.contains(enemyStone));
        isNoGapResultArray.push(right3ClassList.contains(enemyStone));
        isNoGapResultArray.push(right4ClassList.contains(enemyStone));
        isNoGapResultArray.push(right5ClassList.contains(enemyStone));
        if (isNoGapResultArray.every(item => item == true)){
          forTopReverse(6);
        }
      }else if (nearXClassItem.includes(yplus7Coord)) {
        console.log('successy+7');
        let right1 = document.getElementsByClassName(xcoord + ' ' + yplus1Coord);
        let right2 = document.getElementsByClassName(xcoord + ' ' + yplus2Coord);
        let right3 = document.getElementsByClassName(xcoord + ' ' + yplus3Coord);
        let right4 = document.getElementsByClassName(xcoord + ' ' + yplus4Coord);
        let right5 = document.getElementsByClassName(xcoord + ' ' + yplus5Coord);
        let right6 = document.getElementsByClassName(xcoord + ' ' + yplus6Coord);
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
        isNoGapResultArray.length = 0;
        isNoGapResultArray.push(right1ClassList.contains(enemyStone));
        isNoGapResultArray.push(right2ClassList.contains(enemyStone));
        isNoGapResultArray.push(right3ClassList.contains(enemyStone));
        isNoGapResultArray.push(right4ClassList.contains(enemyStone));
        isNoGapResultArray.push(right5ClassList.contains(enemyStone));
        isNoGapResultArray.push(right6ClassList.contains(enemyStone));
        if (isNoGapResultArray.every(item => item == true)){
          forTopReverse(7);
        }
      }

      //ここからマイナス
      if (nearXClassItem.includes('x'+ yminus1)) {
        console.log('successy-1');
      }else if (nearXClassItem.includes(yminus2Coord)) {
        console.log('successy+2');
        let left1 = document.getElementsByClassName(xcoord + ' ' + yminus1Coord);
        let left1ClassList;
        left1 = Array.from(left1);
        left1.forEach((left) => {
          left1ClassList = left.classList;
        });
        isNoGapResultArray.length = 0;
        isNoGapResultArray.push(left1ClassList.contains(enemyStone));
        if (isNoGapResultArray.every(item => item == true)){
          forBottomReverse(2);
        }
      }else if (nearXClassItem.includes(yminus3Coord)) {
        console.log('successy+3');
        let left1 = document.getElementsByClassName(xcoord + ' ' + yminus1Coord);
        let left2 = document.getElementsByClassName(xcoord + ' ' + yminus2Coord);
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
        isNoGapResultArray.length = 0;
        isNoGapResultArray.push(left1ClassList.contains(enemyStone));
        isNoGapResultArray.push(left2ClassList.contains(enemyStone));
        if (isNoGapResultArray.every(item => item == true)){
          forBottomReverse(3);
        }
      }else if (nearXClassItem.includes(yminus4Coord)) {
        console.log('successy+4');
        let left1 = document.getElementsByClassName(xcoord + ' ' + yminus1Coord);
        let left2 = document.getElementsByClassName(xcoord + ' ' + yminus2Coord);
        let left3 = document.getElementsByClassName(xcoord + ' ' + yminus3Coord);
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
        isNoGapResultArray.length = 0;
        isNoGapResultArray.push(left1ClassList.contains(enemyStone));
        isNoGapResultArray.push(left2ClassList.contains(enemyStone));
        isNoGapResultArray.push(left3ClassList.contains(enemyStone));
        if (isNoGapResultArray.every(item => item == true)){
          forBottomReverse(4);
        }
      }else if (nearXClassItem.includes(yminus5Coord)) {
        console.log('successy+5');
        let left1 = document.getElementsByClassName(xcoord + ' ' + yminus1Coord);
        let left2 = document.getElementsByClassName(xcoord + ' ' + yminus2Coord);
        let left3 = document.getElementsByClassName(xcoord + ' ' + yminus3Coord);
        let left4 = document.getElementsByClassName(xcoord + ' ' + yminus4Coord);
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
        isNoGapResultArray.length = 0;
        isNoGapResultArray.push(left1ClassList.contains(enemyStone));
        isNoGapResultArray.push(left2ClassList.contains(enemyStone));
        isNoGapResultArray.push(left3ClassList.contains(enemyStone));
        isNoGapResultArray.push(left4ClassList.contains(enemyStone));
        if (isNoGapResultArray.every(item => item == true)){
          forBottomReverse(5);
        }
      }else if (nearXClassItem.includes(yminus6Coord)) {
        console.log('successy+6');
        let left1 = document.getElementsByClassName(xcoord + ' ' + yminus1Coord);
        let left2 = document.getElementsByClassName(xcoord + ' ' + yminus2Coord);
        let left3 = document.getElementsByClassName(xcoord + ' ' + yminus3Coord);
        let left4 = document.getElementsByClassName(xcoord + ' ' + yminus4Coord);
        let left5 = document.getElementsByClassName(xcoord + ' ' + yminus5Coord);
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
        isNoGapResultArray.length = 0;
        isNoGapResultArray.push(left1ClassList.contains(enemyStone));
        isNoGapResultArray.push(left2ClassList.contains(enemyStone));
        isNoGapResultArray.push(left3ClassList.contains(enemyStone));
        isNoGapResultArray.push(left4ClassList.contains(enemyStone));
        isNoGapResultArray.push(left5ClassList.contains(enemyStone));
        if (isNoGapResultArray.every(item => item == true)){
          forBottomReverse(6);
        }
      }else if (nearXClassItem.includes(yminus7Coord)) {
        console.log('successy+7');
        let left1 = document.getElementsByClassName(xcoord + ' ' + yminus1Coord);
        let left2 = document.getElementsByClassName(xcoord + ' ' + yminus2Coord);
        let left3 = document.getElementsByClassName(xcoord + ' ' + yminus3Coord);
        let left4 = document.getElementsByClassName(xcoord + ' ' + yminus4Coord);
        let left5 = document.getElementsByClassName(xcoord + ' ' + yminus5Coord);
        let left6 = document.getElementsByClassName(xcoord + ' ' + yminus6Coord);
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
        isNoGapResultArray.length = 0;
        isNoGapResultArray.push(left1ClassList.contains(enemyStone));
        isNoGapResultArray.push(left2ClassList.contains(enemyStone));
        isNoGapResultArray.push(left3ClassList.contains(enemyStone));
        isNoGapResultArray.push(left4ClassList.contains(enemyStone));
        isNoGapResultArray.push(left5ClassList.contains(enemyStone));
        isNoGapResultArray.push(left6ClassList.contains(enemyStone));
        if (isNoGapResultArray.every(item => item == true)){
          forBottomReverse(7);
        }
      }
    });
  }
}