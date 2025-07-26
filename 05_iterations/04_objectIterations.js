const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

// for in loop will work

// for (const key in myObject) {
//     console.log(`Key :${key} , Value : ${myObject[key]}`)
// }

const programming =["c","c++","js","py","cpp"]

for (const key in programming) {
    console.log(programming[key])
}

