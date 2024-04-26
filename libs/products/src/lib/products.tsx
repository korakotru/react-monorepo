import styles from './products.module.css';
import { SharedUi } from '@react-monorepo/shared-ui';

/* eslint-disable-next-line */
export interface ProductsProps {}

export function Products(props: ProductsProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Products!</h1>
      <SharedUi />
    </div>
  );
}

export default Products;
