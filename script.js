const convertBtn = document.getElementById("convert-btn");
const inputBox = document.getElementById("text-input");
const result = document.getElementById("result");

const romanNumerals = {
    M:1000,
    CM:900,
    D:500,
    CD:400,
    C:100,
    XC:90,
    L:50,
    XL:40,
    X:10,
    IX:9,
    V:5,
    IV:4,
    I:1,
}

function convertRoman(num)
{
    if(num<1 || num>3999)
    {
        return "Please enter a number in the range of 1-3999."
    }
    else
    {
        let resultRoman = '';

        for(key in romanNumerals)
        {
            while(num>=romanNumerals[key])
            {
                resultRoman+=key;
                num-=romanNumerals[key];
            }
        }

        return resultRoman;
    }
}

convertBtn.addEventListener('click',function(){
    const resultBox = document.getElementById("result-box");
    const inputNumber = parseInt(inputBox.value);
    if(isNaN(inputNumber))
    {
        return "Please enter a valid number";
    }
    const romanNumeral = convertRoman(inputNumber);
    result.innerText = `${inputNumber} -> ${romanNumeral}`;
    resultBox.style.display = "flex";
})


