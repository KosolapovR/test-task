import React from 'react';
import styled from "styled-components";

const StatusSucces = styled.div`
    background: green;
    border-radius: 20px;
    padding: 5px;
    color: #FFFFFF;
    text-align: center;
`;

const StatusPending = styled.div`
    background: blue;
    border-radius: 20px;
    padding: 5px;
    text-align: center;
    color: #FFFFFF;
`;

const StatusReject = styled.div`
    background: red;
    border-radius: 20px;
    padding: 5px;
    text-align: center;
    color: #FFFFFF;
`;


function TableRow({type}) {

    let status;
    switch (type) {
        case 'success':
            status = <StatusSucces>Сохранен</StatusSucces>
            break;
        case 'reject':
            status = <StatusReject>Отменено</StatusReject>
            break;
        case 'pending':
            status = <StatusPending>В ожидании</StatusPending>
            break;
    }

    return (
        <tr>
            <td>01 июня 2020</td>
            <td>Новый жираф</td>
            <td>Пряник</td>
            <td>{status}</td>
        </tr>
    );
}

export default TableRow;
