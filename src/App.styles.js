import styled from 'styled-components';

export const Main = styled.main`
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #000000;
  overflow: hidden;
`;

export const Container = styled.main`
  flex: 1;
  gap: 30px;
  display: flex;
  width: 100%;
  max-width: 1200px;
  align-self: center;
  overflow: hidden;
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const LoadMore = styled.div`
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const LoadMoreButton = styled.button`
  height: 40px;
  border-radius: 6px;
  border: 1px solid rgba(255, 255, 255, 0.7);
  padding: 0px 20px;
  background-color: transparent;
  color: #ffff;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;
