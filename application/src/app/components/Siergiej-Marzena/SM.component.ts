import { Component, OnInit } from '@angular/core';
import { SimsService } from 'src/app/services/sims.service';

@Component({
  selector: 'app-Siergiej-Marzena',
  templateUrl: './SM.component.html',
  styleUrls: ['./SM.component.css']
})
export class SM implements OnInit {

  simsList: any[];

  constructor(private service: SimsService) {
    this.simsList = [];
  }

  async ngOnInit() {
    let result = await this.service.findSimConnection("Amanda", "Marzena");

    result?.forEach(record => {
      this.simsList.push(record.get('p'));
    })

    console.log(this.simsList);
  }

}
