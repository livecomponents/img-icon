(function(window, document){
  fallbackStrategy();

  function fallbackStrategy() {
    var cssMDWebFontsLocation = 'https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.css'
    
    window.addEventListener('load', function() {
      var icons = document.querySelectorAll('img-icon');
      var fallbackURL = cssMDWebFontsLocation;
      var linkTag = document.createElement('link');
      linkTag.rel = 'stylesheet';
      linkTag.type = 'style/css';
      if (icons && icons[0]) {
        const fallback = icons
          .map((icon) => icon.getAttribute('fallback'))
          .filter((icn) => !!icon);
        fallbackURL = fallback && fallback.length > 0 ? fallback[0] : cssMDWebFontsLocation; 
      }
      linkTag.href = fallbackURL;
      document.head.appendChild(linkTag);
      [].forEach.call(icons, setIcon);    
    });
  }

  function setIcon(icon){
    if (icon) {
      var shape = icon.getAttribute('shape');
      var color = icon.getAttribute('data-color');
      icon.appendChild(fallbackIcon(!!shape ? traincase(shape) : 'star', !!color ? color : '#ebebeb'));
    }
  }

  function fallbackIcon(iconShape, color){
    var span = document.createElement('span');
    span.className = 'mdi mdi-' + iconShape;
    span.style.color = color;
    span.role = 'img';
    span.setAttribute('aria-hidden', 'true');
    return span;
  }

  function traincase(str) {
    var regex = /[A-Z\u00C0-\u00D6\u00D8-\u00DE]/g;
	  return str.replace(regex, function (match) { return '-' + match.toLowerCase(); });
  }

})(window, document);