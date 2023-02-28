import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword } from '@angular/fire/auth';
import { Firestore} from '@angular/fire/firestore';
import { setDoc, doc, getDoc, } from "firebase/firestore";
import Swal from 'sweetalert2'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireauth: Auth,private firestore: Firestore , private router: Router) { }


  //signUp method
  signUp(email: string, password: string, name: string) {
    createUserWithEmailAndPassword(this.fireauth, email, password).then((res) => { 
      const uid = res.user.uid
      const user = {
        uid: uid,
        name: name
      }

      const docRef = doc(this.firestore, "users", uid)
      setDoc(docRef, user).then(() => {
        console.log("Data added successfully");
      }).catch((err) => { 
        console.log(err);
      })

      localStorage.setItem('token', 'true')
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Signing up successfully...',
        background: "#212529",
        showConfirmButton: false,
        timer: 2000
      })
      this.router.navigate(['/home']);
    }, err => {
      if (err.code === "auth/email-already-in-use") {  
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Already signed up with this email address...',
        background: "#212529",
          showConfirmButton: false,
          timer: 2000
        })
      }     
      this.router.navigate(['/signIn/signUp']);
    })
  }

  //signIn method
  signIn(email: string, password: string) {
    signInWithEmailAndPassword(this.fireauth,email,password).then(() => { 
      localStorage.setItem('token', 'true')
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Signed In successfully...',
        background: "#212529",
        showConfirmButton: false,
        timer: 2000
      })
      this.router.navigate(['/home']);
    }, err => {
      if (err.code === 'auth/wrong-password') {
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Wrong Password Please Try Again',
          background: "#212529",
          showConfirmButton: false,
          timer: 2000
        }) 
      }
      this.router.navigate(['/signIn/signUp']);
    })
  }


   // signOut method
  signOut() { 
    signOut(this.fireauth).then(() => {
      localStorage.removeItem('token');
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Signed Out successfully...',
        background: "#212529",
        showConfirmButton: false,
        timer: 2000
      })
      this.router.navigate(['/signIn/signUp']);
    }, err => {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Something went wrong ' + err,
        background: "#212529",
        showConfirmButton: false,
        timer: 2000
      }) 
      this.router.navigate(['/signIn/signUp']);
    })
  }

  //getUserById method
 async getUserById(id:any):Promise<any> {
    const docRef = doc(this.firestore, "users", id)
    try {
      const docSnap = await getDoc(docRef);
      if(docSnap.exists()) {
        return docSnap.data()
    } else {
        console.log("Document does not exist")
    }
  } catch(error) {
      console.log(error)
  }
 }
  
  addFav(userId: any, data: any) {
    const docRef = doc(this.firestore, "favorite", userId)
    const favData = {
      favData: {
        data
      }
    }
      setDoc(docRef, favData).then(() => {
        Swal.fire({
          title: 'Added to Favorite',
          background: "#212529",
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          }
        })
      }).catch((err) => { 
        console.log(err);
      })
      
    
  }

}
