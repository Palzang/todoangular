import { Component, OnInit } from '@angular/core';
import {Todo} from '../../interfaces/todo';

import { trigger, animation, transition, style, animate } from '@angular/animations';
@Component({
  selector: 'todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
 animations:[
   trigger('fade',[
     transition(':enter',
     [
       style({opacity:0,transform:'translateY(30px)'}),
       animate(400,style({opacity:1,transform:'translateY(0px)'}))
     ]),
     transition(':leave',
     [
       animate(400,style({opacity:0,transform:'translate(30px)'}))
     ])
   ])
 ]
  
})
export class TodoComponent implements OnInit {
todos: Todo[];
todotitle: string;
idtodo:number;
beforeeditcache :string;
filter:string;
  constructor() { }

  ngOnInit() {
    this.filter='all';
    this.beforeeditcache='';
    this.todotitle='';
    this.idtodo=4;
    this.todos=[
      {
          'id':1,
          'title':'First Task',
          'completed':false,
          'editing':false,
      },
      { 
        'id':2,
        'title':'Second Task',
        'completed':false,
        'editing':false,
      },
      {
        'id':3,
        'title':'Third Task',
        'completed':false,
        'editing':false,
      },
    ];
      }
      addtodos(): void{
        if(this.todotitle.trim().length==0)
        {
          return;
        }
      
        this.todos.push({
          id:this.idtodo,
          title:this.todotitle,
          completed:false,
          editing:false
        })
        this.todotitle='';
        this.idtodo++;
     
    }
    edittodo(todo:Todo):void{
      this.beforeeditcache=todo.title;
      todo.editing=true;
    }
    deletetodos(id:number): void
    {
      this.todos=this.todos.filter(todo => todo.id !=id)
    }
    doneedit(todo:Todo):void{
      if(todo.title.trim().length==0)
      {
        todo.title=this.beforeeditcache;
      }
      todo.editing=false;
    }
    canceledit(todo:Todo):void{
        todo.title=this.beforeeditcache;
      todo.editing=false;
    }
    remaining():number{
      return this.todos.filter(todos=> !todos.completed).length;
    }
    atleastonecompleted():boolean{
      return this.todos.filter(todo=>todo.completed).length>0;
    }
    clearcompleted():void{
      this.todos=this.todos.filter(todo=>!todo.completed);
    }
    checkalltodos():void{
      this.todos.forEach(todo=>todo.completed=(<HTMLInputElement>event.target).checked)
    }
    todosfiltered():Todo[]
    {
      if(this.filter=='all')
      {
        return this.todos;
      }
      else if(this.filter=='active')
      {
        return this.todos.filter(todo=>!todo.completed)
      }
      else if(this.filter=='completed')
      {
        return this.todos.filter(todo=>todo.completed)
      }
      return this.todos;
    }
  }
    
