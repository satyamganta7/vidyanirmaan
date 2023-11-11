import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-enquiry',
  templateUrl: './add-enquiry.component.html',
  styleUrls: ['./add-enquiry.component.scss']
})
export class AddEnquiryComponent implements OnInit {

  pageTitle = 'Add New Enquiry';
  formItems: FormGroup | any;
  submitted = false;

  constructor(public fb: FormBuilder) { }

  ngOnInit(): void {
    this.formItems = this.fb.group({
      studentFirstName: ['', Validators.required],
      studentLastName: ['', Validators.required],
      studentDOB: ['', Validators.required],
      studentGender: ['', Validators.required],
      admissionClass: ['', Validators.required],
      aboutUs: ['', Validators.required],
      parentFirstName: ['', Validators.required],
      parentLastName: ['', Validators.required],
      mobileNumber: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern("^[0-9]*$")]],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required],
      landmark: [''],
      country: [''],
      state: [''],
      city: ['', Validators.required],
      area: [''],
    });
  }

  defaultValue?: string;

  country = [
    { name: 'India', value: 'India' },
  ];
  selectedCountry = 'India';

  state = [
    { name: 'Andhra Pradesh', value: 'Andhra Pradesh' },
    { name: 'Haryana', value: 'Haryana' },
    { name: 'Arunachal Pradesh', value: 'Arunachal Pradesh' },
    { name: 'Himachal Pradesh', value: 'Himachal Pradesh' },
    { name: 'Sikkim', value: 'Sikkim' },
    { name: 'Tamil Nadu', value: 'Tamil Nadu' },
    { name: 'Telangana', value: 'Telangana' },
    { name: 'Goa', value: 'Goa' },
    { name: 'Madhya Pradesh', value: 'Madhya Pradesh' },
    { name: 'Uttar Pradesh', value: 'Uttar Pradesh' },
    { name: 'West Bengal', value: 'West Bengal' },
  ];
  selectedState = 0;

  

  city = [
    { name: 'Hyderabad', value: 'Hyderabad' },
    { name: 'Warangal', value: 'Warangal' },
    { name: 'Nizamabad', value: 'Nizamabad' },
    { name: 'Khammam', value: 'Khammam' },
    { name: 'Karimnagar', value: 'Karimnagar' },
    { name: 'Mahabubnagar', value: 'Mahabubnagar' },
    { name: 'Nalgonda', value: 'Nalgonda' },
  ];

  area = [
    { name: 'Sanathnagar', value: 'Sanathnagar' },
    { name: 'Borabanda', value: 'Borabanda' },
    { name: 'Musheerabad', value: 'Musheerabad' },
    { name: 'Somajiguda', value: 'Somajiguda' },
    { name: 'Ashok Nagar', value: 'Ashok Nagar' },
    { name: 'Domalguda', value: 'Domalguda' },
    { name: 'Barkatpura', value: 'Barkatpura' },
    { name: 'Jamia Osmania', value: 'Jamia Osmania' },
    { name: 'Nampally', value: 'Nampally' },
    { name: 'Secunderabad', value: 'Secunderabad' },
    { name: 'Warsiguda', value: 'Warsiguda' },
    { name: 'Madhapur', value: 'Madhapur' },
  ];

  onSubmit() {
    this.submitted = true;
  }

  get forms() {
    return this.formItems.controls;
  }

}
