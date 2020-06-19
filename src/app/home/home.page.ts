import { Component } from '@angular/core';
import {ProveedordeezzerService } from '../proveedordeezzer.service';
import { NavController } from '@ionic/angular';
import { CanciondeezzerService } from '../canciondeezzer.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  songs;
  playlist;
  details="DetailsPage";
  constructor(
    public deezer: ProveedordeezzerService, 
    private nav: NavController,
    public canciones: CanciondeezzerService) {

      this.deezer.GetSongs()
    .subscribe(
      (datas)=>{
        this.playlist=datas;
        this.songs = this.playlist.tracks.data;
      },
      )
  }

 
  ngOnInit(){
    
        
  }

  detailsPage(cancion){
    this.canciones.sendObjectSource(cancion);
    this.nav.navigateForward('/detalles/cancion')
  }

}
