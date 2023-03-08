import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/students.model';

@Component({
  selector: 'students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.less']
})
export class StudentsListComponent implements OnInit {

  students: Student[] = [
    {
      id: 657472,
      name: "Neliswa Ngcobo",
      email: 'Neliswa@gmail.com',
      phone: '06345244167',
      course: "Bachelor Of Science in Mathematics"
    },
    {
      id: 765488,
      name: "Azekiel Khan",
      email: 'KahanA@gmail.com',
      phone: '06345244167',
      course: "Bachelor Of Science in Computer Science"
    },
    {
      id: 657434,
      name: "Bruce Willis",
      email: 'willisB@gmail.com',
      phone: '06345244167',
      course: "Diploma in I.T"
    },
    {
      id: 764633,
      name: "Jabu Doba",
      email: 'jd@gmail.com',
      phone: '06345244167',
      course: "Bachelor Of Science in Physics"
    },
    {
      id: 787574,
      name: "Nguwe Sibuka",
      email: 'Ns@gmail.com',
      phone: '06345244167',
      course: "Bachelor of Laws"
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
