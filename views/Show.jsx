const React = require("react");
const DefaultLayout = require("./Layouts/Default");


class Show extends React.Component {
    render() {
        // const { title, entry, shipIsBroken, createdAt } = this.props
        const { log } = this.props

        return (
            <DefaultLayout>
            <div>
                <a href="/logs/">View All Logs</a>
                <br /><br />

                <h2>{log.title}</h2>
                <br />
                <br />
                <p>{log.entry}</p>
                <br />
                <br />
                <p>{log.shipIsBroken ? "Ship maintenance required ASAP" : "The Ship is fine"}</p>
                <br/>

                <a href={`/logs/${this.props.log._id}/edit`}><button type="button">Edit Log</button></a>
            </div>
            </DefaultLayout>
        )
    }

}

module.exports = Show