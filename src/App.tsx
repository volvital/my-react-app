import { Loader } from './components/Loader';
import { ErrorMessage } from './components/ErrorMessage'
import { Product } from './components/Product'
import { useProducts } from './hooks/products';

function App() {
	const {products} = useProducts()

	return (
		<>
		<div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
			{products.map(product => <Product product={product} key={product.id} />)}
		</div>
		<Loader />
		<ErrorMessage />
		</>
	)
}

export default App;
