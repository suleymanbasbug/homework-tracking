import React from 'react'
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { IHomework } from '../../types/homework.type';
import { ITeacher } from '../../types/teacher.type';
import { IStudent } from '../../types/student.type';
type Props = {
    dataTable: (IHomework & ITeacher & IStudent )[];
};


const HomeworkList:React.FC<Props> = ({dataTable}):JSX.Element => {
    return (
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell align="right">Description</TableCell>
            <TableCell align="right">Student Name</TableCell>
            <TableCell align="right">Student Surname</TableCell>
            <TableCell align="right">Teacher Name</TableCell>
            <TableCell align="right">Teacher Surname</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dataTable.map((row:(any)) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.title}
              </TableCell>
              <TableCell align="right">{row.description}</TableCell>
              <TableCell align="right">{row.student.name}</TableCell>
              <TableCell align="right">{row.student.surname}</TableCell>
              <TableCell align="right">{row.teacher.name}</TableCell>
              <TableCell align="right">{row.teacher.surname}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    )
}

export default HomeworkList
