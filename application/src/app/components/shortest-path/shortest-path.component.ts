import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { SimsService } from 'src/app/services/sims.service';

@Component({
  selector: 'app-shortest-path',
  templateUrl: './shortest-path.component.html',
  styleUrls: ['./shortest-path.component.css']
})
export class ShortestPathComponent implements OnInit{
  @ViewChild("formDirective") formDirective!: NgForm;

  form!: FormGroup;
  simList: any[];

  constructor(private service: SimsService){
    this.simList = [];
  }

  async ngOnInit() {
    this.form = this.createFormGroup();
    let result = await this.service.findPerson();

    result?.forEach(record => {
      this.simList.push(record.get('p'));
    })
  }

  async findPath(){

    let start = this.form.value.start.properties;
    let finish = this.form.value.finish.properties;

    let result = await this.service.findShortestPathBetween2Sims();

    result?.forEach(record => {
      this.simList.push(record.get('p'));
    })

    console.log(start);
    console.log(finish);
    console.log(result);

  }

  private createFormGroup(): FormGroup<any> {
    return new FormGroup({
      start: new FormControl('',[Validators.required]),
      finish: new FormControl('',[Validators.required]),
    })
  }
}
