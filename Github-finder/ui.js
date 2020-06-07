class UI {
  constructor(){
    this.profile = document.getElementById('profile');
  }
  showProfile(user) {
    // Get user
    this.profile.innerHTML = `
      <div class="card card-body mb-3">
        <div class="row">
          <div class="col-md-3">
            <img class="img-fluid mb-2" src="${user.avatar_url}">
            <a href="${user.html_url}" target="_blank" class="btn btn-dark btn-block mt-3">View Profile</a>
          </div>
          <div class="col-md-9">
            <div class="display-badges">
             <span class="badge badge-primary shadow-sm m-2 display">Public Repos: ${user.public_repos}</span>          
             <span class="badge badge-secondary shadow-sm m-2 display">Public Gists: ${user.public_gists}</span>          
             <span class="badge badge-success shadow-sm m-2 display">Followers: ${user.followers}</span>          
             <span class="badge badge-info shadow-sm m-2 display">Following: ${user.following}</span>          
            </div> 
             <br><br>
             <ul class="list-group">
                <li class="list-group-item test1">Name: ${user.name}</li>
                <li class="list-group-item test1">Username: ${user.login}</li>
                <li class="list-group-item test2">Company: ${user.company}</li>
                <li class="list-group-item test3">Blog: ${user.blog}</li>
                <li class="list-group-item test4">Location: ${user.location}</li>
                <li class="list-group-item">Since from: ${user.created_at}</li>
             </ul>
          </div>   
        </div>
      </div>
      <h3 class="page-heading mb-3">Latest Repos</h3>
      <div id="repos"></div>
    `;
    if(user.name === '' || user.name === null) {
      document.querySelector('.test1').innerText = 'Name: User has not updated the name';
    }
    if(user.blog === '' || user.blog === null) {
      document.querySelector('.test2').innerText = 'Blog: User has not updated the blog';
    }
    if(user.company === '' || user.company === null) {
      document.querySelector('.test3').innerText = 'Company: User has not updated the company name';
    }
    if(user.location === '' || user.location === null) {
      document.querySelector('.test4').innerText = 'Location: User has not updated the location';
    }
  
  }

  //Show repos
  showRepos(repos) {
    let output = '';

    repos.forEach(function(repo){
      output += `
        <div class="card card-body mb-2">
          <div class="row">
            <div class="col-md-6">
            <a href="${repo.html_url}" target="_blank">${repo.name}</a>
            </div>
            <div class="col-md-6 repos-margin">
            <span class="badge badge-primary">Star: ${repo.stargazers_count}</span>          
            <span class="badge badge-secondary">Watchers: ${repo.watchers_count}</span>          
            <span class="badge badge-success">Forks: ${repo.forks_count}</span>          
            </div>
          </div>
        </div>
      `;
    });
    document.getElementById('repos').innerHTML = output;
  }

  //show alert
  showAlert(message, className) {
    //clear Alert
    this.clearAlert();
    //create div
    const div = document.createElement('div');
    //Add classes
    div.className = className;
    //Add text
    div.appendChild(document.createTextNode(message));
    //Get Parent
    const container = document.querySelector('.searchContainer');
    //Get search box
    const search = document.querySelector('.search');
    //Insert alert
    container.insertBefore(div, search);

    //Timeout
    setTimeout(() => {
      this.clearAlert();
    }, 2500);
  }

  //clear alert msg
  clearAlert() {
    const currentAlert = document.querySelector('.alert');
    if(currentAlert){
      currentAlert.remove();
    }
  }

  //Clear profile
  clearProfile() {
  this.profile.innerHTML = '';
  }
}