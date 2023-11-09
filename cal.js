function chooseSheet() {
    document.getElementById("Sheets").style.visibility = 'visible';
    document.getElementById("Sheets2").style.visibility = 'visible';
    document.getElementById("Layers").style.visibility = 'visible';
    document.getElementById("Rounds").style.visibility = 'collapse';
    document.getElementById('length').value = 30;
    document.getElementById('width').value = 30;
    document.getElementById('radius').value = 30;
    document.getElementById('result').value = 18;
    document.getElementById('layers').value = 1;
    document.getElementById('creamCheese').checked = false;
    document.getElementById('FnA').checked = false;
    document.getElementById('fruitJam').checked = false;
}

function chooseRound() {
    document.getElementById("Rounds").style.visibility = 'visible';
    document.getElementById("Layers").style.visibility = 'visible';
    document.getElementById("Sheets").style.visibility = 'collapse';
    document.getElementById("Sheets2").style.visibility = 'collapse';
    document.getElementById('radius').value = 15;
    document.getElementById('length').value = 0;
    document.getElementById('width').value = 0;
    document.getElementById('result').value = 15;
    document.getElementById('layers').value = 1;
    document.getElementById('creamCheese').checked = false;
    document.getElementById('FnA').checked = false;
    document.getElementById('fruitJam').checked = false;

}

function calc() {
    let SminiPrice = 18;
    let SminiSize = 900;
    const extraSizePrice = 0.02;
    const length = parseInt(document.getElementById('length').value);
    const width = parseInt(document.getElementById('width').value);
    const Sarea = length * width;

    let RminiPrice = 15;
    let RminiSize = 707;
    const radius = parseInt(document.getElementById('radius').value);
    const pi = 3.14;
    const oRarea = radius * radius * pi;
    const Rarea = Math.round(oRarea);

    const layers = parseInt(document.getElementById('layers').value);

    if (document.getElementById('Sheet').checked) {
        let finalPrice = SminiPrice + (Sarea - SminiSize) * extraSizePrice
        document.getElementById('result').value = finalPrice + ((finalPrice * 0.5) * (layers - 1));
        document.getElementById('creamCheese').checked = false;
        document.getElementById('FnA').checked = false;
        document.getElementById('fruitJam').checked = false;
        
    }
    else if (document.getElementById('Round').checked) {
        let finalPrice = RminiPrice + (Rarea - RminiSize) * extraSizePrice
        document.getElementById('result').value = finalPrice + ((finalPrice * 0.5) * (layers - 1));
        document.getElementById('creamCheese').checked = false;
        document.getElementById('FnA').checked = false;
        document.getElementById('fruitJam').checked = false;
    }
}

function additional1() {
    const cc = 5;
    let finalPrice = parseFloat(document.getElementById('result').value)

    if (document.getElementById("creamCheese").checked) {
        document.getElementById('result').value = finalPrice + cc
    }
    else{
        document.getElementById('result').value = finalPrice - cc
    }
}
function additional2() {
    const fa = 7;
    let finalPrice = parseFloat(document.getElementById('result').value)

    if (document.getElementById("FnA").checked) {
        document.getElementById('result').value = finalPrice + fa
    }
    else{
        document.getElementById('result').value = finalPrice - fa
    }

}
function additional3() {
    const fj = 4;
    let finalPrice = parseFloat(document.getElementById('result').value)

    if (document.getElementById("fruitJam").checked) {
        document.getElementById('result').value = finalPrice + fj
    }
    else{
        document.getElementById('result').value = finalPrice - fj
    }

}


function showMessage() {
    let receipt = "";
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const address1 = document.getElementById("address1").value;
    const address2 = document.getElementById("address2").value;
    const postalCode = document.getElementById("postalCode").value;
    const phoneNumber = document.getElementById("phoneNumber").value;
    const email = document.getElementById("email").value;
    const length = parseInt(document.getElementById('length').value);
    const width = parseInt(document.getElementById('width').value);
    const radius = parseInt(document.getElementById('radius').value);
    const layers = parseInt(document.getElementById('layers').value);
    const result = document.getElementById("result").value;

    let SminiPrice = 18;
    let SminiSize = 900;
    const extraSizePrice = 0.02;
    const Sarea = length * width;

    let RminiPrice = 15;
    let RminiSize = 707;
    const pi = 3.14;
    const oRarea = radius * radius * pi;
    const Rarea = Math.round(oRarea);
    let finalPrice = 0;
    let sPrice = 0;
    let rPrice = 0;


    rhead = `<h3 class="rhead">Receipt</h3>`;
    rbody = `${firstName}  `;
    rbody += `${lastName}<br>`;
    rbody += `${address1}, `;
    rbody += `${address2}<br>`;
    rbody += `${postalCode}<br>`;
    rbody += `${phoneNumber}<br>`;
    rbody += `${email}<br><br>`;

    rbody += `Your order: <br><br>`;

    if (document.getElementById('Sheet').checked) {
        finalPrice = SminiPrice + (Sarea - SminiSize) * extraSizePrice
        sPrice = finalPrice + ((finalPrice * 0.5) * (layers - 1));
        rbody += `
        <div class="row">
            <div class="col-10">
            Sheet cake ${length}cm X ${width}cm with ${layers} layers:
            </div>
            <div class="col-md-auto">
            $${sPrice}
            </div>
        </div>
        `
    }

    else if (document.getElementById('Round').checked) {
        finalPrice = RminiPrice + (Rarea - RminiSize) * extraSizePrice
        rPrice = finalPrice + ((finalPrice * 0.5) * (layers - 1));
        rbody += `
        <div class="row">
            <div class="col-10">
            Round cake ${radius}cm with ${layers} layers:
            </div>
            <div class="col-md-auto">
                $${rPrice}
            </div>
        </div>
        `
    }

    if (document.getElementById('creamCheese').checked) {
        rbody += `
        <div class="row">
            <div class="col-10">
            Cream Cheese icing
            </div>
            <div class="col-md-auto">
                $5
            </div>
        </div>
        `
    }
    if (document.getElementById('FnA').checked) {
        rbody += `
        <div class="row">
            <div class="col-10">
            Fruit and Almond topping
            </div>
            <div class="col-md-auto">
                $7
            </div>
        </div>
        `
    }
    if (document.getElementById('fruitJam').checked) {
        rbody += `
        <div class="row">
            <div class="col-10">
            Fruit Jam filling
            </div>
            <div class="col-md-auto">
                $4
            </div>
        </div>
        `
    }

    rbody += `
    <div class="row">
        <div class="col-10">
        Total:
        </div>
        <div class="col-md-auto">
        $${result}
        </div>
    </div>
    `

    rbody = `<div class="rbody">${rbody}</div>`;

    rbutton = `<button onClick="window.location.reload()" class="form-control">Exit</button>`;

    receipt = `${rhead}${rbody}${rbutton}`;


    document.getElementById('receipt').innerHTML = `<div class="rep">${receipt}</div>`;
}
