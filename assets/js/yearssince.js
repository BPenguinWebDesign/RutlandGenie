for(const yearssince of Array.from(document.getElementsByClassName('yearssince'))) {
  const now = new Date().getFullYear();
  let year;

  if(yearssince.dataset) year = yearssince.dataset.since ?? "1995";
  else year = yearssince.getAttribute('data-since') ?? "1995";

  yearssince.textContent = (now - parseInt(year)).toString();
}