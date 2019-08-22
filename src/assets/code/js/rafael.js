$(document).ready(function() {
    // Transition effect for navbar
    console.log("My Scroll Function is working"); 
    $(window).scroll(function() {
      // checks if window is scrolled more than 500px, adds/removes solid class
      if($(this).scrollTop() > 350) { 
          $('.navbar').addClass('solid');
      } else {
          $('.navbar').removeClass('solid');
      }
    });
});

(function(){var words=[ 'Software Developer', 'Coffee Junkie', 'Full Stack Developer', 'Front End Web Developer', 'Web Developer', 'Java Developer', 'HTML5 Slayer', 'Innovator', 'SEO Ninja'], i=0; setInterval(function(){$('#changerificwordspanid').fadeOut(function(){$(this).html(words[i=(i+1)%words.length]).fadeIn();});}, 1700);})(); 
                            

function myGitHubApi(){
    console.log("Github Api Call Made");
    let gitHubRequest1 = new XMLHttpRequest();
    gitHubRequest1.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        let gitObject1 = JSON.parse(this.responseText);
        document.getElementById("gitBio").innerHTML = gitObject1.bio;
        document.getElementById("gitName").innerHTML = gitObject1.name;
    }
    };
    gitHubRequest1.open("GET", "https://api.github.com/users/rtorres-meanstack", true);
    gitHubRequest1.send();

    let gitHubRequest = new XMLHttpRequest();
    gitHubRequest.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        let gitObject = JSON.parse(this.responseText);

        document.getElementById("gitRepoName1").innerHTML = gitObject[0].name;
        document.getElementById("gitRepoHtml1").href = gitObject[0].html_url;
        document.getElementById("gitRepoDesc1").innerHTML = gitObject[0].description;

        document.getElementById("gitRepoName2").innerHTML = gitObject[1].name;
        document.getElementById("gitRepoHtml2").href = gitObject[1].html_url;
        document.getElementById("gitRepoDesc2").innerHTML = gitObject[1].description;

        document.getElementById("gitRepoName3").innerHTML = gitObject[2].name;
        document.getElementById("gitRepoHtml3").href = gitObject[2].html_url;
        document.getElementById("gitRepoDesc3").innerHTML = gitObject[2].description;

        document.getElementById("gitRepoName4").innerHTML = gitObject[3].name;
        document.getElementById("gitRepoHtml4").href = gitObject[3].html_url;
        document.getElementById("gitRepoDesc4").innerHTML = gitObject[3].description;

        document.getElementById("gitRepoName5").innerHTML = gitObject[4].name;
        document.getElementById("gitRepoHtml5").href = gitObject[4].html_url;
        document.getElementById("gitRepoDesc5").innerHTML = gitObject[4].description;
    }
    };
    gitHubRequest.open("GET", "https://api.github.com/users/rtorres-meanstack/repos", true);
    gitHubRequest.send();
}
$(document).ready(function(){    
    $(".iconHover").hover(function(){
        $(this).css("transform", "scale(1.5)");
    }, function(){
        $(this).css("transform", "scale(1)");
    });
});