// eslint-disable-next-line react/prop-types
export const Button = ({ children }) => {
	return (
		<button className='bg-[#4CA1F2] sm:py-4 p-3 sm:px-7 px-5 rounded-[40px] hover:bg-transparent border-[#4CA1F2] border hover:border-[#fff] transition-all hover:-translate-y-1'>
			{children}
		</button>
	)
}
