import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword } from '@angular/fire/auth';
import { Firestore } from '@angular/fire/firestore';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { setDoc, doc, getDoc, } from "firebase/firestore";
import Swal from 'sweetalert2'
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private favCollection: AngularFirestoreCollection<any> | any;

  constructor(private fireauth: Auth, private firestore: Firestore, private router: Router, private db: AngularFirestore) {
    this.favCollection = this.db.collection('favorite');
   }


  //signUp method
  signUp(email: string, password: string, name: string) {
    createUserWithEmailAndPassword(this.fireauth, email, password).then((res) => { 
      const uid = res.user.uid
      const email = res.user.email
      const user = {
        email: email,
        name: name
      }

      const docRef = doc(this.firestore, "users", uid)
      setDoc(docRef, user).then(() => {
        console.log("Data added successfully");
      }).catch((err) => { 
        console.log(err);
      })


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
  
  //addFavorite method
  addFav(userId: any, data: any) {
    data.userId = userId;    

    const query = this.db.collection('favorite').ref.where('id', '==', data.id).where('userId', '==', data.userId)
    query.get().then((querySnapshot) => { 
      if (!querySnapshot.empty) {
        Swal.fire({
          title: 'Already added to Favorites',
          background: "#212529",
          icon: 'error',
          showConfirmButton: false,
          timer: 2000,
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          }
        })
      }
      else {
    return this.favCollection.add(data).then(() => {
        Swal.fire({
          title: 'Added to Favorites',
          background: "#212529",
          icon: 'success',
          showConfirmButton: false,
          timer: 2000,
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          }
        })
      }).catch((err:any) => { 
        console.log(err);
      }) 
      }
    }) 
  }

  //getFavorite method
  getFav(userId: any):Observable<any[]> {
    return this.db.collection('favorite', ref => ref.where('userId', '==', userId))
      .snapshotChanges()
      .pipe(
        map(actions => {
          return actions.map(a => {
            const data:any = a.payload.doc.data()
            const id = a.payload.doc.id;
            return { id, ...data }
          })
        })
      )
  }

  //removeFav method
  removeFav(itemId: any) {
    this.favCollection.ref.where('id', '==', itemId).get().then((querySnapshot:any) => {
      querySnapshot.forEach((doc:any) => {
        doc.ref.delete().then(() => {
          Swal.fire({
            title: 'Removed from Favorites',
            background: "#212529",
            icon: 'success',
            showConfirmButton: false,
            timer: 2000,
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
          })
        }).catch((err:any) => { 
          console.log(err);
        })
      })
    })
  }

  //favExists method


  }


