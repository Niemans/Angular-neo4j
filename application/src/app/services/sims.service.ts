import { Injectable } from '@angular/core';
import {Driver, Session, driver, auth} from 'neo4j-driver'

@Injectable({
  providedIn: 'root'
})
export class SimsService {

  private dr!:Driver;
  private ses!:Session;

  async findLinkPetNeighbourhood(neighbourhoodID:string){
    const readQuery = `
    match q = shortestPath((p:Pet)-[:SPRelation|PSRelation|IsIn|LivesIn *1..20]-(n:Neighbourhood))
    where elementId(n) = '${neighbourhoodID}'
    return q;
    `;
    return await this.findSomething(readQuery);
  }

  async findPeoplesAtHouse(houseID:string){
    const readQuery = `
      match (s)-[r:LivesIn]-(h:House)
      where elementid(h) = '${houseID}'
      return s,r
    `;
    return await this.findSomething(readQuery);
  }

  async findHome(){
    const readQuery = `
      match (h:House)
      return h;
    `;
    return await this.findSomething(readQuery);
  }

  async findPet(){
    const readQuery = `
      match (p:Pet)
      return p;
    `;
    return await this.findSomething(readQuery);
  }

  async findNeighbourhood(){
    const readQuery = `
      match (n:Neighbourhood)
      return n;
    `;
    return await this.findSomething(readQuery);
  }

  async findPerson(){
    const readQuery = `MATCH (p:Sim) RETURN p`;
    return await this.findSomething(readQuery);
  }



  private async findSomething(query:string){ //not tested
    this.openSession();

    let records;
    try {
      records =  (await this.ses.executeRead( tw => tw.run(query))).records;
    }
    catch (error) {
      console.error("findPerson error:\n" + error);
      records = null;
    }
    finally{
      await this.closeSession();
      return records;
    }
  }

  private openSession(){
    let uri = 'neo4j+s://485f3d81.databases.neo4j.io';
    let user = 'neo4j';
    let password = 'j5XgKBdDPYSE-CJKAEKJs2EXDfUdoYREHBh4pJq5bPc';
    this.dr = driver(uri, auth.basic(user, password));
    this.ses = this.dr.session({ database: 'neo4j' });
  }

  private async closeSession(){
    await this.ses.close();
    await this.dr.close();
  }

}
