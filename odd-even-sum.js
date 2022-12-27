//Create functions to find the sum of odd elements and even elements 
//separately of an array. Register and trigger these functions using events.
const events = require('events');
const { EventEmitter } = require('stream');
const sumOfOdd = (arr) => {
    var sum = 0;
    for (const idx in arr) {
        if (Object.hasOwnProperty.call(arr, idx)) {
            const element = arr[idx];
            if (idx%2==0){
                sum+= element;
            }
        }
    }
    console.log('sum of odd elements is : '+sum);
}
const sumOfEven = (arr) => {
    var sum = 0;
    for (const idx in arr) {
        if (Object.hasOwnProperty.call(arr, idx)) {
            const element = arr[idx];
            if (idx%2==1){
                sum+= element;
            }
        }
    }
    console.log('sum of even elements: '+sum);
}

const eventEmitter = new EventEmitter();
const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
eventEmitter.on('sumOfOdd',sumOfOdd,arr);
eventEmitter.on('sumOfEven',sumOfEven,arr);
console.log('Events defined');
console.log('calling events')
eventEmitter.emit('sumOfEven',arr);
eventEmitter.emit('sumOfOdd',arr)
