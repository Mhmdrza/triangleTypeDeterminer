export function triangleDrawer(side1, side2, side3, canvasRef) {
  // decending sort
  let scaleFactor = 20
  let arrayOfSides = [side1* scaleFactor,side2* scaleFactor,side3* scaleFactor].sort((function(a, b){return b - a}))
  let [biggest, medium, smallest] = arrayOfSides
  const canvas = canvasRef
  if (canvas.getContext) {
    let ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.beginPath();
    ctx.strokeStyle = '#61dafb';
    ctx.lineWidth = 1;
    
    const topArc = new Path2D();
    topArc.arc(0, 0, medium, 0,  Math.PI/2);

    const bottomArc = new Path2D();
    bottomArc.arc(0, biggest, smallest, 0, (Math.PI / 2), true);

    let w= 0;
    let h= 0;
    let topArcPoints= []
    while (w<canvas.width) {
      while (h<canvas.height) {
        if(ctx.isPointInStroke(topArc, w, h)){
          topArcPoints.push({x:w,y:h})
        }
        h++
      }
      w++
      h=0
    }
    let commonPoint =[]
    topArcPoints.forEach( point=> {
      if(ctx.isPointInStroke(bottomArc, point.x, point.y))
        commonPoint.push({ x: point.x, y: point.y})
      }
    )
    let offsetX = 30
    let offsetY = 0
    let point1 = {
      x: 0 + offsetX,
      y: 0 + offsetY
    }
    let point2 = {
      x: 0 + offsetX,
      y: (biggest) + offsetY
    }
    let point3 = {
      x: (commonPoint[0].x) + offsetX,
      y: (commonPoint[0].y) + offsetY
    }
    //drawing the triangle
    ctx.moveTo( point1.x, point1.y )
    ctx.lineTo( point2.x, point2.y )
    ctx.lineTo( point3.x, point3.y )
    ctx.lineTo( point1.x, point1.y )
    ctx.lineJoin = "round"
    ctx.stroke()
    ctx.fillStyle = 'white';
    ctx.font = "15px Verdana";
    let bigSideTextPosition = {
      x: ((point1.x + point2.x) / 2) - 5,
      y: ((point1.y + point2.y) / 2) + 5,
    }
    let mediumSideTextPosition = {
      x: ((point3.x + point1.x) / 2) - 5,
      y: ((point3.y + point1.y) / 2) + 5,
    }
    let smallSideTextPosition = {
      x: ((point2.x + point3.x) / 2) - 5,
      y: ((point2.y + point3.y) / 2) + 5,
    }
    ctx.fillText( biggest/scaleFactor , bigSideTextPosition.x, bigSideTextPosition.y);
    ctx.fillText( medium/scaleFactor , mediumSideTextPosition.x, mediumSideTextPosition.y);
    ctx.fillText( smallest/scaleFactor , smallSideTextPosition.x, smallSideTextPosition.y);
  }
}

export function clearCanvas ( canvasRef ){
  const canvas = canvasRef
  if (canvas.getContext) {
    let ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height)
  }
}