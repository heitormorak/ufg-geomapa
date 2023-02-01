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
		<div style={{backgroundColor: '#eeeeee', display:'flex', justifyContent:'center' ,width: '80%', height:'80%', flexWrap: 'wrap', borderRadius:'20px', opacity : '0.92'}}>
			<div style={{backgroundColor: '',  display:'flex', flexDirection: 'column', alignItems: 'start', width: '20%', margin:'0 10px', justifyContent:'center'}}>
				<Label >Número do Relatório</Label>
				<Input style={styleInput}>aaa</Input>	
			</div>
			<div style={{backgroundColor: '',  display:'flex', flexDirection: 'column', alignItems: 'start', width: '20%', margin:'0 10px', justifyContent:'center'}}>
				<Label >Número do Furo</Label>
				<Input style={styleInput}>aaa</Input>	
			</div>
			<div style={{backgroundColor: '',  display:'flex', flexDirection: 'column', alignItems: 'start', width: '20%', margin:'0 10px', justifyContent:'center'}}>
				<Label >Comprimento do revestimento</Label>
				<Input style={styleInput}>aaa</Input>	
			</div>
			<div style={{backgroundColor: '',  display:'flex', flexDirection: 'column', alignItems: 'start', width: '20%', margin:'0 10px', justifyContent:'center'}}>
				<Label >Limite de Sondagem</Label>
				<Input style={styleInput}>aaa</Input>	
			</div>
			<div style={{backgroundColor: '',  display:'flex', flexDirection: 'column', alignItems: 'start', width: '20%', margin:'0 10px', justifyContent:'center'}}>
				<Label >Profundidade do Fechamento</Label>
				<Input style={styleInput}>aaa</Input>	
			</div>
			<div style={{backgroundColor: '',  display:'flex', flexDirection: 'column', alignItems: 'start', width: '20%', margin:'0 10px', justifyContent:'center'}}>
				<Label >Data da Sondagem</Label>
				<Input style={styleInput}>aaa</Input>	
			</div>
			<div style={{backgroundColor: '',  display:'flex', flexDirection: 'column', alignItems: 'start', width: '20%', margin:'0 10px', justifyContent:'center'}}>
				<Label >Bairro</Label>
				<Input style={styleInput}>aaa</Input>	
			</div>
			<div style={{backgroundColor: '',  display:'flex', flexDirection: 'column', alignItems: 'start', width: '20%', margin:'0 10px', justifyContent:'center'}}>
				<Label >Coordenada X</Label>
				<Input style={styleInput}>aaa</Input>	
				<Label >Coordenada Y</Label>
				<Input style={styleInput}>aaa</Input>	
			</div>

			<div style={{backgroundColor: '',  display:'flex', flexDirection: 'column', alignItems: 'start', width: '20%', margin:'0 10px', justifyContent:'center'}}>
				<Label >Profundidade da Camada 1</Label>
				<Input style={styleInput}>aaa</Input>	
			</div>
			<div style={{backgroundColor: '',  display:'flex', flexDirection: 'column', alignItems: 'start', width: '20%', margin:'0 10px', justifyContent:'center'}}>
				<Label >Tipo de solo Camada 1</Label>
				<Input style={styleInput}>aaa</Input>	
			</div>
			<div style={{backgroundColor: '',  display:'flex', flexDirection: 'column', alignItems: 'start', width: '20%', margin:'0 10px', justifyContent:'center'}}>
				<Label >Complemento Camada 1</Label>
				<Input style={styleInput}>aaa</Input>	
			</div>
			<div style={{backgroundColor: '',  display:'flex', flexDirection: 'column', alignItems: 'start', width: '20%', margin:'0 10px', justifyContent:'center'}}>
				<Label >Início da Lavagem</Label>
				<Input style={styleInput}>aaa</Input>	
			</div>

			<div style={{backgroundColor: '',  display:'flex', flexDirection: 'column', alignItems: 'start', width: '20%', margin:'0 10px', justifyContent:'center'}}>
				<Label >Profundidade da Camada 2</Label>
				<Input style={styleInput}>aaa</Input>	
			</div>
			<div style={{backgroundColor: '',  display:'flex', flexDirection: 'column', alignItems: 'start', width: '20%', margin:'0 10px', justifyContent:'center'}}>
				<Label >Tipo de solo Camada 2</Label>
				<Input style={styleInput}>aaa</Input>	
			</div>
			<div style={{backgroundColor: '',  display:'flex', flexDirection: 'column', alignItems: 'start', width: '20%', margin:'0 10px', justifyContent:'center'}}>
				<Label >Complemento Camada 2</Label>
				<Input style={styleInput}>aaa</Input>	
			</div>
			<div style={{backgroundColor: '',  display:'flex', flexDirection: 'column', alignItems: 'start', width: '20%', margin:'0 10px', justifyContent:'center'}}>
				<Label >Local Referência de Nível</Label>
				<Input style={styleInput}>aaa</Input>	
			</div>

			<div style={{backgroundColor: '',  display:'flex', flexDirection: 'column', alignItems: 'start', width: '20%', margin:'0 10px', justifyContent:'center'}}>
				<Label >Profundidade da Camada 3</Label>
				<Input style={styleInput}>aaa</Input>	
			</div>
			<div style={{backgroundColor: '',  display:'flex', flexDirection: 'column', alignItems: 'start', width: '20%', margin:'0 10px', justifyContent:'center'}}>
				<Label >Tipo de solo Camada 3</Label>
				<Input style={styleInput}>aaa</Input>	
			</div>
			<div style={{backgroundColor: '',  display:'flex', flexDirection: 'column', alignItems: 'start', width: '20%', margin:'0 10px', justifyContent:'center'}}>
				<Label >Complemento Camada 3</Label>
				<Input style={styleInput}>aaa</Input>	
			</div>
			<div style={{backgroundColor: '',  display:'flex', flexDirection: 'column', alignItems: 'start', width: '20%', margin:'0 10px', justifyContent:'center'}}>
				<Label >Cota da Referência de Nível</Label>
				<Input style={styleInput}>aaa</Input>	
			</div>

			<div style={{backgroundColor: '',  display:'flex', flexDirection: 'column', alignItems: 'start', width: '20%', margin:'0 10px', justifyContent:'center'}}>
				<Label >Profundidade da Camada 4</Label>
				<Input style={styleInput}>aaa</Input>	
			</div>
			<div style={{backgroundColor: '',  display:'flex', flexDirection: 'column', alignItems: 'start', width: '20%', margin:'0 10px', justifyContent:'center'}}>
				<Label >Tipo de solo Camada 4</Label>
				<Input style={styleInput}>aaa</Input>	
			</div>
			<div style={{backgroundColor: '',  display:'flex', flexDirection: 'column', alignItems: 'start', width: '20%', margin:'0 10px', justifyContent:'center'}}>
				<Label >Complemento Camada 4</Label>
				<Input style={styleInput}>aaa</Input>	
			</div>
			<div style={{backgroundColor: '',  display:'flex', flexDirection: 'column', alignItems: 'start', width: '20%', margin:'0 10px', justifyContent:'center'}}>
				<Label >Cota da Boca do Furo</Label>
				<Input style={styleInput}>aaa</Input>	
			</div>

			
		
		</div>
		


	
	</div>
)

};

export default Amostra;
