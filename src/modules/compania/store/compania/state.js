export default() => ({
    isLoading:true,
    listaCompania: [
        {
            id:new Date().getTime(),
            date: new Date().toDateString(),
            text: 'PRUEBAS COMPANIAS'
        },
        {
            id: new Date().getTime()+10,
            date: new Date().toDateString(),
            text: 'PRUEBAS COMPANIAS 2'
        },
        {
            id: new Date().getTime()+20,
            date: new Date().toDateString(),
            text: 'PRUEBAS COMPANIAS 3'
        }
]
})