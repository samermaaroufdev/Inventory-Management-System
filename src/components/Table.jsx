const Table = ({image,pid,pname,quantity,supplier,date})=>{
    return (
        <>
        <div className="container text-center">
        <div className="row">
            <div className="col-12">
                <img src={image} style={{width:"30%"}}/>
            </div>
        </div>
        <div className="row justify-content-center">
        <div className="col-lg-10 table-container">
            <h2 className="mb-4">Product Details</h2>
            <div className="table-responsive">
                <table className="table table-striped table-hover table-bordered align-middle">
                    <thead className="table-dark">
                        <tr>
                            <th>Product ID</th>
                            <th>Name</th>
                            <th>Quantity</th>
                            <th>Supplier</th>
                            <th>Date of Last Received</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{pid}</td>
                            <td>{pname}</td>
                            <td>{quantity}</td>
                            <td>{supplier}</td>
                            <td>{date}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    </div>
        </>
    )
}

export default Table;