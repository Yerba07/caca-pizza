import styled from "styled-components";

export const HeroSection = styled.div`
  position: relative;
  p {
    font-size: 1.4rem;
    margin: 1rem 0;
    font-weight: 500;
  }
`;

export const HeroPromoImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HeroOrders = styled.div`
  transition: all 0.3s ease;
  margin: 1rem 0;
  display: flex;
  overflow: hidden;
  &:hover {
    .btn-right,
    .btn-left {
      opacity: 100%;
    }
  }
`;

export const Orders = styled.div`
  background: rgb(255, 255, 255);
  transition: box-shadow 150ms ease-out 0s;
  box-shadow: rgba(6, 5, 50, 0.15) 0px 4px 22px -6px;
  border-radius: 12px;
  display: flex;
  flex: 0 0 auto;
  cursor: pointer;
  width: 260px;
  height: 100px;
  padding: 16px;
  margin-right: 24px;
  align-items: center;
  column-gap: 1.6rem;
  p {
    font-size: 0.8rem;
  }
`;

export const OrderImg = styled.img`
  height: 4rem;
`;

export const ButtonLeft = styled.button`
  position: absolute;
  top: 85%;
  left: 0px;
  border: none;
  background: black;
  border-radius: 50%;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 50%;
  cursor: pointer;
  transition: all 0.7s ease;
  opacity: 0;
`;
export const ButtonRight = styled.button`
  position: absolute;
  border: none;
  top: 85%;
  right: 40px;
  background: black;
  border-radius: 50%;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 50%;
  cursor: pointer;
  transition: all 0.7s ease;
  opacity: 0;
`;

export const BtnIcon = styled.svg`
  height: 1.4rem;
`;
