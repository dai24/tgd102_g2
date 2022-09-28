const StudentId = sessionStorage.getItem('StudentId')
const CompanyId = sessionStorage.getItem('CompanyId')
const pageIndex = location.href.lastIndexOf('/') 
const page = location.href.slice(pageIndex+1)

if (page == "resume_work_space.html" || page == "student_main.html" || page == "userinfo_edit.html" || page == "student_interviewinvite.html" ) {
    if (StudentId == null) {
        location.href = './student_login.html'
    }
}else if(page == "company_main.html" || page == "company_edit.html" || page == "company_check.html"){
    if (CompanyId == null) {
        location.href = './company_login.html'
    }
}
