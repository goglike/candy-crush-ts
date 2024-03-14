import styles from './Catalog.module.css'
import Filter from "./Filter/Filter.tsx";
import Content from "./Content/Content.tsx";

const Catalog = () => {
    return (
        <div className={styles.container}>
            <Filter/>
            <Content/>
        </div>
    )
}

export default Catalog