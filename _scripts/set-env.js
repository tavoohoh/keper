const fs = require('file-system');

const targetPath = './src/environments/environment.ts';
const isProduction = false;

const envConfigFile =
`export const environment = {
  production: ${isProduction},
  firebaseConfig: {
    apiKey: ${process.env.FIREBASE_API_KEY}
    authDomain: ${process.env.FIREBASE_AUTH_DOMAIN}
    databaseURL: ${process.env.FIREBASE_DATA_BASE_URL}
    projectId: ${process.env.FIREBASE_PROJECT_ID}
    storageBucket: ${process.env.FIREBASE_STORAGE_BUCKET}
    messagingSenderId: ${process.env.FIREBASE_MESSAGING_SENDER_ID}
    appId: ${process.env.FIREBASE_APP_ID}
  }
};
`;

console.log('The file `environment.ts` will be written with the following content: \n');
console.log(envConfigFile);

fs.writeFile(targetPath, envConfigFile, function(err) {
  if (err) {
    throw console.error(err);
  } else {
    console.log(`Angular environment.ts file generated correctly at ${targetPath} \n`);
  }
});
