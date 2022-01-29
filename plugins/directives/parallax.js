import Vue from 'vue';
import { parseOptions } from '~/utils';

let elements = [];

function parallaxHandler() {
    elements.forEach( element => {
        let yPos, parallaxSpeed = 1, startPos = 5;

        if ( element.getAttribute( 'options' ) ) {
            parallaxSpeed = parseOptions( element.getAttribute( 'options' ) ).speed ? parseInt( parseOptions( element.getAttribute( 'options' ) ).speed ) : 1;
            startPos = parseOptions( element.getAttribute( 'options' ) ).startPos ? parseInt( parseOptions( element.getAttribute( 'options' ) ).startPos ) : 50;
        }

        yPos = ( element.offsetTop - window.pageYOffset ) * 200 * parallaxSpeed / element.offsetTop + startPos;
        element.style.backgroundPosition = "50% " + yPos + "%";
    } )
}

Vue.directive( 'parallax', {
    inserted: function ( el ) {
        elements.push( el );
        window.addEventListener( 'scroll', parallaxHandler, { passive: true } );
    },
    unbind: function () {
        window.removeEventListener( 'scroll', parallaxHandler, { passive: true } );
    }
} )