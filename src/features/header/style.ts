import styled from "styled-components";

//Header Styles

export const Navbar = styled.header`
  margin: 1rem 0;
`;

export const MainNav = styled.div`
  display: flex;
  justify-content: space-between;
  width: 500px;
  gap: 0.8rem;

  h1 {
    font-size: 1.8rem;
    text-transform: uppercase;
    font-weight: 700;
  }
  p {
    font-size: 0.8rem;
  }
  .delivery-text {
    p {
      padding-top: 6px;
      font-size: 1rem;
      line-height: 1rem;
    }
    .time-text {
      font-size: 0.9rem;
    }

    span {
      color: orangered;
    }
  }
`;

export const Logo = styled.img`
  height: 3rem;
`;

export const Icons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 300px;
  text-align: center;
  position: relative;
  p {
    font-weight: 600;
    font-size: 0.9rem;
  }
  .coin-quantity {
    position: absolute;
    border-radius: 8px;
    background-color: #7950f2;
    color: white;
    font-size: 0.7rem;
    letter-spacing: -0.05rem;
    padding: 0 6px;
    transform: translateX(-25%);
    top: -4px;
    /* display: flex;
    align-items: center;
    justify-content: center; */
  }
`;

export const Icon = styled.svg`
  height: 1.4rem;
`;

export const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

// Bar Styles

export const NavigationBar = styled.div`
  margin-top: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavText = styled.div`
  width: 700px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.8rem;
  font-weight: 600;
`;
export const NavButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fd7e14;
  color: white;
  width: 150px;
  border: none;
  padding: 8px 16px;
  font-size: 1.1rem;
  font-weight: 500;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.75s ease;
  &:hover {
    background-color: #e8590c;
  }
  div {
    background-color: white;
    width: 0.1px;
    height: 24px;
  }
  svg {
    height: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
