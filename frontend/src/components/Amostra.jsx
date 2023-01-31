import React from 'react';
import {
    ModalHeader,
    ModalBody,
    ModalFooter,
    Row,
    Col,
    Label,
    FormGroup,
    Collapse,
    FormFeedback,
    Modal,
    Input,
    Button as ButtonCartao
} from "reactstrap";
import { TreeSelect, Tooltip, Upload, Alert, Button, Select, Table, Tag, DatePicker, Spin, Form, Switch, Radio, Skeleton } from 'antd';


const styleLabel = { fontWeight: "600" }
const inputObrigatorio = <i style={{color: "red", fontWight: "Bold"}}> *</i>

const Amostra = () => {
return (
	<div>
		<>

		<Form>
		<Row>
		<Col md='8'>
		<FormGroup>
		<Label>aaa</Label>
		<Input>aaa</Input>
		</FormGroup>
		</Col>
		</Row>
		</Form>
		

		<Label>aaa</Label>
		<Input>aaa</Input>

		<Label>aaa</Label>
		<Input>aaa</Input>

		<Label>aaa</Label>
		<Input>aaa</Input>

		<Label>aaa</Label>
		<Input>aaa</Input>
	</>
	</div>
	
);
};

export default Amostra;
