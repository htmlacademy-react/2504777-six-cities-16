import { store } from '../store';
import { setError } from '../store/slices/error';
import { clearErrorAction } from '../store/thunk-action/error';

export const processErrorHandle = (message: string): void => {
  store.dispatch(setError(message));
  store.dispatch(clearErrorAction());
};
