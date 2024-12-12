import PropTypes from 'prop-types';

function FooterItem({ changePage, page, name }) {
  return (
    <li className="nav-item">
      <a
        href="#"
        className="nav-link px-2 text-body-secondary"
        onClick={(event) => changePage(event, page)}
      >
        {name}
      </a>
    </li>
  );
}

FooterItem.propTypes = {
  changePage: PropTypes.func.isRequired,
  page: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default FooterItem;
