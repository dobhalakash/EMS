package com.example.demo.model;

import java.time.LocalDate;

public class Employee {

    private long id;
    private String fname;
    private String lname;
    private String email;
    private long salary;
    private String department;
    private String designation;
    private LocalDate joiningDate;

    public Employee() {}

    public Employee(String fname, String lname, String email, long salary, String department, String designation, LocalDate joiningDate) {
        this.fname = fname;
        this.lname = lname;
        this.email = email;
        this.salary = salary;
        this.department = department;
        this.designation = designation;
        this.joiningDate = joiningDate;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getFname() {
        return fname;
    }

    public void setFname(String fname) {
        this.fname = fname;
    }

    public String getLname() {
        return lname;
    }

    public void setLname(String lname) {
        this.lname = lname;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public long getSalary() {
        return salary;
    }

    public void setSalary(long salary) {
        this.salary = salary;
    }

    public String getDepartment() {
        return department;
    }

    public void setDepartment(String department) {
        this.department = department;
    }

    public String getDesignation() {
        return designation;
    }

    public void setDesignation(String designation) {
        this.designation = designation;
    }

    public LocalDate getJoiningDate() {
        return joiningDate;
    }

    public void setJoiningDate(LocalDate joiningDate) {
        this.joiningDate = joiningDate;
    }
}
