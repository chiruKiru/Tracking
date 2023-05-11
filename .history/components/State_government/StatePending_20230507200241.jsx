/*    shipment.status == 0 ? (
              <tr key={idx}>
                <td className="px-6 py-4 whitespace-nowrap">
                  {shipment.index-1}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {shipment.sender.slice(0,15)}...
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {shipment.receiver.slice(0,15)}...
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {converTime(shipment.pickupTime)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {(shipment.distance)} Km
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {shipment.price}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {shipment.deliveryTime}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {shipment.isPaid ? 'complete' : 'not complete'}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {shipment.status == 0 ? 'Pending' : shipment.status == 1 ? 'In Transit' : 'Delivered'}
                </td>
              </tr>
              ):''))}*/