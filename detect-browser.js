(function(){
  // https://www.sitepoint.com/add-remove-css-class-vanilla-js/
  var addClass = function(elements, myClass) {

    // if there are no elements, we're done
    if (!elements) { return; }

    // if we have a selector, get the chosen elements
    if (typeof(elements) === 'string') {
      elements = document.querySelectorAll(elements);
    }

    // if we have a single DOM element, make it an array to simplify behavior
    else if (elements.tagName) { elements=[elements]; }

    // add class to all chosen elements
    for (var i=0; i<elements.length; i++) {

      // if class is not already found
      if ( (' '+elements[i].className+' ').indexOf(' '+myClass+' ') < 0 ) {

        // add class
        elements[i].className += ' ' + myClass;
      }
    }
  };

  var htmlEle = document.querySelectorAll('html')[0];

  // http://stackoverflow.com/questions/27912296/ie11-detect-whether-compatibility-view-is-on-via-javascript
  var IeVersion = function() {
    //Set defaults
    var value = {
      IsIE: false,
      TrueVersion: 0,
      ActingVersion: 0,
      CompatibilityMode: false
    };

    //Try to find the Trident version number
    var trident = navigator.userAgent.match(/Trident\/(\d+)/);
    if (trident) {
      value.IsIE = true;
      //Convert from the Trident version number to the IE version number
      value.TrueVersion = parseInt(trident[1], 10) + 4;
    }

    //Try to find the MSIE number
    var msie = navigator.userAgent.match(/MSIE (\d+)/);
    if (msie) {
      value.IsIE = true;
      //Find the IE version number from the user agent string
      value.ActingVersion = parseInt(msie[1]);
    } else {
      //Must be IE 11 in 'edge' mode
      value.ActingVersion = value.TrueVersion;
    }

    //If we have both a Trident and MSIE version number, see if they're different
    if (value.IsIE && value.TrueVersion > 0 && value.ActingVersion > 0) {
      //In compatibility mode if the trident number doesn't match up with the MSIE number
      value.CompatibilityMode = value.TrueVersion != value.ActingVersion;
    }
    return value;
  };

  var ie = IeVersion();

  console.log('IsIE: ' + ie.IsIE);
  console.log('TrueVersion: ' + ie.TrueVersion);
  console.log('ActingVersion: ' + ie.ActingVersion);
  console.log('CompatibilityMode: ' + ie.CompatibilityMode);

  if (ie.ActingVersion === 10) {
    console.log('IE10 mode detected.');
    addClass(htmlEle, 'ie10');
  }

  if (ie.ActingVersion === 11) {
    console.log('IE11 mode detected.');
    addClass(htmlEle, 'ie11');
  }

  if (navigator.userAgent.match('Edge')) {
    console.log('MS Edge detected.');
    addClass(htmlEle, 'edge');
  }

})();
