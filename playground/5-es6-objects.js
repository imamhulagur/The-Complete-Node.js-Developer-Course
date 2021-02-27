//Object property shorthand
 const name = 'imam';
 const age = 24;

 const user = {
    // name: name,
    name,
    // age: age,
    age,
    location: 'Bangalore'
 }

 console.log(user);

// //  //object destructuring - To extract object values into individual properties
//  const product = {
//     label: 'notebook',
//     price: 10,
//     stock: 2,
//     salePrice: undefined
//  }
// //End of writing a lot of code
// const label = product.label;
// const label = product.price;

// //To over come this, when we have complex objects with lot of properties use destructuring to store prop value in a individual variable.
// const {label:newLabel, price, newProp = 'default value'} = product;
// console.log(newLabel, price, newProp);

// //destructuring inside call back function
// const transaction = (type, {label, stock})=> {
//     console.log(type, label, stock);
// }

// transaction('Order', product);
