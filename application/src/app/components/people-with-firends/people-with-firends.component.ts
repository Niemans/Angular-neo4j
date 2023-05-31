import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { SimsService } from 'src/app/services/sims.service';

@Component({
  selector: 'app-people-with-firends',
  templateUrl: './people-with-firends.component.html',
  styleUrls: ['./people-with-firends.component.css']
})
export class PeopleWithFirendsComponent {
  @ViewChild("formDirective") formDirective!: NgForm;

  form!: FormGroup;

  simList: any[];
  counters: any[]

  constructor(private service: SimsService){
    this.simList = [];
    this.counters = [];
  }

  async ngOnInit() {
    this.form = this.createFormGroup();
  }

  async findPeople(){
    this.simList = [];

    let nrOfRiends = this.form.value.nrOfRiends;

    let result = await this.service.findPplwFriends(nrOfRiends);

    result?.forEach(record => {
      try{
        this.simList.push(record.get('s'));
      } catch(err) {}
      try{
        this.counters.push(record.get('counter'));
      } catch(err) {}
    })
  }

  private createFormGroup(): FormGroup<any> {
    return new FormGroup({
      nrOfRiends: new FormControl('',[Validators.required, Validators.min(0)]),
    })
  }
}
