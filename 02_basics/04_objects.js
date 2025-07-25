// const tinderUser= new Object();
const tinderUser={}
tinderUser.id="123abc"
tinderUser.name="Sammy"
tinderUser.isLoggedIn=false
// console.log(tinderUser);

const regularUser={
    email: "some@gamil.com",
    fullName: {
        userFullName:  {
            firstname:"anushka",
            lastname: "raj"
        }
    }
}
// console.log(regularUser.fullName.userFullName.firstname);

// concatenate 2 objs
const obj1={1:'a',2:'b'}
const obj2={3:'a',4:'b'}

// const obj3={obj1,obj2}//object inside obj
// const obj3=Object.assign(target,src1,src2,..,srcn)

// const obj3=Object.assign({},obj1,obj2)

const obj3={...obj1,...obj2}

// console.log(obj3);
const user=[
    {
        id:1,
        email:"user1@gmail.com"
    },
    {
        id:2,
        email:"user2@gmail.com"
    },
    {
        id:3,
        email:"user3@gmail.com"
    },
    {
        id:4,
        email:"user4@gmail.com"
    }
]

// console.log(user[1].email);

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course={
    courseName: 'Js',
    price:"999",
    courseInstrcutor:"anushka"
}

course.courseInstrcutor
console.log(course.courseInstrcutor);

// const {courseInstrcutor} = course
// console.log(courseInstrcutor);

const {courseInstrcutor : instructor} = course
console.log(instructor);



// json
// {
//     "name" : "anushka",
//     "age" : 21,
//     "location":"hyderabad"
// }
