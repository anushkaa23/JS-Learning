const myNums = [1, 2, 3]

// syntax 
/*
arr.reduce(function(acc,curr){
    return acc+curr
},0)
 */
// co 

const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)

console.log(myTotal);

console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay=shoppingCart.reduce((acc,item) => acc+item.price,0)
console.log(priceToPay)