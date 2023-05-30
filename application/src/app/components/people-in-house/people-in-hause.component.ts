import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { SimsService } from 'src/app/services/sims.service';

@Component({
  selector: 'app-people-in-hause',
  templateUrl: './people-in-hause.component.html',
  styleUrls: ['./people-in-hause.component.css']
})
export class PeopleInHauseComponent implements OnInit{
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
    this.form = this.createFormGroup();
    let result = await this.service.findHome();

    result?.forEach(record => {
      this.houseList.push(record.get('h'));
    })

  }

  async findPeople(){
    this.simList = [];
    this.relationList = [];

    let house = this.form.value.house;

    let result = await this.service.findPeoplesAtHouse(house);

    result?.forEach(record => {
      try{
        this.simList.push(record.get('s'));
      } catch(err) {}
      try{
        this.relationList.push(record.get('r'));
      }catch(err) {}
    })

    this.relationList.forEach( r =>{
      for (let i = 0; i < this.simList.length; i++) {
        if(r.startNodeElementId == this.simList[i].elementId){

          this.simList[i].relation = r;
        }
      }
    })
  }

  private createFormGroup(): FormGroup<any> {
    return new FormGroup({
      house: new FormControl('',[Validators.required]),
    })
  }
}
