import React from 'react';
import {useSelector} from 'react-redux';
import {OrdersList} from '../../components/OrdersList';
import { selectOpenOrders } from '../../store/slice/orderSlice';


export function OpenOrdersView() {
  const openOrders = useSelector(selectOpenOrders);
  return (
    <OrdersList
      orders={openOrders}
      noOrdersMessage="Nenhum pedido disponível encontrado."
    />
  );
}