import React from 'react';
import { Card } from 'reactstrap';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRupeeSign,faStar } from '@fortawesome/free-solid-svg-icons'

const ProductCard = (props) => {
    const { url, title, price, count, id, rating } = props;
    const rupee = <FontAwesomeIcon icon={faRupeeSign} />
    const star = <FontAwesomeIcon icon={faStar} />
    return (
        <div>
            <Link to={`/${id}`} className="text-decoration-none">
                <Card className="card-body card-body-pointer">
                    <div>
                        <img className="w-100 store-img" src={url} />
                    </div>
                    <div className="store-item-text mt-2">{title}</div>
                    <div className="text-dark">{rupee}{" "}{price}</div>
                    <div className="d-flex">
                        <div className="rating-style">
                            {rating}<span className="raating-start">{star}</span>
                        </div>
                        <div className="text-grey-color">
                            {count}rating
                        </div>
                    </div>
                </Card>
            </Link>
        </div>
    )
}

ProductCard.defaultProps = {
    url: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    price: 0,
    rating: 0,
    count:0,
    title: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly ',
    description: '',
    category: ''
}

export default ProductCard;