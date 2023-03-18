import PropTypes from "prop-types";

function MenuItem({ stats }){
    return(
        <>
        <li>
          <span className="label">Followers</span><br/>
          <span className="quantity">{stats.followers}</span>
        </li>
        <li>
          <span className="label">Views</span><br/>
          <span className="quantity">{stats.views}</span>
        </li>
        <li>
          <span className="label">Likes</span><br/>
          <span className="quantity">{stats.likes}</span>
        </li>
        </>
    )
}

MenuItem.propTypes = {
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};

export default MenuItem;