import { Card } from "react-bootstrap";
// import { BsHeart, BsHeartFill } from 'react-icons/bs';
import { Link } from "react-router-dom";
import Moment from "react-moment";

function ProductCard({ params }) {
  return (
    <Card style={{ borderRadius: "5px" }}>
      <Link to={`/categories/${params.category}/${params._id}/details`}>
        <Card.Img
          variant="top"
          src={params.image}
          style={{ borderRadius: "5px 5px 0px 0px" }}
        />
        <Card.Body>
          <Card.Title style={{ height: "30px" }}>{params.title}</Card.Title>
          <Card.Text style={{ height: "15px", fontSize: "1.1rem" }}>
            {params.price}&#8377;
          </Card.Text>
        </Card.Body>
      </Link>
      <Card.Footer>
        <small className="text-muted">
          <Moment format="d MMM YYYY (dddd) HH:mm">{params.addedAt}</Moment>-{" "}
          <strong>{params.city}</strong>
          {/* <Link to="" id="heartIcon"><BsHeart /></Link> */}
        </small>
      </Card.Footer>
    </Card>
  );
}

export default ProductCard;
