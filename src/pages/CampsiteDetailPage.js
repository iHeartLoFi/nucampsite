import {useSelector} from 'react-redux';
import { Container, Row } from 'reactstrap';
import { useParams } from 'react-router-dom';
import { selectCampsiteById } from '../features/campsites/campsitesSlice';
import CampsiteDetail from '../features/campsites/CampsiteDetail';
import CommentsList from '../features/comments/CommentsList';
import SubHeader from '../components/SubHeader';
//import {Error} from '../components/Error';
//import {Loading} from '../components/Loading';

const CampsiteDetailPage = () =>{
    const { campsiteId } = useParams();
    const campsite = useSelector(selectCampsiteById(campsiteId));
    console.log('campsite:', campsite);
                           //FROM FETCH AND CREATE SYNC EXERCISE.
    /*const isLoading = useSelector((state) => state.campsites.isLoading);
    const errMsg = useSelector((state) => state.campsites.errMsg);
    let content = null;

    if (isLoading) {
        content = <Loading />;
    } else if (errMsg) {
        content = <Error errMsg={errMsg} />;
    } else {
        content = (
            <>
                <CampsiteDetail campsite={campsite} />
                <CommentsList campsiteId={campsiteId} />
            </>
        );
    }


     MOVE THE LINE BELOW TO REPLACE THE <SubHeader> ON OR AROUND LINE 44.
    {campsite && <SubHeader current={campsite.name} detail={true} />}

    MOVE THE LINE BELOW TO REPLACE THE <Row> ON OR AROUND LINES 45-47.
    <Row> {content}</Row>
    */

    return (
        <Container>
            <SubHeader current={campsite.name} detail={true} />
            <Row>
                <CampsiteDetail campsite={campsite} />
                <CommentsList campsiteId={campsiteId} />
            </Row>
        </Container>
        );
};

export default CampsiteDetailPage;

