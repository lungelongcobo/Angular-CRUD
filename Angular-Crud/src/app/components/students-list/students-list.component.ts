import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/students.model';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.less']
})
export class StudentsListComponent implements OnInit {

  students: Student[] = [];

  constructor(private studentsService: StudentsService) { }

  ngOnInit() {
    this.studentsService.getAllStudents()
    .subscribe({
      next: (students) => {
        console.log(students);
        this.students = students;
      },
      error: (response) =>{
        console.log(response);
      }
    })
  }

}
