import PropTypes from 'prop-types';
import Image from './Image';
import Container from './Container';

function DoctorItem({ img, name, specialty, experience, description }) {
  return (
    <Container className="col-md-3 mb-5">
      <Container className="card text-center">
        <Image src={img} className="card-img-top" alt="..." />

        <Container className="card-body">
          <h3 className="card-title">{name}</h3>
          <h5>{specialty}</h5>
          <p className="card-text">
            {description}
            <br />
            <strong>Experiencia:</strong> {experience} años
          </p>
        </Container>
      </Container>
    </Container>
  );
}

DoctorItem.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  specialty: PropTypes.string.isRequired,
  experience: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
};

export default DoctorItem;
