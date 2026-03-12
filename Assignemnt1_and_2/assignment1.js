//assignment 1.a)
function lineSplit(text) {
  const split_text = text.split("\n");
  return split_text;
}

lineSplit("A\nB\nC\n");

//assignment 1.b)
string_array1 = ["1.2", "-3.4", "5.6"];

function strToInt(str_list) {
  const int_list = str_list.map(Number);
  return int_list;
}

strToInt(string_array1);

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
