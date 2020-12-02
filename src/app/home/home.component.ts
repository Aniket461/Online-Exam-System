import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  
  ConForm:FormGroup;
  ConForm2: FormGroup;
  email:string;
isSent: boolean = false;
isPress:boolean = false;


constructor(private http:HttpClient) { 

    this.ConForm = new FormGroup({
      email:new FormControl(null,[Validators.required]),
    });

    this.ConForm2 = new FormGroup({

      loginemail:new FormControl(null,[Validators.required]),
      
      loginpass:new FormControl(null,[Validators.required]),


    });
  }

  ngOnInit(): void {
  }


  SubmitLogin(){
    var logemail = this.ConForm2.value.loginemail;
    var logpass = this.ConForm2.value.loginpass;

    console.log(logemail + "--"+ logpass);
    //get route for login check here
    //send user id alaong with response from api
    //if success redirect to exam page else home page again
    //will have to use session storage to store email id and student id
  }

  SubmitEmail(){
    this.isPress = true;
    this.email = this.ConForm.value.email;
    console.log(this.email);
    var result = this.http.get("https://localhost:44399/getemail?email="+this.email).subscribe(res=>{
      console.log(result);
      this.isPress = false;
      this.isSent = true;

    });

  }
  getEmailf(e:string){
    console.log("e and"+e);
    return this.http.get("https://localhost:44399/getemail?email='surveaniket461@gmail.com'");
  }

}
