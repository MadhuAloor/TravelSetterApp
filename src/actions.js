import AppDispatcher from './AppDispatcher';

export const addItem = (value) => {
  AppDispatcher.dispatch({
    type: 'ADD_ITEM',
    value,
  });
}

export const removeItem = (value) => {
    AppDispatcher.dispatch({
      type: 'REMOVE_ITEM',
      value,
    });
}

export const markAllAsUnpacked = () => {
    AppDispatcher.dispatch({
      type: 'MARK_ALL_AS_UNPACKED'
    });
}

export const changePackedStatus = (value) => {
    AppDispatcher.dispatch({
      type: 'CHANGE_PACKED_STATUS',
      value,
    });
}

