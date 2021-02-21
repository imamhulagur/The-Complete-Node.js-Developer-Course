// const square = function(x) {
//     return x*x;
// }
// const square = (x)=>{
//     return x*x;
// }
// const square = x=> x*x;
// console.log(square(2));

const event = {
    name: 'Birth Party',
    guestList: ['imam', 'imam1', 'imam2'],
    // printGuestList: function() {
    //     console.log('Guest list for '+ this.name);
    // }
    
    // printGuestList: ()=> {
    //     console.log('Guest list for '+ this.name);
    // }
    
    //ES6 method definition syntax
    printGuestList() {
        console.log('Guest list for '+ this.name);
        //standard function have there own this
        // this.guestList.forEach(function(guest) {
        //     console.log(guest+' is attending '+ this.name)
        // })
        //arrow functions don't bind the value this, they will bind to parent this
        this.guestList.forEach((guest)=> {
            console.log(guest+' is attending '+ this.name)
        })
    }
}
event.printGuestList();