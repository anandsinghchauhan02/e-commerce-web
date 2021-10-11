import React, { useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { connect } from "react-redux";
import { viewProduct } from "../actions/mystore.actions";
import { bindActionCreators } from "redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRupeeSign, faStar, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Loader from './loader';

const ViewProduct = (props) => {
    const { getViewProductData } = props;
    const rupee = <FontAwesomeIcon icon={faRupeeSign} />
    const star = <FontAwesomeIcon icon={faStar} />
    const shoppingCart = <FontAwesomeIcon icon={faShoppingCart} />
    useEffect(() => {
        const id = props.match.params.id
        props.viewProduct(id)
    })
    let productData;
    if (getViewProductData?.status === 200) {
        productData = {
            url: getViewProductData?.data?.image,
            price: getViewProductData?.data?.price,
            rating: getViewProductData?.data?.rating?.rate,
            count: getViewProductData?.data?.rating?.count,
            title: getViewProductData?.data?.title,
            description: getViewProductData?.data?.description,
            category: getViewProductData?.data?.category
        }
    } else {
        productData = {
            url: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
            price: 0,
            rating: 0,
            count: 0,
            title: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly ',
            description: '',
            category: ''
        }
    }
    return (
        <Container>

            {(getViewProductData?.status === 200) ? (
                <Row className="mt-5">
                    <Col md={6} lg={6} sm={6} xs={12}>
                        <img className="w-100 view-product-img border" src={productData.url} />
                    </Col>
                    <Col md={6} lg={6} sm={6} xs={12} className="action-btn-b">
                        <div className="pt-3">
                            <div className="store-item-text">{productData.title}</div>
                            <div className="mt-2">{productData.description}</div>
                            <div>{rupee}{" "}{productData.price}</div>
                            <div className="d-flex">
                                <div className="rating-style">
                                    {productData.rating}<span className="raating-start">{star}</span>
                                </div>
                                <div className="text-grey-color">
                                    ({productData.count})
                           </div>
                            </div>
                            <Row className="mt-3 action-btn-bottom">
                                <Col><button className="now-buy">{rupee}PLACE ORDER</button></Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            ) : (
                    <Row className="mt-5 text-center">
                        <Col>
                            <Loader />
                        </Col>
                    </Row>
                )}

        </Container>
    )
}



const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        {
            viewProduct,
        },
        dispatch
    );
};

const mapStateToProps = (state) => ({
    getViewProductData: state.mystoreReducer.getViewProductData,

});

export default connect(mapStateToProps, mapDispatchToProps)(ViewProduct);
