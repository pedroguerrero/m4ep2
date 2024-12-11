import Image from './Image';
import Container from './Container';

// eslint-disable-next-line react/prop-types
export default function ServiceItem({ name, description, img }) {
  return (
    <Container className="col-md-4 mb-5">
      <Container className="card text-center">
        <Image src={img} className="card-img-top" alt="" />

        <Container className="card-body">
          <h3 className="card-title">{name}</h3>
          <p className="card-text">{description}</p>
        </Container>
      </Container>
    </Container>
  );
}
