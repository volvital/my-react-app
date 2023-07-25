
interface ErrorMessageProps {
	error: string	
}

export function ErrorMessage({error}: ErrorMessageProps) {
	return (
		<p className=' text-center text-red-500'>{ error && `${error}` }</p>
	)
}