export default {
  namespace: 'products',
  state: [],
  reducers: {
    'delete'(state, { payload: id }) {
      return state.filter(item => item.id !== id);
    },
    'add'(state, { data }) {
      console.log('state=', state)
      console.log('data=', data)
      return [
        ...state,
        data
      ]
    }
  },
};
