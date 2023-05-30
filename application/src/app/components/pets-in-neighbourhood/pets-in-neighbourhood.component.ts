import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { SimsService } from 'src/app/services/sims.service';

@Component({
  selector: 'app-pets-in-neighbourhood',
  templateUrl: './pets-in-neighbourhood.component.html',
  styleUrls: ['./pets-in-neighbourhood.component.css']
})
export class PetsInNeighbourhoodComponent implements OnInit {
  @ViewChild("formDirective") formDirective!: NgForm;

  form!: FormGroup;
  neighbourhoodList: any[];

  links: Field[][];


  constructor(private service: SimsService){
    this.neighbourhoodList = [];
    this.links = [];
  }

  async ngOnInit() {
    this.form = this.createFormGroup();
    let result = await this.service.findNeighbourhood();

    result?.forEach(record => {
      this.neighbourhoodList.push(record.get('n'));
    })
  }

  async findLink() {
    this.links = [];
    let nID = this.form.value.neighbourhood;

    let result = await this.service.findLinkPetNeighbourhood(nID);

    result?.forEach( (r,i) => {
      this.links.push([]);

      r.forEach(sections => {
        console.log(sections);

        sections.segments.forEach( (s:any) => {
          let rel:Relation = {
            type: s.relationship.type,
            elementId: s.relationship.elementId,
            properties: s.relationship.properties,
            finishID: s.end.elementId,
          };

          let sta:Field = {
            label: s.start.labels[0],
            elementId: s.start.elementId,
            properties: s.start.properties,
            relation: rel,
          };

          this.links[i].push(sta);
        })

        let fin:Field = {
          label: sections.end.labels[0],
          elementId: sections.end.elementId,
          properties: sections.end.properties,
          relation:null,
        };

        this.links[i].push(fin);
      })
    })

    console.log(this.links);
  }


  private createFormGroup(): FormGroup<any> {
    return new FormGroup({
      neighbourhood: new FormControl('',[Validators.required]),
    })
  }
};


interface Field {
  label:string;
  elementId: string;
  properties: object;
  relation: Relation | null;
};

interface Relation {
  type:string;
  elementId: string;
  properties: object;
  finishID: string;
};
