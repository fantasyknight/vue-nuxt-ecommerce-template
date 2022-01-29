import Vue from 'vue';
import { parseOptions } from '~/utils';

let elements = [];

function addCss( item, visibleClass = "show-content" ) {
    let delay = ".5s";
    let duration = "1.2s";
    let keyframes = "fadeIn";

    if ( item.getAttribute( 'data-animation-options' ) ) {
        let options = parseOptions( item.getAttribute( 'data-animation-options' ) );
        delay = options.delay ? options.delay : ".5s";
        duration = options.duration ? options.duration : "1.2s";
        keyframes = options.name ? options.name : 'fadeIn';
    }

    let itemStyle = window.getComputedStyle( item );
    let tProperty = itemStyle.getPropertyValue( 'transition-property' ),
        tDelay = itemStyle.getPropertyValue( 'transition-delay' ),
        tDuration = itemStyle.getPropertyValue( 'transition-duration' );

    item.classList.add( keyframes, visibleClass );
    item.style.animationDelay = delay;
    item.style.animationDuration = duration;
    item.style.transitionDuration = duration;
    item.style.transitionDelay = delay;
    item.style.transitionProperty = 'visibility, opacity';

    let delays = parseInt( delay.substring( 0, delay.length - 1 ) * 1000 );

    setTimeout( () => {
        item.style.transitionProperty = tProperty;
        item.style.transitionDelay = tDelay;
        item.style.transitionDuration = tDuration;
    }, delays + 1500 );
}

function removeCss( item ) {
    let keyframes = "fadeIn";
    if ( item.getAttribute( 'data-animation-options' ) ) {
        keyframes = parseOptions( item.getAttribute( 'data-animation-options' ) ).name;
        if ( !keyframes ) keyframes = 'fadeIn';
    }

    item.removeAttribute( 'style' );
    item.classList.remove( keyframes, 'show-content' );
}

function addNormalCss() {
    for ( let i = 0; i < elements.length; i++ ) {
        let element = elements[ i ];

        let top = element.getBoundingClientRect().top;
        let bottom = element.getBoundingClientRect().bottom;

        if ( !element.classList.contains( 'appear-animation-visible' ) )
            if ( ( top > 0 && window.innerHeight > top ) || ( bottom > 0 && top < 0 ) ) {
                addCss( element, 'appear-animation-visible' );
            }
    }
}

function addSlideCss( slideEl ) {
    let animateNodes = slideEl.querySelectorAll( '.slide-animate' );
    for ( let i = 0; i < animateNodes.length; i++ ) {
        addCss( animateNodes[ i ] );
    }
}

function removeSlideCss( slideEl ) {
    let animateNodes = slideEl.querySelectorAll( '.slide-animate' );
    for ( let i = 0; i < animateNodes.length; i++ ) {
        removeCss( animateNodes[ i ] );
    }
}

Vue.directive( 'animate', {
    inserted: function ( el, binding, vnode ) {
        if ( el.classList.contains( 'animation-slider' ) ) {
            let activeIndex = vnode.componentInstance.mySwiper.activeIndex;

            addSlideCss( el.querySelectorAll( '.swiper-slide' )[ activeIndex ] );

            vnode.componentInstance.mySwiper.on( 'transitionEnd', function () {
                activeIndex = vnode.componentInstance.mySwiper.activeIndex;
                addSlideCss( el.querySelectorAll( '.swiper-slide' )[ activeIndex ] );

                if ( el.querySelectorAll( '.swiper-slide' )[ activeIndex - 1 ] ) {
                    removeSlideCss( el.querySelectorAll( '.swiper-slide' )[ activeIndex - 1 ] );
                }
                if ( el.querySelectorAll( '.swiper-slide' )[ activeIndex + 1 ] ) {
                    removeSlideCss( el.querySelectorAll( '.swiper-slide' )[ activeIndex + 1 ] );
                }
            } )
        } else if ( !el.classList.contains( 'appear-animation-visible' ) && !el.closest( '.animation-slider' ) ) {
            if ( el.getBoundingClientRect().top >= 0 && window.innerHeight > el.getBoundingClientRect().top ) {
                addCss( el, 'appear-animation-visible' );
            } else {
                elements.push( el );
                window.addEventListener( 'scroll', addNormalCss, { passive: true } );
            }
        }
    },
    unbind: function () {
        window.removeEventListener( 'scroll', addNormalCss, { passive: true } );
    }
} )