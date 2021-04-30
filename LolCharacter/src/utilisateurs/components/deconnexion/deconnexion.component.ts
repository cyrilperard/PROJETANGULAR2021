import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deconnexion',
  templateUrl: './deconnexion.component.html',
  styleUrls: ['./deconnexion.component.scss']
})
export class DeconnexionComponent implements OnInit {

  constructor(private route :Router) { }

  // log:boolean;

  ngOnInit() {
    // this.isLogin()
  }

  logout(){
    sessionStorage.removeItem("isLoginAs");
    this.route.navigate(["/connexion"]);
  }


  // isLogin() {
  //   if(sessionStorage.getItem("isLoginAs"))
  //     this.log=true;
  //   else
  //     this.log=false;

  // }

}
