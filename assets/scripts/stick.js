// Stick the sidebar to the top after scroll
//
// Avoids unnecessary dependency on jQuery
(function () {
	var hasClass = false;
	var headerSize = 60;
	var showingConfNote = false,
		confNote = document.getElementById('conf-note');
	var sidebar = document.getElementById('sidebar'),
		body = document.body;

	var sticker = function () {
		var shouldStick = (window.scrollY > headerSize);

		// Check that it doesn't match to avoid thrashing the DOM
		if ( shouldStick !== hasClass ) {
			if ( shouldStick ) {
				body.className += ' has-sticky';
			}
			else {
				body.className = body.className.replace( /(?:^|\s)has-sticky(?!\S)/g, '' );
			}
			sidebar.className = shouldStick ? 'sticky' : '';
			hasClass = shouldStick;
			if ( shouldStick && ! showingConfNote ) {
				setTimeout(function () {
					confNote.className = shouldStick ? 'showing' : '';
					showingConfNote = true;
				}, 100);
			}
		}
	};

	window.addEventListener( 'scroll', sticker );
	document.addEventListener( 'DOMContentLoaded', function () {
		headerSize = document.getElementById('nav-bar').clientHeight;
		sticker();
	} );
})();
