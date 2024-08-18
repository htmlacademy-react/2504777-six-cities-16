import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import { State, AppDispatch } from '../store/types';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<State> = useSelector;

// export const useActionCreators = <Actions extends ActionCreatorsMapObject>(
//   actions: Actions
// ): BoundActions<Actions> => {
//   const dispatch = useAppDispatch();

//   return useMemo(() => bindActionCreators(actions, dispatch), []);
// };

//  type BoundActions<Actions extends ActionCreatorsMapObject> = {
//   // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   [key in keyof Actions]: Actions[key] extends AsyncThunk<any, any, any>
//   ? BoundAsyncThunk<Actions[key]>
//   : Actions[key];
//  };

//  // eslint-disable-next-line @typescript-eslint/no-explicit-any
//  type BoundAsyncThunk<Thunk extends AsyncThunk<any, any, any>> = (
//   ...arg: Parameters<Thunk>
//  ) => ReturnType<ReturnType<Thunk>>;

