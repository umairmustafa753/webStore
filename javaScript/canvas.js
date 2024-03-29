let canvas = document.getElementById( "canvas" );
let ctx = canvas.getContext( "2d" );

//intializing array of x and y.
let x = [], y = [];

//decalring and intializing global varaiables.
let count = 0, localCount = 0;

//sertting interval for 20 miliseconds.
setInterval( clear, 20 );


//clear function
function clear(){
    //calling art functin.
    art();
    for(let i = localCount + 1; i < count; i++){
        ctx.beginPath();
        if( localCount === 1 ){
            ctx.arc( x[ 0 ], y[ 0 ], 22, 0, 2*Math.PI );
            ctx.arc( x[ i ], y[ i ], 22, 0, 2*Math.PI );
        }
        else{
            ctx.arc( x[ i ], y[ i ], 22, 0, 2*Math.PI );
        }
        ctx.fillStyle = "rgb(61, 75, 80)";
        ctx.strokeStyle = "rgb(61, 75, 80)";
        ctx.stroke();
        ctx.fill();
        localCount = i;
        break;
    }
}


//canvas background.
function display(){
    //calculating canvas length and width.
    canvas.height = window.innerHeight + scrollY;
    canvas.width = window.innerWidth + scrollX;
    ctx.fillStyle = "rgb(61, 75, 80)" ;
    ctx.fillRect( 0, 0, canvas.width, canvas.height);
    document.getElementById( "btn" ).style.left = canvas.width - 100;
    document.getElementById( "row" ).style.top = canvas.height - 250;
    //calling art functin.
    art();
}


//om mouse over function.
canvas.onmousemove = function position( event ){
    //calling art functin.
    art();
    x[ count ] = event.clientX, y[ count ] = event.clientY;
    ctx.fillStyle = "grey";
    ctx.beginPath();
    ctx.arc( x[ count ], y[ count ], 22, 0, 2*Math.PI );
    //adding border color to circle.
    ctx.strokeStyle = "rgb(61, 75, 80)";
    ctx.stroke();
    ctx.fill();
    ctx.beginPath();
    ctx.arc( x[ count ], y[ count ], 20, 0, 2*Math.PI );
    ctx.fillStyle = "rgb(61, 75, 80)" ;
    ctx.stroke();
    ctx.fill();
    count++;
}

//art function
function art(){
    //drawing curve on canvas.
    ctx.beginPath();
    //adding inner color to curve.
    ctx.strokeStyle = "rgb(39, 61, 80)";
    ctx.fillStyle = "grey";
    ctx.moveTo( 0, canvas.height / 2 );
    //writing cp1x, cp1y, cp2x, cp2y, cx, cy.
    ctx.bezierCurveTo( 900 , 0, 400 , 100, 0, 0 );
    ctx.stroke();
    ctx.fill();

    ctx.beginPath();
    //adding inner color to curve.
    ctx.strokeStyle = "rgb(39, 61, 80)";
    ctx.fillStyle = "grey";
    ctx.moveTo( canvas.width, canvas.height );
    //writing cp1x, cp1y, cp2x, cp2y, cx, cy.
    ctx.bezierCurveTo( canvas.width , 900, 900 , 0, 300, canvas.height );
    ctx.stroke();
    ctx.fill();
}

//calling display function.
display();