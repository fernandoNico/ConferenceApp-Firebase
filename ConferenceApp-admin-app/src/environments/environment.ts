// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyCKcnfgdLY6Lsv65VrVhSJHRYuA9VPYYuk',
    authDomain: 'conferenceapp-e6b6d.firebaseapp.com',
    databaseURL: 'https://conferenceapp-e6b6d.firebaseio.com',
    projectId: 'conferenceapp-e6b6d',
    storageBucket: 'conferenceapp-e6b6d.appspot.com',
    messagingSenderId: '7232470151'
  }
};
