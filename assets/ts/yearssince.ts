for(const yearssince of Array.from(document.getElementsByClassName('yearssince')) as HTMLElement[]) {
  const now = new Date().getFullYear();
  let year: string;

  if(yearssince.dataset) year = yearssince.dataset.since ?? "1995";
  else year = yearssince.getAttribute('data-since') ?? "1995";

  yearssince.textContent = (now - parseInt(year)).toString();
}