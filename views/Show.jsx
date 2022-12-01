const React = require("react");
const DefaultLayout = require("./Layouts/Default");

class Show extends React.Component {
    render() {
        const { title, entry, shipIsBroken, createdAt } = this.props

        return (
            <DefaultLayout>
            <div>
                <a href="/logs/">View All Logs</a>
                <br /><br />

                <h2>{title}</h2>
                <br />
                <br />
                <p>{entry}</p>
                <br />
                <br />
                <p>{shipIsBroken ? "Ship maintenance required" : "The Ship is fine"}</p>
                <br/>

                <a href={`/logs/${this.props.log._id}/edit`}><button type="button">Edit Log</button></a>
            </div>
            </DefaultLayout>
        )
    }
}

module.exports = Show