import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Sample } from './sample.model'
@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})

export class SampleComponent {

  empDet: any;
  empDetails: Sample[] = [];
  selectedEmployee: Sample | null = null;
  isNewEmployee: boolean = false;
  // newEmpDetails: Sample = { id: 1, name: '', designation: '', phoneNo: '' };
  // editedSample: { name: string | null } | null = null;
  // editedSample: Sample | null = null;
  // editedSample: Sample | null = { id: 0, name: '', designation: '', phoneNo: '' };
  //  editedSample: { id: number; name: string } | null = null;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.fetchEmployeeDetails();
  }

  fetchEmployeeDetails() {
    this.http.get('http://localhost:8080/employee/').subscribe(res => {
      console.log('res==>', res);
      this.empDet = res;
      console.log('empDet==>', this.empDet);
    })
  }
  // editEmployee(employee: Sample): void {
  //   this.selectedEmployee = { ...employee };
  //   this.isNewEmployee = false;
  // }
  // onNameChange(newValue: string): void {
  //     if (this.editedSample) {
  //       this.editedSample.name = newValue;
  //     }
  //   }
  // AddNewEmployee(): void {
  //   this.empDetails.push({ ...this.newEmpDetails });
  //   this.newEmpDetails = { id: this.empDetails.length + 1, name: '', designation: '', phoneNo: '' };
  // }

  // saveSample(): void {
  //   if (this.editedSample) {
  //     const index = this.empDetails.findIndex(t => t.id === this.editedSample!.id);
  //     if (index !== -1) {
  //       this.empDetails[index] = { ...this.editedSample };
  //       this.editedSample = null;
  //     }
  //   }
  // }

  // cancelEdit(): void {
  //   this.editedSample = null;
  // }

  // editSample(sample: Sample): void {
  //   this.editedSample = { ...sample };
  // }

  // deleteSample(sampleId: number): void {
  //   this.empDetails = this.empDetails.filter(t => t.id !== sampleId);
  //   if (this.editedSample && this.editedSample.id === sampleId) {
  //     this.editedSample = null;
  //   }
  // }
}
