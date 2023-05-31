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

  jobList: any[];
  simList: any[];

  constructor(private service: SimsService){
    this.jobList = [];
    this.simList = [];
  }

  async ngOnInit() {
    this.form = this.createFormGroup();
    let result = await this.service.findJob();

    result?.forEach(record => {
      this.jobList.push(record.get('j'));
    })

  }

  async findPeople(){
    this.simList = [];

    let job = this.form.value.job;
    let nr = this.form.value.nrOfRiends;

    let result = await this.service.findPplwJobAndFriends(job,nr);

    result?.forEach(record => {
      try{
        this.simList.push(record.get('s'));
      } catch(err) {}
    })

  }

  private createFormGroup(): FormGroup<any> {
    return new FormGroup({
      job: new FormControl('',[Validators.required]),
      nrOfRiends: new FormControl('',[Validators.required, Validators.min(0)]),
    })
  }
}
