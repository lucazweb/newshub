import { Action } from 'redux';

interface UserInterfaceState {
  loading: boolean;
}

export const ENABLE_LOADING = 'ui/enable-loading';
export interface EnableLoadingAction extends Action<typeof ENABLE_LOADING> {}

export const DISABLE_LOADING = 'ui/disable-loading';
export interface DisableLoadingAction extends Action<typeof DISABLE_LOADING> {}

const initialState: UserInterfaceState = {
  loading: false,
};

export const enableLoading = (): EnableLoadingAction => ({
  type: ENABLE_LOADING,
});

export const disableLoading = (): DisableLoadingAction => ({
  type: DISABLE_LOADING,
});

const UserInterfaceReducer = function (
  state: UserInterfaceState = initialState,
  action: EnableLoadingAction | DisableLoadingAction
) {
  switch (action.type) {
    case ENABLE_LOADING:
      return { ...state, loading: true };

    case DISABLE_LOADING:
      return { ...state, loading: false };

    default:
      return state;
  }
};

export default UserInterfaceReducer;
