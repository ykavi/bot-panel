import Image from 'next/image';
import { Container } from './style';

const NImage = ({ src, alt, hasBorder }) => {
  return (
    <Container hasBorder={hasBorder}>
      <Image src={src} alt={alt} width="100%" height="100%" layout="responsive" objectFit="contain" />
    </Container>
  );
};

export default NImage;
