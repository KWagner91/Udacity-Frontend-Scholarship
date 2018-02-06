// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {

// Your code goes here!

// get the grid width
var width = $('#inputWidth').val();

// get the grid height
var width = $('#inputHeight').val();
var table = $('#pixelCanvas');
// populate the grid
for(let column = 0; column<width; column++){
  table.append('<tr> </tr>');
  for(let row = 0; row<width; row++){
  table.children().last().append('<tr> </tr>');
    // get the submit button onclick
    $('#submit').on('click', 'td', function(){
      event.preventDefault();
      // insert the cells
      $('#pixelCanvas').append('<tr> <td> </td> </tr>').css('backgroundColor', '#77f');
    });
  }
}

makeGrid();


}
