//import data from '../data';
import { useEffect, useReducer } from 'react';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Product from './component/Product';
import { Helmet } from 'react-helmet-async';
import LoadingBox from './component/LoadingBox';
import MessageBox from './component/MessageBox';

//reducer instead of state, if states are complex and temporally dependent
//state - current state; action - performed action
const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, products: action.payload, loading: false }; // only update products; all products from backend
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

function HomeScreen() {
  const [{ loading, error, products }, dispatch] = useReducer(reducer, {
    products: [],
    loading: true,
    error: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' });
      try {
        const result = await axios.get('/api/products');
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: err.message });
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <Helmet>
        <title>Haart</title>
      </Helmet>
      <h1 style={{ marginTop: 15, marginBottom: 15 }}>Featured Products</h1>
      <div className="products">
        {loading ? (
          <div>
            <LoadingBox />
          </div>
        ) : error ? (
          <div>
            <MessageBox variant="danger">{error}</MessageBox>
          </div>
        ) : (
          <Row>
            {products.map((product) => (
              <Col sm={6} md={4} lg={3} className="mb-3">
                <Product product={product}></Product>
              </Col>
            ))}
          </Row>
        )}
      </div>
    </div>
  );
}
export default HomeScreen;
