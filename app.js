console.log('Hello World');
// datatype of any variable is internally understood by browser
// variable declaration
var x = 'Prachi';            // we can write String datatype by using "" or ''. But it is preffered to use ''
                                // It is not mandatory to use ; in js but it is good practice to use ; in js
// to print the value
console.log(typeof(x));      // to check datatype of the variable
x= 100;
console.log(typeof(x));

x = true;       // boolean

var marks = null;       // to understand that value is null then we have assign that variable to null
console.log('type of marks '+ typeof(marks));  // if we explicitly initialize the variabble to null, then it is an Object
var a;              // if we just declare the variable without initializing it, then the datatype of a variable is undefined
console.log('type of a ',typeof(a));
// concatenation in js done by using , or + 
alert('Hello Guys');
//alert('Hi');          n no of alert messages we can use
var confirmation = confirm('are you sure to clear Icompass?');
console.log(confirmation);

if(confirmation){
    console.log('pass');
}   else {
    console.log('fail');
}

var username = prompt('Please Enter ur name');
console.log(username);

document.write('We have completed js output methods');

var names = ["Prachi","Pratiksha","Varsha","Chetana","Samruddhi","Antara",12345,true,null,undefined];

console.log(names);

console.log('the element at index 3 is', names[3]);

console.log(names.length);

var student = {
    name: 'Prachi',
    id: 1234,
    age: 23,
    marks: 40,
    address: {
        city: 'Kalyan',
        state: 'Maharashtra'
    }
}

console.log('student id is '+student.id);
console.log('student city is ',student.address.city);

function add(a,b){
    console.log('sum of 2 numbers',a+b);
}

add(10,12);

function add1(p,r){
    console.log('sum '+(p+r));
}
add1('Prachi',1234);

var multiply = function(a,b) {                            //anonymous fuction i.e. function without name
        console.log(a*b);
}
multiply(10,12);

//fat-arrow function
var division = (a,b) => a/b;
console.log(division(12,2));

                    