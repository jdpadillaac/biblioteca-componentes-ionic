import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-pop-info',
  templateUrl: './pop-info.component.html',
  styleUrls: ['./pop-info.component.scss'],
})
export class PopInfoComponent implements OnInit {

  public items = Array(40);

  constructor(
    private popOverCtrl: PopoverController
  ) { }

  ngOnInit() {}

  onClick(valor: number) {

    console.log('item', valor);
    

    this.popOverCtrl.dismiss({
      item: valor
    });

  }

}
