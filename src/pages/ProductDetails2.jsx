import Table from '../components/Table'
import {cardObj} from './Products'
import '../style/product_details.css'
const ProductDetails2=()=>{
    return (
        <Table image={cardObj[1].image} pid={cardObj[1].id} pname={cardObj[1].name} quantity={cardObj[1].quantity}
        supplier={cardObj[1].supplier} date={cardObj[1].date}/>
    )
}

export default ProductDetails2;