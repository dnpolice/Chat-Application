
export default (state, obj) => {
    switch (obj.type) {
        case "FriendList_Loaded":
            return {
                ...state,
                friendsList: obj.payload
            }
        case "SET_FRIEND":
            return {
                ...state,
                friendEmail: obj.payload.email,
                friendName: obj.payload.name
            }
        default: return state;
    }
}