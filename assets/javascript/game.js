$(document).ready(function(){
            
            var min = 20; // generate starting random number 
            var max = 120;
            var startNumber = 0;
            var rand = Math.floor(Math.random() * (max - min + 1) + min);
            var startNumber = rand;

            console.log(min);
            console.log(max);
            console.log(rand);
            console.log(startNumber);

            $( "#number" ).html(startNumber); // generate target number

            



            $("#redCrystal").click(function(){ // generate red crystal number
            var min = 1; 
            var max = 12;
            var rand = Math.floor(Math.random() * (max - min + 1) + min);
            var redNumber = rand;
            $( "#redCrystal" ).html(redNumber);
            });


            $("#blueCrystal").click(function(){ // generate blue crystal number
            var min = 1; 
            var max = 12;
            var rand = Math.floor(Math.random() * (max - min + 1) + min);
            var blueNumber = rand;
            $( "#blueCrystal" ).html(blueNumber);
            });


            $("#yellowCrystal").click(function(){ // generate yellow crystal number
            var min = 1; 
            var max = 12;
            var rand = Math.floor(Math.random() * (max - min + 1) + min);
            var yellowNumber = rand;
            $( "#yellowCrystal" ).html(yellowNumber);
            });



            $("#greenCrystal").click(function(){ // generate green crystal number
            var min = 1; 
            var max = 12;
            var rand = Math.floor(Math.random() * (max - min + 1) + min);
            var greenNumber = rand;
            $( "#greenCrystal" ).html(greenNumber);
            });




//             var numscore = 0;
//             function myFunction(p1, p2) {
//     return p1 * p2;              // The function returns the product of p1 and p2
// }








        });    

      