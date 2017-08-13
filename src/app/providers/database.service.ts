import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import * as firebase from 'firebase';
import { Subject } from 'rxjs/Subject';


@Injectable()
export class DatabaseService {
public userList:any;
public data:FirebaseListObservable<any>;
public sizeSubject: Subject<any>;
  constructor(public auth: AuthService ,public db: AngularFireDatabase) {
   
    this.sizeSubject = new Subject();
  }

  getList(endpoint){
    return this.db.list('client/'+endpoint);
   }

   getObject(endpoint){
    return this.db.object('client/'+endpoint);
   }

    setList(endpoint,data){
      return this.db.object('client/'+endpoint).set(data);
    } 

    pushData(endpoint,data){
      this.data = this.db.list('client/'+endpoint);
      return this.data.push(data);
    }

    queryList(endpoint,queryObj){
      return this.db.list('client/'+endpoint,{
        query:{
          orderByChild: queryObj.attribute,
          equalTo: queryObj.value
        }
      })
    }

}
