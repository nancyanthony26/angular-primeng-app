import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EmployeeService } from '../employee.service';
import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-add-edit-employee',
  templateUrl: './add-edit-employee.component.html',
  styleUrls: ['./add-edit-employee.component.scss']
})
export class AddEditEmployeeComponent implements OnInit {

  @Input() displayAddModal: boolean = true;
  @Output() clickClose: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() clickAdd: EventEmitter<any> = new EventEmitter<any>();

  employeeForm = this.fb.group({
    name: ["", Validators.required],
    email: ["", Validators.required],
    gender: ["", ],
    city: ["",],
    Technicalskills: ["",],
    role: ["",],
    workexperience:["",],
  });
  constructor(private fb: FormBuilder, private EmployeeService: EmployeeService,
    private messageService: MessageService) { }

  ngOnInit(): void {
  }

  closeModal() {
    this.employeeForm.reset();
    this.clickClose.emit(true);
  }

  addEmployee() {
    this.EmployeeService.saveEmployee(this.employeeForm.value).subscribe(
      response => {
        this.clickAdd.emit(response);
        this.closeModal();
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Employee added' });
      },
      error => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: error });
        console.log('Errror occured');
      }
    )
  }

}