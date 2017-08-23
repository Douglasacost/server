import {Map} from 'immutable';
export default function reducer(state = Map(), action) {
  switch (action.type) {
  case 'SET_MESSAGE':
    return state.set('message', action.message);
  }
  return state;
}
