import styles from './Filter.module.css'
const Filter = () => {
    return(
        <div className={styles.filterBar}>
            <div className={styles.filtersWord}>Filters</div>
            <div className={styles.prise}>
                <h1>Prise</h1>
                <label className={styles.priseLabel}>
                    <input type="number" placeholder="From"></input>
                    <input type="number" placeholder="to"></input>
                </label>
            </div>

            <div className={styles.brand}>
                <h1>Brand</h1>
                <label className={styles.brandLabel}>
                    <span className={styles.brandLabelItem}>

                        <input type="checkbox"></input>
                        <a>Candy crusher</a>
                    </span>
                    <span className={styles.brandLabelItem}>

                            <input type="checkbox"></input>
                        <a>Sweet boy</a>
                    </span>
                    <span className={styles.brandLabelItem}>

                            <input type="checkbox"></input>
                        <a>Lucky sweets</a>
                    </span>
                    <span className={styles.brandLabelItem}>
                            <input type="checkbox"></input>
                        <a>Candy Robert</a>
                    </span>
                </label>
            </div>
            <div className={styles.btnContainer}>
                <div className={styles.searchBtn}>
                    <button>Search</button>
                </div>
                <div className={styles.undoBtn}>
                    <button>Undo</button>
                </div>
            </div>

            <div className={styles.mostPopular}>
                <h1>Most popular</h1>

                <li>Purple Velvet Delight</li>
                <li>Lavender Dream Drops</li>
                <li>Plum Blossom Bonbons</li>
                <li>Violet Essence Truffles</li>
                <li>Amethyst Infusion Chews</li>
                <li>Grape Glow Treats</li>
                <li>Berry Blissful Bites</li>
                <li>Orchid Creams</li>
                <li>Lilac Love Sweets</li>
                <li>Indigo Indulgence Gems</li>
                <li>Mauve Magic Taffy</li>
            </div>
        </div>
    )
}
export default Filter