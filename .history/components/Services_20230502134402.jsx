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
      avatar:images.compShipment,
    },
    {
      avatar:images.compShipment,
    },
  ]
}