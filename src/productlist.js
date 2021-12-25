import { Link } from "react-router-dom"
import Table from "./table"

function Productlist() {
    return (
        <><div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">ProductList</h1>
        <Link class="nav-link" to="/productcreate" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
                <i class="fas fa-download fa-sm text-white-50"></i>
                <span>CreateProduct</span></Link>






        </div>
        <div class="card shadow mb-4">
                        <div class="card-header py-3">
                            <h6 class="m-0 font-weight-bold text-primary">Product Details</h6>
                        </div>
                        <div class="card-body">
                            <div class="table-responsive">
                                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="10">
                                    <thead>
                                        <tr>
                                            <th>ProductName</th>
                                            <th>ProductPrice</th>
                                            <th>options</th>
                                            
                                            
                                        </tr>
                                    </thead>
                                    <tfoot>
                                        <tr>
                                            <th>ProductName</th>
                                            <th>ProductPrice</th>
                                           
                                            
                                        </tr>
                                    </tfoot>
                                    <tbody>
                                        <tr>
                                            <td>Bike</td>
                                            <td>$10000</td>
                                            
                                           
                                            <td>
                                                <button className="btn btn-primary btn-sm">Edit</button>
                                                <button className="btn btn-danger btn-sm">Delete</button>
                                            </td>
                                        </tr>
                                        
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

        </>)
}

export default Productlist