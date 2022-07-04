const tabs = Array.from(document.getElementsByClassName('tab-content')).map(tab => tab.id);

function checkhash() {
  if(tabs.indexOf(window.location.hash.substring(1)) === -1)
    window.location.hash = '#academic-history';
};

checkhash();
window.addEventListener('hashchange', checkhash);