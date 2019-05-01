import { Component, OnInit } from '@angular/core';
import { Employee } from '../shared/employee.model';
import { EmployeeService } from '../shared/employee.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  emps: Employee[];

  constructor( 
    private service: EmployeeService,
    private firestore: AngularFirestore,
    private toastr: ToastrService ) { }

  ngOnInit() {
    this.getEmployees()
  }

  getEmployees(): void {
    this.service.getEmployees().subscribe(res=>{
      this.emps = res.map(item=>{
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data()} as Employee;
      })
    })
  }
  onEdit(emp: Employee) {
    this.service.formData = Object.assign({}, emp);
  }
 
  onDelete(id: string) {
    if (confirm("Are you sure to delete this record?")) {
      this.firestore.doc('employees/' + id).delete();
      this.toastr.warning('Deleted successfully','EMP. Register');
    }
  }


}
