import {Link} from 'react-router-dom'
const Card=({name,description,image,alt,path})=>{
    return (
        <div className='card h-100'>
            <img src={image} alt='' className='card-img-top' alt={alt}/>
            <div className='card-body text-center p-2 bg-body-secondary'>
                <h5 className='card-title'>{name}</h5>
                <p className='card-text'>{description}</p>
                <Link to={path} className='card-link'>See Details</Link>
            </div>
        </div>
    )
}

export default Card;