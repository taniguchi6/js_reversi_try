
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
    xcoord = 'x'+xi;
    if(obj.classList.contains(xcoord) == true) {
      console.log(xcoord);
    }
    
  }
}


window.onload = function() {
  alert('11');
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