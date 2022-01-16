import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Container } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getAllStudent } from "../store/actions/student";
import { getAllTeachers } from "../store/actions/teacher";
import { getAllHomeworks } from "../store/actions/homework";
import UserList from "../components/Admin/UserList";
import { IHomework } from "../types/homework.type";
import { IStudent } from "../types/student.type";
import { ITeacher } from "../types/teacher.type";
import HomeworkList from "../components/Admin/HomeworkList";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Admin: React.FC = (): JSX.Element => {
  const dispatch = useDispatch();
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  React.useEffect(() => {
    dispatch(getAllStudent());
    dispatch(getAllTeachers());
    dispatch(getAllHomeworks());
  }, [dispatch]);

  const { allStudents } = useSelector(({ students }: any) => students);
  const { allTeachers } = useSelector(({ teachers }: any) => teachers);
  const { allHomeworks } = useSelector(({ homeworks }: any) => homeworks);

  const dataTableForHomeworks:(IHomework & ITeacher & IStudent)[] = allHomeworks.map((homework: IHomework) => {
    const teacher = allTeachers.find((teacher: ITeacher) => {
      return teacher.id === homework.teacherId;
    });
    const student = allStudents.find((student: IStudent) => {
      return student.id === homework.studentId;
    });
    return { ...homework, teacher, student };
  })
  
  return (
    <Container sx={{ mt: 10 }}>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Teacher List" {...a11yProps(0)} />
            <Tab label="Student List" {...a11yProps(1)} />
            <Tab label="Homework List" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
        <UserList dataTable={allTeachers} />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <UserList dataTable={allStudents} />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <HomeworkList dataTable={dataTableForHomeworks} />
        </TabPanel>
      </Box>
    </Container>
  );
};

export default Admin;
