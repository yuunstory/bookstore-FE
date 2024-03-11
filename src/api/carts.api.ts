import { Cart } from '../models/cart.model';
import { httpClient } from './http';

interface AddCartParams {
  book_id: number;
  quantity: number;
}

export const addCart = async (params: AddCartParams) => {
  try {
    const response = await httpClient.post('/carts', params);

    return response.data;
  } catch (error) {
    console.log(`장바구니 담기 오류 : ${error}`);
    return null;
  }
};

export const fetchCart = async () => {
  try {
    const response = await httpClient.get<Cart[]>('/carts');

    return response.data;
  } catch (error) {
    console.log(`장바구니 목록 불러오기 오류 : ${error}`);
    return [];
  }
};

export const deleteCart = async (cartId: number) => {
  try {
    const response = await httpClient.delete(`/carts/${cartId}`);

    return response.data;
  } catch (error) {
    console.log(`선택한 장바구니 아이템 삭제 중 오류 : ${error}`);
    return;
  }
};
