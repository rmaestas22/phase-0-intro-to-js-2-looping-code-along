// Code your solutions in this file
const names= ['Charlie','Samip','Al']

function writeCards(namesArray, event) {
    let thankYouCards = []
    for (let i = 0; i < namesArray.length; i++) {
        thankYouCards.push(`Thank you, ${namesArray[i]}, for the wonderful ${event} gift!`)
    }
    return thankYouCards
}

console.log(writeCards(names,'birthday'))

function countDown(num){
   while (num >= 0) {
    console.log(num)
    num--
   }


}


countDown(10)