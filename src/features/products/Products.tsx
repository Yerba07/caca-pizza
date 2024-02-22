import { PizzaItem, ProductList } from "./style";
import pizzaData from "../../data/pizza-data.json";
import PizzaList from "./PizzaList.tsx";
import { useSelector } from "react-redux";

function Products() {
  const cartItems = useSelector((state) => state.product.cartItems);
  return (
    <ProductList>
      <p className="section-header-text">Пиццы</p>
      <PizzaItem>
        {pizzaData.map((pizza) => {
          const cartItem = cartItems.find((item) => item.id === pizza.id);
          return (
            <PizzaList
              key={pizza.id}
              {...pizza}
              quantity={cartItem?.quantity}
            />
          );
        })}
      </PizzaItem>
    </ProductList>
  );
}

export default Products;
