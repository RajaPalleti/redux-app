import Home from '../components/home/Home';
import {connect} from 'react-redux';
import { addToCart, removeToCart} from '../services/actions/Action';
const mapStateToProps = state=>({
    data: state.cartItems
})
const mapDispatchToProps = dispatch=> ({
    addToCartHandler: data=>dispatch(addToCart(data)),
    removeToCartHandler: data=>dispatch(removeToCart(data))
})
export default connect(mapStateToProps, mapDispatchToProps)(Home);