const items = [
    {
        id: 1,
        nombre:"Zapatillas vans",
        image: "https://www.tienda.lamadrilena.com.ar/media/catalog/product/cache/4f24db8df4bc61d14342add8d01704b4/2/0/2078-6097-NEGRO_Y_BLANCO_1.JPG",
        precio: 120000,
        descripcion: "Los zapatos Vans clásicos combinan un estilo atemporal con una comodidad diaria. Con una suela de goma vulcanizada y una parte superior de lona duradera, estos zapatos ofrecen una excelente tracción y resistencia al desgaste.",
        stock: 10,
        categoria: "calzado"
    },
    {
        id: 2,
        nombre:"Running",
        image: "https://acdn.mitiendanube.com/stores/899/149/products/zapatilla-de-mujer-proforce-negra-venta-de-calzados-koruk-9dcb64d61a0190655b17141562289146-1024-1024.webp",
        precio: 90000,
        descripcion: "Estos zapatos de running están diseñados para ofrecer la máxima comodidad y rendimiento. Con una suela de goma resistente y una amortiguación avanzada, proporcionan soporte y absorción de impactos para carreras de cualquier distancia.",
        stock: 5,
        categoria: "calzado"
    },
    {
        id: 3,
        nombre:"Remera LP",
        image: "https://acdn.mitiendanube.com/stores/122/451/products/linkin-31-aa6f544c13a749523f15573321454560-640-0.webp",
        precio: 15000,
        descripcion: "Camiseta de Linkin Park de algodón suave con diseño gráfico del icónico logo de la banda en el frente. Perfecta para fans del rock y la música alternativa.",
        stock: 15,
        categoria: "remeras"
    },
    {
        id: 4,
        nombre:"Remera de la seleccion",
        image: "https://brand.assets.adidas.com/image/upload/image_collect_feds_plp_ar_1_d_55c581f0c2.jpg",
        precio: 140999,
        descripcion: "Camiseta de la Selección Argentina con los colores y escudo oficiales, ideal para mostrar tu apoyo al equipo nacional de fútbol.",
        stock: 20,
        categoria: "remeras"
    },
    {
        id: 5,
        nombre:"Campera 2en1",
        image: "https://nacarindumentaria.com.ar/cdn/shop/products/PicsArt_07-08-12.39.50_6050ca9d-6d64-42eb-9b01-ccfcfc538432_1200x.jpg?v=1676159303",
        precio: 150000,
        descripcion: "Campera con Abrigo Desmontable. Son dos camperas en una. La primera es una campera estilo rompeviento impermeable. Posee dos bolsillos adelante con cierre y en su interior lleva bolsillo porta celular o documento, como así también una capucha. Tiene elásticos ajustables en la parte de la cintura y en el cuello alto.",
        stock: 10,
        categoria: "camperas"
    },
    {
        id: 6,
        nombre:"Campera",
        image: "https://marcopololp.com.ar/wp-content/uploads/2023/05/campera-brixton-verde-oscuro-old-bridge-marco-polo-1.jpg",
        precio: 120000,
        descripcion: "Campera acolchada y abrigada, perfecta para mantenerte caliente en los días fríos.",
        stock: 5,
        categoria: "camperas"
    }
]

const err = "ocurrio un error"

export const getProducts = () => {
    return new Promise((resolve, reject) => {    
            setTimeout(() => {
                if(false){
                    reject("ha ocurrido un error")
                }
                else{
                    resolve(items)
                }
            }, 1000)
    })
}

export const getOneProduct = (id) =>{
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve(items.find(e => e.id.toString()=== id))
        })
    }, 1000)
}

export const getProdsByCategory = (cat) => {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve(items.filter(e => e.categoria=== cat))
        })
    }, 10)
}