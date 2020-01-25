import { Session } from "inspector";

Template.Recipes.onCreated(function() {
    var self = this;
    self.autorun(function() {
        self.subsribe('recipes');
    });
});

Template.Recipes.helpers({
    recipes: ()=> {
        return Recipes.find({});
    }
});

Template.Recipes.event ({
    'click .new-recipe': ()=> {
        Session.set('newRecipe', true);
    }
});