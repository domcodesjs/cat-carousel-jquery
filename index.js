$(document).ready(function () {
  $('.thumbnail').click(function (e) {
    const src = e.target.src;
    const alt = e.target.alt;
    const heroImg = $('div.hero img');
    heroImg.attr('src', src);
    return heroImg.attr('alt', alt);
  });

  $('.thumbnail').on('keydown', function (e) {
    if (e.which === 13) {
      const src = $(this).find('img').attr('src');
      const alt = $(this).find('img').attr('src');
      const heroImg = $('div.hero img');
      heroImg.attr('src', src);
      return heroImg.attr('alt', alt);
    }
    return;
  });
});
