let actions = {
	
	addTodo: function(text) {
		return {
		type:'ADD_TODO',
		text:text
		}
	},
	completeTodo: function(id){
		return {
			type:'COMPLETE_TODO',
			id:id
		}
	} ,
	deleteTodo: function(id) {
		return {
			type:'DELETE_TODO',
			id:id
		}
	},
	createNewUserId: function() {
		//do some async server call
		//onSuccess :dispatch()
		
		return {
			type:'CREATE_USER_ID',
			id:Math.random()*100
		}
	},
	createNewUserIdIfOdd: function() {
		return (dispatch,getState) => {
			const { user } = getState()
			if(user.id %2 === 0) {
				return
			}
			dispatch(actions.createNewUserId())
			//createNewUserId
		}
	},
	createNewUserIdAsync: function() {
		return (dispatch) => {
			setTimeout(() => {
				dispatch(actions.createNewUserId())
			},2500)
			//createNewUserId
		}
	}
}

export default actions

//store.dispatch(addTodo("some text"))