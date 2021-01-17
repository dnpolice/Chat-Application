
export default (state, obj) => {
    switch (obj.type) {
        case "FriendList_Loaded":
            return {
                ...state,
                friendsList: obj.payload
            }
        default: return state;
    }
}