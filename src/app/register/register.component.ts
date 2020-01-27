import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { UserService } from '../services/user.service';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  form: FormGroup;

  constructor(private router:Router, private logservice:LoginService) { }

  ngOnInit() {
    this.initForm();
  }
  initForm() {
    this.form = new FormGroup(
      {
        name: new FormControl('', Validators.required),
        firstname: new FormControl('', Validators.required),
        email: new FormControl('', Validators.required),
        address: new FormControl('', Validators.required),
        town: new FormControl('', Validators.required),
        postalCode: new FormControl('', Validators.required),
        password: new FormControl('', [Validators.required, Validators.minLength(8)]),
        confirmPassword: new FormControl('', Validators.required),
        sex: new FormControl('', Validators.required),
        phone: new FormControl('', Validators.required),
        isLunchLady: new FormControl(false),
        wallet: new FormControl(0)
      });
  }


  returnLogin(){
      this.router.navigateByUrl('/');
  }
  submit(form){
    let value = form.value;
    console.log(value);
    if(value.password != value.confirmPassword){
      alert("mot de passe non identique !");
    }else if(form.invalid){
      alert("Vous avez oublier un champ ou votre mot de passe ne contient pas 8 caractère !")
    }else{
      this.logservice.addUser(this.form.value).subscribe(resp => console.log(resp));
      this.router.navigate(['/']);

    }
  }



}
