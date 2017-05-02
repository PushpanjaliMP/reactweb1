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
		return {
			type:'CREATE_USER_ID',
			id:Math.random().slice(0,2)
		}
	}
	createNewUserIdIfOdd: function() {
		return (dispatch,getState) => {
			const { user } = getState()
			if(user.id %2 === 0) {
				return 
			}
			createNewUserId
		}
	}

}

export default actions

//store.dispatch(addTodo("some text"))