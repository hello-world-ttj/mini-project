import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent {
  user:any
  constructor(public auth: AngularFireAuth) { }
  ngOnInit() { 
    this.auth.user.subscribe(user => {
      this.user=user
    })
  }
}
