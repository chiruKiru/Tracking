import images from '../Images/index'

export default ({
  setOpenProfile,
  setCompleteModel,
  setGetModel,
  setStartModel,
}) => {
  const team = [
    {
      avatar:images.compShipment,
    },
    {
      avatar:images.getFund,
    },
    {
      avatar:images.startFund,
    },
    {
      avatar:images.userProfile,
    },
    {
      avatar:images.shipCount,
    },
    {
      avatar:images.send,
    },
  ];


  const openModelBox = (text) =>{
    if(text == 1){
      setCompleteModel(true);
    }else if(text == 2){
      setGetModel(true);
    }else if(text == 3){
      setStartModel(true);
    }else if(text == 4){
      setOpenProfile(true);
    }
  };
  return(
  <section className='py-0 pb-14'>
    <div className='w-full px-4 md:px-8'>
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

