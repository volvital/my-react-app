import { useProducts } from '../hooks/products';

export function ErrorMessage() {
	const { error } = useProducts()
	return (
		<p className=' text-center text-red-500'>{ error && `${error}` }</p>
	)
}