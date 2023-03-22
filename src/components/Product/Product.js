import styles from './Product.module.scss';
import {useState, useMemo} from 'react';
import PropTypes from 'prop-types';
import ProductImage from '../ProductImage/ProductImage';
import ProductOptions from '../ProductOptions/ProductOptions';

const Product = props => {
	const [currentColor, setCurrentColor] = useState(props.colors[0]);
	const [currentSize, setCurrentSize] = useState(props.sizes[0].name);
	const [currentPrice, setCurrentPrice] = useState(props.sizes[0].additionalPrice);
	const addPrice = (a, b) => {
		return a + b;
	};
	const getPrice = useMemo(() => addPrice(props.basePrice, currentPrice), [props.basePrice, currentPrice]);
	const addToCart = () => {
		console.log(props.title, getPrice, currentSize, currentColor);
	};
	return (
		<article className={styles.product}> 
			<ProductImage name={props.name} color={currentColor} />
			<div>
				<header>
					<h2 className={styles.name}>{props.title}</h2>
					<span className={styles.price}>Price: {getPrice}$</span>
				</header>
				<ProductOptions 
					setCurrentSize={setCurrentSize}
					setCurrentPrice={setCurrentPrice}
					currentSize={currentSize}
					currentPrice={currentPrice}
					sizes={props.sizes}
					setCurrentColor={setCurrentColor}
					currentColor={currentColor}
					colors={props.colors}
					addToCart={addToCart}
					onClick={props.onClick}
				/> 
			</div>
		</article>
	);
};

Product.propTypes = {
	colors: PropTypes.array.isRequired,
	sizes: PropTypes.array.isRequired
};

export default Product;