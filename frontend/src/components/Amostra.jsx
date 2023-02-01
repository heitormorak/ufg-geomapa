import React from 'react';
import {
    Row,
    Col,
    Label,
    FormGroup,
    Input,
    Button as ButtonCartao
} from "reactstrap";
import { TreeSelect, Tooltip, Upload, Alert, Button, Select, Table, Tag, DatePicker, Spin, Form, Switch, Radio, Skeleton } from 'antd';


const styleLabel = { fontWeight: "bold",  display: 'contents' , backgroundColor: 'blue'}
const styleInput = { backgroundColor: '' }
const styleFormGroup = { display: 'contents' }



const Amostra = () => {

return (
	<div style={{backgroundColor: '', display:'flex', justifyContent:'center' ,width: '100%', height:'100vh', flexWrap: 'wrap', alignItems:'center'}}>
		<div style={{backgroundColor: 'grey', display:'flex', justifyContent:'center' ,width: '80%', height:'80%', flexWrap: 'wrap'}}>
			<div style={{backgroundColor: '',  display:'flex', flexDirection: 'column', alignItems: 'start', width: '20%', margin:'0 10px'}}>
				<Label >Número do Relatório</Label>
				<Input style={styleInput}>aaa</Input>	
			</div>
			<div style={{backgroundColor: '',  display:'flex', flexDirection: 'column', alignItems: 'start', width: '20%', margin:'0 10px'}}>
				<Label >Número do Furo</Label>
				<Input style={styleInput}>aaa</Input>	
			</div>
			<div style={{backgroundColor: '',  display:'flex', flexDirection: 'column', alignItems: 'start', width: '20%', margin:'0 10px'}}>
				<Label >Comprimento do revestimento</Label>
				<Input style={styleInput}>aaa</Input>	
			</div>
		
		</div>
		


	
	</div>
)

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
							borderRadius: '15px',
							justifyContent: 'center' }}>
			<Row>
				<Col style={{ display: 'flex', backgroundColor: 'red', width:'35%'}}>
					<FormGroup style={{ display: 'flex'}}>						
						<Label style={styleLabel}>Número do Relatório</Label>
						<Input style={styleInput}>aaa</Input>	

						<Label style={styleLabel}>Número do Furo</Label>
						<Input style={styleInput}>aaa</Input>
					</FormGroup>
				</Col>	

				<Col style={{ display: 'flex', backgroundColor: 'red', width:'35%'}}>
					<FormGroup>
						
						
						<Label  style={styleLabel}>Comprimento do revestimento</Label>
						<Input style={styleInput}>aaa</Input>
					</FormGroup>						
				</Col>
			</Row>	

			<Row>
				<Col>
					<FormGroup>
				
						<Label  style={styleLabel}>Limite de Sondagem</Label>
						<Input style={styleInput}>aaa</Input>
						
						<Label  style={styleLabel}>Data da Sondagem</Label>
						<Input style={styleInput}>aaa</Input>
						<Label  style={styleLabel}>Profundidade do Fechamento</Label>
						<Input>aaa</Input>

						<Label  style={styleLabel}>Início da Lavagem</Label>
						<Input>aaa</Input>

					</FormGroup>
				</Col>
			</Row>		
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

					
		</Form>		
	</>
	</div>
	
);
};

export default Amostra;
