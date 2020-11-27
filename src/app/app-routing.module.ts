import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { AppComponent } from './app.component';
import { ErrorComponent } from './error/error.component';
import { ListTodoComponent } from './list-todo/list-todo.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'todos', component: ListTodoComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'add', component: AddTodoComponent},

  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
