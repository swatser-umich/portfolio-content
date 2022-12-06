function checkForm() {
    var name = document.getElementById("name_temp");
    var loc = document.getElementById("loc_temp");
    var contact = document.getElementById("contact_temp");
    var prob = document.getElementById("problem_temp");

    if (name.value === "") {
        document.getElementById("no_name").style.display = "block";
      } else {
        document.getElementById("no_name").style.display = "none";
      }
    
    if (loc.value === "") {
    document.getElementById("no_loc").style.display = "block";
    } else {
    document.getElementById("no_loc").style.display = "none";
    }

    if (contact.value === "") {
    document.getElementById("no_contact").style.display = "block";
    } else {
    document.getElementById("no_contact").style.display = "none";
    }

    if (prob.value === "") {
    document.getElementById("no_prob").style.display = "block";
    } else {
    document.getElementById("no_prob").style.display = "none";
    }

    if ((name.value === "") || (loc.value === "") || (contact.value === "") || (prob.value === "")) {
        alert("Please enter information into all form fields");
    } else {
        alert("Your form has been submitted");
    }

    
    
    return false;
}