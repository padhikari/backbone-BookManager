var app = app || {};

app.LibraryView = Backbone.View.extend({

	el: "#books",

	initialize: function(initialBooks){
		this.collection = new app.Library(initialBooks);
		this.collection.fetch({reset: true});
		this.render();
		this.listenTo( this.collection, 'add', this.renderBook );
		this.listenTo( this.collection, 'reset', this.render );
	},

	render: function(){
		this.collection.each(function(item){
			this.renderBook(item);
		},this);


	},
	
	renderBook: function(item){
		var bookView = new app.BookView({
			model:item
		});
		this.$el.append(bookView.render().el);

	}	



});