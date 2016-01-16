module.exports = {
  afterInstall: function() {
    return this.addBowerPackageToProject('coverflow');
    return this.addBowerPackageToProject('jquery-ui');
  }
};
