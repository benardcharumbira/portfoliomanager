
export const getCompanies = async () => {
    var response = await fetch("company/getcompanies");
    var data = await response.json();
    return data;
};
