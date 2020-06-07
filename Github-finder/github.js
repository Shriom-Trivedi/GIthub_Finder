class Github {
  constructor() {
    this.client_id = 'd338bf1c4fafc3b3b12e';
    this.client_secret = '9ec7f141a88d85452969475e1a1d202907c0a2d6';
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }

async getUser(user) {
  const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

  const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

  const profileData = await profileResponse.json();
  const reposData = await reposResponse.json();

  return {
    profile: profileData,
    repos: reposData
  }
}
}