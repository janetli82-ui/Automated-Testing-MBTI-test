const Header = () => {
  return(
   <div className='flex px-10 py-10 gap-2 items-center'>
      <img src="./brain.png" alt="brain" data-testid="brain-icon" className="h-10 w-10 shrink-0 object-contain" />
    <div className='flex flex-col'>
      <h1 className='text-xl text-black font-bold'>Personality Test</h1>
      <p className='text-gray-400 text-xs '>By Dobeen Kim</p>
    </div>
   </div>
  )
}

export default Header