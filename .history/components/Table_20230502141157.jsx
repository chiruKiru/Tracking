export default ({setCreateShipmentModel, allShipmentsdata}) =>{
  const converTime = (time) =>{
    const newTime = new Date(time);
    const dateTime = new Intl.DateTimeFormat("en-US",{
      year:'numeric',
      month:'2-digit',
      day:'2-digit',
    }).format(newTime);
    return dateTime;
  };

  console.log(allShipmentsdata);

  return(

    <div className="mx-w-screen-xl mx-auto px-4 md:px-8">
      <div className="items-start justify-between md:flex">
        <div className="max-w-lg">
          <h3 className=""
        </div>
      </div>
    </div>

  )
}