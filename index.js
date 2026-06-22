//email masker

function maskEmail(email) {
    const atSymbol = email.indexOf("@");
    const emailSlice = email.slice(1, atSymbol-1);
    const asterixRepeat = "*".repeat(atSymbol-2);
    const emailReplace = email.replaceAll(emailSlice, asterixRepeat);
    console.log(atSymbol);
    console.log(emailSlice);
    console.log(emailReplace);
}

maskEmail("info@test.dev");