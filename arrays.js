var courses = ['HTML', 'CSS', 'Javascript', 'Bootstrap', 'Core Java', 'Angular'];

console.log(courses.length);

//returns each element
for (var course of courses) {
    console.log(course);
}

//returns index of each element
for(var index in courses) {
    console.log('course at index', index, 'is ', courses[index]);
}

//to find  the index of a particular element
console.log('index of Bootstrap is ', courses.indexOf('Bootstrap'));

//to remove last element
console.log('before pop ', courses);
courses.pop();
console.log('after pop ', courses);

//to add the last elements in array
courses.push('Servlets', 'JPA', 'Hibernate');
console.log('added courses using push() ', courses);

//removing the element from index 0
courses.shift();
console.log(courses);

//adding elements in the starting index
courses.unshift('HTML');
console.log(courses);

//removing the elements from any index
courses.splice(3, 2);
console.log(courses);

//adding the elements at any index
courses.splice(3,0, 'Angular');
console.log(courses);