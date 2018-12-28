import { UPDATE_APP_LOADING, TOGGLE_DASH_SIDE, UPDATE_DASH_TAB, UPDATE_PROJECT_TAB } from '../constants';

export const toggleDashSide = (payload) => ({
  type: TOGGLE_DASH_SIDE,
  payload
});

export const updateDashTab = (payload) => ({
  type: UPDATE_DASH_TAB,
  payload
});

export const updateProjectTab = (payload) => ({
  type: UPDATE_PROJECT_TAB,
  payload
});

export const updateAppLoading = (payload) =>({
	type: UPDATE_APP_LOADING,
	payload
});