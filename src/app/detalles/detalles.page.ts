import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CanciondeezzerService } from '../canciondeezzer.service';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.page.html',
  styleUrls: ['./detalles.page.scss'],
})
export class DetallesPage implements OnInit {

  song:any;

  constructor(private route:ActivatedRoute, private canciones:CanciondeezzerService) { }

  ngOnInit() {
    this.canciones.$getObjectSource.subscribe(data => {
      console.log(data)
      this.song=data;
    }).unsubscribe();
  }

}
