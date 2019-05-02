import { Injectable } from '@angular/core';
import { Employee } from './employee.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor(
    private firestore: AngularFirestore,
    private toastr: ToastrService,
    private fb: FormBuilder
  ) { }
  form = this.fb.group({
    id: [null],
    fullName: ['', Validators.required],
    email: ['', Validators.email],
    mobile: ['', [Validators.required, Validators.minLength(8)]],
    location: ['']
  });
  getEmployees() {
    return this.firestore.collection('employees').snapshotChanges();
  }

  createEmployee(employee: Employee) {
    this.firestore.collection('employees').add(employee);
    this.toastr.success('Employee Created', 'Form submission');
  }

  loadForm(employee: Employee) {
    this.form.setValue(employee);
  }

  updateEmployee(id: number, employee: Employee) {
    this.firestore.doc('employees/' + id).update(employee);
    this.toastr.success('Employee Updated', 'Form submission');
  }

  deleteEmployee(id: number) {
    if (confirm('Are you sure to delete this record?')) {
      this.firestore.doc('employees/' + id).delete();
      this.toastr.warning('Deleted successfully', 'EMP. Register');
    }
  }
}
