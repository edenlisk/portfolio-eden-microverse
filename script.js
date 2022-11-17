const navItem = document.querySelectorAll('.nav-item');
const horizontalBar = document.querySelector('.horizontal_bar');
const topNavigationBar = document.querySelector('.top-navigation-bar');
const headerWelcome = document.querySelector('.header-welcome');
const desktopNavigationBar = document.querySelector('.desktop-nav-container');
const menuIcon = document.querySelector('.menu-icon');
const main = document.querySelector('main');
const mobileMenuFooter = document.querySelector('.mobile_menu_footer');
const navItemArray = Array.from(navItem);
function restoredefaults() {
  menuIcon.classList.remove('active');
  headerWelcome.classList.remove('active');
  topNavigationBar.classList.remove('active');
  desktopNavigationBar.classList.remove('active');
  horizontalBar.classList.remove('active');
  mobileMenuFooter.classList.remove('active');
  for (let item = 0; item < navItemArray.length; item += 1) {
    navItemArray[item].classList.remove('active');
  }
}
function mobilemenu() {
  menuIcon.classList.toggle('active');
  desktopNavigationBar.classList.toggle('active');
  headerWelcome.classList.toggle('active');
  topNavigationBar.classList.toggle('active');
  horizontalBar.classList.toggle('active');
  mobileMenuFooter.classList.toggle('active');
  const navItemArray = Array.from(navItem);
  for (let item = 0; item < navItemArray.length; item += 1) {
    navItemArray[item].classList.toggle('active');
  }
}
main.addEventListener('click', restoredefaults);
document.onclick = (e) => {
  if (e.target === topNavigationBar) {
    restoredefaults();
  }
};
navItemArray.forEach((navMenu) => {
  navMenu.addEventListener('click', restoredefaults);
  navMenu.addEventListener('keydown', (e) => {
    if (e.keyCode === 9) {
      restoredefaults();
    }
  });
});

menuIcon.addEventListener('click', mobilemenu);
menuIcon.addEventListener('keydown', (e) => {
  if (e.keyCode === 9) {
    mobilemenu();
  }
});

const projectInfo = [
  {
    cardHeader: 'Multi-Post Stories\n Gain + Glory',
    language: ['Ruby on rails', 'css', 'JavaScript', 'html'],
    button: 'See Project',
    popupImageMobile: './assets/popup/mobile/popup-image-mobile.svg',
    popupImageDesktop: './assets/popup/desktop/popup-image-desktop.svg',
    closeBtnMobile: './assets/popup/mobile/close-btn-mobile.svg',
    closeBtnDesktop: './assets/popup/desktop/close-btn-desktop.svg',
    popupCardHeader: 'Keeping track of hundreds of components',
    popupLanguageMobile: ['Ruby on rails', 'css', 'JavaScript'],
    popupLanguageDesktop: ['Codekit', 'GitHub', 'JavaScript', 'Bootstrap', 'Terminal', 'Codepen'],
    popupCardParagraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
      + ' Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, '
      + 'when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem '
      + 'Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the '
      + 'industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of '
      + 'type and scrambled it 1960s with the relea',
    popupCardButtons: ['See Live', 'See Source'],
    popupCardButtonsIcon: ['./assets/popup/icons/see-live-icon.svg', './assets/popup/icons/see-source-icon.svg'],
  },
  {
    cardHeader: 'Multi-Post Stories\n Gain + Glory',
    language: ['Ruby on rails', 'css', 'JavaScript', 'html'],
    button: 'See Project',
    popupImageMobile: './assets/popup/mobile/popup-image-mobile.svg',
    popupImageDesktop: './assets/popup/desktop/popup-image-desktop.svg',
    closeBtnMobile: './assets/popup/mobile/close-btn-mobile.svg',
    closeBtnDesktop: './assets/popup/desktop/close-btn-desktop.svg',
    popupCardHeader: 'Keeping track of hundreds of components',
    popupLanguageMobile: ['Ruby on rails', 'css', 'JavaScript'],
    popupLanguageDesktop: ['Codekit', 'GitHub', 'JavaScript', 'Bootstrap', 'Terminal', 'Codepen'],
    popupCardParagraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
      + ' Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, '
      + 'when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem '
      + 'Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the '
      + 'industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of '
      + 'type and scrambled it 1960s with the relea',
    popupCardButtons: ['See Live', 'See Source'],
    popupCardButtonsIcon: ['./assets/popup/icons/see-live-icon.svg', './assets/popup/icons/see-source-icon.svg'],
  },
  {
    cardHeader: 'Multi-Post Stories\n Gain + Glory',
    language: ['Ruby on rails', 'css', 'JavaScript', 'html'],
    button: 'See Project',
    popupImageMobile: './assets/popup/mobile/popup-image-mobile.svg',
    popupImageDesktop: './assets/popup/desktop/popup-image-desktop.svg',
    closeBtnMobile: './assets/popup/mobile/close-btn-mobile.svg',
    closeBtnDesktop: './assets/popup/desktop/close-btn-desktop.svg',
    popupCardHeader: 'Keeping track of hundreds of components',
    popupLanguageMobile: ['Ruby on rails', 'css', 'JavaScript'],
    popupLanguageDesktop: ['Codekit', 'GitHub', 'JavaScript', 'Bootstrap', 'Terminal', 'Codepen'],
    popupCardParagraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
      + ' Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, '
      + 'when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem '
      + 'Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the '
      + 'industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of '
      + 'type and scrambled it 1960s with the relea',
    popupCardButtons: ['See Live', 'See Source'],
    popupCardButtonsIcon: ['./assets/popup/icons/see-live-icon.svg', './assets/popup/icons/see-source-icon.svg'],
  },
  {
    cardHeader: 'Multi-Post Stories\n Gain + Glory',
    language: ['Ruby on rails', 'css', 'JavaScript', 'html'],
    button: 'See Project',
    popupImageMobile: './assets/popup/mobile/popup-image-mobile.svg',
    popupImageDesktop: './assets/popup/desktop/popup-image-desktop.svg',
    closeBtnMobile: './assets/popup/mobile/close-btn-mobile.svg',
    closeBtnDesktop: './assets/popup/desktop/close-btn-desktop.svg',
    popupCardHeader: 'Keeping track of hundreds of components',
    popupLanguageMobile: ['Ruby on rails', 'css', 'JavaScript'],
    popupLanguageDesktop: ['Codekit', 'GitHub', 'JavaScript', 'Bootstrap', 'Terminal', 'Codepen'],
    popupCardParagraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
      + ' Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, '
      + 'when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem '
      + 'Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the '
      + 'industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of '
      + 'type and scrambled it 1960s with the relea',
    popupCardButtons: ['See Live', 'See Source'],
    popupCardButtonsIcon: ['./assets/popup/icons/see-live-icon.svg', './assets/popup/icons/see-source-icon.svg'],
  },
  {
    cardHeader: 'Multi-Post Stories\n Gain + Glory',
    language: ['Ruby on rails', 'css', 'JavaScript', 'html'],
    button: 'See Project',
    popupImageMobile: './assets/popup/mobile/popup-image-mobile.svg',
    popupImageDesktop: './assets/popup/desktop/popup-image-desktop.svg',
    closeBtnMobile: './assets/popup/mobile/close-btn-mobile.svg',
    closeBtnDesktop: './assets/popup/desktop/close-btn-desktop.svg',
    popupCardHeader: 'Keeping track of hundreds of components',
    popupLanguageMobile: ['Ruby on rails', 'css', 'JavaScript'],
    popupLanguageDesktop: ['Codekit', 'GitHub', 'JavaScript', 'Bootstrap', 'Terminal', 'Codepen'],
    popupCardParagraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
      + ' Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, '
      + 'when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem '
      + 'Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the '
      + 'industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of '
      + 'type and scrambled it 1960s with the relea',
    popupCardButtons: ['See Live', 'See Source'],
    popupCardButtonsIcon: ['./assets/popup/icons/see-live-icon.svg', './assets/popup/icons/see-source-icon.svg'],
  },
  {
    cardHeader: 'Multi-Post Stories\n Gain + Glory',
    language: ['Ruby on rails', 'css', 'JavaScript', 'html'],
    button: 'See Project',
    popupImageMobile: './assets/popup/mobile/popup-image-mobile.svg',
    popupImageDesktop: './assets/popup/desktop/popup-image-desktop.svg',
    closeBtnMobile: './assets/popup/mobile/close-btn-mobile.svg',
    closeBtnDesktop: './assets/popup/desktop/close-btn-desktop.svg',
    popupCardHeader: 'Keeping track of hundreds of components',
    popupLanguageMobile: ['Ruby on rails', 'css', 'JavaScript'],
    popupLanguageDesktop: ['Codekit', 'GitHub', 'JavaScript', 'Bootstrap', 'Terminal', 'Codepen'],
    popupCardParagraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
      + ' Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, '
      + 'when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem '
      + 'Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the '
      + 'industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of '
      + 'type and scrambled it 1960s with the relea',
    popupCardButtons: ['See Live', 'See Source'],
    popupCardButtonsIcon: ['./assets/popup/icons/see-live-icon.svg', './assets/popup/icons/see-source-icon.svg'],
  },
];

const projectContainer = document.querySelector('.projects-container');

for (let num = 0; num < projectInfo.length; num += 1) {
  const projectHolder = document.createElement('article');
  projectHolder.classList.add('project-holder');
  projectHolder.tabIndex = 0;
  const imageHolder = document.createElement('div');
  imageHolder.classList.add('image-holder');
  imageHolder.tabIndex = 0;
  const cardHeader = document.createElement('h3');
  cardHeader.classList.add('multi-post');
  cardHeader.innerHTML = projectInfo[num].cardHeader;
  const languageContainer = document.createElement('ul');
  languageContainer.classList.add('language-section');
  languageContainer.tabIndex = 0;

  const listItem1 = document.createElement('li');
  listItem1.classList.add('pro-lang');
  listItem1.tabIndex = 0;
  listItem1.innerHTML = [projectInfo[num].language[0]];
  const listItem2 = document.createElement('li');
  listItem2.classList.add('pro-lang');
  listItem2.tabIndex = 0;
  listItem2.innerHTML = [projectInfo[num].language[1]];
  const listItem3 = document.createElement('li');
  listItem3.classList.add('pro-lang');
  listItem3.tabIndex = 0;
  listItem3.innerHTML = [projectInfo[num].language[2]];
  const listItem4 = document.createElement('li');
  listItem4.classList.add('pro-lang');
  listItem4.tabIndex = 0;
  listItem4.innerHTML = [projectInfo[num].language[3]];
  const button = document.createElement('button');
  button.classList.add('see-project');
  button.type = 'button';
  button.innerHTML = projectInfo[num].button;

  languageContainer.appendChild(listItem1);
  languageContainer.appendChild(listItem2);
  languageContainer.appendChild(listItem3);
  languageContainer.appendChild(listItem4);

  imageHolder.append(
    cardHeader,
    languageContainer,
    button,
  );
  projectHolder.appendChild(imageHolder);
  projectContainer.appendChild(projectHolder);
}

for (let i = 1; i < 2; i += 1) {
  const popupBackground = document.querySelector('.popup_background');
  const popupWindow = document.querySelector('.popup');

  const closeBtn = document.createElement('div');
  closeBtn.classList.add('close_buttons');

  const popupCloseMobile = document.createElement('img');
  popupCloseMobile.src = projectInfo[i].closeBtnMobile;
  popupCloseMobile.classList.add('close_mobile');

  const popupCloseDesktop = document.createElement('img');
  popupCloseDesktop.src = projectInfo[i].closeBtnDesktop;
  popupCloseDesktop.classList.add('close_desktop');

  closeBtn.append(
    popupCloseMobile,
    popupCloseDesktop,
  );

  const popupImg = document.createElement('div');
  popupImg.classList.add('popup_images');

  const popupMobileImage = document.createElement('img');
  popupMobileImage.src = projectInfo[i].popupImageMobile;
  popupMobileImage.classList.add('mobile_popup_image');

  const popupDesktopImage = document.createElement('img');
  popupDesktopImage.src = projectInfo[i].popupImageDesktop;
  popupDesktopImage.classList.add('desktop_popup_image');

  popupImg.append(
    popupMobileImage,
    popupDesktopImage,
  );

  const containerForHeaderContainerAndPopupButtons = document.createElement('div');
  containerForHeaderContainerAndPopupButtons.classList.add('container_for_header_container_and_popup_buttons');

  const headerContainer = document.createElement('div');
  headerContainer.classList.add('header_container');

  const popupHeader = document.createElement('h3');
  popupHeader.classList.add('popup_header');
  popupHeader.innerHTML = projectInfo[i].popupCardHeader;

  headerContainer.appendChild(
    popupHeader,
  );

  const popupButtonsDesktop = document.createElement('div');
  popupButtonsDesktop.classList.add('popup_buttons_desktop');

  const seeSourceBtn = document.createElement('button');
  seeSourceBtn.type = 'button';
  seeSourceBtn.classList.add('see-project');
  seeSourceBtn.innerHTML = `
        See Live
          <span><img src="assets/popup/icons/see-source-icon.svg"></span>
    `;

  const seeLiveBtn = document.createElement('button');
  seeLiveBtn.type = 'button';
  seeLiveBtn.classList.add('see-project');
  seeLiveBtn.innerHTML = `
        See Live
          <span><img src="assets/popup/icons/see-live-icon.svg"></span>
    `;

  const seeLiveBtnDesktop = document.createElement('button');
  seeLiveBtnDesktop.type = 'button';
  seeLiveBtnDesktop.classList.add('see-project');
  seeLiveBtnDesktop.innerHTML = `
        See Live
          <span><img src="assets/popup/icons/see-live-icon.svg"></span>
    `;

  const seeSourceBtnDesktop = document.createElement('button');
  seeSourceBtnDesktop.type = 'button';
  seeSourceBtnDesktop.classList.add('see-project');
  seeSourceBtnDesktop.innerHTML = `
        See Live
          <span><img src="assets/popup/icons/see-source-icon.svg"></span>
    `;

  popupButtonsDesktop.append(
    seeLiveBtnDesktop,
    seeSourceBtnDesktop,
  );

  containerForHeaderContainerAndPopupButtons.append(
    headerContainer,
    popupButtonsDesktop,
  );

  const mobileLanguage = document.createElement('div');
  mobileLanguage.classList.add('mobile_language_section');

  const languageMobileContainer = document.createElement('ul');
  languageMobileContainer.classList.add('language-section');

  const popupLanguageMobileItem1 = document.createElement('li');
  popupLanguageMobileItem1.innerHTML = [projectInfo[i].popupLanguageMobile[0]];
  popupLanguageMobileItem1.classList.add('pro-lang');

  // popup mobile language item2
  const popupLanguageMobileItem2 = document.createElement('li');
  popupLanguageMobileItem2.innerHTML = [projectInfo[i].popupLanguageMobile[1]];
  popupLanguageMobileItem2.classList.add('pro-lang');

  // popup mobile language item3
  const popupLanguageMobileItem3 = document.createElement('li');
  popupLanguageMobileItem3.innerHTML = [projectInfo[i].popupLanguageMobile[2]];
  popupLanguageMobileItem3.classList.add('pro-lang');

  languageMobileContainer.append(
    popupLanguageMobileItem1,
    popupLanguageMobileItem2,
    popupLanguageMobileItem3,
  );

  mobileLanguage.appendChild(
    languageMobileContainer,
  );

  const desktopLanguage = document.createElement('div');
  desktopLanguage.classList.add('desktop_language_section');

  const languageDesktopContainer = document.createElement('ul');
  languageDesktopContainer.classList.add('language-section');

  const popupLanguageDesktopItem1 = document.createElement('li');
  popupLanguageDesktopItem1.classList.add('pro-lang');
  popupLanguageDesktopItem1.innerHTML = [projectInfo[i].popupLanguageDesktop[0]];

  // popup language desktop list 2
  const popupLanguageDesktopItem2 = document.createElement('li');
  popupLanguageDesktopItem2.classList.add('pro-lang');
  popupLanguageDesktopItem2.innerHTML = [projectInfo[i].popupLanguageDesktop[1]];

  // popup language desktop list 3
  const popupLanguageDesktopItem3 = document.createElement('li');
  popupLanguageDesktopItem3.classList.add('pro-lang');
  popupLanguageDesktopItem3.innerHTML = [projectInfo[i].popupLanguageDesktop[2]];

  // popup language desktop list 4
  const popupLanguageDesktopItem4 = document.createElement('li');
  popupLanguageDesktopItem4.classList.add('pro-lang');
  popupLanguageDesktopItem4.innerHTML = [projectInfo[i].popupLanguageDesktop[3]];

  // popup language desktop list 5
  const popupLanguageDesktopItem5 = document.createElement('li');
  popupLanguageDesktopItem5.classList.add('pro-lang');
  popupLanguageDesktopItem5.innerHTML = [projectInfo[i].popupLanguageDesktop[4]];

  // popup language desktop list 6
  const popupLanguageDesktopItem6 = document.createElement('li');
  popupLanguageDesktopItem6.classList.add('pro-lang');
  popupLanguageDesktopItem6.innerHTML = [projectInfo[i].popupLanguageDesktop[5]];

  languageDesktopContainer.append(
    popupLanguageDesktopItem1,
    popupLanguageDesktopItem2,
    popupLanguageDesktopItem3,
    popupLanguageDesktopItem4,
    popupLanguageDesktopItem5,
    popupLanguageDesktopItem6,
  );

  desktopLanguage.appendChild(
    languageDesktopContainer,
  );

  const popupParagraph = document.createElement('p');
  popupParagraph.classList.add('popup_description');
  popupParagraph.innerHTML = projectInfo[i].popupCardParagraph;

  const popupButtonsMobile = document.createElement('div');
  popupButtonsMobile.classList.add('popup_buttons_mobile');

  popupButtonsMobile.append(
    seeLiveBtn,
    seeSourceBtn,
  );

  const seeProject = document.querySelectorAll('.see-project');
  seeProject.forEach((project) => {
    project.addEventListener('click', () => {
      popupBackground.classList.toggle('active');
      popupWindow.append(
        closeBtn,
        popupImg,
        containerForHeaderContainerAndPopupButtons,
        mobileLanguage,
        desktopLanguage,
        popupParagraph,
        popupButtonsMobile,
      );
      popupWindow.style.display = null;
    });
  });

  popupCloseMobile.addEventListener('click', () => {
    popupBackground.classList.remove('active');
    popupWindow.style.display = 'none';
  });
  popupCloseDesktop.addEventListener('click', () => {
    popupBackground.classList.remove('active');
    popupWindow.style.display = 'none';
  });
}