import { useSelector } from 'react-redux';
import { Row, Col } from 'reactstrap';
import CampsiteCard from "./CampsiteCard";
import { selectAllCampsites } from './campsitesSlice';
//import {Error} from './Error';
//import {Loading} from './loading';

const CampsitesList = () => {
    /*const isLoading = useSelector((state) => state.campsites.isLoading);
    if (isLoading) {
        return (
            <Row>
                <Loading />
            </Row>
        );
    }

    const errMsg = useSelector((state) => state.campsites.errMsg);
    if (errMsg) {
        return (
            <Row>
                <Error errMsg={errMsg} />
            </Row>
        );
    } */


    const campsites = useSelector(selectAllCampsites);
    console.log('campsites:', campsites);
    return (
        <Row className='ms-auto'>
            {campsites.map((campsite) => {
                return (
                    <Col md='5' className='m-4' key={campsite.id}>
                        <CampsiteCard campsite={campsite} />
                    </Col>
                );
            })}
        </Row>
    );
};
export default CampsitesList;