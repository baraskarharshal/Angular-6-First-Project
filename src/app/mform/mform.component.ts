import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-mform',
  templateUrl: './mform.component.html',
  styleUrls: ['./mform.component.scss']
})
export class MformComponent implements OnInit {

  emailid;
  passwd;
  formdata;

  constructor() { }

  ngOnInit() {

    this.formdata = new FormGroup({
      // Setting default values and validation rules for email and password
      emailid: new FormControl("angular@gmail.com",Validators.compose([
        Validators.required,
        Validators.pattern("[^ @]*@[^ @]*")
        ])
      ),
      passwd: new FormControl("", this.passwordvalidation)
   });

  }

  // Custom validation for password field.  Length should be >=5.
  passwordvalidation(formcontrol) {
    if (formcontrol.value.length < '5'){
       return {"passwd" : true};
    }
 }

  onClickSubmit(data) {
    this.emailid = data.emailid;
    alert("email : "+this.emailid);
  }

}
