import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  DescText,
  Img,
  PizzaDescription,
  PlusMinus,
  Price,
} from "./style";
import {
  decreaseProductQuantity,
  getProduct,
  getTotalQuantity,
  increaseProductQuantity,
} from "../../store/productSlice";
import { useState } from "react";

export type ProductDataTypes = {
  id: number;
  name: string;
  ingredients: string;
  price: number;
  img: string;
  quantity?: number;
};

function PizzaList({
  id,
  name,
  ingredients,
  price,
  img,
  quantity,
}: ProductDataTypes) {
  const dispatch = useDispatch();
  const totalQuantity = useSelector(getTotalQuantity);
  const [isCart, setIsCart] = useState(false);

  function handleGetProduct() {
    dispatch(getProduct(id));
    setIsCart(true);
    console.log(`${quantity}, ${totalQuantity} добавлен`);
  }

  function handleIncreaseProduct() {
    dispatch(increaseProductQuantity(id));
  }

  function handleDecreaseProduct() {
    if (quantity === 1 || !quantity) {
      setIsCart(false);
    } else {
      dispatch(decreaseProductQuantity(id));
    }
  }

  return (
    <PizzaDescription key={id}>
      <div>
        <Img src={img} alt={name} />
        <DescText>
          <h2>{name}</h2>
          <div className="desc-text">{ingredients}</div>
        </DescText>
        <Price>
          <span>{price} тг.</span>
          {!isCart ? (
            <button onClick={handleGetProduct}>В корзину</button>
          ) : (
            <PlusMinus>
              <Button onClick={handleDecreaseProduct}>-</Button>
              <span>{quantity} шт.</span>
              <Button onClick={handleIncreaseProduct}>+</Button>
            </PlusMinus>
          )}
        </Price>
      </div>
    </PizzaDescription>
  );
}

export default PizzaList;
