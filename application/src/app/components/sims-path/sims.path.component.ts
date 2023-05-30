import { Component, OnInit } from '@angular/core';
import { SimsService } from 'src/app/services/sims.service';

@Component({
  selector: 'app-sims-path',
  templateUrl: './sims.path.component.html',
  styleUrls: ['./sims.path.component.css']
})
export class SimsPathComponent implements OnInit {

  simsList: any[];

  constructor(private service: SimsService) {
    this.simsList = [];
  }

  async ngOnInit() {
    let result = await this.service.findSimConnection("Adam", "Tomasz");

    result?.forEach(record => {
      this.simsList.push(record.get('p'));
    })

    console.log(this.simsList);
  }

}
