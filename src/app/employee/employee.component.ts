import { Component, OnInit } from '@angular/core';
import { Employee} from './employee';
import { EmployeeService } from './employee.service';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  employees: Employee[] = [];
  displayAddModal = false;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.getemployeeList();
  }

  getemployeeList() {
    this.employeeService.getEmployees().subscribe(
      (      response: Employee[]) => {
        this.employees = response;
      }
    )
  }

  showAddModal() {
    this.displayAddModal = true;
  }

  hideAddModal(isClosed: boolean) {
    this.displayAddModal = !isClosed;
  }

  saveEmployeeToList(newData: any) {
    this.employees.unshift(newData);
  }

}
