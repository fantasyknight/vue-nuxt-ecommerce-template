import createPersistedState from 'vuex-persistedstate';
import { currentDemo } from '~/api';

export default function ( { store } ) {
    // set currentDemo
    if ( localStorage.currentDemo && localStorage.currentDemo != currentDemo ) {
        localStorage.clear();
    }
    localStorage.setItem( 'currentDemo', currentDemo );

    // create store
    window.onNuxtReady( () => {
        createPersistedState( {
            key: 'riode-vue',
            paths: []
        } )( store )
    } )
}