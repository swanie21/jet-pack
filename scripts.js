import $ from 'jquery'
import _ from 'lodash'

$('.submit').on('click', function(e) {
  e.preventDefault();
  $.post("http://localhost:3000/api/v1/urls",
    {
      url: $('.url-component').val()
    }).then(renderURL()).done(
        function() {
    console.log( "success!");
  });
  $('.url-component').val('');
});

function renderURL() {
  $.get("http://localhost:3000/api/v1/urls").then((response) => {
     template(response[response.length-1])
  })
}

// let targetUrlIndex = response.length-1
// template(response[targetUrlIndex])


function template(link) {
  $("#urls").append(
    `<article class="url-info">
    <a class="result" target="_blank" href="${link.url}">
    ${link.shortURL}
    </a>
    <p>${link.date}</p>
    <p>Clicks: ${link.count}</p>
    </article>`)
}

$('.sort').on('click', function() {
  $.get("http://localhost:3000/api/v1/urls").then((response) => {
     var sorted = response.reverse()
     console.log(sorted)
  })
})
