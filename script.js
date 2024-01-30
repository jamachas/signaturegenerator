(function (w) {
  var doc = w.document;
  var inputs = doc.querySelectorAll("form .input");
  var select = doc.querySelector("[data-select]");
  var prepare = doc.querySelector("[data-prepare]");
  var download = doc.querySelector("[data-load]");

  var tableSignature = doc.querySelector("#signature > tbody");

  var checkPhone = doc.querySelector("#checkPhone");
  var mobileInput = doc.querySelector("#phone");
  var mobileWrap = doc.querySelector("#mobileWrap");

  var mobileLabel = doc.querySelector("#mobileLabel");
  var checkDDI = doc.querySelector("#checkDDI");
  var ddiInput = doc.querySelector("#ddi");
  var ddiWrap = doc.querySelector("#ddiWrap");
  var ddiLabel = doc.querySelector("#ddiLabel");

  var checkJobline = doc.querySelector("#check2ndJob");
  var joblineInput = doc.querySelector("#department");
  var joblineWrap = doc.querySelector("#editJobline");

  var checkTeams = doc.querySelector("#checkTeams");
  var teamsWrap = doc.querySelector("#teamsWrap");

  var checkAdditional = doc.querySelector("#checkAdditional");
  var additionalInput = doc.querySelector("#additional");
  var additionalWrap = doc.querySelector("#editAdditional");

  var checkQuals = doc.querySelector("#checkQuals");
  var qualsInput = doc.querySelector("#quals");
  var qualsWrap = doc.querySelector("#editQuals");

  var checkPronouns = doc.querySelector("#checkPronouns");
  var pronounsInput = doc.querySelector("#pronouns");
  var pronounsWrap = doc.querySelector("#editPronouns");

  var checkICT = doc.querySelector("#checkICT");
  var editServiceNow = doc.querySelector("#editServiceNow");
  var snRow = doc.querySelector(".row-servicenow");

  var banner = doc.querySelector("#checkImage");
  var bannerWrap = doc.querySelector("#imageWrap");
  var bannerInput = doc.querySelector("#image");

  var tpLogo = doc.querySelector(".tpLogo");
  var tp_dom =
    "https://www.whitireiaweltec.ac.nz/assets/testing/TP_normarg.png";
  var tp_int =
    "https://www.whitireiaweltec.ac.nz/assets/testing/TP_NoMarg_int.png";

  for (var i = inputs.length - 1; i >= 0; i--) {
    inputs[i].addEventListener("keyup", updateSignature);
  }

  checkPronouns.addEventListener("click", function () {
    if (!this.checked) {
      pronounsInput.disabled = true;
      removeHtmlNodes(pronounsWrap);
    } else {
      pronounsInput.disabled = false;
      addHtmlNodes(pronounsWrap, "Pronouns", "pronouns");
    }
  });

  checkJobline.addEventListener("click", function () {
    if (!this.checked) {
      joblineInput.disabled = true;
      removeHtmlNodes(joblineWrap);
    } else {
      joblineInput.disabled = false;
      addHtmlNodes(joblineWrap, "Job line 2", "department");
    }
  });

  checkTPI.addEventListener("click", function () {
    if (this.checked) {
      tpLogo.src = tp_int;
    } else {
      tpLogo.src = tp_dom;
    }
  });

  checkQuals.addEventListener("click", function () {
    if (!this.checked) {
      qualsInput.disabled = true;
      removeHtmlNodes(qualsWrap);
    } else {
      qualsInput.disabled = false;
      addHtmlAndBreak(qualsWrap, "Qualification", "quals");
    }
  });

  checkPhone.addEventListener("click", function () {
    if (!this.checked) {
      mobileInput.disabled = true;
      removeHtmlNodes(mobileLabel);
      removeHtmlNodes(mobileWrap);
      addContactSplits();
    } else {
      mobileInput.disabled = false;
      mobileLabel.innerHTML = "<b>Mob: </b>";
      addHtmlNodes(mobileWrap, "+64 xx xxx xxxx", "phone");
      addContactSplits();
    }
  });

  checkDDI.addEventListener("click", function () {
    if (!this.checked) {
      ddiInput.disabled = true;
      removeHtmlNodes(ddiWrap);
      removeHtmlNodes(ddiLabel);
      addContactSplits();
    } else {
      ddiInput.disabled = false;
      ddiLabel.innerHTML = "<b>DDI: </b>";
      addHtmlNodes(ddiWrap, "+64 xx xxx xxxx", "ddi");
      addContactSplits();
    }
  });

  checkTeams.addEventListener("click", function () {
    if (!this.checked) {
      removeHtmlNodes(teamsWrap);
      addContactSplits();
    } else {
      teamsWrap.innerHTML = "Call&nbsp;me&nbsp;on&nbsp;teams";
      addContactSplits();
    }
  });

  function addContactSplits() {
    if (checkPhone.checked && checkDDI.checked) {
      numberSplit.innerHTML = " &nbsp;|&nbsp; ";
    } else if (checkPhone.checked && !checkDDI.checked) {
      removeHtmlNodes(numberSplit);
    } else if (!checkPhone.checked && checkDDI.checked) {
      removeHtmlNodes(numberSplit);
    }

    if (checkTeams.checked && (checkPhone.checked || checkDDI.checked)) {
      teamsSplit.innerHTML = " &nbsp;|&nbsp; ";
    } else {
      removeHtmlNodes(teamsSplit);
    }
  }

  checkAdditional.addEventListener("click", function () {
    if (!this.checked) {
      additionalInput.disabled = true;
      removeHtmlNodes(additionalWrap);
    } else {
      additionalInput.disabled = false;
      addHtmlNodes(additionalWrap, "Hours: 9am–5pm, Mon–Fri", "additional");
    }
  });

  checkICT.addEventListener("click", function () {
    if (!this.checked) {
      removeHtmlNodes(snRow);
    } else {
      createSN();
    }
  });

  bannerInput.addEventListener("change", function () {
    removeHtmlNodes(bannerWrap);
    var span = doc.createElement("span");

    switch (bannerInput.value) {
      case "colombia":
        span.textContent =
          "+57 3245497770";
        break;

      case "panama":
        span.textContent =
          "+507 3926090";
        break;

      case "salvador":
        span.textContent =
          "+503 72143921";
        break;

      case "usa":
        span.textContent =
          "+1 404 3559328";
        break;

      case "dominicana":
        span.textContent =
          "+809 8463389";
        break;


      default:
        span.textContent = "";
    }

    if (bannerInput.value == "none") {
      removeHtmlNodes(bannerWrap);
    } else {
      span.classList.add("span");
      bannerWrap.appendChild(span);
    }
  });

  function removeBanner() {
    removeHtmlNodes(bannerWrap);
  }

  function createSN() {
    var row = doc.querySelector(".row-servicenow");
    var cell = doc.createElement("td");
    cell.id = "editServiceNow";
    cell.setAttribute(
      "style",
      "font-family: Calibri, sans-serif; font-size: 10pt; font-feature-settings: 'kern' 1, 'liga' 1; vertical-align: top; padding: 0px 0px 18px 0px;"
    );
    var span = doc.createElement("span");
    span.setAttribute(
      "style",
      "font-family: Calibri, sans-serif; font-size: 10pt; font-feature-settings: 'kern' 1, 'liga' 1; background-color: #DEDEDE; padding: 6px;"
    );
    var link = doc.createElement("a");
    link.innerHTML = "<b>w2ss.service-now.com</b>";
    link.setAttribute(
      "style",
      "text-decoration-line: underline; color: #000000; text-decoration-color: #000000;"
    );
    link.setAttribute("href", "https://w2ss.service-now.com");
    span.innerHTML =
      "<b>ICT Service Centre</b>&ensp;|&ensp;<b>Ph: </b>+64 4 830 3150&ensp;|&ensp;";
    span.appendChild(link);
    cell.appendChild(span);
    row.appendChild(cell);
  }

  function addHtmlNodes(node, data, className) {
    var br = doc.createElement("br");
    var span = doc.createElement("span");
    span.classList.add(className);
    span.innerHTML = data;
    span.setAttribute(
      "style",
      "font-family: Calibri, sans-serif; font-feature-settings: 'kern' 1, 'liga' 1;"
    );
    node.appendChild(span);
  }

  function addHtmlAndBreak(node, data, className) {
    var br = doc.createElement("br");
    var span = doc.createElement("span");
    span.classList.add(className);
    span.innerHTML = data;
    span.setAttribute(
      "style",
      "font-family: Calibri, sans-serif; font-feature-settings: 'kern' 1, 'liga' 1;"
    );
    node.appendChild(span);
    node.appendChild(br);
  }

  function removeHtmlNodes(node) {
    node.innerHTML = "";
  }

  function updateSignature(e) {
    var id = e.target.id;
    var value = e.target.value;
    var element = doc.querySelector("." + id);

    if (id === "email") {
      element.innerHTML = value;
      element.href = "mailto:" + value;
      if (checkTeams) {
        teamsWrap.href =
          "https://teams.microsoft.com/l/call/0/0?users=" + value;
      }
    } else {
      element.innerHTML = value;
    }
    download.classList.add("is-hidden");
    prepare.classList.remove("is-hidden");
  }

  select.addEventListener("click", function () {
    selectText(doc.querySelector("#signature_container"));
  });

  <!-- prepare.addEventListener("click", prepareHTML); -->

  function selectGmail(event) {
    var id = event.target.dataset.signature;
    var element = doc.querySelector("#" + id);
    selectText(element);
  }

  function prepareHTML() {
    var html = doc.querySelector("#signature_container").innerHTML;
    download.href = "data:text/html, " + html;
    download.classList.remove("is-hidden");
    prepare.classList.add("is-hidden");
  }

  // from SO: http://stackoverflow.com/a/987376/1592915
  function selectText(element) {
    if (doc.body.createTextRange) {
      range = doc.body.createTextRange();
      range.moveToElementText(element);
      range.select();
      document.execCommand("copy");
      alert("Copiado en el portapapeles");
    } else if (w.getSelection) {
      selection = w.getSelection();
      range = doc.createRange();
      range.selectNodeContents(element);
      selection.removeAllRanges();
      selection.addRange(range);
      document.execCommand("copy");
      alert("Copiado en el portapapeles");
    }
  }
})(window);