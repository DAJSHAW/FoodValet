import { Session } from "inspector";

emplate.Recipe.helpers({
    updateRecipeId: function() {
        return this._id;
    }
});
Template.Recipe.events({
    'click.toggle-menu': function() {
        Meteor.call('toggleMenuItem', this._id, this.inMenu)
    },
    'click .fa-pencil' : function() {
        Session.set('editMode', !Session.get('editMode'));
    }
});