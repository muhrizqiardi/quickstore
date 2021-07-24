import formatter from '../utils/priceFormatter'
import commerce from "../lib/commerce";
import { useContext } from 'react';
import CartContext from '../context/Cart';

function CartListItem({ id, name, price, quantity }) {
  const { refreshCart } = useContext(CartContext);

  const removeItem = (itemToRemove) => {
    commerce.cart.remove(itemToRemove).then(() => refreshCart());
  }
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <div className="w-75">
        <div>{name}</div>
        <div className="text-secondary">{formatter.format(price)}</div>
      </div>
      <div className="w-25">
        <span className="badge bg-dark rounded-pill me-3">x{quantity}</span>
        <button onClick={() => removeItem(id)} className="btn btn-danger"><i className="bi bi-trash"></i></button>
      </div>
    </li>
  )
}

function CartDialog({ cart }) {
  return (
    <div className="modal fade" id="cartDialog" tabIndex={-1} aria-labelledby="cartDialog" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="cartDialogLabel">Shopping Cart</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
          </div>
          <div className="modal-body">
            <ul className="list-group">
              {cart.line_items.map(item => <CartListItem
                id={item.id}
                key={item.id}
                name={item.name}
                price={item.price.raw}
                quantity={item.quantity}
              />)}
              <li className="list-group-item d-flex justify-content-between align-items-center">
                <div className="fw-bold">Total:</div>
                <div className="">{cart && formatter.format(cart.subtotal.raw)}</div>
              </li>
            </ul>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-dark">Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CartDialog;
