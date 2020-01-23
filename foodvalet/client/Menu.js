Template.Menu.onCreated(function() {
    var self = this;
    self.autorun(function() {
        self.subsribe('recipes');
    });
});

Template.Menu.helpers({
    recipes: ()=> {
        return Recipes.find({inMenu: true});
    }
});