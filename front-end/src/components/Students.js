import { useEffect, useState } from "react";

export const Students = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const API_URL = process.env.REACT_APP_BASE_URL;
    const getStudents = async () => {
      try {
        const response = await axios.get(`${API_URL}/students`);
        const students = response.data;
        if (!students) {
          alert("Putz! Não há estudantes cadastrados para o sorteio!");
        } else {
          setStudents(students);
        }
      } catch (error) {
        alert("Não foi possível realizar o sorteio!");
      }
    };

    getStudents();
  });
  return (
    <ul>
      {students
        ? students.map((student, i) => <li key={i + student.name}>{student.name}</li>)
        : "Carregando..."}
    </ul>
  );
};
