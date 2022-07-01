import React from 'react';
import {useSelector} from 'react-redux';
import {OrdersList} from '../../components/OrdersList';
import {selectAcceptedOrders} from '../../store/slice/orderSlice';

export function AcceptedOrdersView() {
  const acceptedOrders = useSelector(selectAcceptedOrders);
  return (
    <OrdersList
      orders={acceptedOrders}
      noOrdersMessage="Nenhum pedido em andamento encontrado."
    />
  );
}