const initialState = {
  events: [],
  loading: true,
  error: null,
  favorites: [],
  searchData: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_EVENTS_REQUEST':
      return {
        ...state,
        events: [],
        loading: true,
        error: null
      };
    case 'FETCH_EVENTS_SUCCESS':
      return {
        ...state,
        events: action.payload,
        loading: false,
        error: null,
        searchData: action.payload
      };
    case 'FETCH_EVENTS_FAILURE':
      return {
        ...state,
        events: [],
        loading: false,
        error: action.payload
      };

    case 'EVENT_ADDED_TO_LIST':
      const addedId = action.payload;
      const event = state.events.find(event => event.id === addedId);
      const newItem = {
        id: event.id,
        title: event.title,
        image: event.image
      };

      return {
        ...state,
        favorites: [...state.favorites, newItem]
      };

    case 'EVENT_REMOVED_FROM_LIST':
      const removedId = action.payload;
      const filtrFav = state.favorites.filter(event => event.id !== removedId);

      return {
        ...state,
        favorites: filtrFav
      };

    case 'SEARCH_EVENTS':
      const searchTerm = action.payload;
      const filtered = state.searchData.filter(event =>
        event.title.includes(searchTerm)
      );

      return {
        ...state,
        events: filtered
      };

    default:
      return state;
  }
};

export default reducer;
