import React from 'react';
import {connect} from "react-redux";
import styled from "styled-components";

import TableRow from "./TableRow";

const Wrapper = styled.table`
  width: 100%;
  font-size: 12px;
  line-height: 14px;
  color: #435F40;
  border-spacing: 0;  
`;

const TableHead = styled.thead`
  color: #B4B4B4;
  text-align: left;
  th{
    border-top: 1px solid #D9D9D9;
   padding: 10px 0;
  }
`;

const TableBody = styled.tbody`
  td{
    border-top: 1px solid #D9D9D9;
    padding: 5px 0;
  }
`;

const CenteredCell = styled.th`
  text-align: center;
`;

function Table({updatesHistory}) {
    return (
        <Wrapper>
            <TableHead>
                <tr>
                    <th>Дата</th>
                    <th>Действие</th>
                    <th>Жираф</th>
                    <CenteredCell>Статус</CenteredCell>
                </tr>
            </TableHead>
            <TableBody>
                {updatesHistory && updatesHistory.map((history, i) => <TableRow key={i} data={history}/>)}
            </TableBody>
        </Wrapper>
    );
}

const mapStateToProps = state => ({
    updatesHistory: state.giraffesPage.updatesHistory,
});

export default connect(mapStateToProps, null)(Table);
