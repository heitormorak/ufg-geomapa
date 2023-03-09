import { Risco } from '../models/riscosModel.js';
import proj4 from 'proj4';

function GetSquare(x, y){
  const longitude = x;
  const latitude = y;
  const sideLength = 0.1; // in degrees

  const topLeft = [longitude - sideLength/500, latitude + sideLength/500];
  const topRight = [longitude + sideLength/500, latitude + sideLength/500];
  const bottomRight = [longitude + sideLength/500, latitude - sideLength/500];
  const bottomLeft = [longitude - sideLength/500, latitude - sideLength/500];

  const squareCoordinates = [topLeft, topRight, bottomRight, bottomLeft, topLeft];

  return squareCoordinates;
}

export async function GetRiscos (req, res) {
    try {
        const riscos = await Risco.findAll({
            attributes: ['coox', 'cooy', 'grau_risco', 'grau_vulne']
        });
        
        const polygonDataArray = riscos.map((risco) => {            
            let grau_risco = risco.dataValues.grau_risco;
            let grau_vulne = risco.dataValues.grau_vulne;

            const x = risco.dataValues.coox
            const y = risco.dataValues.cooy
            let square = GetSquare(x,y);
            return {
                       
                type: "Feature",
                properties: {
                  name: `Polygon ${risco.id}`,
                  index: grau_risco,
                  grau_vulne,
                },
                geometry: {
                  type: "Polygon",
                  coordinates: [square],
                },
            };
            });


        res.json(polygonDataArray)
    } catch (error) {
        console.error(error)
    }
}


