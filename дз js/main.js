for (let i = 2; i <= 12; i++) {
    console.log('Пройден $(i) круг')
}

var num = 10,
reverse = false;
if(!reverse) for( var i=1;i<num;i++) log(i);
else         while(num-- )      log(num);
   // to avoid duplication if the code gets long
function log( num ) { console.log( num ); }



for (let i = 2; i <= 10; i++) {
    if (i % 2 == 0) {
    alert( i );
    }
}
    const colors = [ 'красный', 'оранжевый', 'жёлтый', 'зелёный', 'голубой', 'синий', 'фиолетовый' ];
    console.log(colors)
    for (let i = 0; i < colors.length; i++) {
        console.log(colors[i] + 2)
    }  


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