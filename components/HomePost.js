const HomePost = ({ imgSrc, date, title, desc, link, linkType }) => {
  return `
  <div class="col-md-4 col-sm-12 col-12 post">
    <h6 class="postDate">${date}</h6>
    <div id="imageblock">
        <img src="${imgSrc}" alt="${title}" />
    </div>
    <h4>${title}</h4>
    <p>${desc}</p>
    <a
        href="${link}"
        target="_blank"
        referrerpolicy="no-referrer"
        id="postbtn"
        class="button center"
        >${linkType}</a
    >
  </div>`;
};

// const home = document.getElementById("homeEvents");
const obj = {
  imgSrc: "./Assets/aicdmb22.png",
  date: "3rd August, 2021",
  title: "VVCE ACM Greet and Meet - 2021",
  desc: "Farewell ceremony to the senior officers and handover of posts to the new officers",
  link: "https://aicdmb.com",
  linkType: "visit",
};
if (home) {
  home.innerHTML = HomePost(obj);
}
