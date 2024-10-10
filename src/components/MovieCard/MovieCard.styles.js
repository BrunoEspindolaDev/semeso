import styled from 'styled-components';

export const Container = styled.div`
  height: 380px;
  border-radius: 10px;
  overflow: hidden;
  background-color: #161616;
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: 0.3s;
`;

export const Stack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
`;

export const Title = styled.h5`
  font-size: 18px;
  color: #ffff;
`;

export const Text = styled.span`
  font-size: 13px;
  color: rgba(255, 255, 255, 0.6);
  text-align: justify;
`;

export const Banner = styled.div`
  height: 200px;
  background-image: ${({ src }) => `url(${src})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const BadgeGroup = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 6px;
`;

export const Badge = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  border-radius: 6px;
  border: 1px solid white;
  font-size: 11px;
  color: #ffff;
  white-space: nowrap;
`;
