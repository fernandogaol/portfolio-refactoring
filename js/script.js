'use strict';

function addItem() {
  $('#add').click(function() {
    $('.addItem').append(' <p>whats up ?</p>');
  });
}

$(addItem);
