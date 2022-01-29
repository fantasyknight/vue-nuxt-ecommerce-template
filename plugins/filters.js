import Vue from 'vue';

Vue.filter( 'priceFormat', function ( value ) {
    if ( value === undefined ) return '';

    return value.toLocaleString( undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 } );
} )

Vue.filter( 'capitalize', function ( value ) {
    if ( !value ) return '';
    value = value.toString();
    return value.charAt( 0 ).toUpperCase() + value.slice( 1 );
} )