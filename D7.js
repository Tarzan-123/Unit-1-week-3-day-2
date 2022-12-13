/* ESERCIZIO 1
  Scrivi una funzione per concatenare due stringhe ricevute come parametri, selezionando solamente i primi 2 caratteri della
  prima e gli ultimi 3 della seconda. Converti la stringa risultante in maiuscolo e mostrala con un console.log().
*/

function upper(casa, giardino){
  let casa1 = casa.slice(0, 2)
  let giardino1 = giardino.slice(5)
  let concat =casa1.concat(giardino1)
  
    console.log(`Eserc1: `, concat.toLocaleUpperCase())
  }



(upper("casa", "giardino"))

/* ESERCIZIO 2
  Scrivi una funzione che torni un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 100 (incluso).
*/







function giveMeRandom (num){
  if(typeof num !== "number") {
      return "Non è stata inserito un numero"
  }else{
      let arrayNum = []
      for(let i = 0; i < num; i++) {
          arrayNum.push(Math.floor(Math.random() * 101))
      }
      return arrayNum
  }
} 
const risultatoEser1 = giveMeRandom(10)

console.log("Eserc2: ",risultatoEser1)




/* ESERCIZIO 3
  Scrivi una funzione per ricavare solamente i valori PARI da un array composto da soli valori numerici (suggerimento: il metodo filter può aiutare)
*/

const arraynum2 = [4, 7, 9, 2, 5];

const checkPari = (arraynum2) =>{ return arraynum2.filter (num=>num % 2 === 0)}


console.log("Eserc3: ", arraynum2)


/* ESERCIZIO 4
  Scrivi una funzione per sommare i numeri contenuti in un array
*/
/*
const array = [1, 2, 3, 4];
let sum = 0;

for (let i = 0; i < array.length; i++) {
    sum += array[i];
}
console.log("La somma dell' array è: ", sum);

*/

let sum = 0;
const numbers = [65, 44, 12, 4];
numbers.forEach(myFunction);


function myFunction(item) {
  sum += item;
}

console.log("Es 4)   La somma dell' array è: ", sum);

/* ESERCIZIO 5
  Scrivi una funzione per sommare i numeri contenuti in un array (usare REDUCE)
*/



const arr2 = [5, 6, 7, 8];
const reducer2 = (accumulator, curr) => accumulator + curr;
console.log("Es 5)   La somma dell' array è: " , arr2.reduce(reducer2));




/* ESERCIZIO 6
  Scrivi una funzione che, dato un array di soli numeri e un numero n come parametri, ritorni un secondo array con tutti i valori del precedente incrementati di n
*/



console.log("-----------------Eser6---------------------")




const numbers2 = [65, 44, 15, 4];
numbers2.forEach(myFunction2);


function myFunction2(item) {
   console.log(item + 5);
}




/* ESERCIZIO 8
  Scrivi una funzione che, dato un array di stringhe, ritorni un nuovo array contenente le lunghezze delle rispettive stringhe dell'array di partenza
  es.: ["EPICODE", "is", "great"] => [7, 2, 5]
*/
console.log("-------------------eser8")

const arraystring = ["EPICODE", "is", "great"]


arraystring.forEach(myFunction3);


function myFunction3(item) {
   console.log(item.length);
}

/* ESERCIZIO 9
  Scrivi una funzione per creare un array contenente tutti i valori DISPARI da 1 a 99.
*/




const checkDispari = () => {
  const arrayVuoto = []
  for (let index = 0; index < 100; index++) {
    if (index % 2 !== 0) {
      arrayVuoto.push(index)
    }
    
  }
  return arrayVuoto
}
console.log("Eser9: ",checkDispari())




/* Questo array di film verrà usato negli esercizi a seguire. Non modificarlo e scorri oltre per riprendere gli esercizi :) */
const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg"
  },
  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg"
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg"
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg"
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg"
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg"
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg"
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg"
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg"
  }
];

/* ESERCIZIO 10
  Scrivi una funzione per trovare il film più vecchio nell'array fornito.
*/



/*

const film = movies.filter(elemento => elemento.Year < 1970)



   console.log("Eserc10: ",film)

*/
   

   const theOldestMovie = (array) => {
     const filtro = array.filter(
       (elemento) => elemento.Year == Math.min(...movies.map((item) => item.Year))
     )
     console.log("Eser10: ",filtro)
   
   }
   
   theOldestMovie(movies)
   
   
   



/* ESERCIZIO 11
  Scrivi una funzione per ottenere il numero di film contenuti nell'array fornito.
*/

const numerodiFlm = array => { return array.length}

console.log("Eserc11: " ,numerodiFlm("Eserc11: ", movies))

/* ESERCIZIO 12
  Scrivi una funzione per creare un array con solamente i titoli dei film contenuti nell'array fornito.
*/


const titolideiFilm = array => {
  return array.map(element=>element.Title)
}



console.log (`Eserc12: `, titolideiFilm(movies))








/* ESERCIZIO 13
  Scrivi una funzione per ottenere dall'array fornito solamente i film usciti nel millennio corrente.
*/

const filmUscitidopoilDuemila = array => {
  let result = []
  for (let index = 0; index < array.length; index++) {
    if (parseInt(array[index].Year) > 1999){
      result.push (array[index])
      
    }
    
  }
  return result


}


console.log("Eserc13: ", filmUscitidopoilDuemila(movies))




/* ESERCIZIO 14
  Scrivi una funzione per ottenere dall'array fornito uno specifico film (la funzione riceve un imdbID come parametro).
*/

/*
const getMoviebyId = function (array, id) {
  let foundMovie = null
  for (let index = 0; index < array.length; index++) {
    if(array[index].imdbID === id) {
      foundMovie = array[index]
    }
  }
  return foundMovie
}


console.log("Eserc14: ", getMoviebyId(movies, "tt0355702"))
*/

const elementoPescato = function (array, id) {
  return array.find(elem => elem.imdbID === id)
}


console.log("Eserc14: ", elementoPescato(movies, "tt0167260"))


/* ESERCIZIO 15
  Scrivi una funzione per calcolare la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array fornito.
*/



const sumAlltheYear = array => {
  return array.reduce((acc, curr) => acc + parseInt(curr.Year),0)
}

console.log("----------------------eser15")
console.log(sumAlltheYear(movies))