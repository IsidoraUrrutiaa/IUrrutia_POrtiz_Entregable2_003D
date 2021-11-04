import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formularioLogin: FormGroup;

  constructor(public fb: FormBuilder,
    public alertController: AlertController,
    public navCtrl: NavController) { 

    this.formularioLogin = this.fb.group({
      'nombre': new FormControl("",Validators.required),
      'password': new FormControl("",Validators.required)
    })

  }

  ngOnInit() {
  }

  async ingresar(){
    var f = this.formularioLogin.value;

    var usuario = JSON.parse(localStorage.getItem('usuario'));

    if(usuario.nombre == f.nombre && usuario.password == f.password){
      const alert = await this.alertController.create({
        header: 'Bienvenido: '+usuario.nombre,
        message: ' Te damos la bienvenida a nuestra aplicación ',
        buttons: ['Aceptar']
      });
      await alert.present();
      console.log('El usuario ha sido ingresado');
      localStorage.setItem('ingresado','true');
      this.navCtrl.navigateRoot('/index');
    }else{
      const alert = await this.alertController.create({
        header: 'Datos incorrectos',
        message: 'Los datos que ingresaste son incorrectos. Por favor inténtelo de nuevo',
        buttons: ['Aceptar']
      });
  
      await alert.present();
    }
  }

}
