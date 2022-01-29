/**
 * function to get options
 */
export const parseOptions = function ( options ) {
    if ( "string" === typeof options ) {
        return JSON.parse( options.replace( /'/g, '"' ).replace( ';', '' ) );
    }
    return {};
}

/**
 * function to detect safari browser
 * @return {bool}
 */
export const isSafariBrowser = function () {
    let sUsrAg = navigator.userAgent;
    if ( sUsrAg.indexOf( 'Safari' ) !== -1 && sUsrAg.indexOf( 'Chrome' ) === -1 )
        return true;
    return false;
}

/**
 * function to detect Edge browser
 * @return {bool}
 */
export const isEdgeBrowser = function () {
    let sUsrAg = navigator.userAgent;
    if ( sUsrAg.indexOf( "Edge" ) > -1 )
        return true;
    return false;
}

/**
 * function to set cookie
 */
export function setCookie( name, value, exdays = 7 ) {
    let date = new Date();
    date.setTime( date.getTime() + ( exdays * 24 * 60 * 60 * 1000 ) );
    document.cookie = name + "=" + value + ";expires=" + date.toUTCString() + ";path=" + window.location.path;
}

/**
 * function to get cookie
 */
export function getCookie( cookieName ) {
    var name = cookieName + "=";
    var cookies = document.cookie.split( ';' );
    for ( var i = 0; i < cookies.length; ++i ) {
        var cookie = cookies[ i ];
        while ( cookie.charAt( 0 ) == ' ' ) {
            cookie = cookie.substring( 1 );
        }
        if ( cookie.indexOf( name ) == 0 ) {
            return cookie.substring( name.length, cookie.length );
        }
    }
    return "";
}

/**
 * function to scroll to top
 */
export function scrollHandler( speed = 15, dest ) {
    let offsetTop = 0;

    // get the y pos to scroll
    if ( document.querySelector( '.page-content > .container' ) ) {
        offsetTop = document.querySelector( '.page-content > .container' ).getBoundingClientRect().top + window.pageYOffset;
    }
    if ( dest !== undefined ) offsetTop = dest;
    if ( isEdgeBrowser() ) offsetTop = 0;

    if ( isSafariBrowser() || isEdgeBrowser() ) {
        let pos = window.pageYOffset;
        let timerId = setInterval( () => {
            if ( pos <= offsetTop ) clearInterval( timerId );
            window.scrollBy( 0, -speed );
            pos -= speed;
        }, 1 );
    } else {
        window.scrollTo( {
            top: offsetTop,
            behavior: 'smooth'
        } );
    }
}

/**
 * utils to play and pause video
 */
export const playVideo = ( e ) => {
    if ( e.currentTarget.closest( '.post-video' ) ) {
        let video = e.currentTarget.closest( '.post-video' );
        if ( video.classList.contains( 'playing' ) ) {
            video.classList.remove( 'playing' );
            video.classList.add( 'paused' );
            video.querySelector( 'video' ).pause();
        } else {
            video.classList.add( 'playing' );
            video.classList.remove( 'paused' );
            video.querySelector( 'video' ).play();
        }

        video.querySelector( 'video' ).addEventListener( 'ended', function () {
            video.classList.remove( 'playing' );
            video.classList.remove( 'paused' );
        } )
    }
}