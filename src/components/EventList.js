import React from 'react';
import {connect} from 'react-redux';
import EventListItem from './EventListItem';
import selectEvents from '../selectors/events'

export const EventList = (props) => (
    <div className="list">
        {<p>No blogs</p>}
    </div>
)
const mapStateToProps = (state) => ({
    events: selectEvents(state.events, state.filters),
    // userImage: state.user.user ? state.auth.user.imageUrl: ''
});

export default EventList;
// export default connect(mapStateToProps)(EventList);