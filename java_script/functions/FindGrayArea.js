//  find gray area
let areaOfSquare=side=>{return side*side};
let areaOfTriangle=(base,height)=>{return 0.5*base*height};
let areaOfCircle=radius=>{ return 3.142*radius*radius};

let toFindGrayArea=()=>{return areaOfSquare(350)-(areaOfTriangle(300,350)+areaOfCircle(50))};

document.getElementById("gray_area_heading").innerText="GrayArea : "+toFindGrayArea()+"cm";