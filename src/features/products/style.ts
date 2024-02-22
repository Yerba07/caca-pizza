import styled from "styled-components";

export const ProductList = styled.div`
  font-size: 2rem;
  margin: 2rem 0;
  font-weight: 600;
`;

export const Img = styled.img`
  height: 12.5rem;
  /* width: 100%; */
`;

export const PizzaItem = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 25px;
  row-gap: 60px;
  margin-top: 2rem;
`;

export const PizzaDescription = styled.div`
  h2 {
    font-size: 1.2rem;
    font-weight: 500;
  }
  .desc-text {
    font-size: 0.8rem;
    font-weight: 400;
    color: #868e96;
    margin: 10px 0;
  }
  span {
    font-size: 0.9rem;
    font-weight: 600;
  }
`;

export const DescText = styled.div`
  height: 100px;
  padding: 0;
`;

export const Price = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  button {
    background-color: #fff4e6;
    color: #f76707;
    border: none;
    font-size: 1rem;
    font-weight: 600;
    border-radius: 50px;
    padding: 0.6rem 1.2rem;
    transition: all 0.3s ease;
    cursor: pointer;
    &:hover {
      background-color: #ffd8a8;
    }
  }
`;

export const Button = styled.button`
  width: 0.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PlusMinus = styled.div`
  display: flex;
  width: 50%;
  height: 100%;
  align-items: center;
  justify-content: space-between;
`;
