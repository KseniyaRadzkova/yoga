"use strict";

let ageStr=prompt('How old are you if it is not a secret?');
let age=parseFloat(ageStr);

if ( age>55 ) {
    console.log('get a discount');
    alert('Congratulations, you will get a discount! Please, contact the sales office with an identity document');
} else {
    console.log('without discount');
}