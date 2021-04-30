import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Champions } from 'src/shared/model/champions';
import { Router, RouterLink } from '@angular/router';
import { UtilisateursService } from 'src/utilisateurs/service/utilisateurs.service';
import { Utilisateurs } from 'src/utilisateurs/shared/model/utilisateurs';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent implements OnInit {

  registerForm: FormGroup;
  submitted: boolean;

  constructor(private formBuilder: FormBuilder, private route: Router, private service: UtilisateursService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted=true;
    if (this.registerForm.invalid) {
      return;
    }
    this.service.get().subscribe(utilisateurs => {
      for(var i=0; i<utilisateurs.length; i++){
        if(utilisateurs[i].username == this.registerForm.value.username){
          if(utilisateurs[i].password == this.registerForm.value.password){
            sessionStorage.setItem("isLoginAs", utilisateurs[i].id);
            this.route.navigate(["/champions"]);
          }
        }
      }
      //console.log(utilisateurs)
    });
  }
}
