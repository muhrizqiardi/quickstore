import formatter from '../utils/priceFormatter'
import { useContext, useEffect } from 'react';
import CartContext from '../context/Cart';

function CartListItem({ id, name, price, quantity }) {
  const { removeItem, refreshCart } = useContext(CartContext);
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <div className="me-auto">
        <div>{name}</div>
        <div className="text-secondary">{formatter.format(price)}</div>
      </div>
      <div className="">
        <span className="badge bg-dark rounded-pill me-3">x{quantity}</span>
        <button onClick={() => removeItem(id, refreshCart)} className="btn btn-danger"><i className="bi bi-trash"></i></button>
      </div>
    </li>
  )
}
function CartList() {
  const { cartState } = useContext(CartContext);
  return (
    <ul className="list-group">
      {cartState && cartState.line_items.map(item =>
        <CartListItem
          id={item.id}
          key={item.id}
          name={item.name}
          price={item.price.raw}
          quantity={item.quantity}
        />)}
      <li className="list-group-item d-flex justify-content-between align-items-center">
        <div className="fw-bold">Total:</div>
        <div className="">{cartState && formatter.format(cartState.subtotal.raw)}</div>
      </li>
    </ul>
  );
}
export default CartList;
