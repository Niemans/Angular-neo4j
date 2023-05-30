import { Component, OnInit } from '@angular/core';
import { SimsService } from 'src/app/services/sims.service';

@Component({
  selector: 'app-Marzen-HH-Luca',
  templateUrl: './MHHL.component.html',
  styleUrls: ['./MHHL.component.css']
})
export class MHHL implements OnInit {

  simsList: any[];

  constructor(private service: SimsService) {
    this.simsList = [];
  }

  async ngOnInit() {
    let result = await this.service.findMFCC();

    result?.forEach(record => {
      this.simsList.push(record.get('s'));
    })

    console.log(this.simsList);
  }

}
