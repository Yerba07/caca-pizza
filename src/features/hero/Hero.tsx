import { useRef } from "react";
import {
  BtnIcon,
  ButtonLeft,
  ButtonRight,
  HeroOrders,
  HeroPromoImg,
  HeroSection,
  OrderImg,
  Orders,
} from "./style";

function Hero() {
  const ordersRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (ordersRef.current) {
      ordersRef.current.scrollLeft -= 200;
    }
  };

  const scrollRight = () => {
    if (ordersRef.current) {
      ordersRef.current.scrollLeft += 200;
    }
  };

  return (
    <HeroSection>
      <HeroPromoImg>
        <img src="../public/images/1акции.jpg" alt="promo" />
        <img src="../public/images/2акции.jpg" alt="promo" />
        <img src="../public/images/3акции.jpg" alt="promo" />
        <img src="../public/images/4акции.jpg" alt="promo" />
        <img src="../public/images/5акции.jpg" alt="promo" />
      </HeroPromoImg>
      <p>Часто заказывают</p>
      <HeroOrders ref={ordersRef}>
        <ButtonLeft onClick={scrollLeft} className="btn-left">
          <BtnIcon
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#fff"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </BtnIcon>
        </ButtonLeft>

        <ButtonRight onClick={scrollRight} className="btn-right">
          <BtnIcon
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#fff"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </BtnIcon>
        </ButtonRight>
        <Orders>
          <OrderImg src="../public/images/1order.jpg" alt="promo" />
          <div>
            <p>Карамельное яблоко молочный коктейль</p>
            <p>1 800тг.</p>
          </div>
        </Orders>

        <Orders>
          <OrderImg src="../public/images/1order.jpg" alt="promo" />
          <div>
            <p>Карамельное яблоко молочный коктейль</p>
            <p>1 800тг.</p>
          </div>
        </Orders>

        <Orders>
          <OrderImg src="../public/images/1order.jpg" alt="promo" />
          <div>
            <p>Карамельное яблоко молочный коктейль</p>
            <p>1 800тг.</p>
          </div>
        </Orders>

        <Orders>
          <OrderImg src="../public/images/1order.jpg" alt="promo" />
          <div>
            <p>Карамельное яблоко молочный коктейль</p>
            <p>1 800тг.</p>
          </div>
        </Orders>

        <Orders>
          <OrderImg src="../public/images/1order.jpg" alt="promo" />
          <div>
            <p>Карамельное яблоко молочный коктейль</p>
            <p>1 800тг.</p>
          </div>
        </Orders>

        <Orders>
          <OrderImg src="../public/images/1order.jpg" alt="promo" />
          <div>
            <p>Карамельное яблоко молочный коктейль</p>
            <p>1 800тг.</p>
          </div>
        </Orders>
      </HeroOrders>
    </HeroSection>
  );
}

export default Hero;
