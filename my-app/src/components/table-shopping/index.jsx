import React, { Fragment, useState, useEffect } from 'react';
import ReactTable from 'react-table';
import './style.css';

const TableShopping = (props) => {
    const {info} = props; 
    return (
        <ReactTable
        defaultPageSize={10}
            showPagination={false}
            data={info}
            columns={[
                {
                    Header: 'Compras',
                    headerClassName: "header-tab2",
                    columns: [
                        {
                            Header: "Vegetales frescos",
                            accessor: "Vegetales frescos"
                        },
                        {
                            Header: "Nombre",
                            accessor: "nombre"
                        },
                        {
                            Header: "Cantidad",
                            accessor: "Cantidad"
                        },
                        {
                            Header: "Unidad de medida",
                            accessor: "necesario"
                        },
                        
                    ]
                }
            ]}
        />
    );
};
export default TableShopping;
        
    
    

