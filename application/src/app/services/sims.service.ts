import { Injectable } from '@angular/core';
import {Driver, Session, driver, auth} from 'neo4j-driver'

@Injectable({
  providedIn: 'root'
})
export class SimsService {

  private dr!:Driver;
  private ses!:Session;


  async findShortestPathBetween2Sims(){
    const readQuery = `MATCH p=shortestPath((s:Sim {FirstName:'Roman'})-[:SSRelation*1..20]->(s2:Sim {FirstName:'Amanda'})) RETURN p`;
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
