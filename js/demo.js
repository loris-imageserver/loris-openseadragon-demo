// var SERVER = 'http://localhost/loris/'
var SERVER = 'libimages.princeton.edu/loris/'
var INFO = '/info.json'

var SAMPLES = [
// '01%2F02%2F0001.jp2',
  'pudl0001%2F5138415%2F00000011.jp2',
  'pudl0004%2Fcharter%2F00000001.jp2',
  'pudl0010%2F2005%2F00650%2F00000001.jp2',
  'pudl0011%2F1745946%2F00000008.jp2',
  'pudl0015%2F2006%2F01347%2F00000001.jp2',
  'pudl0017%2Fwc064%2FX%2FX0028%2F00000001.jp2',
  'pudl0022%2F4623565%2F00000001.jp2',
  'pudl0032%2F62g%2F00000007.jp2',
  'pudl0033%2F2007%2F03876%2F00000001.jp2',
  'pudl0052%2F6131707%2F00000001.jp2',
  'pudl0071%2F4055459%2F01%2F00000030.jp2',
  'pudl0072%2F3947894%2F01%2F00000082.jp2',
  'pudl0100%2Fposters%2Feg1_0484%2F00000001.jp2'
]

var height = jQuery(window).height();
var width = jQuery(window).width();

$('#viewer').width( width );
$('#viewer').height( height );
$('#container').width( width );
$('#container').height( height );
$('.toolbar').width( width );

// Read a page's GET URL variables and return them as an associative array.
function getUrlVars() {
  var vars = [], hash;
  var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
  for(var i = 0; i < hashes.length; i++) {
    hash = hashes[i].split('=');
    vars.push(hash[0]);
    vars[hash[0]] = hash[1];
  }
  return vars;
}

var osd_config = {
  id: "viewer",
  prefixUrl: "js/openseadragon/images/",
  preserveViewport: true,
  showNavigator:  true,
  visibilityRatio: 1,
  minZoomLevel: 1,
  tileSources: []
}


feedMe = getUrlVars()['feedme'];

if (feedMe) {
  osd_config['tileSources'].push(SERVER + feedMe + INFO);
} else {
  for (c=0; c<SAMPLES.length; c++) {
    osd_config['tileSources'].push(SERVER + SAMPLES[c] + INFO);
  }
}

OpenSeadragon(osd_config);
