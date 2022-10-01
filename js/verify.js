const StudentId = sessionStorage.getItem('StudentId')
const CompanyId = sessionStorage.getItem('CompanyId')
const BackstageId = sessionStorage.getItem('BackstageId')
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
}else if(page == "backstage.html" || page == "backstage_company.html" || page == "backstage_student.html" || page == "backstage_resume.html" || page == "backstage_template.html" ||
        page == "backstage_job.html" || page == "backstage_resource.html" || page == "backstage_discuss.html"){
    if(BackstageId == null){
        location.href = './backstage_login.html'
    }
}
