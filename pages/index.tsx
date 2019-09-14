import * as React from 'react';
import Link from 'next/link';

type State = {

};

type Cafe = {
  name: string,
  star: number,
  latitude: number,
  image: string,    // イメージ画像のurl
};

type Action =
  | { type: 'GET_CAFES' }
  | { type: 'RECEIVED_CAFES', payload: ReadonlyArray<Cafe> }
  | { type: 'SET_BLURED_CAFE', payload: ?number };

// actions
function getCafes(): Action {
  return { type: 'GET_CAFES' };
}

function receivedCafes(res: ReadonlyArray<Cafe>): Action {
  return { type: 'RECEIVED_CAFES', payload: res };
}

function setBluredCafe(id: ?number): Action {
  return { type: 'SET_BLURED_CAFE', payload: id };
}

const initialState: State = {
  cafes: [],

};

function reducer(state: State = initialState, action: Action) {
  const patch = (diff: Partial<State>): State => ({ ...state, ...diff });
  switch (action.type) {
    case 'GET_CAFES': {

    }
  }
}

export default () => (

)