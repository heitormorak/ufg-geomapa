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
		<div style={{backgroundColor: '#eeeeee', display:'flex', justifyContent:'center' ,width: '80%', height:'80%', flexWrap: 'wrap', borderRadius:'20px', opacity : '0.98'}}>
			<div>
				<Label style={{backgroundColor: 'green',  display:'flex', flexDirection: 'row', alignItems: 'center', width: '100%', margin:'20px 0 0 200px', justifyContent:'center'}}>
					Cadastro de amostras
				</Label>
			</div>
			<div style={{backgroundColor: '',  display:'flex', flexDirection: 'column', alignItems: 'start', width: '40%', margin:'0 10px' , justifyContent:'center'}}>
				<Label >Número do Relatório</Label>
				<Input style={styleInput}>aaa</Input>	
			</div>
			<div style={{backgroundColor: '',  display:'flex', flexDirection: 'column', alignItems: 'start', width: '40%', margin:'0 10px', justifyContent:'center'}}>
				<Label >Número do Furo</Label>
				<Input style={styleInput}>aaa</Input>	
			</div>
			<div style={{backgroundColor: '',  display:'flex', flexDirection: 'column', alignItems: 'start', width: '40%', margin:'0 10px', justifyContent:'center'}}>
				<Label >Coordenada X</Label>
				<Input style={styleInput}>aaa</Input>	
			</div>			
			<div style={{backgroundColor: '',  display:'flex', flexDirection: 'column', alignItems: 'start', width: '40%', margin:'0 10px', justifyContent:'center'}}>
				<Label >Coordenada Y</Label>
				<Input style={styleInput}>aaa</Input>	
			</div>
			<div style={{backgroundColor: '',  display:'flex', flexDirection: 'column', alignItems: 'start', width: '40%', margin:'0 10px', justifyContent:'center'}}>
				<Label >Nspt 1o+2o - última amostra</Label>
				<Input style={styleInput}>aaa</Input>	
			</div>
			<div style={{backgroundColor: '',  display:'flex', flexDirection: 'column', alignItems: 'start', width: '40%', margin:'0 10px', justifyContent:'center'}}>
				<Label >Nspt 2o+3o - última amostra</Label>
				<Input style={styleInput}>aaa</Input>	
			</div>
			
		
		</div>
		


	
	</div>
)

};

export default Amostra;
