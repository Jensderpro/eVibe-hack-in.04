import React, { useState, useEffect } from "react";
import moment from "moment";
import { connect } from "react-redux";
import Link from "react-router-dom/Link";
import { setLikeEvent, setUnLikeEvent } from "../actions/events";
import { setCheckLikeEvent } from "../actions/user";
import { startRegisterEvent, startUnRegisterEvent } from "../actions/events";
// import Comments from './Comments'
import {
  faHeart,
  faCalendarAlt,
  faClock,
  faEdit,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import convertLayerAtRulesToControlComments from "tailwindcss/lib/lib/convertLayerAtRulesToControlComments";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
export const EventCard = (props) => {
  // const [likeCount, setLikeCount] = useState(props.event.likeCount);
  // const [checkLike, setCheckLike] = useState(props.checkLike);
  // const [checkRegister, setRegister] = useState(props.event.members.hasOwnProperty(props.userHandle));

  // const id = props.match.params.id;

  // useEffect(() => {
  //     props.checkLikeEvent(id).then(data => {
  //         setCheckLike(data)
  //     });

  // }, [])

  // useEffect(() => {
  //     setRegister(props.event.members.hasOwnProperty(props.userHandle));
  // }, [checkRegister])

  // const onClickLike = () => {
  //     props.likeEvent(id).then(() => {
  //         setLikeCount(likeCount + 1);
  //         setCheckLike(true)
  //     });
  // };

  // const onClickUnLike = () => {
  //     props.unLikeEvent(id).then(() => {
  //         setLikeCount(likeCount - 1);
  //         setCheckLike(false)
  //     });
  // };

  // const startRegisterEvent = () => {
  //     props.registerEvent(id);
  // }
  // const startUnRegisterEvent = () => {
  //     props.unRegisterEvent(id);
  // }

  return (
    <Card style={{width: "18rem",}}>
      <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
      <Card.Body>
        <Card.Title> Card Title </Card.Title>{" "}
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card 's content.{" "}
        </Card.Text>{" "}
      </Card.Body>{" "}
      <ListGroup className="list-group-flush">
        <ListGroupItem> Cras justo odio </ListGroupItem>{" "}
        <ListGroupItem> Dapibus ac facilisis in </ListGroupItem>{" "}
        <ListGroupItem> Vestibulum at eros </ListGroupItem>{" "}
      </ListGroup>{" "}
      <Card.Body>
        <Card.Link href="#"> Card Link </Card.Link>{" "}
        <Card.Link href="#"> Another Link </Card.Link>{" "}
      </Card.Body>{" "}
    </Card>
    // <div className="content-container event-card">
    //   <h2 className="event-card__title">{"Event Name"}</h2>
    //   <div className="event-card__by">
    //     <div className="event-card__by-name">
    //       <img src={require("assets/img/pattern_react.png").default} alt="" />{" "}
    //     </div>
    //     <div className="event-card__by-like">
    //       {(
    //         <button title="like?" className="btn-primary">
    //           <FontAwesomeIcon icon={faHeart} /> {"80"}
    //         </button>
    //       )}
    //     </div>
    //   </div>
    //   <div className="event-card__image">
    //     < img src = {
    //         require("assets/img/pattern_react.png").default
    //     }
    //     alt = "" / >
    //   </div>
    //   <div className="event-card__description">
    //     <p>{"convertLayerAtRulesToControlComments"}</p>
    //   </div>
    //   <div className="event-card__others">
    //     <div>
    //       <p>venue: {"Alger centre la grande poste"}</p>
    //       <p>fee: {"01:00 PM"}</p>
    //     </div>
    //   </div>
    //   <div className="event-card__register">
    //     {(
    //       <button
    //         className="btn-secondary button-register"
    //       >
    //         Register
    //       </button>
    //     )}
    //     {"User " && (
    //       <button className="btn-secondary button-join">join group chat</button>
    //     )}
    //     {}
    //   </div>
    // </div>
  );
};
export default EventCard;
