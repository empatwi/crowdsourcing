import { Avatar } from '@material-ui/core';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { avatarSize, avatarMinSize } from '../../constants';
import { colors } from '../../utils/theme';
import TouchableIconComponent from '../TouchableIcon';
import { CardContainer } from './container.js';

const propTypes = {
  info: PropTypes.shape({
    desc: PropTypes.string,
    image: PropTypes.string,
    links: PropTypes.array,
    name: PropTypes.string,
  }).isRequired,
};

const defaultProps = {};

const style = {
  icon: {
    fontSize: '2.0rem',
    hover: {
      color: colors.green,
      transition: 'all 0.3s ease-in',
    },
  },
};

const ContactCard = ({ info }) => {
  const { desc = '', image = '', links = '', name = '' } = info || '';

  return (
    <CardContainer>
      <Avatar
        alt={name}
        src={image}
        style={{
          height: avatarSize,
          minHeight: avatarMinSize,
          minWidth: avatarMinSize,
          width: avatarSize,
        }}
      />
      <Name>{name}</Name>
      <Description>{desc}</Description>
      <LinksContainer>
        {links.map(link => (
          <Hover key={link?.url}>
            <TouchableIconComponent
              icon={link?.icon}
              onPress={() => {
                window.open(link?.url);
              }}
              style={style.icon}
            />
          </Hover>
        ))}
      </LinksContainer>
    </CardContainer>
  );
};

ContactCard.propTypes = propTypes;
ContactCard.defaultProps = defaultProps;

export default ContactCard;

const Name = styled.p`
  color: ${colors.darkGray};
  font-size: 1.4rem;
  font-weight: bold;
  margin: 0;
  padding: 1rem 0 0 0;
  text-align: center;
  &:hover {
    color: ${colors.green};
    transition: all 0.3s ease-in;
  }
`;

const Description = styled(Name)`
  font-size: 1.1em;
  font-weight: normal;
  padding: 0.5rem 0 1rem 0;
  &:hover {
    color: ${colors.green};
    transition: all 0.3s ease-in;
  }
`;

const LinksContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 50%;
`;

const Hover = styled.div`
  &:hover {
    color: ${colors.green};
    transition: all 0.3s ease-in;
  }
`;
