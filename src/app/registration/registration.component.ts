import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Student } from '../models/student';
import {HttpClient} from '@angular/common/http';
declare var grecaptcha: any;

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  student:any={};
 isRegister: boolean = false;

  constructor(private router: Router,private http:HttpClient) {
    this.ConForm = new FormGroup({
      fullname:new FormControl(null,[Validators.required]),
      email:new FormControl(null,[Validators.required]),
      phonenumber: new FormControl(null,[Validators.required]),
      college: new FormControl(null,[Validators.required]),
      dob: new FormControl(null,[Validators.required]),
      city: new FormControl(null,[Validators.required]),
      state: new FormControl(null,[Validators.required]),
      qualification: new FormControl(null,[Validators.required]),
      yoc: new FormControl(null,[Validators.required]),
      password1: new FormControl(null,[Validators.required]),
      password2: new FormControl(null,[Validators.required]),
      recaptcha: new FormControl(null, [Validators.required]),
      
    });
   }
  ngOnInit(): void {
  
  }

  students:Student[];

  ConForm:FormGroup;


  // get fullname(){
  //   return this.ConForm.get("fullname");
  //  }

  //  get email(){
  //   return this.ConForm.get("email");
  //  }

  headers = new Headers({ 'Content-Type': 'application/json' });

  resp:string;


  SubmitReg(){



    console.log("heree");
    this.student.StudentName = this.ConForm.value.fullname;
    this.student.Email = this.ConForm.value.email;
    this.student.Mobile_num = this.ConForm.value.phonenumber;
    this.student.College = this.ConForm.value.college;
    this.student.DOB = this.ConForm.value.dob;
    this.student.City = this.ConForm.value.city;
    this.student.State = this.ConForm.value.state;
    this.student.Qualification = this.ConForm.value.qualification;
    this.student.Year_of_Completion = this.ConForm.value.yoc;
    this.student.Pwd = this.ConForm.value.password1;
    

    console.log(this.student);

    var res = this.http.post("https://localhost:44399/student/post",JSON.stringify(this.student), {headers:{'Content-Type': 'application/json'}}).toPromise().then(res => {this.resp = res.toString();
    this.isRegister = true;
  })
    .catch();
    console.log("here "+this.resp);
  }

}
