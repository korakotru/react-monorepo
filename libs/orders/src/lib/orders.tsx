import styles from './orders.module.css';
import { SharedUi } from '@react-monorepo/shared-ui';
/* eslint-disable-next-line */
export interface OrdersProps {}

export function Orders(props: OrdersProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Orders!</h1>
      <SharedUi />
    </div>
  );
}

export default Orders;
