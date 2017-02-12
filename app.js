let todoData=[
{title:'Physics',author: 'Sheldon Cooper',content:'Physics text',photourl: '/sheldon/Physics'},
{title: 'Astro Physics',author: 'Raj',content: 'Space theory',photourl:'/raj/astroPhysics'},
{title:'Biology',author:'Amy',content:'bio text',photourl:'/amy/biology'},
{title:'Engineering Chemstry',author:'Lenard',content:'Chemstry',photourl:'/lenard/chemstry'},
{title:'Engineering maths',author:'Howard',content:'maths',photourl:'/howard/maths'}
]
var app=angular.module("grumblr",[]);
//console.log("I was called");
app.controller("todosCtrl",[todoCtrl]) //Here we have first mentioned the name of the controller and then the array of dependency.
function todoCtrl(){
	this.todos=todoData;
    this.addTodo=function(){
    	let entry={title: this.newTitle,author: this.newauthor,content: this.newContent,photourl: this.newurl}
    	this.todos.push(entry)

    };

}
