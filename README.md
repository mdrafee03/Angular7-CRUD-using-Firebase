Firebase was used as database server. You can go https://console.firebase.google.com/ to create your own database and use it in your project.
CRUD is performed i.e. you can create, read, update and delete operation in this app.

Step 1: clone the repo to your desired folder
Step 2: initial setup for angular- follow https://angular.io/guide/quickstart.
Step 3: install firebase, using npm install firebase@5.0.3 @angular/fire@5.0.2
step 4: create new database in firestore and click on the web icon, it pops up and show you "add firebase to your web app", copy the value of config to your app in app/sr/environments/environment.ts file right below the "production: false," name a property like "firebase" and add the copied value
Step 5: Run ng-serve -o
step 6: Hurrah
