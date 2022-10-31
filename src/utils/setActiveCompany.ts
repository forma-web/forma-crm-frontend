export default function setActiveCompany(companyID: number) {
  localStorage.setItem('activeCompanyID', String(companyID));
}
