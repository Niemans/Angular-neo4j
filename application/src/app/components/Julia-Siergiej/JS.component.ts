import { Component, OnInit } from '@angular/core';
import { SimsService } from 'src/app/services/sims.service';

@Component({
  selector: 'app-Julia-Siergiej',
  templateUrl: './JS.component.html',
  styleUrls: ['./JS.component.css']
})
export class JS implements OnInit {

  simsList: any[];

  constructor(private service: SimsService) {
    this.simsList = [];
  }

  async ngOnInit() {
    let result = await this.service.findSimConnection("Julia", "Siergiej");

    result?.forEach(record => {
      this.simsList.push(record.get('p'));
    })

    console.log(this.simsList);
  }

}
