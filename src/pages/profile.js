import {useParams} from "react-router-dom";

const Profile = () => {

    const params = useParams();
    return <>Hey this is profile of user id {params?.id}</>
}

export default Profile