import { AngularFireAuth } from 'angularfire2/auth';
import { Component, OnInit, Inject } from '@angular/core';
import { NewsService } from '../news.service';
import { Router } from '@angular/router';
import { SESSION_STORAGE, StorageService } from 'angular-webstorage-service';
const STORAGE_KEY = 'local_user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
hide = false;
emailhide = false;
passwordhide = false;
  constructor(public afAuth: AngularFireAuth,
    public _NewsService: NewsService, private router: Router, @Inject(SESSION_STORAGE) private storage: StorageService) { }

  ngOnInit() {
  }
  signIn(f ) {
    const email = f.value.email;
    if (f.value.password.length < 6 ) {
      this.passwordhide = true;
    }
    this._NewsService.login(f.value.email, f.value.password).then( (user) => {
      this.storage.set(STORAGE_KEY, this.afAuth.auth.currentUser);
      this.router.navigate(['homeapp']);
    }, (err) => {
      this.hide = true;
    });
  }

}
