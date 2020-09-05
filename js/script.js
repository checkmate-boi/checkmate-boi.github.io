// This is setup with bootstrap 3

/**
* If you have LESS than one navbar, then just do
* let menu = document.getElementsByClassName( 'nav' )[0];
*/
let menu = document.getElementsByClassName( 'nav' );
// Values are set.
if ( menu ) {

  // HOVER
  let menu_slider_hover = document.getElementById( 'nav_slide_hover' );
  if ( menu_slider_hover ) {
    nav_slider( menu[0], function( el, width, tempMarginLeft ) {
      el.onmouseover = () => {
        menu_slider_hover.style.width =  width + '%';
        menu_slider_hover.style.marginLeft = tempMarginLeft + '%';
      }
    });
  }

  // CLICK
  let menu_slider_click = document.getElementById( 'nav_slide_click' );
  if ( menu_slider_click ) {
    nav_slider( menu[1], function( el, width, tempMarginLeft ) {
      el.onclick = () => {
        menu_slider_click.style.width =  width + '%';
        menu_slider_click.style.marginLeft = tempMarginLeft + '%';
      }
    });
  }

} // endif

function nav_slider( menu, callback ) {
  let menu_width = menu.offsetWidth;
  // We only want the <li> </li> tags
  menu = menu.getElementsByTagName( 'li' );
  if ( menu.length > 0 ) {
    var marginLeft = [];
    // Loop through nav children i.e li
    [].forEach.call( menu, ( el, index ) => {
      // Dynamic width/margin calculation for hr
      var width = getPercentage( el.offsetWidth, menu_width );
      var tempMarginLeft = 0;
      // We don't want to modify first elements positioning
      if ( index != 0 )  {
        tempMarginLeft = getArraySum( marginLeft );
      }
      // Set mouse event  hover/click
      callback( el, width, tempMarginLeft );
      /* We store it in array because the later accumulated value is used for positioning */
      marginLeft.push( width );
    } );
  }
}

// Might make this dynamic for px, %, pt, em
function getPercentage( min, max ) {
  return min / max * 100;
}

// Not using reduce, because IE8 doesn't supprt it
function getArraySum( arr ) {
  let sum = 0;
  [].forEach.call( arr, ( el, index ) => {
    sum += el;
  } );
  return sum;
}
