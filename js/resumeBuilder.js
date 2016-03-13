var name = "Eric Biel";

var role = "Apprentice Web Developer";

var skills = ["HTML", "CSS", "JavaScript", "Office Management"];

var bio = {
	"name": "Eric Biel",
	"age": 26,
	"role": "Apprentice",
	"contacts": {
		"mobile": "312-513-4679",
		"email": "eric.j.biel@gmail.com",
		"github": "ejb332",
		"twitter": "no thanks",
		"location": "Chicago, IL"
	},
	"msg": "Thanks for stopping by!",
	"skills": skills,
	"bioPic": "images/tasty.jpg"
};

var work = {
	"jobs": [
		{
			"title": "Office Manager",
			"employer": "Blippar",
			"dates": "October 2014 - January 2016",
			"location": "New York, NY",
			"description": "Emperor of all things"
		},
		{
			"title": "Freelance Theater Technician",
			"employer": "Self-employed",
			"dates": "May 2011 - October 2014",
			"location": "New York, NY",
			"description": "Hang from precarious heights on rickety equipment"
		}
	]
}

var education = {
	"schools": [
		{
			"name": "New York University",
			"location": "New York, NY",
			"degree": "BFA",
			"major": "Technical Theatre Production",
			"dates": "2007-2011"
		},
		{
			"name": "Udacity",
			"location": "Online",
			"degree": "Front-End Developer Nanodegree",
			"dates": "Expected completion August 2016"
		}
	]
}

var projects = {
	"projects": [
		{
			"title": "Resume",
			"dates": "March 2016",
			"description": "JavaScript epiphany",
			"images": [
			"https://lawhimsy.files.wordpress.com/2015/09/epiphany-gif-via-lawhimsy.gif",
			"http://i.imgur.com/kW5XdXo.gif"
			]
		}
	]
}

var googleMap;

$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;

  logClicks(x,y);
});


// function inName(name) {
//     name = name.trim().split(" ");
//     console.log(name);
//     name[1] = name[1].toUpperCase();
//     name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

//     return name[0] + " " + name[1];
// };

// $("#main").append(internationalizeButton);

    var formattedName = HTMLheaderName.replace("%data%", name);
    $("#header").append(formattedName);

    var formattedRole = HTMLheaderRole .replace("%data%", role);
    $("#header").append(formattedRole);

    var formattedPic = HTMLbioPic.replace("%data%", bio.bioPic);
    $("#header").append(formattedPic);

    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#footerContacts").append(formattedMobile);

    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    $("#footerContacts").append(formattedEmail);

    var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
    $("#footerContacts").append(formattedGitHub);

    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    $("#footerContacts").append(formattedTwitter);

    if(bio.skills.length > 0) {
      $("#header").append(HTMLskillsStart);

    var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
    $("#skills").append(formattedSkill);

  }

// creates for loop with "job" as iterator for the loop and searches
// for the jobs array in the work object
function displayWork() {
  for (job in work.jobs) {

// appends to the "workExperience" div id in html
    $("#workExperience").append(HTMLworkStart);

// formats employer for each job by using the replace method. Note
// the "job" iterator is used as the index of the jobs array
    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;

// appends formatted title & employer (which were concatenated above) to the "work-entry" div class in html.
// :last tells computer that we append to the last page
// element with class work-entry, rather than all that have that class
    $(".work-entry:last").append(formattedEmployerTitle);

    var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
    $(".work-entry:last").append(formattedLocation);

    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    $(".work-entry:last").append(formattedDates);

    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    $(".work-entry:last").append(formattedDescription);
  }
}

displayWork();


projects.display = function() {
	for (project_iter in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project_iter].title);
		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project_iter].dates);
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project_iter].description);

		$(".project-entry:last").append(formattedTitle);
		$(".project-entry:last").append(formattedDates);
		$(".project-entry:last").append(formattedDescription);

		// if there are images present, run the for loop & append them
		if (projects.projects[project_iter].images.length > 0) {
			for (image in projects.projects[project_iter].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project_iter].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
}

projects.display();

function displayEducation() {
	for (edu_iter in education.schools) {
		$("#education").append(HTMLschoolStart);

		var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[edu_iter].name);
		var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[edu_iter].location);
		var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[edu_iter].degree);
		var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[edu_iter].major);
		var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[edu_iter].dates);

		$(".education-entry:last").append(formattedSchoolName);
		$(".education-entry:last").append(formattedSchoolLocation);
		$(".education-entry:last").append(formattedSchoolDegree);
		$(".education-entry:last").append(formattedSchoolMajor);
		$(".education-entry:last").append(formattedSchoolDates);

	}
}

displayEducation();

// append map
$("#mapDiv").append(googleMap);