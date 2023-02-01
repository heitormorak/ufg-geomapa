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


const styleLabel = { fontWeight: "600",  display: 'contents' }

const Amostra = () => {
return (
	
	<div>
		<>

		<Form style={{  backgroundColor: 'blue',
                            width: '100%',
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',                                                        
                            padding: '10px',
							paddingTop: '40px',
							borderRadius: '15px' }}>
			<Row>
				<Col style={{ display: 'flex'}}>
					<FormGroup>
						<Label style={styleLabel}>Número do Relatório</Label>
						<Input style={{ margin: '10px'
								}}>aaa</Input>

						<Label style={styleLabel}>Número do Furo</Label>
						<Input>aaa</Input>

						<Label  style={styleLabel}>Comprimento do revestimento</Label>
						<Input>aaa</Input>

						<Label  style={styleLabel}>Limite de Sondagem</Label>
						<Input>aaa</Input>

						<Label  style={styleLabel}>Data da Sondagem</Label>
						<Input>aaa</Input>

						<Label  style={styleLabel}>Profundidade do Fechamento</Label>
						<Input>aaa</Input>

						<Label  style={styleLabel}>Início da Lavagem</Label>
						<Input>aaa</Input>

						<Label>Local Referência de Nível</Label>
						<Input>aaa</Input>

						<Label>Cota da boca do furo</Label>
						<Input>aaa</Input>

						<Label>Desnível em relação ao RN</Label>
						<Input>aaa</Input>

						<Label>Profundidade nível d'água</Label>
						<Input>aaa</Input>

						<Label>Data de medição NA1</Label>
						<Input>aaa</Input>

						<Label>Coordenadas Planas</Label>
						<Input>aaa</Input>
						<Input>aaa</Input>

						<Label>Profundidade da camada 1</Label>
						<Input>aaa</Input>

					</FormGroup>
				</Col>
			</Row>
		</Form>		
	</>
	</div>
	
);
};

export default Amostra;
