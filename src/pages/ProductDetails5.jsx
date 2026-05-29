import Table from '../components/Table'
import {cardObj} from './Products'
import '../style/product_details.css'
const ProductDetails5=()=>{
    return (
        <Table image={cardObj[4].image} pid={cardObj[4].id} pname={cardObj[4].name} quantity={cardObj[4].quantity}
        supplier={cardObj[4].supplier} date={cardObj[4].date}/>
    )
}

export default ProductDetails5;