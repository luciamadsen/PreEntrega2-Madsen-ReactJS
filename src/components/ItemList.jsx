import { Item } from "./Item"
import { Loader } from "./Loader"

export const ItemList = ({data, loading}) => {

    if (data.length == 0) {
        if (loading == true) {
            return <Loader loading={true}/>
        } else {
            return <p className="none">No hay productos</p>
        }
    }

    return (
        <div className="item-list">
            {data.map(item => 
                    <Item key={item.id} data={item} />
            )}
        </div>
    )
}