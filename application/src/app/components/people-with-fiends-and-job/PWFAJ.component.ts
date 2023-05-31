import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { SimsService } from 'src/app/services/sims.service';

@Component({
  selector: 'app-people-with-friends-and-job',
  templateUrl: './PWFAJ.component.html',
  styleUrls: ['./PWFAJ.component.css']
})
export class PWFAJ implements OnInit{
  @ViewChild("formDirective") formDirective!: NgForm;

  form!: FormGroup;
  houseList: any[];

  simList: any[];
  relationList: any[];

  constructor(private service: SimsService){
    this.houseList = [];
    this.simList = [];
    this.relationList = [];
  }

  async ngOnInit() {
    let result = await this.service.findPerson();

    result?.forEach(record => {
      this.simList.push(record.get('p'));
    })

    console.log(this.simList);
  }

  async findPeople(){
    this.simList = [];
    this.relationList = [];

    let house = this.form.value.house;
    let nr = this.form.value.nrOfRiends;

    let result = await this.service.findPplwJobAndFriends(house, nr);

    result?.forEach(record => {
      try{
        this.simList.push(record.get('p'));
      } catch(err) {}
    })
  }

  private createFormGroup(): FormGroup<any> {
    return new FormGroup({
      house: new FormControl('',[Validators.required]),
      nrOfRiends : new FormControl('',[Validators.required])
    })
  }
}
