const initialState ={
    product: [],
    basket: [],
    favorites: []
}

export const Reducer = (state = initialState, action) => {
    switch (action.type){

        case 'GET_PRODUCT':
            return {...state, product: action.payload}

        case 'ADD_TO_BASKET':
            const fountProduct = state.basket.find(el => el.id === action.payload.id)
            if (fountProduct) {
                return {...state, basket: state.basket.map(el => el.id === fountProduct.id ? {...el,quantity: el.quantity + 1} : 1)}
            }else{
                return {...state, basket: [...state.basket, {...action.payload, quantity: 1}]}
            }

        case 'FAVORITE':
            const found = state.favorites.find(el => el.id === action.payload.id)
            if (found) {
                return {...state, favorites: state.favorites.filter(el => el.id !== action.payload.id)}
            }else{
                return {...state, favorites: [...state.favorites, action.payload]}
            }



        // case 'ADD_MONEY':
        //     return {...state, cash:state.cash + action.payload}
        // case 'GET_MONEY' :
        //     return {...state, cash: state.cash - action.payload}



        default: return state
    }
}