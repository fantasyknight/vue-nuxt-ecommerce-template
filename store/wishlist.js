export const TOGGLE_WISHLIST = 'TOGGLE_WISHLIST';
export const ADD_WISHLIST = 'ADD_WISHLIST';

export const state = () => (
    {
        data: []
    }
);

export const getters = {
    wishList: state => {
        return state.data;
    }
}

export const actions = {
    toggleWishlist: function ( { commit }, payload ) {
        commit( TOGGLE_WISHLIST, payload );
    },
    addWishlist: function ( { commit }, payload ) {
        commit( ADD_WISHLIST, payload );
    }
}

export const mutations = {
    [ TOGGLE_WISHLIST ]( state, payload ) {
        let index = state.data.findIndex( item => item.name === payload.name );
        if ( index === -1 ) {
            state.data.push( payload );
        } else {
            state.data.splice( index, 1 );
        }
    },
    [ ADD_WISHLIST ]( state, payload ) {
        let index = state.data.findIndex( item => item.name === payload.name );
        if ( index === -1 ) {
            state.data.push( payload );
        }
    }
}