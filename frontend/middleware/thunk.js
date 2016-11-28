
// One of the most common problems we need middleware to solve is 
// asynchronicity. When building web applications that interact with a 
// server, we need to request resources and then dispatch the response 
// to our store when it eventually gets back. 

//It would be possible to 
// make these API calls from our components and dispatch synchronously 
// on success, but for consistency and reusability we would prefer to 
// have the source of every change to our app state be an action 
// creator. 

//Thunks are a new kind of action creator that will allow us 
// to do that.


// Thunk middleware should check the typeof incoming actions and either 
// return action(dispatch) if they are functions, or next(action)


const thunk = ({ getState, dispatch }) => (next) => (action) => {
  if (typeof action === 'function') return action(dispatch, getState);
  return next(action);
};

export default thunk;