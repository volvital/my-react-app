import { Loader } from '../components/Loader';
import { ErrorMessage } from '../components/ErrorMessage'
import { Product } from '../components/Product'
import { useProducts } from '../hooks/products';
import { Modal } from '../components/Modal';
import { CreateProduct } from '../components/CreateProduct';
import { useContext } from 'react';
import { IProduct } from '../models';
import { ModalContext } from '../context/ModalContext';
import { useState } from "react"

export function ProductPage() {
	const {products, loading, error, addProduct} = useProducts()
	const {modal, open, close} = useContext(ModalContext)
	const [buttonVisible, setButtonVisible] = useState(true)

	const createHandler = (product: IProduct) => {
		closeModal()
		addProduct(product)
		
	}

	const openModal = () => {
		open()
		setButtonVisible(false)
	}

	const closeModal = () => {
		close()
		setButtonVisible(true)
	}

	return (
		<>
		<div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
			{products.map(product => <Product product={product} key={product.id} />)}
			{modal && <Modal title='Create new product' onClose={ closeModal }>
				<CreateProduct onCreate={ createHandler }/>
			</Modal>}
			{buttonVisible && <button 
				className="fixed bottom-5 right-5 py-2 px-2 border bg-blue-600 hover:text-white rounded"
				onClick={ openModal }
				>
					Add product
			</button>}
		</div>
		<Loader loading={loading}/>
		<ErrorMessage error={error}/>
		</>
	)
}