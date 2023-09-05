const users = ['Andrew', 'Mary', 'Anton']

function chekForCopyItem (array, item) {
    for(let i = 0; i < array.length; i++) {
        if (array[i] === item) {
            return `Hello ${item}`
        }
    }
    return 'Goodbuy'
}

console.log(chekForCopyItem(users, 'Mary'))