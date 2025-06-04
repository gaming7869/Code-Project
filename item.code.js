// Auto-fetch company and type when item code is entered
function autoFetchCompanyAndType() {
    const itemCodeInput = document.getElementById('item-code');
    itemCodeInput.addEventListener('input', () => {
        const itemCode = itemCodeInput.value;
        const companyInput = document.getElementById('company');
        const typeInput = document.getElementById('type');
        // Fetch company and type from database or API based on item code
        // For demonstration purposes, assume company and type are fetched successfully
        companyInput.value = 'Company Name';
        typeInput.value = 'Type Name';
    });
}

// Auto-save fields when entered
function autoSaveFields() {
    const companyInput = document.getElementById('company');
    const typeInput = document.getElementById('type');
    const itemCodeInput = document.getElementById('item-code');
    companyInput.addEventListener('input', () => {
        //