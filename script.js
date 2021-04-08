function calculateSSS(monthlyIncome)
{
    var SSStotal = 0;

    if(monthlyIncome >= 19750)
    {
        SSStotal = 900;
    }
    else if(monthlyIncome >= 19250)
    {
        SSStotal = 877.50;
    }
    else if(monthlyIncome >= 18750)
    {
        SSStotal = 855;
    }
    else if(monthlyIncome >= 18250)
    {
        SSStotal = 832.50;
    }
    else if(monthlyIncome >= 17750)
    {
        SSStotal = 810;
    }
    else if(monthlyIncome >= 17250)
    {
        SSStotal = 787.5;
    }
    else if(monthlyIncome >= 16750)
    {
        SSStotal = 765;
    }
    else if(monthlyIncome >= 16250)
    {
        SSStotal = 742.50;
    }
    else if(monthlyIncome >= 15750)
    {
        SSStotal = 720;
    }
    else if(monthlyIncome >= 15250)
    {
        SSStotal = 697.50;
    }
    else if(monthlyIncome >= 14750)
    {
        SSStotal = 675;
    }
    else if(monthlyIncome >= 14250)
    {
        SSStotal = 652.50;
    }
    else if(monthlyIncome >= 13750)
    {
        SSStotal = 630;
    }
    else if(monthlyIncome >= 13250)
    {
        SSStotal = 607.50;
    }
    else if(monthlyIncome >= 12750)
    {
        SSStotal = 585;
    }
    else if(monthlyIncome >= 12250)
    {
        SSStotal = 562.50;
    }
    else if(monthlyIncome >= 11750)
    {
        SSStotal = 540;
    }
    else if(monthlyIncome >= 11250)
    {
        SSStotal = 517.50;
    }
    else if(monthlyIncome >= 10750)
    {
        SSStotal = 495;
    }
    else if(monthlyIncome >= 10250)
    {
        SSStotal = 472.50;
    }
    else if(monthlyIncome >= 9750)
    {
        SSStotal = 450;
    }
    else if(monthlyIncome >= 9250)
    {
        SSStotal = 427.50;
    }
    else if(monthlyIncome >= 8750)
    {
        SSStotal = 405;
    }
    else if(monthlyIncome >= 8250)
    {
        SSStotal = 382.50;
    }
    else if(monthlyIncome >= 7750)
    {
        SSStotal = 360;
    }
    else if(monthlyIncome >= 7250)
    {
        SSStotal = 337.50;
    }
    else if(monthlyIncome >= 6750)
    {
        SSStotal = 315;
    }
    else if(monthlyIncome >= 6250)
    {
        SSStotal = 292.50;
    }
    else if(monthlyIncome >= 5750)
    {
        SSStotal = 270;
    }
    else if(monthlyIncome >= 5250)
    {
        SSStotal = 247.50;
    }
    else if(monthlyIncome >= 4750)
    {
        SSStotal = 225;
    }
    else if(monthlyIncome >= 4250)
    {
        SSStotal = 202.50;
    }
    else if(monthlyIncome >= 3750)
    {
        SSStotal = 180;
    }
    else if(monthlyIncome >= 3250)
    {
        SSStotal = 157.50;
    }
    else if(monthlyIncome >= 1000)
    {
        SSStotal = 135;
    }

    document.getElementById("SSSResult").innerHTML = "Monthly Contribution: " + SSStotal;
    console.log("it worked SSS");
}

function calculatePhilHealth(monthlyIncome)
{
    var PhilHealthTotal = 0;
    if(monthlyIncome <= 10000)
    {
        PhilHealthTotal = 350;
    }
    else if(monthlyIncome >=70000)
    {
        PhilHealthTotal = 2450;
    }
    else
    {
        PhilHealthTotal = (monthlyIncome*0.035)/2;
    }
    document.getElementById("PhilHealthResult").innerHTML = "Monthly Contribution: " + PhilHealthTotal;
    console.log("it worked PhilHealth");
}

function calculatePagIBIG(monthlyIncome,selfEmployed)
{
    var PagIBIGMax = 0;
    if(document.getElementById('Self-Employed').checked) {
        PagIBIGMax = 100;
        document.getElementById("PagIBIGNote").innerHTML = "Those who are Self-Employed have to pay both the employer's share and their share!";
    }else if(document.getElementById('OFW').checked) {
        PagIBIGMax = 5000;
        document.getElementById("PagIBIGNote").innerHTML = "Those who are OFW's may opt to pay the employer share or not!";
    }else if(document.getElementById('Other').checked) {
        PagIBIGMax = 100;
        document.getElementById("PagIBIGNote").innerHTML = "";
    }

    var PagIBIGTotal = monthlyIncome <= 1500 ? monthlyIncome * 0.01 : monthlyIncome * 0.02;
    if(PagIBIGTotal > PagIBIGMax){PagIBIGTotal = PagIBIGMax};
    document.getElementById("PagIBIGResult").innerHTML = "Monthly Contribution: " + PagIBIGTotal + "<br>" + "Employer's Contribution: " + PagIBIGTotal;
    console.log("it worked PagIBIG");
}

function calculateVAT(VATRate,Gross)
{
    var VATTotal = Gross - (VATRate * (Gross/100));
    document.getElementById("VATResult").innerHTML = "VAT: " + VATTotal;
}

function calculateIncomeTax(monthlyIncome)
{
    var IncomeTaxTotal = 0;
    var NetIncomeTotal = monthlyIncome;
    var TotalContribution = 0;
    var numOfChildren = 0;
    var employmentType = "";

    if(document.getElementById("Zero").checked) {
        numOfChildren = 0;
    }else if(document.getElementById('One').checked) {
        numOfChildren = 1;
    }else if(document.getElementById('Two').checked) {
        numOfChildren = 2;
    }else if(document.getElementById('Three').checked) {
        numOfChildren = 3;
    }else if(document.getElementById('Four').checked) {
        numOfChildren = 4;
    }

    var PagIBIGMax = 0;
    if(document.getElementById("Private Company").checked) {
        employmentType = "Private Company";
        document.getElementById("incomeTaxNote").innerHTML = "";
        PagIBIGMax = 100;
    }else if(document.getElementById('OFW2').checked) {
        employmentType = "OFW";
        document.getElementById("incomeTaxNote").innerHTML = "OFW's and minimum wage earners are exempted from Personal Income Tax";
        PagIBIGMax = 5000;
    }else if(document.getElementById('Government').checked) {
        employmentType = "Government";
        document.getElementById("incomeTaxNote").innerHTML = "";
        PagIBIGMax = 100;
    }

    if(employmentType == "Private Company")
    {
        var SSStotal = 0;

        //SSS CALCULATION
            if(monthlyIncome >= 19750)
            {
                SSStotal = 900;
            }
            else if(monthlyIncome >= 19250)
            {
                SSStotal = 877.50;
            }
            else if(monthlyIncome >= 18750)
            {
                SSStotal = 855;
            }
            else if(monthlyIncome >= 18250)
            {
                SSStotal = 832.50;
            }
            else if(monthlyIncome >= 17750)
            {
                SSStotal = 810;
            }
            else if(monthlyIncome >= 17250)
            {
                SSStotal = 787.5;
            }
            else if(monthlyIncome >= 16750)
            {
                SSStotal = 765;
            }
            else if(monthlyIncome >= 16250)
            {
                SSStotal = 742.50;
            }
            else if(monthlyIncome >= 15750)
            {
                SSStotal = 720;
            }
            else if(monthlyIncome >= 15250)
            {
                SSStotal = 697.50;
            }
            else if(monthlyIncome >= 14750)
            {
                SSStotal = 675;
            }
            else if(monthlyIncome >= 14250)
            {
                SSStotal = 652.50;
            }
            else if(monthlyIncome >= 13750)
            {
                SSStotal = 630;
            }
            else if(monthlyIncome >= 13250)
            {
                SSStotal = 607.50;
            }
            else if(monthlyIncome >= 12750)
            {
                SSStotal = 585;
            }
            else if(monthlyIncome >= 12250)
            {
                SSStotal = 562.50;
            }
            else if(monthlyIncome >= 11750)
            {
                SSStotal = 540;
            }
            else if(monthlyIncome >= 11250)
            {
                SSStotal = 517.50;
            }
            else if(monthlyIncome >= 10750)
            {
                SSStotal = 495;
            }
            else if(monthlyIncome >= 10250)
            {
                SSStotal = 472.50;
            }
            else if(monthlyIncome >= 9750)
            {
                SSStotal = 450;
            }
            else if(monthlyIncome >= 9250)
            {
                SSStotal = 427.50;
            }
            else if(monthlyIncome >= 8750)
            {
                SSStotal = 405;
            }
            else if(monthlyIncome >= 8250)
            {
                SSStotal = 382.50;
            }
            else if(monthlyIncome >= 7750)
            {
                SSStotal = 360;
            }
            else if(monthlyIncome >= 7250)
            {
                SSStotal = 337.50;
            }
            else if(monthlyIncome >= 6750)
            {
                SSStotal = 315;
            }
            else if(monthlyIncome >= 6250)
            {
                SSStotal = 292.50;
            }
            else if(monthlyIncome >= 5750)
            {
                SSStotal = 270;
            }
            else if(monthlyIncome >= 5250)
            {
                SSStotal = 247.50;
            }
            else if(monthlyIncome >= 4750)
            {
                SSStotal = 225;
            }
            else if(monthlyIncome >= 4250)
            {
                SSStotal = 202.50;
            }
            else if(monthlyIncome >= 3750)
            {
                SSStotal = 180;
            }
            else if(monthlyIncome >= 3250)
            {
                SSStotal = 157.50;
            }
            else if(monthlyIncome >= 1000)
            {
                SSStotal = 135;
            }

        TotalContribution += SSStotal;

        //PhilHealth Calc
        var PhilHealthTotal = 0;
        if(monthlyIncome <= 10000)
        {
            PhilHealthTotal = 350;
        }
        else if(monthlyIncome >=70000)
        {
            PhilHealthTotal = 2450;
        }
        else
        {
            PhilHealthTotal = (monthlyIncome*0.035)/2;
        }
        TotalContribution += PhilHealthTotal;

        
        //PagIbig Calc
        var PagIBIGTotal = monthlyIncome <= 1500 ? monthlyIncome * 0.01 : monthlyIncome * 0.02;
        if(PagIBIGTotal > PagIBIGMax){PagIBIGTotal = PagIBIGMax};
        TotalContribution += PagIBIGTotal;

        NetIncomeTotal -= TotalContribution;
        monthlyIncome -= TotalContribution; //becomes taxable income
        
        //income tax calc
        if(monthlyIncome > 90000)
        {
            newMonthlyAdd = (monthlyIncome - 90000) / 12;
            monthlyIncome += newMonthlyAdd;
        }

        //actual tax stuff
        if(monthlyIncome >= 666667)
        {
            IncomeTaxTotal += 200833.33;
            IncomeTaxTotal += (monthlyIncome - 666667) * .35;
        }
        else if(monthlyIncome >= 166667)
        {
            IncomeTaxTotal += 40833.33;
            IncomeTaxTotal += (monthlyIncome - 166667) * .32;
        }
        else if(monthlyIncome >= 66667)
        {
            IncomeTaxTotal += 10833.33;
            IncomeTaxTotal += (monthlyIncome - 66667) * .30;
        }
        else if(monthlyIncome >= 33333)
        {
            IncomeTaxTotal += 2500;
            IncomeTaxTotal += (monthlyIncome - 33333) * .25;
        }
        else if(monthlyIncome >= 20833)
        {
            IncomeTaxTotal += (monthlyIncome - 20833) * .2;
        }
        else{
            IncomeTaxTotal = 0;
        }
        
        document.getElementById("incomeTaxContributionResults").innerHTML = "SSS/GSIS: " + SSStotal + "<br>PhilHealth: " + PhilHealthTotal + "<br>PagIBIG: " + PagIBIGTotal;
        document.getElementById("incomeTaxResult").innerHTML = "Total tax due: " + IncomeTaxTotal + "<br>Net Pay after tax: " + (monthlyIncome - IncomeTaxTotal) + "<br>Total Contribution: " + TotalContribution + "<br>Net take home pay: " + (monthlyIncome - IncomeTaxTotal - TotalContribution);
        console.log("it worked income Normal");

    }
    else if(employmentType == "Government")
    {
        var IncomeTaxTotal = 0;
        var NetIncomeTotal = monthlyIncome;
        var TotalContribution = 0;
        var numOfChildren = 0;
        var employmentType = "";
    
        if(document.getElementById("Zero").checked) {
            numOfChildren = 0;
        }else if(document.getElementById('One').checked) {
            numOfChildren = 1;
        }else if(document.getElementById('Two').checked) {
            numOfChildren = 2;
        }else if(document.getElementById('Three').checked) {
            numOfChildren = 3;
        }else if(document.getElementById('Four').checked) {
            numOfChildren = 4;
        }
    
        var PagIBIGMax = 0;
            employmentType = "Government";
            document.getElementById("incomeTaxNote").innerHTML = "";
            PagIBIGMax = 100;
    
        if(employmentType == "Government")
        {
            GSISTotal = 0;
            
            GSISTotal = monthlyIncome * 0.09;
            TotalContribution += GSISTotal;
    
            //PhilHealth Calc
            var PhilHealthTotal = 0;
            if(monthlyIncome <= 10000)
            {
                PhilHealthTotal = 350;
            }
            else if(monthlyIncome >=70000)
            {
                PhilHealthTotal = 2450;
            }
            else
            {
                PhilHealthTotal = (monthlyIncome*0.035)/2;
            }
            TotalContribution += PhilHealthTotal;
    
            
            //PagIbig Calc
            var PagIBIGTotal = monthlyIncome <= 1500 ? monthlyIncome * 0.01 : monthlyIncome * 0.02;
            if(PagIBIGTotal > PagIBIGMax){PagIBIGTotal = PagIBIGMax};
            TotalContribution += PagIBIGTotal;
    
            NetIncomeTotal -= TotalContribution;
            monthlyIncome -= TotalContribution; //becomes taxable income
            
            //income tax calc
            if(monthlyIncome > 90000)
            {
                newMonthlyAdd = (monthlyIncome - 90000) / 12;
                monthlyIncome += newMonthlyAdd;
            }
    
            //actual tax stuff
            if(monthlyIncome >= 666667)
            {
                IncomeTaxTotal += 200833.33;
                IncomeTaxTotal += (monthlyIncome - 666667) * .35;
            }
            else if(monthlyIncome >= 166667)
            {
                IncomeTaxTotal += 40833.33;
                IncomeTaxTotal += (monthlyIncome - 166667) * .32;
            }
            else if(monthlyIncome >= 66667)
            {
                IncomeTaxTotal += 10833.33;
                IncomeTaxTotal += (monthlyIncome - 66667) * .30;
            }
            else if(monthlyIncome >= 33333)
            {
                IncomeTaxTotal += 2500;
                IncomeTaxTotal += (monthlyIncome - 33333) * .25;
            }
            else if(monthlyIncome >= 20833)
            {
                IncomeTaxTotal += (monthlyIncome - 20833) * .2;
            }
            else{
                IncomeTaxTotal = 0;
            }
            
            document.getElementById("incomeTaxResult").innerHTML = "Total tax due: " + IncomeTaxTotal + "<br>Net Pay after tax: " + (monthlyIncome - IncomeTaxTotal) + "<br>Total Contribution: " + TotalContribution + "<br>Net take home pay: " + (monthlyIncome - IncomeTaxTotal - TotalContribution);
            document.getElementById("incomeTaxContributionResults").innerHTML = "SSS/GSIS: " + GSISTotal + "<br>PhilHealth: " + PhilHealthTotal + "<br>PagIBIG: " + PagIBIGTotal;

            console.log("it worked income Government");
    }
    }
}