$(function() {
  // http://stackoverflow.com/questions/27912296/ie11-detect-whether-compatibility-view-is-on-via-javascript
  function trueOrFalse() {
    return true;
  }

  function IeVersion() {
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
  }

  var ie = IeVersion();

  console.log('IsIE: ' + ie.IsIE);
  console.log('TrueVersion: ' + ie.TrueVersion);
  console.log('ActingVersion: ' + ie.ActingVersion);
  console.log('CompatibilityMode: ' + ie.CompatibilityMode);

  if (ie.ActingVersion === 10) {
    console.log('IE10 mode detected.');
    $('html').addClass('ie10');
  }

  if (ie.ActingVersion === 11) {
    console.log('IE11 mode detected.');
    $('html').addClass('ie11');
  }

  if (navigator.userAgent.match('Edge')) {
    console.log('MS Edge detected.');
    $('html').addClass('edge');
  }

});
