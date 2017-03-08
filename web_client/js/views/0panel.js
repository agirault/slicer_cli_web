slicer.views.Panel = girder.View.extend({
    events: {
        'show.bs.collapse': 'expand',
        'hide.bs.collapse': 'collapse',
        'click .s-panel-title-container': '_handleTitleClick'
    },
    initialize: function (settings) {
        this.spec = settings.spec;
    },
    render: function () {
        this.$el.html(slicer.templates.panel(this.spec));
    },
    expand: function () {
        this.$('.icon-down-open').attr('class', 'icon-up-open');
    },
    collapse: function () {
        this.$('.icon-up-open').attr('class', 'icon-down-open');
    },
    _handleTitleClick: function (e) {
        if (!$(e.target).hasClass('s-remove-panel')) {
            e.stopPropagation();
            this.$('.s-panel-content').collapse('toggle');
        }
    }
});