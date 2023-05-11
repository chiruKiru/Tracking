import images from '../../Images/index'

export default ({
  setOpenProfile,
}) => {
  const team = [
    {
      avatar:images.userProfile,
      path :''
    },
    {
        avatar:images.getFund,
    },
    {
        avatar:images.startFund,
    },
  ];


  const openModelBox = (text) =>{
    if (text == 1){
      setOpenProfile(true);
    }
  };
  return(
  <section className='py-0 pb-14'>
    <div className='mx-w-screen-xl mx-auto px-4 md:px-8'>
      <div className='mt-12'>
          <ul className='grid gap-8 sm:grid-cols-2 md:grid-cols-3'>
            {team.map((item,i) => (
              <li key={i}>
                <div onClick={()=> openModelBox(i+1)} className='w-full h-60 sm:h-52 md:h-56'>
                  <img
                  src ={item.avatar} className='w-full h-full object-cover object-center shadow-md rounded-xl' alt='hello'/>
                </div>
              </li>
            ))}
          </ul>
      </div>
    </div>
  </section>
  )
}

