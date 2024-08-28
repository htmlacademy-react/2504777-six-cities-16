import { store } from '../store';
import { setError } from '../store/slices/error';
import { clearErrorAction } from '../store/thunk-action/error';

export const processErrorHandler = (message: string): void => {
  store.dispatch(setError(message));
  store.dispatch(clearErrorAction());
};
