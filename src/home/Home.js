import React, { Component } from 'react';
import { Row, Col, Container } from 'reactstrap';
import { connect } from "react-redux";
import { getStoreList } from "../actions/mystore.actions";
import { bindActionCreators } from "redux";
import ProductCard from '../components/productCard';
import Loader from '../components/loader';


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }


    componentDidMount() {
        this.props.getStoreList()
    }
    render() {
        const { getStoreData } = this.props
        console.log('find data', getStoreData)

        let StoreData;
        if (getStoreData?.status === 200) {
            StoreData = getStoreData?.data
        } else {
            StoreData = []
        }

        return (
            <Container className="mt-5 mb-3">
                <Row>
                    {(StoreData?.length > 0)?(
                        StoreData.map((data, index) => (
                            <Col md={4} lg={3} sm={6} xs={6} className="mt-3">
                                <ProductCard
                                    id={data?.id}
                                    url={data?.image}
                                    price={data?.price}
                                    rating={data?.rating?.rate}
                                    count={data?.rating?.count}
                                    title={data?.title}
                                    description={data?.description}
                                    category={data?.category}
                                    key={index}
                                />
                            </Col>
                        ))
                    ):(
                            <div className="text-center"><Loader/></div>
                    )}

                </Row>
            </Container>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        {
            getStoreList,
        },
        dispatch
    );
};

const mapStateToProps = (state) => ({
    getStoreData: state.mystoreReducer.getStoreData,

});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
