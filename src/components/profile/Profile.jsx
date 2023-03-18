import Info from "./Info";
import MenuItem from './MenuItem';
import "./Profile.css"
import PropTypes from "prop-types";


const Profile = ({ username, tag, location, avatar, stats }) => {
    return (
      <div className="profile">
        <div className="description">
          <Info avatar={avatar} username={username} tag={tag} location={location} />
        </div>
  
        <ul className="stats">
          <MenuItem stats={stats} />
       </ul>
      </div>
    );
  };

  Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }).isRequired,
  };

  export default Profile;