// //ex 7
// const array = ['Rawan', 'Jafar', 'Hind','Muhammad','Esraa','Dareen'];

// array.forEach((element) => console.log(element));




// //ex 8
// 	let newSeries = [
// 			{
// 				"id": 70111470,
// 				"title": "Die Hard",
// 				"boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
// 				"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
// 				"rating": [4.0],
// 				"bookmark": []
// 			},
// 			{
// 				"id": 654356453,
// 				"title": "Bad Boys",
// 				"boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
// 				"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
// 				"rating": [5.0],
// 				"bookmark": [{ id: 432534, time: 65876586 }]
// 			},
// 			{
// 				"id": 65432445,
// 				"title": "The Chamber",
// 				"boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
// 				"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
// 				"rating": [4.0],
// 				"bookmark": []
// 			},
// 			{
// 				"id": 675465,
// 				"title": "Fracture",
// 				"boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
// 				"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
// 				"rating": [5.0],
// 				"bookmark": [{ id: 432534, time: 65876586 }]
// 			}
// 		         ];
//   let idTitlePairs = [];
//   let result = newSeries.forEach(function(series) {
//     idTitlePairs.push({
//       "id": series.id,
//       "title": series.title
//     });
//    return idTitlePairs; });
 
// console.log(idTitlePairs);
	



            // //ex 9
            // function() {
            //     let newSeries = [
            //             {
            //                 "id": 70111470,
            //                 "title": "Die Hard",
            //                 "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
            //                 "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
            //                 "rating": [4.0],
            //                 "bookmark": []
            //             },
            //             {
            //                 "id": 654356453,
            //                 "title": "Bad Boys",
            //                 "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
            //                 "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
            //                 "rating": [5.0],
            //                 "bookmark": [{ id: 432534, time: 65876586 }]
            //             },
            //             {
            //                 "id": 65432445,
            //                 "title": "The Chamber",
            //                 "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
            //                 "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
            //                 "rating": [4.0],
            //                 "bookmark": []
            //             },
            //             {
            //                 "id": 675465,
            //                 "title": "Fracture",
            //                 "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
            //                 "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
            //                 "rating": [5.0],
            //                 "bookmark": [{ id: 432534, time: 65876586 }]
            //             }
            //                  ],
                    
            //                  }




                            //  //10
                            //  function numbar(newSeries) {
                            //     return newSeries.filter((series) => series.rating[0] < 5);
                            //   }
                              
                            //   const numbar = number(newSeries);
                            //   console.log(number);



// //ex 11
// const arr = ["Java", "JavaScript", "Python",  "C++", "PHP"];
// const sum = arr.reduce(function(accumulator, currentValue) {
//   return accumulator + currentValue;
// });

// console.log(sum);





// //ex 12
// let pokemonData =[
//   {
//     "game_index": 76,
//     "version": {
//       "name": "red",
//       "url": "https://pokeapi.co/api/v2/version/1/"
//     }
//   },
//   {
//     "game_index": 76,
//     "version": {
//       "name": "blue",
//       "url": "https://pokeapi.co/api/v2/version/2/"
//     }
//   },
//   {
//     "game_index": 76,
//     "version": {
//       "name": "yellow",
//       "url": "https://pokeapi.co/api/v2/version/3/"
//     }
//   },
//   {
//     "game_index": 132,
//     "version": {
//       "name": "gold",
//       "url": "https://pokeapi.co/api/v2/version/4/"
//     }
//   },
//   {
//     "game_index": 132,
//     "version": {
//       "name": "silver",
//       "url": "https://pokeapi.co/api/v2/version/5/"
//     }
//   },
//   {
//     "game_index": 132,
//     "version": {
//       "name": "crystal",
//       "url": "https://pokeapi.co/api/v2/version/6/"
//     }
//   },
//   {
//     "game_index": 132,
//     "version": {
//       "name": "ruby",
//       "url": "https://pokeapi.co/api/v2/version/7/"
//     }
//   },
//   {
//     "game_index": 132,
//     "version": {
//       "name": "sapphire",
//       "url": "https://pokeapi.co/api/v2/version/8/"
//     }
//   },
//   {
//     "game_index": 132,
//     "version": {
//       "name": "emerald",
//       "url": "https://pokeapi.co/api/v2/version/9/"
//     }
//   },
//   {
//     "game_index": 132,
//     "version": {
//       "name": "firered",
//       "url": "https://pokeapi.co/api/v2/version/10/"
//     }
//   },
//   {
//     "game_index": 132,
//     "version": {
//       "name": "leafgreen",
//       "url": "https://pokeapi.co/api/v2/version/11/"
//     }
//   },
//   {
//     "game_index": 132,
//     "version": {
//       "name": "diamond",
//       "url": "https://pokeapi.co/api/v2/version/12/"}
//     ]

// function displayName(pokemonData) {
//     return pokemonData.reduce((names, pokemon) => {
//       const name = pokemon.version.name;
//       names.push(name);
//       return names;
//     }, []);
//   }
  
//   const characterNames = displayName(pokemonData);
//   console.log(characterNames);
  



  //ex 13

  var employee = {
    firstName: 'Rawan',
    sayHi: function(){
        console.log("Hi Coach ! " + this.firstName);
    }
}

employee.sayHi() // Hi Coach ! Rawan

var employee = {
  firstName: 'Rawan',
  info: {
      hasCar: true,
      hasPet: true
  },
  printInfo: function(){
      console.log("Car owner? " + this.hasCar);
  }
}

employee.printInfo() // Car owner? undefined


var employee = {
  firstName: 'Rawan',
  info: {
      hasCar: true,
      hasPet: true,
      printAddress: function(){
          return this.data.address;
      },
      data: {
          address: "Zarqa"
      }
  },
}

employee.info.printAddress() //Zarqa


