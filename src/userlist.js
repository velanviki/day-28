import { Link } from "react-router-dom"
import Card from "./card"
import Table from "./table"

function Userlist() {
    return (
        <> <div class="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 class="h3 mb-0 text-gray-800">Userlist</h1>
            <Link to="/usercreate" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                class="fas fa-download fa-sm text-white-50"></i> CreateUser</Link>
        </div>
            {/* <div class="row">
                
            </div> */}
            <Table/>
        </>)
}

export default Userlist