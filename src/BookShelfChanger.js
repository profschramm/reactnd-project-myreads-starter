import React, {Component} from 'react'
import PropTypes from 'prop-types'

class BookShelfChanger extends Component {

    static propTypes = {
        shelf: PropTypes.string.isRequired,
        handleMoveShelf: PropTypes.func.isRequired 
    }

    isShelfDisabled (shelf) {
        return shelf === "none" || shelf === this.props.shelf;
    };
   
    render () {

        /* Advice on select https://reactjs.org/docs/forms.html */
        return (
            <select value="move" onChange={this.props.handleMoveShelf}>
                <option value="move" disabled>Move to...</option>
                <option value="none">None</option>
                <option value="read"
                    disabled={this.isShelfDisabled("read")}
                >Read</option>
                <option value="currentlyReading"
                    disabled={this.isShelfDisabled("currentlyReading")}
                >Currently Reading</option>
                <option value="wantToRead"
                    disabled={this.isShelfDisabled("wantToRead")}
                >Want to Read</option>


            </select>
        )
    }
}

export default BookShelfChanger
