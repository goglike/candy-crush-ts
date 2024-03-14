import {ADD_ITEM, TRANSFER_DATA} from "./actions.ts";

interface ITransferDataAction {
    type: typeof TRANSFER_DATA;
    payload: [];
}

interface IAddItemAction {
    type: typeof ADD_ITEM;
    payload: object;
}

// Объединяем типы действий для использования в редюсере
type CatalogActions = ITransferDataAction | IAddItemAction;

interface Item {
    name: string,
    id: number,
    price: string,
}
interface IInitialState {
    items: Item[],
    id: number
}
const initialState:IInitialState = {
    items: [],
    id: 0
};

export const catalogReducer = (state = initialState, action:CatalogActions) => {
    switch (action.type) {
        case TRANSFER_DATA:
            return {
                ...state,
                items: action.payload,

            };
        case ADD_ITEM:
            // eslint-disable-next-line no-case-declarations
            const newItem = { ...action.payload, id: `custom-${state.id}` };
            return {
                ...state,
                items: [state.items, newItem],
                id: state.id + 1
            };
        default:
            return state;
    }
};

