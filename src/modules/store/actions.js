import * as types from './types';
import Toaster from '../../lib/Toaster';
import { AddressFields, CuisineFields } from './queryFields';
import { LocationFields, SuburbFields } from '../geography/queryFields';

export const fetchAllStores = () => async (dispatch, getState) => {
  const fields = {
    id: {},
    name: {},
    cover_image: {},
    location: LocationFields,
    suburb: SuburbFields,
    cuisines: CuisineFields,
  };
  const query = {
    stores: {
      field: 'allStores',
      fields
    }
  };
  const resp = await Toaster.get(query);
  if (resp && resp.stores) {
    dispatch(setStores(resp.stores));
  }
};

export const fetchStoreById = (storeId) => async (dispatch, getState) => {
  const fields = {
    id: {},
    name: {},
    phone_number: {},
    cover_image: {},
    address: AddressFields,
    location: LocationFields,
    suburb: SuburbFields,
    cuisines: CuisineFields,
  };
  const query = {
    store: {
      field: 'storeById',
      params: { id: storeId },
      fields
    }
  };
  const resp = await Toaster.get(query);
  if (resp && resp.store) {
    dispatch(setStore(resp.store[0]));
  }
};

export const resetStore = () => (dispatch) => {
  dispatch({ type: types.RESET_STORE });
};

const setStores = (stores) => ({
  type: types.SET_STORES,
  stores,
});

const setStore = (store) => ({
  type: types.SET_STORE,
  store,
});

export const mockFetchAllStores = () => async (dispatch, getState) => {
  const stores = [{
    id: 3,
    name: 'Workshop Meowpresso',
    phone_number: '288819222',
    cover_image: 'https://b.zmtcdn.com/data/res_imagery/16562081_RESTAURANT_bf27f21b41f1ee074a931eae5d8f719b.jpg?fit=around%7C1200%3A464&crop=1200%3A464%3B0%2C0',
    address: {
      address_first_line: 'Basement Level',
      address_second_line: null,
      address_street_number: '500',
      address_street_name: 'George Street',
      google_url: 'https://goo.gl/maps/njQmnE8NFi52'
    },
    location: {
      id: 4,
      name: 'The Galleries'
    },
    suburb: {
      id: 1,
      name: 'CBD',
      city: {
        id: 1,
        name: 'Sydney'
      }
    },
    cuisines: [{
      id: 1,
      name: 'Café'
    }, {
      id: 4,
      name: 'Brunch'
    }]
  }, {
    id: 1,
    name: 'Dumplings & Co.',
    phone_number: '296992235',
    cover_image: 'https://b.zmtcdn.com/data/res_imagery/16564570_RESTAURANT_058971a49fafe87b9c772331b251b1fa.jpg?fit=around%7C1200%3A464&crop=1200%3A464%3B0%2C0',
    address: {
      address_first_line: 'Level 2, Hawker Lane',
      address_second_line: 'Chatswood Westfield',
      address_street_number: '1',
      address_street_name: 'Anderson Street',
      google_url: 'https://goo.gl/maps/GZxSRicabTu'
    },
    location: {
      id: 5,
      name: 'Westfield Pitt Street Mall'
    },
    suburb: {
      id: 1,
      name: 'CBD',
      city: {
        id: 1,
        name: 'Sydney'
      }
    },
    cuisines: [{
      id: 1,
      name: 'Café'
    }, {
      id: 4,
      name: 'Brunch'
    }]
  }, {
    id: 2,
    name: 'Bite Chew Drink',
    phone_number: '295258017',
    cover_image: 'https://b.zmtcdn.com/data/res_imagery/16569020_RESTAURANT_817e5ad9618b57f235213a26776dc169_c.jpg?fit=around%7C1200%3A464&crop=1200%3A464%3B0%2C0',
    address: {
      address_first_line: 'Level 1, Shop 11.04',
      address_second_line: 'Regent Place Arcade',
      address_street_number: '487',
      address_street_name: 'George Street',
      google_url: 'https://goo.gl/maps/Ds7vagBoTu42'
    },
    location: null,
    suburb: {
      id: 1,
      name: 'CBD',
      city: {
        id: 1,
        name: 'Sydney'
      }
    },
    cuisines: [{
      id: 2,
      name: 'Modern Australian'
    }]
  }];
  // console.log(stores)
  dispatch(setStores(stores));
};

