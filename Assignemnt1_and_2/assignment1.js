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

/*Create an interactive to-do list that has the following functionalities 
- add to the to-do list an item (based on the user input)
- remove an item from the to-do list
- checkbox next to each item with a possibility to check or uncheck the box
- once the box is checked, an item should be crossed out
- *add an optional due date to the item from user input
- *prioritize items according to the due date and present them first
*/

function add_item(item) {
  const ul = document.getElementById("to_do");
  const li = document.createElement("li");

  if (item === "") return;

  li.innerHTML = item;
  ul.appendChild(li);
}
