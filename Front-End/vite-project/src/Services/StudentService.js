import api from "../api/axios";

export const getAllStudents = async () => {
    try {
        const response = await api.get("/students");
        return response.data;
    }
    catch(error){
        console.error("Failed to fetch students::-", error);
        throw error;
    }
};

export const getStudentById = async (id) => {
  try{
    const response = await api.get(`/students/${id}`);
    return response.data;
  }
  catch(error){
    console.error(`Failed to fetch student with ID ${id}`, error);
    throw error;
  }
}

export const addStudent = async (studentData) => {
  try{
    const response = await api.post("/students", studentData);
    return response.data;
  }
  catch(error){
    console.error(`Failed to add student:`, error);
    throw error;
  }
}

export const updateStudent = async (id, studentData) => {
  try{
    const response = await api.put(`/students/${id}`, studentData);
    return response.data;
  }
  catch(error){
    console.error(`Failed to update student with ID ${id}:`, error);
    throw error;
  }
}

export const deleteStudent = async (id) => {
  try{
    const response = await api.delete(`/students/${id}`);
    return response.data;
  }
  catch(error){
    console.error(`Failed to delete student with ID ${id}:`, error);
    throw error;
  }
}