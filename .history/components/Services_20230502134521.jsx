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
    if(text) == 1{
      seCompleteModal
    }
  }
}