import PropertiesList from "../components/PropertiesList";
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";

const Properties = () => {
	return (<div className={"main"}>
			<Container>
				<Row>
					<Col>
						<PropertiesList/>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Properties;
