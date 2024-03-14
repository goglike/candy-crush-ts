import styles from './Content.module.css'
import { useSelector, useDispatch } from 'react-redux'

import {useEffect} from "react";
import {addItem, fetchData} from "../../../../store/modules/catalog/actions.ts";



const Content = () => {
    const dispatch = useDispatch();
    const items = useSelector(state => state.catalog.items);



    const handleAddItem = () => {

        dispatch(addItem());
    }


    console.log(items)
    return (
        <div className={styles.contentContainer} >
            {
                items.map ( (item) => {
                    return (
                        <div key={item.id} className={styles.contentItem}>
                            <img src={`/assets/items/id-${item.id}.jpg`} key={item.id}></img>

                            <a key={item.id}>{item.name}</a>
                            <a key={item.id}>{item.price}$/KG</a>
                        </div>
                    );
                })
            }


               <button onClick={handleAddItem}>Add item</button>
            </div>
    )
}
export default Content