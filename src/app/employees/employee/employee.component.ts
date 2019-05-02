import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../shared/employee.service';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  submitted: boolean;
  formControls = this.service.form.controls;
  constructor( private service: EmployeeService ) { }
  ngOnInit() { }

  onSubmit() {
    this.submitted = true;
    const data = this.service.form.value;
    const id = this.service.form.value.id;
    delete data.id;
    if (this.service.form.valid) {
      if (this.service.form.get('id').value == null) {
        this.service.createEmployee(data);
      } else {
        this.service.updateEmployee(id, data);
      }
      this.service.form.reset();
      this.submitted = false;
    }
  }
}
