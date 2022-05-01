$(document).ready(function () {
  $('a').click(function () {
      $('.menu').find('li.active').removeClass('active');
      $(this).parents("li").addClass('active');
  });
});
