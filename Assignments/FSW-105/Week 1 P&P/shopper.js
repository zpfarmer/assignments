var shopper = {
    firstName: 'zach',
    lastName: 'farmer',
    delivery: true,
    currentItems: 13,
    listOfItemsToGet: ['milk', 'cheese', 'chicken', 'soup'],
    groceryCart: {
        milk: 3,
        cheese: 4,
        chicken: 5,
        soup: 'can be any data type'
    },
    fullName: function () {
        return this.firstName + " " + this.lastName
    }
} 
console.log(shopper)

