class Github {
  constructor() {
    // from GtHub own application
    this.client_id = "9a7cc918bd678ad4812f";
    this.client_secret = "7dbb3973cf809f90b80a625d443cd50f4d8fe6a3";
    this.repos_count = 5;
    this.repos_sort = "created: asc";
  }
  async getUser(user) {
    // fetch user
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    // fetch last repos
    const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();
    const repos = await reposResponse.json();

    return {
      profile,
      repos
    }
  }
}