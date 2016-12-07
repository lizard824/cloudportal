/**
 * Created by duanxc1 on 12/2/2016.
 */
import {Component, OnInit} from '@angular/core';
import {ValidationComponent, ValidationConfig} from "../shared/component/validation.component";
import {FormGroup, Validators, FormBuilder} from '@angular/forms';

@Component({
  selector: 'login',
  templateUrl: './login.component.html'
})
export class LoginComponent extends ValidationComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {
    super(fb);
  }

  ngOnInit(): void {
    this.buildValidationForm();
  }

  buildValidationForm(): void {
    let config: { [key: string]: ValidationConfig } = {
      'username': {
        value: '',
        validators: {
          'required': {fn: Validators.required, error: 'Username is required.'}
        }
      },
      'password': {
        value: '',
        validators: {
          'required': {fn: Validators.required, error: 'Password is required.'},
        }
      },
    };
    this.loginForm = this.createFormGroup(config);
    //监听表单值变化
    this.monitorValueChange(this.loginForm);
  }
}
