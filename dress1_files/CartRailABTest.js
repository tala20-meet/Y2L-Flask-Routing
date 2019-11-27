/**
 *
 */
$(function(){

    trackWindowSize();
});

function trackWindowSize() {

    breaky.above("larger-desktop", function() {
        notifyCartRailVisibilityChange(true);
    });

    breaky.below("large-desktop", function() {
        notifyCartRailVisibilityChange(false);
    });
}

function notifyCartRailVisibilityChange(visibility) {
    $.ajax({
        type: 'POST',
        url: '/r/ajax/CartRailVisibility.jsp',
        data: {
            "visibility": visibility
        }
    });
}
