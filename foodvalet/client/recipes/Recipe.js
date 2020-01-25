import { Session } from "inspector";

Template.Recipe.onCreated(function() {
    this.editMode = new ReactiveVar(false);

});

Template.Recipe.helpers({
    updateRecipeId: function() {
        return this._id;
    },
    editMode: function() {
        return Template.instance().editMode.get();
    }
});
Template.Recipe.events({
    'click.toggle-menu': function() {
        Meteor.call('toggleMenuItem', this._id, this.inMenu)
    },
    'click .fa-pencil' : function(event, template) {
        template.editMode.set(!template.editMode.get());    }
});