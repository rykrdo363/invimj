import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Table,
  Button,
  Container,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  ModalFooter,
} from "reactstrap";

const data = [
  { id: 1, 
    usuario: "Juan Carlos Almada", 
    marca: "Apple", 
    tipo: "Portátil", 
    modelo: "Mac Book Pro",
    ns: "C02ZG29LLVDD",
    so: "MacOS",
    procesador: "Intel core i5",
    ram: "8 GB",
    empresa: "IMJ"},

    { id: 2, 
      usuario: "Selene Estudillo", 
      marca: "Asus", 
      tipo: "Portátil", 
      modelo: "Vivo Book",
      ns: "Desconocido",
      so: "Windows",
      procesador: "Intel core i5",
      ram: "8 GB",
      empresa: "IMJ"},

      { id: 3, 
        usuario: "Ricardo Valdivia", 
        marca: "HP", 
        tipo: "Escritorio", 
        modelo: "HP Pavilion",
        ns: "Desconocido",
        so: "Windows",
        procesador: "Intel core i5",
        ram: "12 GB",
        empresa: "IMJ"},

        { id: 4, 
          usuario: "Fernanda Gisella Pichardo", 
          marca: "Apple", 
          tipo: "Escritorio", 
          modelo: "HP Pavilion",
          ns: "C02ZG29LLVDD",
          so: "Windows",
          procesador: "Intel core i5",
          ram: "4 GB",
          empresa: "IMJ"},
          { id: 5, 
            usuario: "Giselle Ascencio Ramos", 
            marca: "HP", 
            tipo: "Escritorio", 
            modelo: "HP Pavilion",
            ns: "Desconocido",
            so: "Windows",
            procesador: "AMD A12 Radeon",
            ram: "12 GB",
            empresa: "IMJ"},

            { id: 6, 
              usuario: "Daniel Corona", 
              marca: "Acer", 
              tipo: "Portátil", 
              modelo: "Aspire A514-52",
              ns: "Desconocido",
              so: "Windows",
              procesador: "Intel Core i7",
              ram: "8 GB",
              empresa: "IMJ"},

              { id: 7, 
                usuario: "Daniel Corona", 
                marca: "Acer", 
                tipo: "Portátil", 
                modelo: "Aspire A514-52",
                ns: "Desconocido",
                so: "Windows",
                procesador: "Intel Core i7",
                ram: "8 GB",
                empresa: "IMJ"},

                { id: 8, 
                  usuario: "Andrea Ramírez", 
                  marca: "Acer", 
                  tipo: "Portátil", 
                  modelo: "Aspire A514-51",
                  ns: "Desconocido",
                  so: "Windows",
                  procesador: "Intel Core i3",
                  ram: "8 GB",
                  empresa: "IMJ"},

                  { id: 9, 
                    usuario: "Andrea Ramírez", 
                    marca: "Acer", 
                    tipo: "Portátil", 
                    modelo: "Aspire A514-51",
                    ns: "Desconocido",
                    so: "Windows",
                    procesador: "Intel Core i3",
                    ram: "8 GB",
                    empresa: "IMJ"},

                    { id: 10, 
                      usuario: "Graciela Villa", 
                      marca: "Apple", 
                      tipo: "Escritorio", 
                      modelo: "IMac 2015",
                      ns: "C02ST01JGG77",
                      so: "MacOS",
                      procesador: "Intel Core i5",
                      ram: "8 GB",
                      empresa: "IMJ"},

                      { id: 11, 
                        usuario: "Kaori Soto", 
                        marca: "Lenovo", 
                        tipo: "Escritorio", 
                        modelo: "81N6",
                        ns: "Desconocido",
                        so: "Windows",
                        procesador: "Intel Core i5",
                        ram: "8 GB",
                        empresa: "IMJ"},

                        { id: 12, 
                          usuario: "Angeles Dimas", 
                          marca: "HP", 
                          tipo: "Escritorio", 
                          modelo: "22-b204la",
                          ns: "Desconocido",
                          so: "Windows",
                          procesador: "Desconocido",
                          ram: "8 GB",
                          empresa: "IMJ"},

                          { id: 13, 
                            usuario: "Ivonne Lopez", 
                            marca: "Apple", 
                            tipo: "Escritorio", 
                            modelo: "IMac 2013",
                            ns: "C02LKAL3F8J2",
                            so: "MacOS",
                            procesador: "Intel Core i5",
                            ram: "8 GB",
                            empresa: "IMJ"},

                            { id: 14, 
                              usuario: "Juan Manuel Gasca", 
                              marca: "Lenovo", 
                              tipo: "Portátil", 
                              modelo: "Idepad 330S",
                              ns: "91051-AAOEM",
                              so: "MacOS",
                              procesador: "Intel Core i5",
                              ram: "8 GB",
                              empresa: "IMJ"},

                              { id: 15, 
                                usuario: "Fernando Muñoz", 
                                marca: "Lenovo", 
                                tipo: "Portátil", 
                                modelo: "81MW",
                                ns: "Desconocido",
                                so: "Windows",
                                procesador: "Intel Core i5",
                                ram: "12 GB",
                                empresa: "IMJ"},

                                { id: 16, 
                                  usuario: "Stephany Angelica Cuellar", 
                                  marca: "Lenovo", 
                                  tipo: "Portátil", 
                                  modelo: "81F5",
                                  ns: "Desconocido",
                                  so: "Windows",
                                  procesador: "Intel Core i7",
                                  ram: "8 GB",
                                  empresa: "IMJ"},

                                  { id: 17, 
                                    usuario: "Ana Aburto", 
                                    marca: "Lenovo", 
                                    tipo: "Escritorio", 
                                    modelo: "330-20IGM",
                                    ns: "Desconocido",
                                    so: "Windows",
                                    procesador: "Intel Pentium",
                                    ram: "8 GB",
                                    empresa: "IMJ"},

                                    { id: 18, 
                                      usuario: "Alejandra Becerra", 
                                      marca: "Asus", 
                                      tipo: "Laptop", 
                                      modelo: "B1400C",
                                      ns: "M6NXCV00E371225",
                                      so: "Windows",
                                      procesador: "Intel Core i5",
                                      ram: "8 GB",
                                      empresa: "IMJ"},

                                      { id: 19, 
                                        usuario: "Victoria Arias", 
                                        marca: "HP", 
                                        tipo: "Escritorio", 
                                        modelo: "24-g214la",
                                        ns: "Desconocido",
                                        so: "Windows",
                                        procesador: "Intel Core i5",
                                        ram: "4 GB",
                                        empresa: "IMJ"},

                                        { id: 20, 
                                          usuario: "Ramon Ruiz", 
                                          marca: "Lenovo", 
                                          tipo: "Portátil", 
                                          modelo: "81F4",
                                          ns: "Desconocido",
                                          so: "Windows",
                                          procesador: "Intel Core i7",
                                          ram: "8 GB",
                                          empresa: "IMJ"},

                                          { id: 21, 
                                            usuario: "Juan Carlos Pinto", 
                                            marca: "Apple", 
                                            tipo: "Portátil", 
                                            modelo: "MacBook Pro 2011",
                                            ns: "C02G319XDF8V",
                                            so: "MacOS",
                                            procesador: "Intel Core i7",
                                            ram: "8 GB",
                                            empresa: "IMJ"},

                                            { id: 22, 
                                              usuario: "Juan Carlos Pinto", 
                                              marca: "Apple", 
                                              tipo: "Portátil", 
                                              modelo: "MacBook Pro 2011",
                                              ns: "C02G319XDF8V",
                                              so: "MacOS",
                                              procesador: "Intel Core i7",
                                              ram: "8 GB",
                                              empresa: "IMJ"},

                                              { id: 23, 
                                                usuario: "Gabriela Serna", 
                                                marca: "Asus", 
                                                tipo: "Portátil", 
                                                modelo: "VivoBook",
                                                ns: "Desconocido",
                                                so: "Windows",
                                                procesador: "Intel Core i5",
                                                ram: "8 GB",
                                                empresa: "IMJ"},

                                                { id: 24, 
                                                  usuario: "Jorge Correa", 
                                                  marca: "Asus", 
                                                  tipo: "Portátil", 
                                                  modelo: "VivoBook S15",
                                                  ns: "Desconocido",
                                                  so: "Windows",
                                                  procesador: "Intel Core i7",
                                                  ram: "12 GB",
                                                  empresa: "IMJ"},

                                                  { id: 25, 
                                                    usuario: "Sara Viscaíno", 
                                                    marca: "HP", 
                                                    tipo: "Escritorio", 
                                                    modelo: "All-in-One",
                                                    ns: "Desconocido",
                                                    so: "Windows",
                                                    procesador: "AMD -A4-9125",
                                                    ram: "4 GB",
                                                    empresa: "IMJ"},

                                                    { id: 26, 
                                                      usuario: "Nancy Moreno", 
                                                      marca: "HP", 
                                                      tipo: "Escritorio", 
                                                      modelo: "20-R126la",
                                                      ns: "3CR5400B2B",
                                                      so: "Windows",
                                                      procesador: "AMD A4-6210",
                                                      ram: "8 GB",
                                                      empresa: "IMJ"},

  ];

class App extends React.Component {
  state = {
    data: data,
    Actualizar: false,
    Insertar: false,
    form: {
      id: "",
      usuario: "",
      marca: "",
      tipo: "",
      modelo: "",
      ns: "",
      so: "",
      procesador: "",
      ram: "",
      empresa: "",
    },
  };
mostrarActualizar = (dato) => {
    this.setState({
      form: dato,
      Actualizar: true,
    });
  };
cerrarActualizar = () => {
    this.setState({ Actualizar: false });
  };
mostrarInsertar = () => {
    this.setState({
      Insertar: true,
    });
  };
cerrarInsertar = () => {
    this.setState({ Insertar: false });
  };
editar = (dato) => {
    var contador = 0;
    var arreglo = this.state.data;
    arreglo.map((registro) => {
      if (dato.id == registro.id) {
        arreglo[contador].usuario = dato.usuario;
        arreglo[contador].marca = dato.marca;
        arreglo[contador].tipo = dato.tipo;
        arreglo[contador].modelo = dato.modelo;
        arreglo[contador].ns = dato.ns;
        arreglo[contador].so = dato.so;
        arreglo[contador].procesador = dato.procesador;
        arreglo[contador].ram = dato.ram;
        arreglo[contador].empresa = dato.empresa;
      }
      contador++;
    });
    this.setState({ data: arreglo, Actualizar: false });
  };
eliminar = (dato) => {
    var opcion = window.confirm("Estás Seguro de Eliminar Usuario "+dato.id);
    if (opcion == true) {
      var contador = 0;
      var arreglo = this.state.data;
      arreglo.map((registro) => {
        if (dato.id == registro.id) {
          arreglo.splice(contador, 1);
        }
        contador++;
      });
      this.setState({ data: arreglo, Actualizar: false });
    }
  };

  insertar= ()=>{
    var valorNuevo= {...this.state.form};
    valorNuevo.id=this.state.data.length+1;
    var lista= this.state.data;
    lista.push(valorNuevo);
    this.setState({ Insertar: false, data: lista });
  }

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  render() {
    
    return (
      <>
        <Container>
        <br />
          <Button color="primary" onClick={()=>this.mostrarInsertar()}>Ingresar nuevo usuario</Button>
          <br />
          <br />
          <Table>
            <thead>
              <tr>
              <th>ID</th>
                <th>Usuario</th>
                <th>Marca</th>
                <th>Tipo</th>
                <th>Modelo</th>
                <th>Numero de serie</th>
                <th>Sistema Operativo</th>
                <th>Procesador</th>
                <th>RAM</th>
                <th>Empresa</th>
              </tr>
            </thead>

            <tbody>
              {this.state.data.map((dato) => (
                <tr key={dato.id}>
                  <td>{dato.id}</td>
                  <td>{dato.usuario}</td>
                  <td>{dato.marca}</td>
                  <td>{dato.tipo}</td>
                  <td>{dato.modelo}</td>
                  <td>{dato.ns}</td>
                  <td>{dato.so}</td>
                  <td>{dato.procesador}</td>
                  <td>{dato.ram}</td>
                  <td>{dato.empresa}</td>
                  <td>
                    <Button
                      color= "success"
                      onClick={() => this.mostrarActualizar(dato)}
                    >
                      Editar
                    </Button>{" "}
                    <Button color="danger" onClick={()=> this.eliminar(dato)}>Eliminar</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>

        <Modal isOpen={this.state.Actualizar}>
          <ModalHeader>
           <div><h3>Editar Usuario</h3></div>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <label>
               Id:
              </label>
            
              <input
                className="form-control"
                readOnly
                type="text"
                value={this.state.form.id}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
                Usuario: 
              </label>
              <input
                className="form-control"
                name="usuario"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.usuario}
              />
            </FormGroup>
            <FormGroup>
              <label>
                Marca: 
              </label>
              <select
                className="form-control"
                name="marca"
                type="text"
                onChange={this.handleChange}
              >
               
                <option selected value="Acer">Acer</option>
                <option value="Apple">Apple</option>
                <option value="Asus">Asus</option>
                <option value="Dell">Dell</option>
                <option value="HP">HP</option>
                <option value="Lenovo">Lenovo</option>
                </select>
            </FormGroup>
            
            <FormGroup>
              <label>
                Tipo: 
              </label>
              <select
                className="form-control"
                name="tipo"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.tipo}
              >
                <option selected value="laptop">Laptop</option>
                <option value="escritorio">Escritorio</option>
                </select>
            </FormGroup>
            <FormGroup>
              <label>
                Modelo: 
              </label>
              <input
                className="form-control"
                name="modelo"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.modelo}
              />
            </FormGroup>
            <FormGroup>
              <label>
               Numero de serie: 
              </label>
              <input
                className="form-control"
                name="tipo"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.ns}
              />
            </FormGroup>
            <FormGroup>
              <label>
                Sistema Operativo: 
              </label>
              <select
                className="form-control"
                name="so"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.so}
              >
                <option selected value="Windows">Windows</option>
                <option value="MacOS">MacOS</option>
                <option value="Ubuntu">Ubuntu</option>
                </select>
              


            </FormGroup>
            <FormGroup>
              <label>
                Procesador: 
              </label>
              <input
                className="form-control"
                name="procesador"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.procesador}
              />
            </FormGroup>
            <FormGroup>
              <label>
                RAM: 
              </label>
              <select
                className="form-control"
                name="ram"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.ram}
              >

                <option selected value="4gb">4 GB</option>
                <option value="8 GB">8 GB</option>
                <option value="12 GB">12 GB</option>
                <option value="16 GB">16 GB</option>
                </select>
            </FormGroup>
            <FormGroup>
              <label>
                Empresa: 
              </label>
              <select
                className="form-control"
                name="empresa"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.empresa}
              >

                <option selected value="IMJ">IMJ</option>
                <option value="BigFoot">BigFoot</option>
                <option value="We care">We care</option>
                
                </select>
            </FormGroup>
          </ModalBody>

          <ModalFooter>
            <Button
              color="primary"
              onClick={() => this.editar(this.state.form)}
            >
              Editar
            </Button>
            <Button
              color="danger"
              onClick={() => this.cerrarActualizar()}
            >
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>



        <Modal isOpen={this.state.Insertar}>
          <ModalHeader>
           <div><h3>Ingresar nuevo usuario</h3></div>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <label>
                Id: 
              </label>
              
              <input
                className="form-control"
                readOnly
                type="text"
                value={this.state.data.length+1}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
                Usuario: 
              </label>
              <input
                className="form-control"
                name="usuario"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
                Marca: 
              </label>
              <select
                className="form-control"
                name="marca"
                type="text"
                onChange={this.handleChange}
              >
               
                <option selected value="Acer">Acer</option>
                <option value="Apple">Apple</option>
                <option value="Asus">Asus</option>
                <option value="Dell">Dell</option>
                <option value="HP">HP</option>
                <option value="Lenovo">Lenovo</option>
                </select>
            </FormGroup>
            <FormGroup>
              <label>
                Tipo: 
              </label>
              <select
                className="form-control"
                name="tipo"
                type="text"
                onChange={this.handleChange}
              >
              <option selected value="Laptop">Laptop</option>
                <option value="Escritorio">Escritorio</option>
                </select>
            </FormGroup>
            <FormGroup>
              <label>
                Modelo: 
              </label>
              <input
                className="form-control"
                name="modelo"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup>
              <label>
                Numero de serie: 
              </label>
              <input
                className="form-control"
                name="ns"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup>
              <label>
               Sistema Operativo: 
              </label>
              <select
                className="form-control"
                name="so"
                type="text"
                onChange={this.handleChange}
              >
                <option selected value="Windows">Windows</option>
                <option value="MacOS">MacOS</option>
                <option value="Ubuntu">Ubuntu</option>
                </select>
            </FormGroup>
            <FormGroup>
              <label>
                Procesador: 
              </label>
              <input
                className="form-control"
                name="procesador"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup>
              <label>
                RAM: 
              </label>
              <select
                className="form-control"
                name="ram"
                type="text"
                onChange={this.handleChange}
              >
                <option selected value="4 GB">4 GB</option>
                <option value="8 GB">8 GB</option>
                <option value="12 GB">12 GB</option>
                <option value="16 GB">16 GB</option>
                </select>
            </FormGroup>
            <FormGroup>
              <label>
                Empresa: 
              </label>
              <select
                className="form-control"
                name="empresa"
                type="text"
                onChange={this.handleChange}
              >
                <option selected value="IMJ">IMJ</option>
                <option value="BigFoot">BigFoot</option>
                <option value="We care">We care</option>
               
                </select>
            </FormGroup>
          </ModalBody>

          <ModalFooter>
            <Button
              color="primary"
              onClick={() => this.insertar()}
            >
              Insertar
            </Button>
            <Button
              className="btn btn-danger"
              onClick={() => this.cerrarInsertar()}
            >
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>
      </>
    );
  }
}
export default App;