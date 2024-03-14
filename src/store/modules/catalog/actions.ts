import { ThunkDispatch } from "redux-thunk";
import {AnyAction} from "redux";

// actions.js
export const TRANSFER_DATA = 'TRANSFER_DATA';
export const ADD_ITEM = 'ADD_ITEM';

interface IItem {
    id: string;
    name: string;
    price: number;
}

// Функция для обработки данных
const mapData = (data: IItem[]) => {
    // Проходим по каждому объекту в массиве
    data.map(item => {
        return {
            id: item.id,
            name: item.name,
            price: item.price,
        };
    });

export const transferDataAction = (data:IItem) => ({
    type: TRANSFER_DATA,
    payload: data
});

export const addItem = (item:object) => ({
    type: ADD_ITEM,
    payload: item
});

type initialState = { id:number, name:string, price:string }
export const fetchData = () => {
    return async (dispatch:ThunkDispatch< initialState, undefined, AnyAction>) => {
        try
        {
            const response = await fetch('public/data/data.json');
            const data = await response.json();
            dispatch(transferDataAction(data));
            console.log( typeof data )

            mapData(data)

        }

        catch (error)
        {
            console.error('Ошибка при загрузке данных', error);
        }
    };
};
