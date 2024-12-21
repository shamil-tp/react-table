export default Table = (person)=>{
    return <>
    <div className="container">
        <div className="row">
            <div className="col-10 offset-1">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">{props.data.id}</th>
                            <td>{porps.data.first}</td>
                            <td>{props.data.last}</td>
                            <td>{props.data.handle}</td>
                        </tr>
                        <tr>
                            <th scope="row">{props.data.id}</th>
                            <td>{porps.data.first}</td>
                            <td>{props.data.last}</td>
                            <td>{props.data.handle}</td>
                        </tr>
                        <tr>
                            <th scope="row">{props.data.id}</th>
                            <td>{porps.data.first}</td>
                            <td>{props.data.last}</td>
                            <td>{props.data.handle}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

    </div>
    </>
}