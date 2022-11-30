const React = require("react")
const DefaultLayout = require("./layout/Default")

class Index extends React.Component {
    render() {
        const { logs } = this.props
        return (
            <DefaultLayout title="Captain's Log Index Page">
                <head>
                    <title>Index Page</title>
                </head>
                <nav>
                    <a href="/logs/new">Create Logs</a>
                </nav>
            
                <ul>
                    {
                        logs.map((log, i) => {
                            return (
                                <li>


                                    <a href={`/logs/${log._id}`}>{log.title}</a><br />
                                    <form action={`/logs/${log._id}?_method=DELETE`} method="POST">
                                        <input type="submit" value="DELETE" />
                                        <button><a href={`/logs/${log._id}/edit`}>EDIT THIS LOG</a></button>
                                    </form>

                                </li>
                            )
                        })
                    }
                </ul>

            </DefaultLayout>

        )
    }
}

module.exports = Index