import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'student-registration',
  templateUrl: './student-registration.component.html',
  styleUrls: ['./student-registration.component.less']
})
export class StudentRegistrationComponent implements OnInit {

  courses: string[] = [
    "Bachelor of Science in I.T",
    "Masters in Education",
    "Bachelor of Laws",
    "Bachelor of Science in Computer Science"
  ]
  constructor() { }

  ngOnInit() {
  }

}
