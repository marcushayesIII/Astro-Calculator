
    const planets = [ 
        ['Pluto', 0.06], 
        ['Neptune', 1.148], 
        ['Uranus', 0.917], 
        ['Saturn', 1.139], 
        ['Jupiter', 2.640, 4000], 
        ['Mars', 0.3895], 
        ['Moon', 0.1655, 2000], 
        ['Earth', 1], 
        ['Venus', 0.9032], 
        ['Mercury', 0.377], 
        ['Sun', 27.9]
    ];
//                           
function returnMiles(planetName) {

for(let i = 0; i < planets.length; i++){
    //    'Moon' === 'Moon'                   
    if (planetName == planets[i][0]){
        //       290   
        console.log(planets[i][1])                
        return planets[i][2];
    }

} 
}
returnMiles('sun')


// expecting 2000