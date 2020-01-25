import { Session } from "inspector"

Template..newRecipe.events({
    'click .fa-close' : function() {
        Session.set('newRecipe, false');
    }
})
