import { Component, OnInit } from '@angular/core';
import { SimsService } from 'src/app/services/sims.service';

@Component({
  selector: 'app-sims',
  templateUrl: './sims.component.html',
  styleUrls: ['./sims.component.css']
})
export class SimsComponent implements OnInit {

  simsList: any[];

  constructor(private service: SimsService) {
    this.simsList = [];
  }

  async ngOnInit() {
    let result = await this.service.findPerson();

    result?.forEach(record => {
      this.simsList.push(record.get('p'));
    })

    console.log(this.simsList);
  }

}
