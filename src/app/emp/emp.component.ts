import { Component } from '@angular/core';

interface Employee {
  id: number;
  name: string;
  designation: string;
}

@Component({
  selector: 'sh-employee',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css']
})
export class EmployeeComponent {
  employees: Employee[] = [
    { id: 1, name: 'John Doe', designation: 'Developer' },
    { id: 2, name: 'Jane Smith', designation: 'Manager' },
    { id: 3, name: 'Sam Wilson', designation: 'Designer' },
  ];
}
