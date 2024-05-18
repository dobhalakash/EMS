package com.example.demo.adminModel;






public class adminModel {
	
	private long adminID;
    private String adminName;
    private String adminPassword;
	public adminModel() {}
	
	public void AdminModel(String adminName, String adminPassword) {
        this.adminName = adminName;
        this.adminPassword = adminPassword;
    }

    public long getAdminID() {
        return adminID;
    }

    public void setAdminID(long adminID) {
        this.adminID = adminID;
    }

    public String getAdminName() {
        return adminName;
    }

    public void setAdminName(String adminName) {
        this.adminName = adminName;
    }

    public String getAdminPassword() {
        return adminPassword;
    }

    public void setAdminPassword(String adminPassword) {
        this.adminPassword = adminPassword;
    }
}