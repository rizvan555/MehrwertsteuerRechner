const berechnen = () => {
  const nettoToBruttoRadio = document.querySelector(
    "#nettoToBruttoRadio"
  ).checked;
  const bruttoToNettoRadio = document.querySelector(
    "#bruttoToNettoRadio"
  ).checked;
  const vat19Radio = document.querySelector("#vat19Radio").checked;
  const vat7Radio = document.querySelector("#vat7Radio").checked;
  const euroInput = document
    .querySelector(".euroInput")
    .value.replace(",", ".");
  //   const calculateBtn = document.querySelector("calculateBtn");
  const vatAmountResult = document.querySelector(".VAT-amount-result");
  const totalAmountResult = document.querySelector(".total-amount-result");
  const textNetto = document.querySelector(".text-netto");
  const textBrutto = document.querySelector(".text-brutto");

  let VATAmount, totalAmount;

  if (nettoToBruttoRadio) {
    if (vat19Radio) {
      VATAmount = (euroInput * 19) / 100;
      totalAmount = Number(euroInput) + VATAmount;
      VATAmount = VATAmount.toFixed(2);
      totalAmount = totalAmount.toFixed(2);
    } else if (vat7Radio) {
      VATAmount = (euroInput * 7) / 100;
      totalAmount = Number(euroInput) + VATAmount;
      VATAmount = VATAmount.toFixed(2);
      totalAmount = totalAmount.toFixed(2);
    }
  } else if (bruttoToNettoRadio) {
    if (vat19Radio) {
      VATAmount = (euroInput * 19) / 100;
      totalAmount = Number(euroInput) - VATAmount;
      VATAmount = VATAmount.toFixed(2);
      totalAmount = totalAmount.toFixed(2);
    } else if (vat7Radio) {
      VATAmount = (euroInput * 7) / 100;
      totalAmount = Number(euroInput) - VATAmount;
      VATAmount = VATAmount.toFixed(2);
      totalAmount = totalAmount.toFixed(2);
    }
    textNetto.style.display = "block";
    textBrutto.style.display = "none";
  }

  vatAmountResult.innerHTML = "<span>" + VATAmount + " " + "€" + "</span>";
  totalAmountResult.innerHTML = "<span>" + totalAmount + " " + "€" + "</span>";
};
