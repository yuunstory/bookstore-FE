import styled from 'styled-components';
import Title from '../components/common/Title';
import CartItem from '../components/cart/CartItem';
import { useCart } from '../hooks/useCart';
import { useMemo, useState } from 'react';
import Empty from '../components/common/Empty';
import { FaShoppingCart } from 'react-icons/fa';
import CartSummary from '../components/cart/CartSummary';
import Button from '../components/common/Button';
import { useAlert } from '../hooks/useAlert';
import { OrderSheet } from '../models/order.model';

function Cart() {
  const { showAlert } = useAlert();

  const { carts, deleteCartItem, isEmpty } = useCart();
  const [checkedItems, setCheckedItems] = useState<number[]>([]);

  const handleCheckItem = (id: number) => {
    if (checkedItems.includes(id)) {
      // 언체크 : 해당 내용을 제거하는 방식이 아니라 해당 내용을 제외한 아이템들을 새로 업데이트하는 방식
      setCheckedItems(checkedItems.filter((item) => item !== id));
    } else {
      // 체크
      setCheckedItems([...checkedItems, id]);
    }
  };

  const handleItemDelete = (id: number) => {
    // 삭제 행위
    deleteCartItem(id);
  };

  const totalQuantity = useMemo(() => {
    return carts.reduce((acc, cart) => {
      if (checkedItems.includes(cart.id)) {
        return acc + cart.quantity;
      }
      return acc;
    }, 0);
  }, [carts, checkedItems]);

  const totalPrice = useMemo(() => {
    return carts.reduce((acc, cart) => {
      if (checkedItems.includes(cart.id)) {
        return acc + cart.price * cart.quantity;
      }
      return acc;
    }, 0);
  }, [carts, checkedItems]);

  const handleOrder = () => {
    if (checkedItems.length === 0) {
      showAlert('주문할 상품을 선택해주세요');
      return;
    }

    // 주문 액션 -> 주문서 작성으로 데이터 전달
    const orderData: Omit<OrderSheet, 'delivery'> = {
      items: checkedItems,
      totalPrice,
      totalQuantity,
      firstBookTitle: carts[0].title,
    };
    console.log(orderData);
  };

  return (
    <>
      <Title size="large">장바구니</Title>
      <CartStyle>
        {!isEmpty && (
          <>
            <div className="content">
              {carts.map((item) => {
                return (
                  <CartItem
                    checkedItems={checkedItems}
                    cart={item}
                    key={item.id}
                    onCheck={handleCheckItem}
                    onDelete={handleItemDelete}
                  />
                );
              })}
            </div>
            <div className="summary">
              <CartSummary totalQuantity={totalQuantity} totalPrice={totalPrice} />

              <Button size="large" scheme="primary" onClick={handleOrder}>
                주문하기
              </Button>
            </div>
          </>
        )}
        {isEmpty && (
          <Empty title="장바구니가 비었습니다." icon={<FaShoppingCart />} description={<>장바구니를 채워보세요.</>} />
        )}
      </CartStyle>
    </>
  );
}

const CartStyle = styled.div`
  display: flex;
  gap: 24px;
  justify-content: space-between;
  padding: 24px 0 0 0;

  .content {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .summary {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
`;

export default Cart;
