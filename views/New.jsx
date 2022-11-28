const React = require("react")

class New extends React.Component {
    render() {
        return (
            <div>
                <h1> This is the new Captain Log app</h1>
                <form action="/logs" method="POST">
                    Title: <input type="text" />
                    <br />
                    <br />
                    Entry: <input type="text" />
                    <br />
                    <br />
                    Ship Is Broken <input type="checkbox" />
                    <br />
                    <br />
                    <input type="Submit" />
                </form>
            </div>
        )
    }
}
module.exports = New