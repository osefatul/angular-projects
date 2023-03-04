import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject } from "rxjs";
import { tap } from "rxjs/operators";

interface UsernameAvailableResponse {
  available: boolean;
}

interface SignupCredentials {
  username: string | null;
  password: string | null;
  passwordConfirmation: string |null;
}

interface SigninCredentials {
  username: string | null;
  password: string | null;
}

interface SignupResponse {
  username: string;
}

interface SignedinResponse {
  authenticated: boolean;
  username: string;
}

interface SigninResponse {
  username: string;
}



@Injectable({
  providedIn: "root"
})
export class AuthService {
  rootUrl = "https://api.angular-email.com";
  signedin$ = new BehaviorSubject(false);
  username = "";

  constructor(private http: HttpClient) {}


  usernameAvailable(username: string) {
    return this.http.post<UsernameAvailableResponse>(
      `${this.rootUrl}/auth/username`,
      {
        username
      }
    );
  }

  signup(credentials: Partial<SignupCredentials>) {
    return this.http
      .post<SignupResponse>(`${this.rootUrl}/auth/signup`, credentials, {withCredentials: true})
      .pipe(
        tap(({ username }) => {
          this.signedin$.next(true);
          this.username = username;
        })
      );
  }

  checkAuth() {
    return this.http
      .get<SignedinResponse>(`${this.rootUrl}/auth/signedin`,{withCredentials: true})
      .pipe(
        tap(({ authenticated, username }) => {
          this.signedin$.next(authenticated);
          this.username = username;
        })
      );
  }

  signout() {
    return this.http
      .post<SignedinResponse>(`${this.rootUrl}/auth/signout`, {})
      .pipe(
        tap(() => {
          this.signedin$.next(false);
        })
      );
  }


  signin(credentials: Partial<SigninCredentials>) {
    return this.http
      .post<SigninResponse>(`${this.rootUrl}/auth/signin`, credentials, {withCredentials: true} )
      .pipe(
        tap(({ username }) => {
          this.signedin$.next(true);
          this.username = username;
        })
      );
  }

}