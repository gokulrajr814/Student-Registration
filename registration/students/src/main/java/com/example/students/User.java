package com.example.students;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "users_db")
public class User {

    @Transient
    public static final String SEQUENCE_NAME = "users_sequence";

    @Id
    private long id;

    private String studentName;

    private String studyClass;
    private String division;
    private String dob;
    private String gender;




    public User() {}

    public User(String studentName, String studyClass, String division,String dob,String gender) {
        this.studentName = studentName;
        this.studyClass = studyClass;
        this.division=division;
        this.dob=dob;
        this.gender=gender;
    }

    public long getId() {
        return id;
    }

    public void setId(long l) {
        this.id = l;
    }

    public String getStudentName() {
        return studentName;
    }

    public void setStudentName(String studentName) {
        this.studentName = studentName;
    }

    public String getStudyClass() {
        return studyClass;
    }

    public void setStudyClass(String studyClass) {
        this.studyClass = studyClass;
    }

    public String getDivision() {
        return division;
    }

    public void setDivision(String division) {
        this.division = division;
    }
    public String getDob() {
        return dob;
    }

    public void setDob(String dob) {
        this.dob = dob;
    }
    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getGender() {
        return gender;
    }

    @Override
    public String toString() {
        return "User{" + "id=" + id + ", studentName='" + studentName + '\'' +
                ", studyClass='" + studyClass + '\'' + ", division='" + division + '\'' + ",dob='" + dob + '\'' +", gender='" + gender + '\'' +'}';
    }
}
