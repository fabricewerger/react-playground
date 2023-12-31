// function ProfileCard(props) {
function ProfileCard({ title, handle, image, description }) {
  //   const title = props.title;
  //   const handle = props.handle;

  //   const { title, handle } = props;

  return (
    <div className="card">
      <div className="card-image">
        <div className="image is-1by1">
          <img src={image} alt="pda logo" />
        </div>
      </div>
      <div className="card-content">
        <div className="media-content">
          <p className="title is-4">{title}</p>
          <p className="subtitle is-6">{handle}</p>
          <p className="content">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
