import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px 0px 10px;
`;

export const Title = styled.h1`
  font-size: 24px;
  color: #ffff;
`;

export const Body = styled.div`
  gap: 10px;
  display: flex;
  flex-direction: column;
  padding: 1px 1px 15px;
`;

export const Toggle = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;

  svg {
    width: 24px;
    height: 24px;
    color: #ffff;
  }
`;

export const SearchInput = styled.input`
  height: 50px;
  background-color: #161616;
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 6px;
  padding: 0px 20px;
  font-size: 14px;
  color: #ffff;
`;

export const Small = styled.small`
  font-size: 12px;
  color: rgba(255, 255, 255, 0.7);
`;
