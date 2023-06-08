var selected_p_id;
function OnClickNavBarBttns(n) {
        var elements = document.querySelector(".contentArea").querySelectorAll("div.aboutDiv,div.resumeDiv,div.projectsDiv");
        for (let i = 0; i < elements.length; i++) {
                if (i == n) {
                        elements[i].className += " animated-section-flipInTop";
                        elements[i].style.display = "block";
                }

                else {
                        elements[i].className = elements[i].className.replace(" animated-section-flipInTop", "");
                        elements[i].style.display = "none";
                }

        }
        var headerbarelements = document.querySelector(".headerBar").querySelectorAll("a");
        for (let i = 0; i < headerbarelements.length; i++) {
                if (i != n)
                        headerbarelements[i].className = headerbarelements[i].className.replace(" active", "");
                else
                        headerbarelements[i].className += " active";
        }
}

function OnClickChangeProject(n) {
        var element = document.querySelector(".portfolio-container");
        var AnimationName;
        if (n == "next") {
                AnimationName = "animated-section-moveFromLeftFade";
                selected_p_id++;
                if (selected_p_id > Projects.length - 1)
                        selected_p_id = 0;
        }
        if (n == "previous") {
                AnimationName = "animated-section-moveFromRightFade";
                selected_p_id--;
                if (selected_p_id < 0)
                        selected_p_id = Projects.length - 1;

        }
        element.classList.add(AnimationName);
        setTimeout(function () {
                element.classList.remove(AnimationName);
        }, 800);
        const p_Name = Projects[selected_p_id].ProjetName;
        LoadProjectData(p_Name);
}
function OnClickProjectsBttns(p_Name) {
        var page = document.querySelector(".portfolio-body-not-active");
        page.classList.replace('portfolio-body-not-active', 'portfolio-body-active');
        page.classList.add("animated-section-flipInTop");
        setTimeout(function () {
                page.classList.remove("animated-section-flipInTop");
        }, 800);
        LoadProjectData(p_Name);
}
function ClosePortfolioWindox() {
        var page = document.querySelector(".portfolio-body-active");
        page.classList.add("animated-section-fade");
        setTimeout(function () {
                page.classList.remove("animated-section-fade");
        }, 800);

        setTimeout(function () {
                page.classList.replace('portfolio-body-active', 'portfolio-body-not-active');
        }, 800);

}

function LoadProjectData(p_Name) {
        var main_head = document.querySelector(".portfolio-container");
        var result;
        for (var i = 0; i < Projects.length; i++) {
                if (Projects[i].ProjetName == p_Name) {
                        result = Projects[i];
                        selected_p_id = i;
                        break;
                }
        }
        main_head.querySelector(".portfolio-heading").innerHTML = result.ProjetName;
        main_head.querySelector("#p_Cname").lastChild.textContent = result.CompanyName;
        main_head.querySelector("#p_Date").lastChild.textContent = result.Date;
        main_head.querySelector("#p_WkdAs").lastChild.textContent = result.Position;
        main_head.querySelector("#p_details").innerHTML = result.Details;
        if (result.P_Img == null)
                main_head.querySelector(".image-slider-cont").querySelector("img").src = "";
        else
                main_head.querySelector(".image-slider-cont").querySelector("img").src = result.P_Img[0];
        const skill_list = document.querySelector(".portfolio-skills");
        clearTimeout(slider_timeout);
        showSlides();
        while (skill_list.hasChildNodes()) {
                skill_list.removeChild(skill_list.firstChild);
        }
        result.TechnologyUsed.forEach(element => {
                var skill = document.createElement("li");
                skill.innerHTML = element
                main_head.querySelector(".portfolio-skills").appendChild(skill);
        });
        const team_list = document.querySelector(".team-list");
        while (team_list.hasChildNodes()) {
                team_list.removeChild(team_list.firstChild);
        }
        if (result.TeamMembers == null) {
                main_head.querySelector("#OtherTeamHead").style.display = "none";
                return;
        }
        main_head.querySelector("#OtherTeamHead").style.display = "block";
        for (var i = 0; i < result.TeamMembers.length; i++) {
                var team_person = document.createElement("li");
                var team_person_img = document.createElement("img");
                var team_person_name = document.createElement("h5");
                var team_person_role = document.createElement("h6");
                team_person_img.src = result.TeamMembers[i].Image;
                team_person_name.innerHTML = result.TeamMembers[i].Name;
                team_person_role.innerHTML = result.TeamMembers[i].Position;
                team_person.appendChild(team_person_img);
                team_person.appendChild(team_person_name);
                team_person.appendChild(team_person_role);
                main_head.querySelector(".team-list").appendChild(team_person);
        }

}
function FilterProjects(f_name) {
        var elements = document.querySelector(".portfolio-grid").querySelectorAll("li");
        for (var i = 0; i < elements.length; i++) {
                if (f_name == "all")
                        elements[i].style.display = "block";
                else if (elements[i].id == f_name)
                        elements[i].style.display = "block";
                else
                        elements[i].style.display = "none";
        }
}
var img_count = 0;
var slider_timeout;
function showSlides() {
        if (img_count > Projects[selected_p_id].P_Img.length - 1)
                img_count = 0;
        var slider = document.querySelector(".image-slider-cont").querySelector("img");
        slider.src = Projects[selected_p_id].P_Img[img_count];
        img_count++;
        console.log(img_count);
        slider_timeout = setTimeout(showSlides, 2000); // Change image every 2 seconds
}