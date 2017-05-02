let userReducer = function(user = {}, action) {

switch(action.type){

		//console.log("add todo")
		case 'CREATE_USER_ID':
			return  {
					username: user.username,
					id: action.id
				}
		default:
			return user;
	}
}

export default userReducer