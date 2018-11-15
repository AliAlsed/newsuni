import { AngularFireAuth } from 'angularfire2/auth';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public afAuth: AngularFireAuth, private router: Router) { }

  ngOnInit( ) {
    console.log(this.afAuth.auth.currentUser);
    if (this.afAuth.auth.currentUser == null) {
      this.router.navigate(['login']);
    }
  }

}
