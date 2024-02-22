import { useSelector } from "react-redux";
import { NavButton, NavText, NavigationBar } from "./style";
import { getTotalQuantity } from "../../store/productSlice";
import { useState } from "react";

function Bar() {
  const totalQuantity = useSelector(getTotalQuantity);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <NavigationBar>
      <NavText>
        <span>Пиццы</span>
        <span>Комбо</span>
        <span>Закуски</span>
        <span>Коктейли</span>
        <span>Кофе</span>
        <span>Десерты</span>
        <span>Напитки</span>
        <span>Соусы</span>
        <span>Другие товары</span>
        <span>Акции</span>
      </NavText>
      <NavButton
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <span>Корзина</span>
        <div></div>
        <span>
          {isHovered ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          ) : (
            totalQuantity
          )}
        </span>
      </NavButton>
    </NavigationBar>
  );
}

export default Bar;
