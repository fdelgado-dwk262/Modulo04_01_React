import React, { createContext, useState } from 'react'
export const MyContext = createContext<any>(null);

// habitad del contexto - el humano -
export const MyContextProvider = ({ children }) => {

  const [color, setColor] = useState();
  const [item, setItem] = useState([]);
  const picture = []
  const [show, toggleShow] = React.useState(true);

  const value = {
    picture,
    color,
    item,
    show
  }

  const prueba = (color) => {
    const newColor = color
    setColor(newColor)
    console.log('prueba contexto .- ', color)
  }

  React.useEffect(() => {
  }, [item]);

  // *******************************************
  // ** evento de inserción en el carrito
  const handleOnChangeCOntexto = (e: any, picture) => {
    e.persist() /*<----------------- para que no se pierda el evento  */
    const {
      id, checked: check
    } = e.target

    const imagenObject = picture.find(callbackImg => callbackImg.id === id)

    console.log(imagenObject)

    if (check) {
      setItem(prevItems => [...prevItems,
        imagenObject
      ]);  // metiendo el objeto y añadiendo el nuevo callback  // clonado

    } else {
      /* comprobar el id */
      /* sacar el que se ha pulsado  */
      const index = item.findIndex(i => i.id === id)
      console.log("indexxxxx.- ", index)
      if (index > -1) {
        console.log("entro en el iff")
        item.splice(index, 1)
      }
      setItem([...item])
    }

  }
  // *******************************************
  // **  borrado

  const handleDelete = (e: any) => {
    e.persist() 
    const {
      id
    } = e.target
    const index = item.findIndex(i => i.id === id)
    if (index > -1) {
      item.splice(index, 1)
    }
    setItem([...item])
  }
  // *******************************************
  // desmarcado del producto 
  const isChecked = (id): any => {
    const index = item.findIndex(i => i.id === id)
    
    return index != -1 ? { checked: true } : { checked: false }
  }
  // *******************************************
  // mostramos u ocultamos carrito
  const handletoggleShow = () => {
    console.log('he pulsado el carrito ', show)
    toggleShow(!show)
  }
  // *******************************************

  return (
    <MyContext.Provider value={{
      prueba,
      handleOnChangeCOntexto,
      handleDelete,
      isChecked,
      handletoggleShow,
      show,
      color,
      picture,
      item
    }}>
      {children}
    </MyContext.Provider>
  );
};

// Componente dumy de pruebas del contexto 
export const MyComponent = () => {

  const myContext = React.useContext(MyContext);
  const style = {
    width: '200px'
  };

  return (
    <>
      <span style={{ color: myContext.color }} >Estoy en uncomponete dumy dentro del contexto</span>
      <div><span>aqui hay .- </span>
        {myContext.item && myContext.item.map(row => (
          <div key={row.id}>
            {row.id}
            <img style={style} src={row.picUrl} />
            {row.title}
            <button id={row.id} onClick={(e) => { myContext.handleDelete(e, row.id) }}>elimina</button>
          </div>
        ))}
      </div>
    </>
  );
}
