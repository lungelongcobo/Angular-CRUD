import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { StudentRegistrationComponent } from "./components/students/student-registration/student-registration.component";
import { StudentsListComponent } from "./components/students/students-list/students-list.component";

const routes: Routes = [
  {
    path: 'students',
    component: StudentsListComponent
  },
  {
    path: 'students/registration',
    component: StudentRegistrationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
