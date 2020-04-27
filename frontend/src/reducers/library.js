const initialState = {
  data: [],
  dataDelete: {},
  dataEdit: {},
  isShowEdit: false,
  isShowDelete: false,
};

const library = (state = initialState, action) => {
  let data;
  switch (action.type) {
    case "LIBRARY_ADD":
      return { ...state, data: [...state.data, action.payload] };

    case "LIBRARY_GET_DATA":
      return { ...state, data: action.payload };

    case "LIBRARY_EDIT_DATA":
      data = state.data.map((item) => {
        if (item._id === action.payload.id) return action.payload;
        return item;
      });
      return { ...state, data: data };

    case "LIBRARY_DELETE_DATA":
      data = state.data.filter((item) => {
        if (item.id === action.payload) return false;
        return true;
      });
      return { ...state, data: data };

    case "LIBRARY_HIDE_DELETE":
      return { ...state, isShowDelete: false };

    case "LIBRARY_HIDE_EDIT":
      return { ...state, isShowEdit: false };

    case "LIBRARY_SHOW_EDIT":
      return { ...state, isShowEdit: true, dataEdit: action.payload };

    case "LIBRARY_SHOW_DELETE":
      return { ...state, isShowDelete: true, dataDelete: action.payload };

    case "LIBRARY_SHOW_ADD":
      return { ...state, isShowAdd: true };
    default:
      return state;
  }
};

export default library;
