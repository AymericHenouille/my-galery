import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  public form: FormGroup;

  constructor(private auth: AuthService, private formBuilder: FormBuilder) { }

  public ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      comfirmPassword: ['', Validators.required]
    });
  }

  public submit(): void {
    const name = this.form.get('name').value;
    const email = this.form.get('email').value;
    const password = this.form.get('password').value;
    const comfirmPassword = this.form.get('comfirmPassword').value;

    if (password === comfirmPassword) {
      // this.auth.signup(name, email, password);
    }

  }

}
