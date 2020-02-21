import React from 'react'
import Input from './Input'
import Button from './Button'
import Select from './Select'
import Lista from '../Lista'
import { getPoke } from '../../service/base'
import bolinha from '../../assets/bolinha.jpg'

import './style.css'

class Formulario extends React.Component {
    constructor(props) {
        super()
        this.state={
            listaPokemon:[],
            valueInicial:'',
            valueFinal:'',            
            error: '',
            quant:'',
            rol:''        
     }
    }
  
    handleChangeInicial = (value) => {
        this.setState({
          valueInicial: value.target.value
        })
        console.log(this.state.valueInicial);
      }

      handleChangeFinal = (value) => {
        this.setState({
          valueFinal: value.target.value
        })
        console.log(this.state.valueFinal);
      }


      mudaQuant = (value) => {
        this.setState({
          quant: value.target.value
        })
        console.log(value.target.value);
      }

      mudaRol = (value) => {
        this.setState({
          rol: value.target.value
        })
        console.log(value.target.value);
      }
         
         

     handleClick=(ev) =>{
          ev.preventDefault()

          let calculaPoke = this.state.valueFinal - this.state.valueInicial
          
          getPoke(this.state.valueInicial, calculaPoke)
          .then(response=>{              
              
              this.setState({                  
                  listaPokemon: response.data.results          
              })
          })          
          
          .catch(error=> {
              console.log('error')        

          })        
      }

    render(){

    return (
        <div>
        <form className='filtro'>

            <div className='container-input'>
            <Input
                label={bolinha}
                name='inicial'
                type='text'
                placeholder='Número inicial'
                onChange={this.handleChangeInicial}
            />

            <Input
                label={bolinha}
                name='inicial'
                type='text'
                placeholder='Número inicial'
                onChange={this.handleChangeFinal}
            />

            </div>

            <div className='container-select'>

            <Select
                 onChange={this.mudaQuant} 
                 classeSelect='select'
             >
                 <option value='embranco'>Escolha a quantidade</option>
                 <option value='10'>10</option>
                 <option value='20'>20</option>
                 <option value='30'>30</option>
             </Select>
             <Select
                 onChange={this.mudaRol} 
                 classeSelect='select'
             >
                 <option value='embranco'>Escolha o tipo</option>
                 <option value='paginacao'>Paginação</option>
                 <option value='scroll'>Scroll</option>                 
             </Select>

             </div>

             <Button
             onClick={this.handleClick}            
             classes='btn'
             >
                 Lista Pokemon
             </Button>          

        </form>

        <div>
        {this.state.listaPokemon.map(item => {
            
                            return (
                                <div>
                                     <Lista
                                     texto={item.name}
                                     imagem={item.url.ability.urlcd po}
                                     ></Lista>                                    
                                                                        
                                </div>
                            )
                        })
                        }
        </div>


        </div>
    )
}
}

export default Formulario