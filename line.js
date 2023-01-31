const from = { x: 2, y: -5 };
const to = { x: 8, y: 3 };
let coordinates = [];

function line(from, to) {
    let distX = to.x - from.x;
    let distY = to.y - from.y;

    let longest;
    if (Math.abs(distX) > Math.abs(distY)){
        longest = distX
    }else{
        longest = distY
    }

    let shortest;
    if (Math.abs(distX) > Math.abs(distY)){
        shortest = distY
    }else{
        shortest = distX
    }

    let slope;
    if (distX == 0 || distY == 0) {
        slope = 0;
        } else {
           slope = Math.abs(shortest) / Math.abs(longest);
        }   

        console.log("slope: ",slope)
        console.log("distX: ",distX," ","distY: ",distY)
        console.log("fromX: ",from.x," ","toX",to.x)
        console.log("fromY: ",from.y," ","toY",to.y)
    
        if(Math.abs(distX)==0 && Math.abs(distY)==0){
            console.log("The coordinates are at the same point"/* A kettő koordináta egy ponton helyezkedik el*/)
        }
            else if(Math.abs(distX)==0 || Math.abs(distY)==0 /* Függőleges vagy vízszintes vonalat rajzol */){
                if(longest == distX){
                    if (distX > 0){
                        for (let x = from.x; x <= to.x; x++) {
                            let y = from.y;
                            coordinates.push({ x: Math.round(x), y: Math.round(y) });
                        }
                    }else{
                        for (let x = from.x; x >= to.x; x--) {
                            let y = from.y;
                            coordinates.push({ x: Math.round(x), y: Math.round(y) });
                        }
                }
            }else{
                if(longest == distY){
                    if (distY > 0){
                        for (let y = from.y; y <= to.y; y++) {
                            let x = from.x;
                            coordinates.push({ x: Math.round(x), y: Math.round(y) });
                        }
                    }else{
                        for (let y = from.y; y >= to.y; y++) {
                            let x = from.x;
                            coordinates.push({ x: Math.round(x), y: Math.round(y) });
                        }
                    }
                }
            }
        }else if(Math.abs(distX) == Math.abs(distY) && !(Math.abs(distX)==0 || Math.abs(distY)==0)/*Egy 45 fokban dölt vonalat rajzol, bármelyik irányba */){
            if(distX > 0 && distY > 0){
                var i = 0
                for(let x = from.x; x <= to.x; x++){
                    let y = from.y+i;
                    coordinates.push({ x: Math.round(x), y: Math.round(y) });
                    i++
                }
            }else if(distX < 0 && distY > 0){
                var i = 0
                for(let x = from.x; x >= to.x; x--){
                    let y = from.y+i;
                    coordinates.push({ x: Math.round(x), y: Math.round(y) });
                    i++
                }
            }else if(distX > 0 && distY < 0){
                var i = 0
                for(let y = from.y; y >= to.y; y--){
                    let x = from.x+i;
                    coordinates.push({ x: Math.round(x), y: Math.round(y) });
                    i++
                }
            }else if(distX < 0 && distY < 0){
                var i = 0
                for(let y = from.y; y >= to.y; y--){
                    let x = from.x-i;
                    coordinates.push({ x: Math.round(x), y: Math.round(y) });
                    i++
                }
            }
        }else if(Math.abs(distX) > 0 && Math.abs(distY) > 0/**Ez egy bármilyen MÁS dőlésben lévő vonalat rajzol */){
            if(longest == distX){
                if (distX > 0) {
                    for (let x = from.x; x <= to.x; x++) {
                        if(from.y < to.y){
                            let y = from.y + slope * (x - from.x);
                            coordinates.push({ x: Math.round(x), y: Math.round(y) });
                        }else{
                            let y = from.y - slope * (x - from.x);
                            coordinates.push({ x: Math.round(x), y: Math.round(y) });
                        }
                    }
                } else{
                    for (let x = from.x; x >= to.x; x--) {
                        if(from.y < to.y){
                            let y = from.y + slope * (x - from.x);
                            coordinates.push({ x: Math.round(x), y: Math.round(y) });
                        }else{
                            let y = from.y - slope * (x - from.x);
                            coordinates.push({ x: Math.round(x), y: Math.round(y) });
                        };
                    }
                }
            }else{
                if (distY > 0) {
                    for (let y = from.y; y <= to.y; y++) {
                        if(from.x < to.x){
                            let x = from.x + slope * (y - from.y);
                            coordinates.push({ x: Math.round(x), y: Math.round(y) });
                        }else{
                            let x = from.x - slope * Math.abs((y - from.y));
                            coordinates.push({ x: Math.round(x), y: Math.round(y) });
                        };
                    }
                } else{
                    for (let y = from.y; y >= to.y; y--) {
                        if(from.x < to.x){
                            let x = from.x + slope * Math.abs((y - from.y));
                            coordinates.push({ x: Math.round(x), y: Math.round(y) });
                        }else{
                            let x = from.x - slope * (y - from.y);
                            coordinates.push({ x: Math.round(x), y: Math.round(y) });
                        };
                    }
                }
            }
        }
console.log(coordinates)
}
line(from, to);
