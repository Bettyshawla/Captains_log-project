const React = require("react")

class New extends React.Component {
    render() {
        return (
            <div>
                <body>

                    <h1> This is the new Captain Log app</h1>
                    <form action="/logs/" method="POST">
                        Title: <input type="text" name="title" />
                        <br />
                        <br />
                        Entry: <input type="textentry" name="entry" />
                        <br />
                        <br />
                        Ship Is Broken: <input type="checkbox" name="shipIsBroken"/>
                        <br />
                        <br />
                        <input type="Submit" value="submit"/>
                    </form>
                </body>
            </div>
        )
    }
}
module.exports = New