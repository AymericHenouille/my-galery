import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { Auth } from '../models/auth.model';

@Injectable()
export class AuthService {

  public user: Observable<Auth>;

  constructor() {
  }

  public signup(name: string, email: string, password: string): Promise<void> {
    return null;
  }

  public signin(email: string, password: string): Promise<void> {
    return null;
  }

}
