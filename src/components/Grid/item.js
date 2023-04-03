const Item = (props) => {
    return <>
        <tr>
            <td>{props?.id}</td>
            <td>{props?.name}</td>
            <td>{props?.gender}</td>
            <td>{props?.status}</td>
            <td>{props?.origin || "unknown"}</td>
        </tr>
    </>
}

export default Item