Template.Menu.onCreated(function() {
    var self = this;
    self.autorun(function() {
        self.subsribe('recipes');
    });
});

Template.ShoppingList.helpers({
    shoppingList: ()=> {
        return Recipes.find({inMenu: true});
    }
});