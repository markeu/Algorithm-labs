// var Repo = require('./taskRepository')
// var task = Object.create(Object.prototype);

// task.title = 'my task';
// task.description = 'My description';

// Object.defineProperty(task, 'toString', {
//     value: function() {
//         return this.title + ' ' + this.description;
//     },
//     writable: false,
//     enumerable: false,
//     configurable: true
// })

// var urgentTask = Object.create(task);

// Object.defineProperty(urgentTask, 'toString', {
//     value: function() {
//         return this.title + ' is urgent';
//     },
//     writable: false,
//     enumerable: false,
//     configurable: false
// })

// console.log(urgentTask.toString())

// var Task = function(data) {
//     this.name = data.name;
//     this.completed = false;
// }



// Task.prototype.save = function() {
//     console.log('saving Task: ' + this.name);
//     Repo.save(this)
// }

// module.exports = Task;