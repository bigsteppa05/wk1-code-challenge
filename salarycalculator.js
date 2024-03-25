const prompt = require("prompt-sync")({sigint: true});
const basicSalary = prompt("Enter your basic salary: ");
const benefits = prompt("Enter your benefits: ");
function calculateNetSalary(basicSalary, benefits) {
    // Constants
    const NHIF_PERCENTAGE = 0.017;
    const NSSF_PERCENTAGE = 0.06;

    // Calculate gross salary
    const grossSalary = basicSalary + benefits;

    // Calculate NHIF deductions
    const nhifDeductions = grossSalary * NHIF_PERCENTAGE;

    // Calculate NSSF deductions
    const nssfDeductions = basicSalary * NSSF_PERCENTAGE;

    // Calculate total deductions
    const totalDeductions = nhifDeductions + nssfDeductions;

    // Calculate PAYEE
    let payee;
    if (basicSalary <= 12298) {
        payee = 0;
    } else if (basicSalary <= 23885) {
        payee = (basicSalary - 12298) * 0.1;
    } else if (basicSalary <= 35472) {
        payee = 1158.7 + (basicSalary - 23885) * 0.15;
    } else if (basicSalary <= 47059) {
        payee = 2713.1 + (basicSalary - 35472) * 0.2;
    } else if (basicSalary <= 70913) {
        payee = 4783.6 + (basicSalary - 47059) * 0.25;
    } else {
        payee = 10968.6 + (basicSalary - 70913) * 0.3;
    }

    // net salary calculation
    const netSalary = grossSalary - totalDeductions - payee;

    return {
        grossSalary: grossSalary,
        NHIFDeductions: nhifDeductions,
        NSSFDeductions: nssfDeductions,
        payee: payee,
        netSalary: netSalary
    };
}

// Call the calculateNetSalary function


const salaryDetails = calculateNetSalary(basicSalary, benefits);
console.log("Gross Salary:", salaryDetails.grossSalary);
console.log("NHIF Deductions:", salaryDetails.NHIFDeductions);
console.log("NSSF Deductions:", salaryDetails.NSSFDeductions);
console.log("PAYEE (Tax):", salaryDetails.payee);
console.log("Net Salary:", salaryDetails.netSalary);
