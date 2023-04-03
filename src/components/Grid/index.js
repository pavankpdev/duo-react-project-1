import Item from "./item";

const Grid = () => {
    return <>
        <table border={5}>
            <thead>
                 <tr>
                     <th>ID</th>
                     <th>Name</th>
                     <th>Gender</th>
                     <th>Status</th>
                     <th>Origin</th>
                 </tr>
            </thead>
            <tbody>
                <Item
                    id={1}
                    name={"Pavan"}
                    gender={"Pavan"}
                    status={"Pavan"}
                />
            </tbody>
        </table>
    </>
}

export default Grid