import React from "react";
import API from "../utils/API";

export default class SavedBooks extends React.Component {
    state = {
        results: [],
        books: [],
        search: ""
    }

    // When this component mounts, load all saved books    
    componentDidMount() {
        API.getBooks()
            .then(res => {
                this.setState({ books: res.data })
            })
    }

    render() {
        return (
            <div className="text-center" >
                <div>{this.state.books.map(result => {
                    return <div style={{ marginTop: "10px", border: "solid", width: "250px" }}>
                        <div className="addBookBtn"><strong>Title: </strong>{result.title}</div>
                        <div><strong>Author: </strong>{result.author}</div>
                        <div><strong>Year Published: </strong>{result.year}</div>
                        <div><strong>ID: </strong>{result.id}</div>
                    </div>
                })}</div>
            </div>
        )
    }
}
