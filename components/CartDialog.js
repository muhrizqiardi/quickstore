import CartList from './CartList'
import { useContext, useEffect } from 'react';
import CartContext from '../context/Cart';
function CartDialog() {
  const { cartState, refreshCart } = useContext(CartContext);
  useEffect(() => {
    refreshCart();
  }, []);
  return (
    <div className="modal fade" id="cartDialog" tabIndex={-1} aria-labelledby="cartDialog" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="cartDialogLabel">Shopping Cart</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
          </div>
          <div className="modal-body">
            {
              cartState.line_items.length > 0 ?
                <CartList />
                :
                <div className="w-100 my-5 text-muted text-center">Cart is empty<br/>¯\_(ツ)_/¯</div>
          }
          </div>
          <div className="modal-footer">
            {cartState.line_items.length > 0 ?
              <a type="button" href={cartState.hosted_checkout_url} className="btn btn-dark">Checkout</a>
              :
              <button className="btn btn-dark disabled" disabled>Checkout</button>
            }
          </div>
        </div>
      </div>
    </div>
  );
}
export default CartDialog;
