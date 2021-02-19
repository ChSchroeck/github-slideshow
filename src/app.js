window.onShowpadLibLoaded = () => {
getUserGroups();
}


function getUserGroups() {
  window.ShowpadLib.getShowpadApi((apiConfig) => {
    let url = 'https://sptest-cs.showpad.biz/api/v3/usergroups.json';

    fetch(url, {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + apiConfig.accessToken,
        'Content-Type': 'application/json; charset=utf-8'
      }
    })
      .then(function (response) {
        return response.json()
      })

      .then(function (data) {
        let list='';
        data.response.items.forEach(element => list +='<option value="'+element.name+'">' + element.name + '</option>');
        document.getElementById('groups').innerHTML = list;
      })
  })
}