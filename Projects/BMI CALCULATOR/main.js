const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);

  const result = document.querySelector("#results");

  if (height < 0 || isNaN(height) || height === "") {
    result.innerHTML = `Please Enter valid height ${height}`;
  } else if (weight < 0 || isNaN(weight) || weight === "") {
    result.innerHTML = `Please Enter valid height ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    // result.innerHTML=bmi

    if (bmi <= 18.6) {
      result.innerHTML = `${bmi}
               
               UnderWeight`;
    } else if (bmi >= 24.9) {
      result.innerHTML = `${bmi}
               
               OverWeight`;
    } else {
      result.innerHTML = `${bmi}
               
               NormalWeight`;
    }
  }
});
