import React from 'react'
import './Table.css';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
function Table(props) {
    const img_src = ""
    const currencyData = [...props.currencyData,img_src]
    const data = props.currencyData.map(x=>{
        const symbol = x.symbol
        const img_url = `https://assets.coincap.io/assets/icons/${symbol.toLowerCase()}@2x.png`
        // console.log(symbol)
        x.img_src=img_url;
    })
    console.log(currencyData[0])
    const imgFormatter = (cell,row) =>{
        if(row.img_src){
        return (<span style={{width:'40px',height:'40px'}}><img style={{width:'40px',height:'35px'}} src={row.img_src}/></span>) ;
    }
        console.log(row,cell)
    }
    const priceFormatter = (cell,row) =>{
        if(row.priceUsd){
            return( 
                 <span>
                     ${parseInt(cell).toFixed(2)}
                 </span>
            )
        }
    }
    const percentFormatter = (cell,row) =>{
        if(row.changePercent24Hr >= 0){
            return( 
                 <span style={{color:'lightgreen'}}>
                     {parseInt(cell).toFixed(2)}%
                 </span>
            )
        }else{
            return( 
                <span style={{color:'red'}}>
                    {parseInt(cell).toFixed(2)}%
                </span>
           )
        }
        
    }
    const paginateData = currencyData
    const paginateColumns = [
        { dataField: 'rank',text: 'Rank',headerStyle: { backgroundColor: '#215E95', color: 'white'} },
        { dataField: 'img_src',text: '',formatter:imgFormatter,headerStyle: { backgroundColor: '#215E95', color: 'white'} },
        { dataField: 'name', text: 'Name',headerStyle: { backgroundColor: '#215E95', color: 'white'} },
        { dataField: 'priceUsd', text: 'Price',formatter:priceFormatter,headerStyle: { backgroundColor: '#215E95', color: 'white'} },
        { dataField: 'marketCapUsd', text: 'Market Cap',formatter:priceFormatter,headerStyle: { backgroundColor: '#215E95', color: 'white'} },
        { dataField: 'vwap24Hr', text: 'VWAP (24Hr)',formatter:priceFormatter,headerStyle: { backgroundColor: '#215E95', color: 'white'} },
        { dataField: 'symbol', text: 'Symbol',headerStyle: { backgroundColor: '#215E95', color: 'white'} },
        { dataField: 'volumeUsd24Hr', text: 'Volume (24hr)',formatter:priceFormatter,headerStyle: { backgroundColor: '#215E95', color: 'white'} },
        { dataField: 'changePercent24Hr', text: 'Change(24Hr)',formatter:percentFormatter,headerStyle: { backgroundColor: '#215E95', color: 'white'} },
        // { 
        //     dataField: 'launch_success',
        //     style:(cell,row,rowIndex,colIndex)=>{
        //         if(row.launch_success === "Success"){
        //             return {
        //                 color:'green'
        //             }
        //         }else if(row.launch_success === "Failed"){
        //             return {
        //                 backgroundColor:'orange',
        //                 color:'red'
        //             }
        //         }else if(row.launch_success === "Upcoming"){
        //             return {
        //                 backgroundColor:'orange',
        //                 color:'red'
        //             }
        //         }
        //     },
        //     text: 'Launch Status',headerStyle: { backgroundColor: '#215E95', color: 'white'} },
        // { dataField: 'rocket.rocket_name', text: 'Rocket',headerStyle: { backgroundColor: '#215E95', color: 'white'} },
      ];
      const pagination = paginationFactory({
        page: 1,
        sizePerPage: 10,
        lastPageText: '>>',
        firstPageText: '<<',
        nextPageText: 'Next',
        prePageText: 'Prev',
        alwaysShowAllBtns: true,
        hideSizePerPage: true,
      });
    return (
        <div className="tableWrapper">
            <BootstrapTable bordered={false} keyField='rank' data={paginateData} columns={paginateColumns} pagination={pagination}/>
        </div>
    )
}

export default Table
