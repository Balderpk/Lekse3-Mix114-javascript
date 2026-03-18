//assignment 1.a)
const text = "A\nB\nC\n";

function lineSplit(text) {
  const split_text = text.split("\n");
  return split_text;
}
document.getElementById("1a").innerHTML = lineSplit(text);

//assignment 1.b)
string_array1 = ["1.2", "-3.4", "5.6"];

function strToInt(str_list) {
  const int_list = str_list.map(Number);
  return int_list;
}

document.getElementById("1b").innerHTML = strToInt(string_array1);

//assignment 1.c)

const my_list = ["1", "3", "2", "7"];

function passSeries(series) {
  const ul = document.getElementById("series_1");

  for (let i = 0; i < series.length - 1; i++) {
    const pair = Number(series[i]) + Number(series[i + 1]);
    const li = document.createElement("li");

    li.innerHTML = pair;
    ul.appendChild(li);
  }
}

passSeries(my_list);

//assignment 2)

function leggTil () {

    const input = document.getElementById("input");
    const text = input.value;

    if (text === "") return;

    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = text;

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";


// sjekke av tekstboksene - tekst får strek over seg
    checkbox.onchange = function () {
        if (checkbox.checked) {
            span.style.textDecoration = "line-through";
        }
        else {
            span.style.textDecoration = "none" ;
        }
    };

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "remove";

    removeBtn.onclick = function () {
        li.remove();
    }

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(removeBtn);

    //li.textContent = text;//

    document.getElementById("liste").appendChild(li);

    input.value = ""; 
    }
