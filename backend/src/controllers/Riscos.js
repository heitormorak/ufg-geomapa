import { Risco } from '../models/riscosModel.js'

export async function GetRiscos (req, res) {
     try{
        const riscos = await Risco.findAll({
            attributes: ['coox', 'cooy', 'num_pessoa', 'grau_risco']
        });
        res.json(riscos)
     }catch (error) {
        console.error(error)
    }
}

export async function EnrollRisco (req,res) {
    const { num_rel, cooX, cooY, num_morad, num_pessoa, grau_risco, descricao, grau_vulne } = req.body;
    
    try {

        await Risco.create({
            num_rel: num_rel,
            cooX: cooX,
            cooY: cooY,
            num_morad: num_morad,
            nspt2 : nspt2,
            num_pessoa: num_pessoa,
            grau_risco: grau_risco,
            descricao: descricao,
            grau_vulne: grau_vulne
        });
        res.json({msg: "Registration Successful"});
    } catch (error){
        res.status (400)
        res.send ({msg: "Erro 400", error})
        console.log(error);
    }
}