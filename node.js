let levantarse= new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve('se levanto a las 6:00 am');
    reject('No sono la alarma')
});

levantarse.then((resultado)=>{
    console.log(resultado)
}, (error)=>{
    console.log(error)
        
    },2000)
    
})


let bus= new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve('se alista y sale para el transmilenio');
    reject('paro en el portal y no pudo coger transporte')
});

bus.then((resultado)=>{
    console.log(resultado)
}, (error)=>{
    console.log(error)
        
    },2000)
    
})



let estudiar= new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve('entra a estudiar');
    reject('no pudo entrar a clase')
});

estudiar.then((resultado)=>{
    console.log(resultado)
}, (error)=>{
    console.log(error)
        
    },2000)
    
})


let almuerzo= new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve('sale del estudio y almuerza');
    reject('no puede almorzar porque le sale un pelo en la sopa')
});

almuerzo.then((resultado)=>{
    console.log(resultado)
}, (error)=>{
    console.log(error)
        
    },2000)
    
})


let trabajo= new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve('va a trabajar en bellatrix');
    reject('se olvida el carnet y no lo dejan ingresar')
});

trabajo.then((resultado)=>{
    console.log(resultado)
}, (error)=>{
    console.log(error)
        
    },2000)
    
})



let relajarse= new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve('sale a relajarse con sus compañeros de trabajo');
    reject('lo roban')
});

relajarse.then((resultado)=>{
    console.log(resultado)
}, (error)=>{
    console.log(error)
        
    },2000)
    
})



let casa= new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve('vuelve a casa');
    reject('paro en el portal y no pudo coger transporte')
});

casa.then((resultado)=>{
    console.log(resultado)
}, (error)=>{
    console.log(error)
        
    },2000)
    
})



let netflix= new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve('se acuesta para ver netflix');
    reject('Olvido pagar la mensualidad de Netflix… se desbarata la cama y no tiene donde dormir')
});

netflix.then((resultado)=>{
    console.log(resultado)
}, (error)=>{
    console.log(error)
        
    },2000)
    
})









