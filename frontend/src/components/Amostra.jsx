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
	<div style={{backgroundColor: '', display:'flex', justifyContent:'center' ,width: '100%', height:'80vh', flexWrap: 'wrap', alignItems:'center'}}>
		<div style={{backgroundColor: '#eeeeee', display:'flex', justifyContent:'center' ,width: '80%', height:'80%', flexWrap: 'wrap', borderRadius:'20px', opacity : '0.98'}}>
			<div style={{backgroundColor: '', display:'flex', width: '100%', height:'20%', alignItems:'center', justifyContent:'center'}}>
				<Label style={{backgroundColor: 'green'}}>
					Cadastro de amostras
				</Label>
			</div>

			<div style={{backgroundColor: '', display:'flex', width: '100%', height:'60%'}}>
				<div style={{backgroundColor: '', display:'flex',  flexDirection: 'column', alignItems: 'center', justifyContent:'center', width: '100%', height:'100%'}}>
					<div style={{backgroundColor: '', display:'flex',  flexDirection: 'column', height:'50px', width:'500px', margin:'30px 0'}}>
						<Label style={{ textAlign:'start', marginBottom: '10px' }}>Número do Relatório</Label>
						<Input style= {{width: '100%',  padding: '10px', border: 'none', marginBottom: '10px', borderRadius: '5px'}}>aaa</Input>						
					</div>
					
					<div style={{backgroundColor: 'gray', display:'flex',  flexDirection: 'column', height:'50px', margin:'30px 0'}}>
						<Label >Número do Furo</Label>
						<Input style={styleInput}>aaa</Input>	
					</div>
					<div style={{backgroundColor: 'gray', display:'flex',  flexDirection: 'column', height:'50px', margin:'30px 0'}}>
						<Label >Coordenada X</Label>
						<Input style={styleInput}>aaa</Input>	
					</div>
				</div>

				<div style={{backgroundColor: '', display:'flex',  flexDirection: 'column', alignItems: 'center', justifyContent:'center', width: '100%'}}>
					<div style={{backgroundColor: 'gray', display:'flex',  flexDirection: 'column', height:'50px'}}>
						<Label >Coordenada Y</Label>
						<Input style={styleInput}>aaa</Input>	
					</div>
					<div style={{backgroundColor: 'gray', display:'flex',  flexDirection: 'column', height:'50px'}}>
						<Label >Nspt 1o+2o - última amostra</Label>
						<Input style={styleInput}>aaa</Input>	
					</div>
					<div style={{backgroundColor: 'gray', display:'flex',  flexDirection: 'column', height:'50px'}}>
						<Label >Nspt 2o+3o - última amostra</Label>
						<Input style={styleInput}>aaa</Input>	
					</div>
				</div>
							
			
			</div>

			
		
		</div>
		


	
	</div>
)

};

export default Amostra;
