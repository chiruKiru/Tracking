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
      seCompleteModal(true);
    }else if(text == 3){
      seCompleteModal(true);
    }else if(text == 4){
      seCompleteModal(true);
    }else
  }
}