import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from '../models/task'

@Component({
  selector: 'app-products-component',
  templateUrl: './products-component.component.html',
  styleUrls: ['./products-component.component.css']
})
export class ProductsComponentComponent implements OnInit {
  filter: String = "";
  data: any;
  tasks: Task[];

  constructor(private http: HttpClient) {
    this.tasks = [];

  }

  ngOnInit() {
  }

  search() {
    this.http.get(`https://www.liverpool.com.mx/tienda/?s=${this.filter}&d3106047a194921c01969dfdec083925=json`)
      .subscribe((data) => {
        console.log(data)
        let array =  data.contents[0].mainContent
        var tam = array.length
        this.data = data.contents[0].mainContent[tam-1].contents[0].records;
        console.log(this.data)
      })
  }

  getTask(): Task[] {
    if (localStorage.getItem('tasks') === null) {
      this.tasks = [];
    } else {
      this.tasks = JSON.parse(localStorage.getItem('tasks'))

    }
    return this.tasks;
  }

  addTask(task: Task): void {
    this.tasks.unshift(task);
    let tasks;
    if (localStorage.getItem('tasks') === null) {
      tasks = [];
      tasks.unshift(tasks);
      localStorage.setItem('tasks', JSON.stringify(tasks));
    } else {
      tasks = JSON.parse(localStorage.getItem('tasks'));
      tasks.unshift(task);
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }

  removeTask(task: Task) {
    for (let i = 0; this.tasks.length; i++) {
      if (task == this.tasks[i]) {
        this.tasks.splice(i, 1);
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
      }
    }
  }


}
