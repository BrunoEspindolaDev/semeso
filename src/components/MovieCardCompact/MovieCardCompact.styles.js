import styled from 'styled-components';

export const Container = styled.div`
  height: 200px;
  display: flex;
  border-radius: 10px;
  overflow: hidden;
  transition: 0.3s;
  background-image: ${({ src }) => `url(${src})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1));
  padding: 20px;
`;

export const Title = styled.h5`
  font-size: 20px;
  color: #ffff;
  margin-right: 20px;
`;

export const Small = styled.small`
  font-size: 12px;
  color: #ffff;
`;
