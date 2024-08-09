// eslint-disable-next-line react/prop-types
export const Button = ({ children }) => {
	return (
		<button className='bg-[#c89317] sm:py-4 p-3 sm:px-7 px-5 rounded-[40px] hover:bg-transparent border-[#c89317] border transition-all hover:-translate-y-1 text-white hover:text-[#c89317]'>
			{children}
		</button>
	)
}
