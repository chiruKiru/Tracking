export default ({alldata}) =>{

  console.log(alldata);

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
              <th className="py-3 px-6"> sender </th>
              <th className="py-3 px-6"> name </th>
              <th className="py-3 px-6"> Receiver </th>
              <th className="py-3 px-6"> From </th>
              <th className="py-3 px-6"> To </th>
              <th className="py-3 px-6"> Requested Date </th>
              <th className="py-3 px-6"> Reason </th>
              <th className="py-3 px-6"> Req Amount </th>
              <th className="py-3 px-6"> Payment </th>
              <th className="py-3 px-6"> Status </th>
            </tr>
          </thead>
          {<tbody className="text-gray-600 divide-y">
            {alldata?.map((fund, idx) => (
              <tr key={idx}>
                <td className="px-6 py-4 whitespace-nowrap">
                  {idx}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {fund.sender}
                </td>
                <td align="center" className="px-6 py-4 whitespace-nowrap">
                  {fund.name} ₹
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {fund.receiver.slice(0,15)}...
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {fund.from}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {fund.To}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {fund.ReqDate}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {fund.reason}
                </td>
                <td align="center" className="px-6 py-4 whitespace-nowrap">
                  {fund.amount} ₹
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                {fund.isPaid ? 'complete' : 'not complete'}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {fund.status == 0 ? 'Pending' : fund.status == 1 ? 'STATE APPROVED' : fund.status == 2 ? 'CENTRAL': "Rejected"}
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