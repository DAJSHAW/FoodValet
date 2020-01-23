import { Meteor } from 'meteor/meteor';


import '../collections/Recipes.js'
import './publish'

Meteor.startup(() => {
  // code to run on server at startup
  console.log(Meteor.settings.hello);
});
