
$(function() {
    const searchForm = $('#search-form');
    const searchResultsContainer = $('#search-results-container');
    const searchResultsTemplate = Handlebars.compile($('#search-results-template').html());
  
    searchForm.on('submit', function(e) {
      e.preventDefault();
      
      const query = $('#search-input').val().trim();
  
      $.ajax({
        url: '/books/search',
        method: 'POST',
        data: {
          query: query
        }
      }).done(function(data) {
        const html = searchResultsTemplate({ books: data });
        searchResultsContainer.html(html);
      });
    });
  });




  