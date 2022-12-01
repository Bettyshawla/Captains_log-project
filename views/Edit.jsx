const React = require("react")
const DefaultLayout = require("./Layouts/Default")

class Edit extends React.Component {
    render() {

        const { log } = this.props
        return (
            <DefaultLayout>
            <div>
                <h1> Edit Captain Log</h1>
              
                <form action={`/logs/${log._id}?_method=PUT`}  method="POST">
                    Title: <input type="text" name="title" value={log.title} />
                    <br />
                    <br />
                    Entry: <input type="textarea" name="entry" value={log.entry} />
                    <br />
                    <br />
                    Ship Is Broken: <input type="checkbox" name="shipIsBroken" value={log.shipIsBroken}/>
                    <br />
                    <br />
                    <input type="Submit" value={` Captain Log Edit`} />
                </form>
            </div>
            </DefaultLayout>
        )
    }
}

module.exports = Edit