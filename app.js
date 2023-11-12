$('#gifForm').submit(function (event) {
  event.preventDefault(); 

  const searchTerm = $('#searchTerm').val();

  axios.get(`http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`)
    .then(response => {
      const gifUrl = response.data.data[0].images.fixed_height.url; 
      const $gif = $('<img>').attr('src', gifUrl); 
      $('body').append($gif); 
    })
    .catch(error => {
      console.error('Error fetching data from Giphy API', error);
    });
});

$('#removeGifs').click(function () {
  $('img').remove();
});
