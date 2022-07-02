import { Container, StyledButton } from './style';

const Button = ({ children, backGroundColor, color, hasBorder, margin, onClickHandle }) => {
  return (
    <Container onClick={onClickHandle} margin={margin} backGroundColor={backGroundColor} color={color} hasBorder={hasBorder}>
      <StyledButton>{children}</StyledButton>
    </Container>
  );
};

export default Button;
