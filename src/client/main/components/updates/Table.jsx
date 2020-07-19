import React from 'react';
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
    border-bottom: 1px solid #D9D9D9;
   padding: 10px 0;
  }
`;

const TableBody = styled.tbody`
  td{
    border-bottom: 1px solid #D9D9D9;
    padding: 10px 0;
  }
`;

function Table(props) {
    return (
        <Wrapper>
            <TableHead>
                <tr>
                    <th>Дата</th>
                    <th>Действие</th>
                    <th>Жираф</th>
                    <th>Статус</th>
                </tr>
            </TableHead>
            <TableBody>
                <TableRow/>
                <TableRow/>
                <TableRow/>
                <TableRow/>
                <TableRow/>
            </TableBody>
        </Wrapper>
    );
}

export default Table;
