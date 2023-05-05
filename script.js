// Getting the input elements
const input_day = document.getElementById("day");
const input_month = document.getElementById("month");
const input_year = document.getElementById("year");



// Getting the error elements

const error_day = document.querySelector(".day-error");
const error_month = document.querySelector(".month-error");
const error_year = document.querySelector(".year-error");

//getting the outputs
const output_day = document.querySelector(".output-day");
const output_month = document.querySelector(".output-month");
const output_year = document.querySelector(".output-year");
const ageButton = document.querySelector(".hero-btn");
 ageButton.addEventListener("click", calculateDate)


var isValid = false;



// Input event listener
input_day.addEventListener("input", function() {
    // Remove any leading zeros from the input value
    const trimmedValue = input_day.value.replace(/^0+/, '');
    
    if (trimmedValue === "") {
        error_day.textContent = "This field is required";
        isValid = false;
    } else if (+trimmedValue > 31 ) {
        error_day.textContent = "Must be a valid date";
        isValid = false;
    } else {
        error_day.textContent = "";
        isValid= true;
        // If the trimmed value has one digit, pad it with a leading zero
        const paddedValue = trimmedValue.padStart(2, '0');
        //output_day.textContent = paddedValue;
    }
});

// Input event listener
input_month.addEventListener("input", function() {
    // Remove any leading zeros from the input value
    const trimmedValue = input_month.value.replace(/^0+/, '');
    
    if (trimmedValue === "") {
        error_month.textContent = "This field is required";
        isValid = false;
    } else if (+trimmedValue > 12) {
        error_month.textContent = "Must be a valid date";
        isValid = false;
    } else {
        error_month.textContent = "";
        //isValid= true;
        // If the trimmed value has one digit, pad it with a leading zero
        const paddedValue = trimmedValue.padStart(2, '0');
        //output_month.textContent = paddedValue;
    }
});


// Input event listener
input_year.addEventListener("input", function(){
    const trimmedValue = input_year.value.replace(/^0+/, '');
    if(trimmedValue === ""){
        error_year.textContent = "This field is required";
        isValid = false;
    } else if(+input_year.value < 1900 || +input_year.value > 2100 ){
        error_year.textContent = "Must be  a valid date";
    } else {
        error_year.textContent = "";
        isValid = true;

    }
}

)


// ageButton.addEventListener("click", function() {
//     const birthDate = new Date(Date.UTC(input_year.value, input_month.value - 1 , input_day.value));
//     const currentDate = new Date();

//     const diffTime = currentDate.getTime() - birthDate.getTime();
    
//     const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
//     const diffYears = Math.floor(diffDays / 365);
//     const diffMonths = Math.floor((diffDays % 365) / 30);
    

//     output_day.textContent = diffDays + " " + "Days";
//     output_month.textContent = diffMonths + " " + 'Months';
//     output_year.textContent = diffYears + " " + "Years";
//     console.log(diffDays);

// });

function calculateDate() {
    if(isValid){
        let birthday = `${input_month.value}/${input_day.value}/${input_year.value}`;

        console.log(birthday);
        let birthdayObj = new Date(birthday);
        let ageDiffmill = Date.now() - birthdayObj;

        let ageDate = new Date(ageDiffmill);
        let ageYears = ageDate.getUTCFullYear() - 1970;

        let ageMonth = ageDate.getUTCMonth() - 1;
        let ageDay = ageDate.getUTCDay() ;

        output_day.textContent = ageDay + " " + "Day(s)";
        output_month.textContent = ageMonth + " " + "Month(s)";
        output_year.textContent = ageYears + " " + "Year(s)";



    } else{
        alert("error");
    }
}









