import { Component, OnInit } from '@angular/core';
import { SimsService } from 'src/app/services/sims.service';

@Component({
  selector: 'app-Monika-FC-Copper',
  templateUrl: './MFCC.component.html',
  styleUrls: ['./MFCC.component.css']
})
export class MFCC implements OnInit {

  simsList: any[];

  constructor(private service: SimsService) {
    this.simsList = [];
  }

  async ngOnInit() {
    let result = await this.service.findSimAPetBNbC();

    result?.forEach(record => {
      this.simsList.push(record.get('s'));
    })

    console.log(this.simsList);
  }

}
