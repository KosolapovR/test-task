import React from 'react';
import styled from "styled-components";

import {DateFormatter} from "../../../../utils/dateFormat";
import {NOT_CONFIRMED, REJECTED, SUCCESS, WAITING} from "../../state/giraffe/types";

const StatusSucces = styled.div`
    background: #C1FFC8;
    border-radius: 5px;
    padding: 7px 9px;
    width: max-content;
    color: #8B8B8B;
    text-align: center;
`;

const StatusPending = styled.div`
    background: #D2EFFF;
    border-radius: 5px;
    padding: 7px 9px;
    width: max-content;
    color: #8B8B8B;
    text-align: center;
`;

const StatusNotConfirmed = styled.div`
    background: #FFEAC1;
    border-radius: 5px;
    padding: 7px 9px;
    width: max-content;
    color: #8B8B8B;
    text-align: center;
`;

const StatusReject = styled.div`
    background: #FFC1C1;
    border-radius: 5px;
    padding: 6px 9px;
    width: max-content;
    color: #8B8B8B;
    text-align: center;
`;

function TableRow({data}) {
    const {date, type, status, giraffeName} = data;
    const dateFormatter = new DateFormatter();
    const formattedDate = dateFormatter.format(date);
    debugger;
    let statusElem;
    switch (status) {
        case SUCCESS:
            statusElem = <StatusSucces>Выполнено</StatusSucces>;
            break;
        case REJECTED:
            statusElem = <StatusReject>Отменено</StatusReject>;
            break;
        case WAITING:
            statusElem = <StatusPending>В ожидании</StatusPending>;
            break;
        case NOT_CONFIRMED:
            statusElem = <StatusNotConfirmed>Не подтвержден</StatusNotConfirmed>;
            break;
    }

    return (
        <tr>
            <td>{formattedDate}</td>
            <td>{type}</td>
            <td>{giraffeName}</td>
            <td>{statusElem}</td>
        </tr>
    );
}

export default TableRow;
