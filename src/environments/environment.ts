// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrl: 'https://localhost:44301/api/',
  authorityUrl: 'http://35.221.243.132:4444/',
  clientId: 'auth-code-client-v3',
  adminUrl: 'http://127.0.0.1:6677',
  response_type: 'code',
  scope: 'openid offline academy',
  cloudFront: 'https://d300j9jm9dmo8q.cloudfront.net/'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
