const React = require("react");
const DefaultLayout = require("./Layouts/Default");


class New extends React.Component {
    render() {
        return (
            <DefaultLayout>
                <body>

                    <h1> This is the new Captain Log app</h1>
                    <form action="/logs" method="POST">
                        Title: <input type="text" name="title" />
                        <br />
                        <br />
                        Entry: <input type="textarea" name="entry" />
                        <br />
                        <br />
                        Ship Is Broken: <input type="checkbox" name="shipIsBroken"/>
                        <br />
                        <br />
                        <input type="Submit" value="Create new log"/>
                    </form>
                </body>
            </DefaultLayout>
        )
    }
}
module.exports = New