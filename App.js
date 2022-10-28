const fs = require ('fs')
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout 
});
let juegos = [{
  
  nombre: 'fornite',
  cantidad: '2',
  descripcion: 'juego rpg online',
  precio: '100'
},
{
  
  nombre: 'minecraft',
  cantidad: '2',
  descripcion: 'juego de farmeo',
  precio: '100'
},
{
 
  nombre: 'albion online',
  cantidad: '3',
  descripcion: 'juego mmorpg',
  precio: '100'
}
];

inicio()
function gentxt(){
  let salida = '';
  salida+= `${juegos}`

  console.log(salida);
fs.writeFile(`Datos.txt`, salida, (err)=>{
    if(err) throw err;
    console.log(`--Datos.txt creado`)
})
}
function desp(){
        console.log('============================================');
        console.log('|            Salio del programa             |');
        console.log('|           gracias por usarlo:3            |');
        console.log('============================================');
        process.exit(0);
}
function inicio(){
   console.table(juegos)
            rl.question('--->inicie sesion = 1 o salga del programa con 2 ', function (opt) {

                console.log(`---> Ingresaste la opción: ${opt}`);
                console.log('                                            ');
                Menu(opt);
              
                
              });
              
              rl.on('close', function(){
       
              })

              
              function Menu(opt){
              
                switch (opt){
                  case '1':
                    init()
                    
                  break;
                  case '2':
                    desp()
                    
                  break;
                
                }
            }
            
function init(){
    console.log('==================================================================')
    console.log('|                     Iniciar sesion                            |')
    console.log('|                      ⣀⣠⣤⣤⣤⣤⣤⣤⣤⣀⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀             |')
    console.log('|                 ⣀⡴⠶⠛⠉⠁⠀⠀⠀⠀⠀⠀⠀⠀⠉⠉⠛⠷⢦⣄⡀                         |')   
    console.log('|    ⠀⠀⠀ ⠀ ⠀⠀⠀⠀⣰⠟⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠻⣦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀              |')
    console.log('|    ⠀⠀  ⣴⠶⣤⣀⠀⣼⠋⠀⠀⠀⠀⠀⣠⡶⠛⢷⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢷⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀              |')
    console.log('|      ⠀⢸⠃⠀⠀⣙⣷⠷⠶⠖⠲⠶⠦⣾⣏⠀⠀⠀⣷⠀⠀⠀⠀⠀⠀⢀⣀⣀⣀⣠⣤⠤⠸⣇⠀⠀⠀⠀⠀⠀⠀⠀⠀              |')
    console.log('|      ⠀⢸⢀⡴⠟⠉⠀⠀⠀⠀⠀⠀⠀⠀⠉⠻⢦⡀⣿⠀⠉⠉⠉⠉⠉⠉⢉⣀⣀⣀⣤⣤⣤⣽⠂⠀⠀⠀⠀⠀⠀⠀⠀              |')
    console.log('|     ⠀⢸⠟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢻⡟⠛⠛⠛⠛⠛⠛⠛⠉⠁⠉⠀⠀⠀⠀⠹⣇⠀⠀⠀⠀⠀⠀⠀⠀               | ')
    console.log('|    ⢀⡿⠀⢠⣤⡄⠀⠀⠀⣄⠀⠀⠀⢴⣶⡄⠀⠀⢻⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡿⠀⠀⠀⠀⢀⣴⠟⠻⡆               |')
    console.log('|    ⢾⣧⠀⠈⠛⠁⠀⠰⠶⠿⠶⠖⠀⠈⠉⠀⠀⠀⣸⣟⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣠⣾⣁⣀⣀⣀⡴⠟⠁⠀⣼⠇               |')
    console.log('|    ⠒⢻⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⡿⢭⣥⠤⢤⡴⠶⠶⠖⠒⠚⠛⠛⠉⣻⣆⡉⠉⠉⢁⣀⣠⡴⠟⠁⠀               | ')
    console.log('|    ⠀⠀⠙⢷⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⡾⠋⠀⢤⣤⣤⠤⠤⠤⠤⠤⠶⠶⣺⡴⠞⣿⠈⠉⠉⠉⠉⠉⠀⠀⠀⠀⠀               |')
    console.log('|    ⠀⠀⠀⠀⠉⠛⠶⠤⣤⣤⣤⣤⡴⠶⠛⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡾⠃⠀⢠⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀               |')
    console.log('|    ⠀⠀⠀⠀⠀⠀⠀⢀⡿⠙⠳⢦⣤⣀⣀⠀⠀⡶⠛⠙⢳⣄⣀⣀⣤⣴⡶⠛⣧⠀⠀⣸⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀               |')
    console.log('|    ⠀⠀⠀⠀⠀⠀⢀⣾⠃⠀⢀⡾⠋⠉⠉⠙⠛⣇⠀⠀⣸⠏⣹⠁⠀⣸⠃⢀⣏⣀⣠⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀                |')
    console.log('|   ⠀⠀⠀⠀⠀⠀⠺⣷⣶⡶⠟⠁⠀⠀⠀⠀⢀⣿⣤⣤⡟⠀⣿⣶⣶⠏⠀⠘⠻⠟⠋                             | ' )
    console.log('==================================================================')
    rl.question('|---> ingrese su correo =', function (correo){
    rl.question('|---> ingrese su contraseña =', function (qwerty){
      
    let correo2='camilo123'  
    let contra = '1234' 
    function menu2(){
      console.log('============================================');
        console.log('|               Inicio sesion              |');
        console.log('|                    Menu                  |');
        console.log('============================================');
        console.log('|                                          |');
        console.log('|           Por favor seleccione una       |');
        console.log('|               de las opciones            |');
        console.log('|                  del menu                |');
        console.log('|                                          |');
        console.log('| ---------------------------------------- |');
        console.log('|     1        Agregar un juego            |');
        console.log('|     2        Editar un juego             |');
        console.log('|     3        eliminar un juego           |');
        console.log('|     4        Vender juego                |');
        console.log('| ---------------------------------------- |');
        console.log('|     Nota: este programa esta realizado   |');
        console.log('|     noje.js con javascript como base.    |');
        console.log('|                                          |');
        console.log('============================================');
        console.log('                                            ');
        rl.question('---> Ingresa alguna opcion?', function (opt3) {
          
            Menu(opt3);
            function Menu(opt3){
          
                switch (opt3){
                  case '1':
                    add();
                    
                  break;
                  case '2':
                    Edit();
                    
                  break;
                  case '3':
                    del();
                  break;
                  case '4':
                    sell()
                  break;
                  
                  
                 
     } }});
    
    }
    
      if(correo2==correo && contra==qwerty){
        menu2()
          
    }else if(correo2!=correo && contra==qwerty ){
        console.log('================================================================');
        console.log('|            Correo electronico incorrecto                     |');
        console.log('================================================================');
        inicio();
        
    }
       else if(correo2==correo && contra!=qwerty){
        console.log('================================================================')
        console.log('|             Contraseña incorrecta                            |')
        console.log('================================================================')
        inicio();
        //rl.close()
    }
    else if(correo2=!correo && contra!=qwerty){
        console.log('================================================================')
        console.log('|             Credenciales incorrectas                           |')
        console.log('================================================================')
        inicio();
        //rl.close()
    };
  
    


  
})
})
}


    

function add(){
  console.clear();
  
  console.log('============================================');
  console.log('|             registre un juego            |');
  console.log('============================================');
  console.log('|                                          |');
  console.log('|           En esta pagina podra           |');
  console.log('|               agregar un                 |');
  console.log('|                  juego                   |');
  console.log('|                                          |');
  console.log('| ---------------------------------------- |');
  rl.question("Nombre de juego:", function(nombre){
      rl.question("Cantidad del juego:", function(cant){
          rl.question("Descripcion:", function(desp){
            rl.question("precio:", function(val){
              
                  let pos = juegos.length+1;
                  juegos.push({
                     
                      "nombre": `${nombre}`,
                      "cantidad": `${cant}`,
                      "descripcion": `${desp}`,
                      "precio": `${val}`
              
                  });
                  console.log("Juego registrado correctamente.");
                  console.clear();
                  gentxt();
                  inicio();
              
          });
      });
  });
});
}}
function del(){
  inicio();
  console.table(juegos);
  rl.question("Escriba el id o index correspondiente que desea eliminar: ", function(nd){
      delete juegos[nd];
      rl.question("El juego ha sido eliminado correctamente, enter para volver al menu", function(e){
        gentxt();  
        inicio();
      })
  })
}
function Edit(){
  console.clear();
  console.table(juegos);
  rl.question("Escriba el id para editar: ", function(nd){
  
  
  console.log('============================================');
  console.log('|             Edite un juego               |');
  console.log('============================================');
  console.log('|                                          |');
  console.log('|           En esta pagina podra           |');
  console.log('|          editar la informacion           |');
  console.log('|              de un  juego                |');
  console.log('|                                          |');
  console.log('| ---------------------------------------- |');

  rl.question("Nombre de juego:", function(nombre){
      rl.question("Cantidad del juego:", function(cant){
          rl.question("Descripcion:", function(desp){
            rl.question("precio:", function(val){
              
                
                  juegos[nd].nombre= nombre,
                  juegos[nd].cantidad = cant,
                  juegos[nd].descripcion = desp,
                  juegos[nd].precio= val,
                     
                     
                 
                  gentxt();
                  inicio();
          
                  });
                }) 
          });
      });
  });
  
}
function sell(){
  console.clear();
  console.table(juegos);
  rl.question('Ingrese el id del producto: ', function (nd){
  
  
  console.log('============================================');
  console.log('|             Edite un juego               |');
  console.log('============================================');
  console.log('|                                          |');
  console.log('|           En esta pagina podra           |');
  console.log('|          editar la informacion           |');
  console.log('|              de un  juego                |');
  console.log('|                                          |');
  console.log('| ---------------------------------------- |');

  rl.question("Cantidad del juego:", function(cant){
 
    juegos[nd].cantidad = cant;
   
                     
      const total = cant*juegos[nd].precio;
                                 
      console.log(`El total de la venta es: ${total}`)
                  gentxt();
                  inicio();
          
                  });
                });
        
          

              }
