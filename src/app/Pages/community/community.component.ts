import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.css']
})
export class CommunityComponent {

  message: string = ''
  userId: any 
  userName: any 
  messageData:any
  constructor(public auth: AngularFireAuth,private authser:AuthService) { }
  
  ngOnInit() { 
    this.getUser()
    this.getCommData()
   }

  addCommData() {
    let data = {
      userId: this.userId,
      userName: this.userName,
      message:this.message
    }
    this.authser.addToCommunity(data)
    this.message = ''
  }

  getCommData() { 
    this.authser.getCommunity().subscribe(data => { 
      // console.log(data)
      this.messageData=data
    })
  }

  getUser() {
    this.auth.user.subscribe((data:any) => { 
      this.userId = data.uid
      this.authser.getUserById(this.userId).then(data => { 
        this.userName = data.name
      })
    })
  }

}
