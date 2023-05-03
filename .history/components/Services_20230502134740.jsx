import images from '../Images/index'
import Image from 'next.js/image'

export default ({
  setOpenProfile,
  seCompleteModal,
  setGetModal,
  setStartModal,
}) => {
  const team = [
    {
      avatar:images.compShipment,
    },
    {
      avatar:images.getShipment,
    },
    {
      avatar:images.startShipment,
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
      seCompleteModal(true);
    }else if(text == 2){
      setGetModal(true);
    }else if(text == 3){
      setStartModalet(true);
    }else if(text == 4){
      setOpenProfile(true);
    }
  };
  <section className='py-0 pb-14'>
    <div className='mx-w-screen-xl mx-auto px-4 md:px-8'>
      <div className='mt-12'>
        <ul
      </div>
    </div>
  </section>
}