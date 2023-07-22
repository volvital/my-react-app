import { useProducts } from '../hooks/products';

export function Loader() {
	const { loading } = useProducts()
	return (
		<p className=' text-center text-blue-900'>{ loading && "Loading..." }</p>
	)
}