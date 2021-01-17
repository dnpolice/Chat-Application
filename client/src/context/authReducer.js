
export default (state, obj) => {
    switch (obj.type) {
        case "USER_LOADED":
            console.log('in user loaded reducer');
            return {
                ...state,
                isAuthenticated: true,
                loading: false,
                user: obj.payload
            }
        case "USER_FAIL":
            return {
                ...state,
                isAuthenticated: false,
                loading: false,
                user: null
            }
        default: return state;
    }
}