import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/students.model';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.less']
})
export class StudentsListComponent implements OnInit {

  loading: boolean = true;
  students: Student[] = [];

  constructor(private studentsService: StudentsService) { }

  ngOnInit() {
    this.studentsService.getAllStudents()
    .subscribe({
      next: (students) => {
        this.students = students;
        this.loading = false;
      },
      error: (response) =>{
        console.log(response);
      }
    })
  }

}
