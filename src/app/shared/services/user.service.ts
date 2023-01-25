import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public users$: BehaviorSubject<string[]> = new BehaviorSubject([])

  constructor() { }

  addUser(user: string) {
    // don't know what's best practice...
    this.users$.value.push(user) //option 1
    // this.users$.next([...this.users.value, user]) // option 2
  }
}
