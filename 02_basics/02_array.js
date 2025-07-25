const marvel_heros=["ironman","thor","spiderMan"]
const dc_heros=["superman","batman","flash"]
// marvel_heros.push(dc_heros) //[ 'ironman', 'thor', 'spiderMan', [ 'superman', 'batman', 'flash' ] ]
// console.log(marvel_heros);

// console.log(marvel_heros[3]); //[ 'superman', 'batman', 'flash' ] 

// console.log(marvel_heros[3][1]);

const allHeros=marvel_heros.concat(dc_heros)
// good practice
// console.log(allHeros); //[ 'ironman', 'thor', 'spiderMan', 'superman', 'batman', 'flash' ]

// spread operator->preferred one
const all_new_heros=[...marvel_heros,...dc_heros]
// console.log(all_new_heros)

const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
// flatten an array
const real_another_array=another_array.flat(Infinity)
// console.log(another_array)
// console.log(real_another_array);

// check if array or not
console.log(Array.isArray("Anushka"))
console.log(Array.from("Anushka"))


