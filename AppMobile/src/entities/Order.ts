import {Address} from './Address';
import {OrderStatus} from './OrderStatus';

export type Order = {
  id: string;
  minutes: number;
  meters: number;
  value: number;
  startAddress: Address;
  finalAddress: Address;
  comments: string;
  user: string;
  friendlyId: string;
  partnerValue: number;
  status: OrderStatus;
  createdAt: string;
};