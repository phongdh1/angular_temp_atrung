import { Injectable } from '@angular/core';
import { UserManager, UserManagerSettings } from 'oidc-client';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root',
})
export class AuthService {

    // Observable navItem source
    private _authNavStatusSource = new BehaviorSubject<boolean>(false);
    // Observable navItem stream
    authNavStatus$ = this._authNavStatusSource.asObservable();

    private manager = new UserManager(getClientSettings());
    private user: any;

    constructor() {
        this.manager.getUser().then(user => {
           this.user = user;
            this._authNavStatusSource.next(this.isAuthenticated());
        });
    }

    login() {
        return this.manager.signinRedirect();
    }

    async completeAuthentication() {
        var user = await this.manager.signinRedirectCallback();
        this.user = user;
        this._authNavStatusSource.next(this.isAuthenticated());
    }

    isAuthenticated(): boolean {
        return this.user != null && !this.user.expired;
    }

    get authorizationHeaderValue(): string {
        if (this.user) {
            return `${this.user.token_type} ${this.user.access_token}`;
        }
        return '';
    }

    get name(): string {
        if (this.user !== null && this.user.profile !== undefined){
          return  this.user.profile.user_full_name;
        } else {
          return '';
        }
      }

    get profile() {
        return this.user != null ? this.user.profile : null;
    }
    async signout() {
        await this.manager.signoutRedirect();
    }

    public finishLogout = () => {
        this.user = null;
        return this.manager.signoutRedirectCallback();
      }
}

export function getClientSettings(): UserManagerSettings {
    return {
        authority: environment.authorityUrl,
        client_id: environment.clientId,
        redirect_uri: environment.adminUrl + '/callback',
        post_logout_redirect_uri: environment.adminUrl + '/logout_callback',
        response_type: 'code',
        scope: environment.scope,
        filterProtocolClaims: true,
        loadUserInfo: true,
        automaticSilentRenew: true,
        silent_redirect_uri: environment.adminUrl + '/silent-refresh.html'
    };
}