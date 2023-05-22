export default ({setcreateShipmentModel, allShipmentsdata}) =>{
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
          <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">
            create Tracking
          </h3>
          <p>
            Hi folks lets make differnce
          </p>
        </div>
      </div>
      <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
        <table className="w-full table-auto text-sm text-left">
          <thead className="bg-gray-50 text-gray-600 font-medium border-b">
            <tr>
              <th className="py-3 px-6"> ID </th>
              <th className="py-3 px-6"> Sender </th>
              <th className="py-3 px-6"> Receiver </th>
              <th className="py-3 px-6"> Request Date </th>
              <th className="py-3 px-6"> from </th>
              <th className="py-3 px-6"> Amount </th>
              <th className="py-3 px-6"> Paid </th>
              <th className="py-3 px-6"> Status </th>
            </tr>
          </thead>
          {<tbody className="text-gray-600 divide-y">
            {allShipmentsdata?.map((shipment, idx) => (
              <tr key={idx}>
                <td className="px-6 py-4 whitespace-nowrap">
                  {idx}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {shipment.sender.slice(0,15)}...
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {shipment.receiver.slice(0,15)}...
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {converTime(shipment.ReqDate)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {(shipment.from)} 
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {shipment.amount}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {shipment.isPaid ? 'complete' : 'not complete'}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {shipment.status == 0 ? 'Pending' : shipment.status == 1 ? 'STATE APPROVED' : shipment.status == 2 ? 'SUCCESS' : 'REJECTED'}
                </td>
              </tr>
            ))}
          </tbody>
            }
        </table>
      </div>
    </div>
  )
}