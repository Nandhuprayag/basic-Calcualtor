console.log("CALCULATOR")
//Creating the Container
var container=document.createElement('div');
container.setAttribute('class','container');

//Creating the Row
var row=document.createElement('div');
row.setAttribute('class','row');
container.appendChild(row);
//Creating the Column
var col1=document.createElement('div');
col1.setAttribute('class','col-md-12');
row.appendChild(col1);
//Creating the Element
var element=document.createElement('div');
element.setAttribute('class','Box-part');
col1.appendChild(element);
//Creating the Label
var label=document.createElement('label');
label.innerText='Input Value - I';
element.append(label)

//Creating the Input
var input=document.createElement('input');
input.setAttribute('id','data1');
element.append(input);
//Creating the Space
var sp1=document.createElement('br');
var sp2=document.createElement('br');
element.append(sp1,sp2)

//Creating the Label2
var label2=document.createElement('label');
label2.innerText='Input Value -II';
element.append(label2);

//Creating the Input 2
var input2=document.createElement('input');
input2.setAttribute('id','data2');
element.append(input2);

//Creating the Space
var sp1=document.createElement('br');
var sp2=document.createElement('br');
element.append(sp1,sp2)

//Creating the Addition Button
var add=document.createElement('button');
add.innerText="+";add.setAttribute('class','but');
add.addEventListener('click',addition);
element.appendChild(add);

//Creating the difference button
var sub=document.createElement('button');sub.setAttribute('class','but');
sub.innerText='-';sub.addEventListener('click',subtraction);
element.append(sub)

//Creating the Multiplication button
var mul=document.createElement('button');
mul.setAttribute('class','but');mul.innerText="*";mul.addEventListener('click',multiply);
element.append(mul)

//Creating the Division 
var div=document.createElement('button');
div.setAttribute('class','but');div.innerText='/';div.addEventListener('click',division);
element.append(div);

//Creating Span Element
var span=document.createElement('p');
span.setAttribute('id','span');
element.append(span);

function addition()
{
    var in1=Number(document.getElementById('data1').value);
    var in2=Number(document.getElementById('data2').value);

    document.getElementById('span').innerHTML=` Result = ${(in1+in2)}`;
}
function subtraction()
{
    var in1=Number(document.getElementById('data1').value);
    var in2=Number(document.getElementById('data2').value);

    document.getElementById('span').innerHTML=` Result = ${(in1-in2)}`;
}

function multiply()
{
    var in1=Number(document.getElementById('data1').value);
    var in2=Number(document.getElementById('data2').value);

    document.getElementById('span').innerHTML=` Result = ${(in1*in2)}`;
}

function division()
{
    var in1=Number(document.getElementById('data1').value);
    var in2=Number(document.getElementById('data2').value);

    document.getElementById('span').innerHTML=` Result = ${(in1/in2)}`;
}





document.body.append(container);