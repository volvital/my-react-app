import { useState } from "react"
import { IProduct } from "../models"

interface ProductProps {
	product: IProduct
}

export function Product({product}: ProductProps) {
	const [details, setDetails] = useState(false)
	const bgBtnClass = details ? "bg-orange-500" : "bg-cyan-500"
	const bgClasses = [bgBtnClass, "border py-2 px-2"]

	return (
		<div className="border py-2 px-2 rounded flex flex-col items-center mx-2 mb-2">
			<span className="py-2">{ product.title }</span> 
			<img
				className="border"
				src={ product.image }
				alt={ product.title } />
			<span className="py-2 font-bold">{product.price}</span>	
			<button
			 className={bgClasses.join(" ")} 
			 onClick={() => setDetails(prev => !prev)}
			 >
				{details ? "Hide description" : "Show description"}
			</button>
			{details && 
			<div>
				<p>{product.description}</p>
				<p>Rate: <span style={{ fontWeight: 'bold' }}>{product.rating.rate}</span></p>
			</div>}
		</div>
	)	
}