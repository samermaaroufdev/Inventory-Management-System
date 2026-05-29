import Table from '../components/Table'
import {cardObj} from './Products'
import '../style/product_details.css'
const ProductDetails1=()=>{
    return (
        <Table image={cardObj[0].image} pid={cardObj[0].id} pname={cardObj[0].name} quantity={cardObj[0].quantity}
        supplier={cardObj[0].supplier} date={cardObj[0].date}/>
    )
}

export default ProductDetails1;