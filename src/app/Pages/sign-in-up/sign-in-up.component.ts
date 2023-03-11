import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-sign-in-up',
  templateUrl: './sign-in-up.component.html',
  styleUrls: ['./sign-in-up.component.css']
})
export class SignInUpComponent {
  
  emailIn: string = ""
  passwordIn: string = ""

  Name: string = ""
  emailUp: string = ""
  passwordUp: string = ""
  cpasswordUp: string = ""
  user: any 
  constructor(private auth : AuthService,public authu: AngularFireAuth) { }
  
  ngOnInit() { 
    this.authu.user.subscribe(user => {
      this.user=user
    })
    console.log(this.user);
    
  }

  signUp() {
    if (this.Name == "") {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please enter your name...',
        background: "#212529"
      })
      return
    }
    if (this.emailUp == "") {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please enter your email...',
        background: "#212529"
      })
      return
    }
    if (this.passwordUp == "") {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please enter your password...',
        background: "#212529"
      })
      return
    }
    if (this.passwordUp.length < 6) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please enter your password alteast of 6 character or digit...',
        background: "#212529"
      })
      return
    }
    if (this.passwordUp != this.cpasswordUp) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Passwords do not match... Please enter your password again!',
        background: "#212529"
      })
      return
    }

    this.auth.signUp(this.emailUp, this.passwordUp,this.Name)
    this.Name = ""
    this.emailUp = ""
    this.passwordUp = ""
    this.cpasswordUp = ""
  }


  signIn() {
    if (this.emailIn == "") {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please enter your email...',
        background: "#212529"
      })
      return
    }
    if (this.passwordIn == "") {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please enter your password...',
        background: "#212529"
      })
      return
    }

    this.auth.signIn(this.emailIn, this.passwordIn)
    this.emailIn = ""
    this.passwordIn = ""
  }

}
